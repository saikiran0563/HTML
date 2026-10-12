"use strict";

(() => {
  const productGrid = document.querySelector("#productGrid");
  const searchInput = document.querySelector("#productSearch");
  const categoryFilter = document.querySelector("#categoryFilter");
  const emptyResults = document.querySelector("#emptyResults");
  const cartItems = document.querySelector("#cartItems");
  const cartCount = document.querySelector("#cartCount");
  const cartTotal = document.querySelector("#cartTotal");
  const cartEmpty = document.querySelector("#cartEmpty");
  const clearCartButton = document.querySelector("#clearCart");
  const cartStatus = document.querySelector("#cartStatus");

  if (!productGrid || !searchInput || !categoryFilter || !cartItems) {
    return;
  }

  let cart = [];

  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(amount);

  function filterProducts() {
    const query = searchInput.value.trim().toLocaleLowerCase();
    const category = categoryFilter.value;
    let visibleCount = 0;

    productGrid.querySelectorAll(".product-card-wrap").forEach((wrapper) => {
      const card = wrapper.querySelector(".product-card");
      const name = (card.dataset.name || "").toLocaleLowerCase();
      const matchesQuery = name.includes(query);
      const matchesCategory = category === "all" || card.dataset.category === category;
      const visible = matchesQuery && matchesCategory;

      wrapper.hidden = !visible;
      if (visible) visibleCount += 1;
    });

    if (emptyResults) emptyResults.hidden = visibleCount !== 0;
  }

  function renderCart() {
    cartItems.replaceChildren();
    const itemCount = cart.length;
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    if (cartCount) cartCount.textContent = String(itemCount);
    if (cartTotal) cartTotal.textContent = formatCurrency(total);
    if (cartEmpty) cartEmpty.hidden = itemCount !== 0;
    if (clearCartButton) clearCartButton.disabled = itemCount === 0;

    cart.forEach((item, index) => {
      const row = document.createElement("li");
      row.className = "list-group-item d-flex justify-content-between align-items-start gap-3";

      const details = document.createElement("div");
      details.className = "me-auto";

      const name = document.createElement("div");
      name.className = "fw-semibold";
      name.textContent = item.name;

      const price = document.createElement("div");
      price.className = "small text-secondary";
      price.textContent = formatCurrency(item.price);

      details.append(name, price);

      const removeButton = document.createElement("button");
      removeButton.type = "button";
      removeButton.className = "cart-remove small";
      removeButton.dataset.removeIndex = String(index);
      removeButton.textContent = "Remove";
      removeButton.setAttribute("aria-label", "Remove " + item.name + " from demo cart");

      row.append(details, removeButton);
      cartItems.append(row);
    });
  }

  searchInput.addEventListener("input", filterProducts);
  categoryFilter.addEventListener("change", filterProducts);

  productGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-add-to-cart]");
    if (!button) return;

    const name = button.dataset.productName;
    const price = Number(button.dataset.price);

    if (!name || !Number.isFinite(price) || price < 0) {
      if (cartStatus) cartStatus.textContent = "This sample item could not be added.";
      return;
    }

    cart.push({ name, price });
    renderCart();
    if (cartStatus) cartStatus.textContent = name + " added to the demo cart.";
  });

  cartItems.addEventListener("click", (event) => {
    const button = event.target.closest("[data-remove-index]");
    if (!button) return;

    const index = Number(button.dataset.removeIndex);
    if (Number.isInteger(index) && index >= 0 && index < cart.length) {
      const removed = cart.splice(index, 1)[0];
      renderCart();
      if (cartStatus) cartStatus.textContent = removed.name + " removed from the demo cart.";
    }
  });

  if (clearCartButton) {
    clearCartButton.addEventListener("click", () => {
      cart = [];
      renderCart();
      if (cartStatus) cartStatus.textContent = "Demo cart cleared.";
    });
  }

  filterProducts();
  renderCart();
})();
