
function getEventWeekday(day){
    let d = new Date();
    let f=d.getDay();
    let res=day+f;
    res=res%7;
    switch (res) {
        case 0:
          day = "Sunday";
          break;
        case 1:
          day = "Monday";
          break;
        case 2:
           day = "Tuesday";
          break;
        case 3:
          day = "Wednesday";
          break;
        case 4:
          day = "Thursday";
          break;
        case 5:
          day = "Friday";
          break;
        default:
          day = "Saturday";
      }
    return day;
}
let day=45;
console.log(getEventWeekday(day));