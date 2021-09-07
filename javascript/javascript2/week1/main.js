const products = getAvailableProducts();

console.log(products);

const productList = document.querySelector("ul");

function renderProducts(products) {
  for (let i = 0; i < products.length; i++) {
    let title = document.createElement("li");
    let price = document.createElement("span");
    let rating = document.createElement("span");

    title.innerHTML = products[i].name + '<br/>';
    price.innerHTML = "Price: " + products[i].price  + '<br/>';
    rating.innerHTML = "Rating: " + products[i].rating  + '<br/><br>';

    productList.appendChild(title);
    title.appendChild(price);
    title.appendChild(rating);
  }
}

renderProducts(products);
console.log(products);