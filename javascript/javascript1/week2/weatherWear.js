
function whatToWear(temprature){
    var str='';
    if (temprature>25){
        str= 'wear bikini';
    }else if(temprature>18){
        str= 'wear t-shirt and jean';
    }else if(temprature>10){
        str= 'you need a hoody and a sweather';
    }else if(temprature>5){
        str= 'take your jacket';
    }else{
        str= 'stay home its too cold';
    }
    return str;
}
const clothesToWear=whatToWear(10);
console.log(clothesToWear);
