const seriesDurations = [
    {
        title: "Game of thrones",
        days: 3,
        hours: 1,
        minutes: 0,
    },
    {
        title: "Sopranos",
        days: 3,
        hours: 14,
        minutes: 0,
    },
    {
        title: "The Wire",
        days: 2,
        hours: 12,
        minutes: 0,
    },
];
const mylife=80*365*24*60;

function logOutSeriesText() {
    var allspent=0;
    for( var i = 0; i < seriesDurations.length; i++){
        let movieTime=(seriesDurations[i]['days']*24*60)+(seriesDurations[i]['hours']*60)+seriesDurations[i]['minutes'];
        allspent+=movieTime;
        let spentTime=(movieTime/mylife*100).toPrecision(2);
        let str=seriesDurations[i]['title']+'took '+spentTime+'% of my life';
        console.log(str);
    }
    let spentTime=(allspent/mylife*100).toPrecision(2);
    let str='In total that is '+spentTime+'% of my life';
    console.log(str);
}

logOutSeriesText();