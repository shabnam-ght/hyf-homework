const firstWords = ["big", "beautiful", "amazing", "small", "nice", "ugly", "delicious", "red", "awsome", "lovely"];

const secondWords = ["corprate", "institute", "company", "shop", "market", "application", "website", "restaurant ", "coffeeshop", "business"];

const randomNumber = Math.floor(Math.random() * 10);
const randomNumber2 = Math.floor(Math.random() * 10);
const startupName = firstWords[randomNumber] + " " + secondWords[randomNumber2];
console.log(startupName); 