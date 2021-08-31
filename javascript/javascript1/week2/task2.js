
function getEventWeekday(day){
  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  function getEventWeekday(day) {
    const todayIndex = new Date().getDay();
    return weekDays[(todayIndex + day) % 7];
  }
    return day;
}
let day=45;
console.log(getEventWeekday(day));