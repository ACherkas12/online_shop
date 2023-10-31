function addToBasket(textContent) {
  console.log(textContent);
  const productsInBasket = JSON.parse(
    localStorage.getItem("products-in-basket") || "[]"
  );

  localStorage.setItem(
    "products-in-basket",
    JSON.stringify([...productsInBasket, textContent])
  );
}

function changeLanguage(language) {
  localStorage.setItem(language);
}

function setTheme(theme) {
  localStorage.setItem(theme);
}

const products = document.getElementsByClassName("product");

[...products].forEach((product) => {
  const productName = product.children[0];
  const addButton = product.children[2];

  addButton.onclick = (event) => addToBasket(productName.textContent);
});
