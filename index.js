const decrementBtn = document.querySelector(".decrement");
const incrementBtn = document.querySelector(".increment");
const countElement = document.querySelector(".count");
const addToCartBtn = document.querySelector(".addToCart");
const cartCountElement = document.querySelector(".cart-num");
const cartItemsList = document.querySelector(".cart-items");
const firstImage = document.getElementById("first-img");
const secondImage = document.getElementById("second-img");
const thirdImage = document.getElementById("third-img");
const fourthImage = document.getElementById("fourth-img");
const bigImg = document.querySelector(".image-product");
const avatar = document.querySelector(".icon-cart");
const cartoverlay = document.querySelector(".cart-overlay");
const overlaycart = document.getElementById("overlay-cart");
const empty = document.querySelector(".empty-cart");
const overlay_num = document.querySelector(".overlay-num");
const overlay_total = document.querySelector(".overlay_total");
const overlay_flex = document.querySelector(".overlay-flex");
const deletesvg = document.querySelector(".delete-svg");
const container_overlay = document.querySelectorAll(".overlay-flex");
function showoverlay() {
  overlaycart.classList.add("show");
}
avatar.addEventListener("click", showoverlay);
function firstimg() {
  bigImg.src = firstImage.src;
}
firstImage.addEventListener("click", firstimg);
function secondimg() {
  bigImg.src = secondImage.src;
}
secondImage.addEventListener("click", secondimg);
function thirdimg() {
  bigImg.src = thirdImage.src;
}
thirdImage.addEventListener("click", thirdimg);
function fourthimg() {
  bigImg.src = fourthImage.src;
}
fourthImage.addEventListener("click", fourthimg);
let productCount = 0;
let cartCount = 0;

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

addToCartBtn.addEventListener("click", (event) => {
  if (productCount > 0) {
    cartCount++;
    cartCountElement.style.display = "Inline-block";
    cartCountElement.textContent = productCount++;
    const div1 = document.createElement("div");
    const image1 = document.createElement("img");
    image1.src = bigImg.src;
    image1.className = "overlay-image";
    div1.appendChild(image1);
    const div2 = document.createElement("div");
    const firstp = document.createElement("p");
    firstp.textContent = "Fall Limited Edition";
    const secondp = document.createElement("p");
    secondp.textContent = `$125 \u00D7 ${productCount}$${125 * productCount}`;
    div2.className = "overlay-div2";
    div2.appendChild(firstp);
    div2.appendChild(secondp);
    const div3 = document.createElement("div");
    const image2 = document.createElement("img");
    image2.src = "./images/icon-delete.svg";
    image2.className = "delete-svg";

    div3.appendChild(image2);
    overlay_flex.appendChild(div1);
    overlay_flex.appendChild(div2);
    overlay_flex.appendChild(div3);
    const container = Array.from(container_overlay);
    container.push(overlay_flex);
    console.log(container);
    productCount = 0;
    countElement.textContent = 0;
  }
});
overlay_flex.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-svg")) {
    event.target.parentElement.parentElement.remove();
  }
});
// deletesvg.addEventListener("click", () => {
//   overlay_flex.innerHTML = "";
// });
// cartItemsList.addEventListener("click", (event) => {
//   if (event.target.classList.contains("delete-item")) {
//     cartCount--;
//     cartCountElement.textContent = cartCount;
//     event.target.parentElement.remove();
//   }
// });
// ... (your existing JavaScript code) ...

// // Keep track of added products
// const addedProducts = [];
// deletesvg.addEventListener("click", () => {
//   // Clear existing cart items
//   overlay_num.textContent = "";

//   // Display added products in the cart
//   addedProducts.forEach((product) => {
//     const cartItem = document.createElement("li");
//     cartItem.className = "cart-item";
//     cartItem.textContent = `Product Name (${product})`;
//     cartItemsList.appendChild(cartItem);
//   });
// });
