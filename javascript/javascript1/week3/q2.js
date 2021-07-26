const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};

function calculateTime(arr){
    let time=arr['destinationDistance']/arr['speed'];
    let hour=parseInt(time);
    let minute=parseInt((time%1)*60,0);
    return hour+' hours and '+minute+' minutes';
}

const travelTime = calculateTime(travelInformation);
console.log(travelTime);