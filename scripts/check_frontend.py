#!/usr/bin/env python3
"""Check essential HTML references and IDs on the maintained portfolio pages.

This lightweight check is deliberately dependency-free. It is not a full HTML validator.
"""
from __future__ import annotations

from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1]
PAGES = (
    "index.html",
    "Ecommers.html",
    "BOOTSTRAP.html",
    "form.html",
    "signup.html",
    "navbar.html",
    "dynamic.html",
    "mediaQueries.html",
    "sample.html",
    "media.html",
)


class PageAudit(HTMLParser):
    def __init__(self, page: Path, errors: list[str]) -> None:
        super().__init__(convert_charrefs=True)
        self.page = page
        self.errors = errors
        self.ids: set[str] = set()
        self.fragments: list[str] = []
        self.local_references: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        values = dict(attrs)
        element_id = values.get("id")
        if element_id:
            if element_id in self.ids:
                self.errors.append(f"{self.page}: duplicate id #{element_id}")
            self.ids.add(element_id)

        if tag == "img" and "alt" not in values:
            self.errors.append(f"{self.page}: image is missing an alt attribute")

        href = values.get("href")
        if href:
            if href.startswith("#"):
                if len(href) > 1:
                    self.fragments.append(href[1:])
            else:
                self._record_local_reference(href)

        for attribute in ("src", "poster"):
            reference = values.get(attribute)
            if reference:
                self._record_local_reference(reference)

    def _record_local_reference(self, reference: str) -> None:
        parsed = urlsplit(reference)
        if parsed.scheme or parsed.netloc or reference.startswith("//"):
            return
        path = unquote(parsed.path)
        if path:
            self.local_references.append(path)


def main() -> int:
    errors: list[str] = []
    total_references = 0

    for relative_page in PAGES:
        page = ROOT / relative_page
        if not page.is_file():
            errors.append(f"Missing required portfolio page: {relative_page}")
            continue

        parser = PageAudit(Path(relative_page), errors)
        try:
            parser.feed(page.read_text(encoding="utf-8"))
            parser.close()
        except (OSError, ValueError) as error:
            errors.append(f"{relative_page}: could not parse file: {error}")
            continue

        for fragment in parser.fragments:
            if fragment not in parser.ids:
                errors.append(f"{relative_page}: broken in-page link #{fragment}")

        for reference in parser.local_references:
            candidate = ROOT / reference.lstrip("/") if reference.startswith("/") else page.parent / reference
            candidate = candidate.resolve()
            if not candidate.exists():
                errors.append(f"{relative_page}: broken local reference {reference}")
            total_references += 1

    if errors:
        print("Frontend checks found issues:")
        for error in errors:
            print(f" - {error}")
        return 1

    print(f"Frontend checks passed for {len(PAGES)} pages and {total_references} local references.")
    print("Note: this is a lightweight link/ID check, not a complete HTML conformance audit.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
