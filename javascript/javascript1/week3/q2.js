const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};

function calculateTime(arr){
    const time=arr['destinationDistance']/arr['speed'];
    const hour=parseInt(time);
    const minute=parseInt((time%1)*60,0);
    return hour+' hours and '+minute+' minutes';
}

const travelTime = calculateTime(travelInformation);
console.log(travelTime); 