// Select elements
const decrementBtn = document.querySelector(".decrement");
const incrementBtn = document.querySelector(".increment");
const countElement = document.querySelector(".count");
const cartCountElement = document.querySelector(".cart-num");
const bigImg = document.querySelector(".image-product");
const addToCartBtn = document.querySelector(".addToCart");
const avatar = document.querySelector(".icon-cart");
const overlay_flex = document.querySelector(".overlay-flex");

let productCount = 0;
let cartCount = 0;

// Event listeners
decrementBtn.addEventListener("click", () => {
  if (productCount > 0) {
    productCount--;
    countElement.textContent = productCount;
  }
});

incrementBtn.addEventListener("click", () => {
  productCount++;
  countElement.textContent = productCount;
});

addToCartBtn.addEventListener("click", () => {
  if (productCount > 0) {
    cartCount++;
    cartCountElement.style.display = "inline-block";
    cartCountElement.textContent = cartCount;

    // Create cart item element
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
      <img src="${bigImg.src}" class="overlay-image" />
      <div class="overlay-div2">
        <p>Fall Limited Edition</p>
        <p>$125 × ${productCount} $${125 * productCount}</p>
      </div>
      <img src="./images/icon-delete.svg" class="delete-svg" />
    `;

    overlay_flex.appendChild(cartItem);

    // Reset product count
    productCount = 0;
    countElement.textContent = 0;
  }
});

overlay_flex.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-svg")) {
    event.target.parentElement.parentElement.remove();
    cartCount--;
    cartCountElement.textContent = cartCount;
  }
});

avatar.addEventListener("click", () => {
  const overlaycart = document.getElementById("overlay-cart");
  overlaycart.classList.add("show");
});

document.addEventListener("click", (event) => {
  const cartDropdown = document.querySelector(".cart-dropdown");
  if (!cartDropdown.contains(event.target) && !avatar.contains(event.target)) {
    cartDropdown.classList.remove("show");
  }
});
