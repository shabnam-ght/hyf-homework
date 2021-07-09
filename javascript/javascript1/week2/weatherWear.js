function clothesToWear (temprature){
    if (temprature>25){
        console.log('wear bikini')
    }
    else if(temprature>18){
        console.log('wear t-shirt and jean')
    }
    else if(temprature>10){
        console.log('you need a hoody and a sweather')
    }
    else if(temprature>5){
        console.log('take your jacket')
    }
    else{
        console.log('stay home its too cold')
    }
};
clothesToWear();