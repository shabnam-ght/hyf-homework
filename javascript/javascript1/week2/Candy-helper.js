
const boughtCandy=[];
const boughtCandyPrices=[];
let amountToSpend=Math.random()*100;
function addCandy(candyType,weight){
    let price=0;
    if(candyType==='Sweet'){
        price=0.5;
    }else if(candyType==='Chocolate'){
        price=0.7;
    }else if(candyType==='Toffee'){
        price=1.1;
    }else if(candyType==='Chewing-gum'){
        price=0.03;
    }
    boughtCandy.push([candyType,weight]);
    boughtCandyPrices.push(price*weight);
}
function canBuyMoreCandy(){
    let price=0;
    for(let i=0;i<boughtCandyPrices.length;i++){
        price+=boughtCandyPrices[i];
    }
    return price<amountToSpend;
}
addCandy('Sweet',10);
addCandy('Chocolate',20);
addCandy('Toffee',30);
addCandy('Chewing-gum',40);
let MoreCandy=canBuyMoreCandy();
if(MoreCandy){
    console.log('You can buy more, so please do!');
}else{
    console.log('Enough candy for you!');
}
console.log(boughtCandy);
console.log(boughtCandyPrices);
console.log(amountToSpend);