class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
    convertToCurrency(currency){
      let price=0;
      if(currency==="dollars"){
        price=this.price/6.66;
      }
      else if(currency==="rial"){
        price=this.price*46800;
      }
      else if(currency==="euro"){
        price=this.price/7.5;
      }else{
        price=this.price;
      }
      return  price;
    }
  }
  
  class ShoppingCart {
    constructor() {
      this.products = [];
    }
  
    addProduct(product) {
      // Implement functionality here
      this.products.push(product);
    }
  
    removeProduct(product) {
      this.products=this.products.filter(function(p){return (p.name!==product.name);});
      // Implement functionality here
    }
  
    searchProduct(productName) {
      let foundProducts=this.products.filter(function(p){return p.name===productName;});
      return foundProducts;
      // Implement functionality here
    }
  
    getTotal() {
      let total=0;
      for(let i=0;i<this.products.length;i++){
        total+=this.products[i].price;
      }
      return total;
      // Implement functionality here
    }
  
    renderProducts() {
      let str='';
      for(let i=0;i<this.products.length;i++){
        str+='<li>name : ' + this.products[i].name + ' price:' + this.products[i].price + '</li>';
      }
      return str;
      // Implement functionality here
    }
  
    getUser() {
      const myPromise= new Promise(function(resolve){
        fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response=>response.json())
        .then(data=>{resolve(data);})
      });
        
      myPromise.then((data) => {console.log(data);});
      // Implement functionality here
    }
  
    getUsername() {
      const myPromise= new Promise(function(resolve){
        fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response=>response.json())
        .then(data=>{resolve(data);})
      });
        
      myPromise.then((data) => {console.log(data.username);});
      // Implement functionality here
    }
  }
  
  const shoppingCart = new ShoppingCart();
  const flatscreen = new Product("flat-screen", 5000);
  shoppingCart.addProduct(flatscreen);
  const blanket = new Product("blanket", 20);
  shoppingCart.addProduct(blanket);
  const freezer = new Product("freezer", 170);
  shoppingCart.addProduct(freezer);
  const jacket = new Product("jacket", 34);
  shoppingCart.addProduct(jacket);
  const handsfree = new Product("hands_free", 15453456);
  shoppingCart.addProduct(handsfree);
  console.log(shoppingCart.searchProduct('hands_free'));
  console.log(shoppingCart.getTotal());
  shoppingCart.removeProduct(handsfree);
  document.getElementById('products').innerHTML=shoppingCart.renderProducts();  
  shoppingCart.getUser();
  shoppingCart.getUsername();


  console.log(flatscreen.convertToCurrency("dollars"));
  console.log(flatscreen.convertToCurrency("rial"));
  console.log(flatscreen.convertToCurrency("euro"));

