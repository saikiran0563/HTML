# Frontend Learning Lab — HTML, CSS, JavaScript & Bootstrap

This repository contains frontend course exercises, focused examples, and small page recreations. It is organised as a learning portfolio: the examples show concepts, while the complete demos combine responsive layout, accessibility, and browser-side interaction.

[![Frontend checks](https://github.com/saikiran0563/HTML/actions/workflows/frontend-checks.yml/badge.svg?branch=master)](https://github.com/saikiran0563/HTML/actions/workflows/frontend-checks.yml)

## Featured work

### 1. LuxeCars — responsive showcase

**Live demo:** https://html-pied-seven.vercel.app/

Open [index.html](index.html) for a responsive car-catalogue concept with navigation, hero layout, cards, detail sections, image descriptions, and a demo contact form. Prices are samples and the form does not send or store data.

### 2. Thread & Co. — interactive demo storefront

Open [Ecommers.html](Ecommers.html) to practise a more interactive page built with HTML, CSS, Bootstrap, and JavaScript.

- Search products by name and filter by category.
- Add products to a browser-only demo cart.
- Remove items, clear the cart, and calculate a sample total.
- Use responsive product cards and an accessible cart panel.

This is **not a real shop**. It has no checkout, payment processing, login, backend, or data persistence. The cart resets when the page is refreshed. Do not enter personal or payment information.

## Learning path

| Skill | Examples |
|---|---|
| HTML structure and forms | [form.html](form.html), [signup.html](signup.html), [list.html](list.html) |
| CSS selectors and box model | [sample.html](sample.html), [boxModel.html](boxModel.html), [display.html](display.html) |
| Layout and positioning | [flexbox.html](flexbox.html), [grid.html](grid.html), [position.html](position.html), [overflow.html](overflow.html) |
| Responsive design | [mediaQueries.html](mediaQueries.html), [navbar.html](navbar.html) |
| Animation and visual effects | [animation.html](animation.html), [loader.html](loader.html), [psudoElements.html](psudoElements.html) |
| Bootstrap layout and components | [BOOTSTRAP.html](BOOTSTRAP.html), [bootstrapgrid.html](bootstrapgrid.html) |
| JavaScript basics and DOM events | [variables.js](variables.js), [dynamic.html](dynamic.html), [assets/js/dynamic-demo.js](assets/js/dynamic-demo.js) |
| Browser-side state and event handling | [assets/js/store.js](assets/js/store.js) |
| Media embedding | [media.html](media.html) |
| Static page recreations | [instagramClone.html](instagramClone.html), [netflix.html](netflix.html), [website.html](website.html) |

Some filenames keep their original classroom spelling to preserve links and learning history.

## Repository structure

- \`assets/css/store.css\` — styling for the interactive storefront.
- \`assets/js/store.js\` — product search, category filtering, demo-cart state, and sample totals.
- \`assets/js/dynamic-demo.js\` — DOM counter exercise.
- \`assets/js/navbar-demo.js\` — responsive navigation interaction.
- \`image/\`, \`audio/\`, and \`video/\` — media used by existing practice pages.

## Run locally

1. Clone the repository and open the folder in VS Code.
2. Start a local static server from the repository root. For example, with Python installed, run \`python -m http.server 8000\`.
3. Visit \`http://localhost:8000\` and open \`index.html\`, \`Ecommers.html\`, or the practice page you want to review.
4. Internet access is needed for Bootstrap CDN assets and remote demonstration images.

## Quality and safety notes

- GitHub Actions checks JavaScript syntax and audits selected portfolio pages for duplicate IDs, broken local file references, and invalid fragment links.
- The checks are a useful baseline, not a replacement for browser testing, accessibility checks, or a full HTML validator.
- All commerce, registration, and contact pages are frontend demos. No real account, message, order, or payment is created.
- Never enter real credentials, card numbers, or private information into practice forms.
- Confirm that you have permission to publish each image, audio, and video asset, and remove any asset whose licence is unclear before sharing the project publicly.

## Author

**Sai Kiran Buska**

- GitHub: https://github.com/saikiran0563
- LinkedIn: https://www.linkedin.com/in/sai-kiran-buska-127866403
