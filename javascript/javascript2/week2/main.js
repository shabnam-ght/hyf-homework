console.log("Script loaded");

const products = getAvailableProducts();

function renderProducts(products) {
    // implement with foreach
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

searchBar.addEventListener('keydown', function () {
    const arr = products.filter(elm => {
        const arrNames = elm.name.toLowerCase();
        return arrNames.includes(searchBar.value);
    });
    const printResult = document.getElementById('filterList').innerText = ' ';
    renderProducts(arr);
    return printResult;
});
/////////////////////////////////////////////////////////////////
//Filter products based on max price
const maxPrice = document.getElementById('maxPrice');

maxPrice.addEventListener('keyup', function () {
    const maximumPrice = products.filter(item => {
        return item.price <= maxPrice.value;
    });
    const printResult = document.getElementById('filterList').innerText = ' ';
    renderProducts(maximumPrice);
    return maximumPrice;
});

// minimum price "Extra"

const minPrice = document.getElementById('minPrice');

minPrice.addEventListener('keyup', function () {
    const minimumPrice = products.filter(item => {
        return item.price >= minPrice.value;
    });
    const printResult = document.getElementById('filterList').innerText = ' ';
    renderProducts(minimumPrice);
    return minimumPrice;
});

// Sort the products - optional

// hi ,Simon .Could you please tell me where is the problem here .
// result in console perfect , but in DOM 'browser page' = Undifine.
const sort = document.getElementById('sort')

sort.addEventListener('click',function(){
const rateArray= products.map(item =>item.rating).sort((a,b) =>b-a)
console.log(rateArray);
const printResult = document.getElementById('filterList').innerText = ' ';
renderProducts(rateArray);
return rateArray;
});



