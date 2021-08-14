const products = getAvailableProducts();

console.log(products);

const productList = document.querySelector("ul");

function renderProducts(products) {
  for (let i = 0; i < products.length; i++) {
    let title = document.createElement("li");
    let price = document.createElement("span");
    let rating = document.createElement("span");

    title.innerHTML = products[i].name;
    price.innerHTML = "Price: " + products[i].price;
    rating.innerHTML = "Rating: " + products[i].rating;

    productList.appendChild(title);
    title.appendChild(price);
    title.appendChild(rating);
  }
}

renderProducts(products);
console.log(products);