function getBasketItems() {
  return JSON.parse(localStorage.getItem("products-in-basket") || "[]");
}

const basket = document.getElementById("basket");

getBasketItems().forEach((name) => {
  const product = document.createElement("div");
  product.textContent = name;
  basket.append(product);
});
