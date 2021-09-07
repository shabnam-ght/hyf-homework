console.log("Script loaded");

const products = getAvailableProducts();
const printResult=document.getElementById('filterList')
function renderProducts(products) {
    printResult.innerText='';
    products.forEach(product => {
        const li = document.createElement('li');
        const getUl = document.getElementById('filterList');
        getUl.appendChild(li);

        const hedder = document.createElement('h3');
        const price = document.createElement('p');
        const rate = document.createElement('p');

        hedder.innerText = product.name;
        price.innerText = 'Price: ' + product.price;
        rate.innerText = 'Rating: ' + product.rating;

        li.appendChild(hedder);
        li.appendChild(price);
        li.appendChild(rate);
    });
    console.log(products);
};
renderProducts(products);
/////////////////////////////////////////////////////////////////////////////
//Searching for products
const searchBar = document.getElementById('searchBar');

searchBar.addEventListener('keyup', function () {
    const arr = products.filter(elm => {
        const arrNames = elm.name.toLowerCase();
        return arrNames.includes(searchBar.value);
    });
    renderProducts(arr);
});
/////////////////////////////////////////////////////////////////
//Filter products based on max price
const maxPrice = document.getElementById('maxPrice');

maxPrice.addEventListener('keyup', function () {
    const maximumPrice = products.filter(item => {
        return item.price <= maxPrice.value;
    });
    renderProducts(maximumPrice);
});

// minimum price "Extra"

const minPrice = document.getElementById('minPrice');

minPrice.addEventListener('keyup', function () {
    const minimumPrice = products.filter(item => {
        return item.price >= minPrice.value;
    });
    renderProducts(minimumPrice);
    
});

// Sort the products - optional
const sort = document.getElementById('sort')

sort.addEventListener('click',function(){
const rateArray= products.map(item =>item.rating).sort((a,b) =>b-a)
console.log(rateArray);

renderProducts(rateArray);

});



