const userName ="";
const toDoList =[];
function getReply(command){
    command =command.toLowerCase();
    let response ='command is not defined!';
    
    if (command.startsWith("hello my name is ")){
        if(userName===''){
            userName=command.substr(17,command.length-1);
            if(userName===''){
                response ='please inter your name!';
            }else{
                response ='nice to meet you '+userName;
            }
        }else{
            response ='we have met before '+userName;
        }
    }else if(command.includes("what is my name")){
        if(userName===''){
            response ="we have not met before!";
        }else{
            response ='you are '+userName;
        }
    }else if (command.startsWith("add ") && command.endsWith(" to my todo")){
        let todo =command.substr(4,command.length - 15);
        toDoList.push(todo);
        response =todo + ' added to your todo!';
    }else if (command.startsWith("remove ") && command.endsWith(" from my todo")){
        let todo =command.substr(7,command.length - 20);
        for(let i=0;i<toDoList.length;i++){
            if(toDoList[i]===todo){
                toDoList.splice(i,1);
            }
        }
        response =todo + ' removed from your todo!';
    }else if (command.includes("what is on my todo")){
        response =toDoList;
    }else if (command.includes("what day is it today")){
        let date =new Date();
        let day =date.getDay();
        let digitMonth =date.getMonth();
        let year =date.getFullYear();
        let month = ["January", "February","March", "April","May", "June", "July","August","September","October","November","December"]
        response = day+'. of '+month[digitMonth]+' '+year;
    }else if(command.includes("what is ")){
        let numbers =command.substr(8,command.length);
        numbers =numbers.split(' ');
        if(numbers.length===3){
            if(numbers[1]==='+'){
                response = parseInt(numbers[0])+parseInt(numbers[2]);
            }else if(numbers[1]==='-'){
                response = parseInt(numbers[0])-parseInt(numbers[2]);
            }else if(numbers[1]==='*'){
                response = parseInt(numbers[0])*parseInt(numbers[2]);
            }else if(numbers[1]==='/'){
                response = parseInt(numbers[0])/parseInt(numbers[2]);
            }else{
                response =0;
            }
            response ='resualt is:'+response ;
        }

    }else if (command.includes("set a timer for ")){
        let minutes =parseInt(command.substr(16,command.lenght-9));
        let seconds =minutes*60;
        let totalSeconds = 0;
        let interid =setInterval(setTime, 1000);
        response ='timer started:';
        function setTime() {
            if(totalSeconds>=seconds){
                clearInterval(interid);
            }else{
                ++totalSeconds;
                console.log(pad(parseInt(totalSeconds / 3600)) + ':' + pad(parseInt((totalSeconds % 3600) / 60)) + ':' + pad(totalSeconds % 60));
            }
        }
        function pad(val) {
            let valString = val + "";
            if (valString.length < 2) {
                return "0" + valString;
            } else {
                return valString;
            }
        }
    }
    return resualt;
}

console.log(getReply("What is my name"));

console.log(getReply("hello my name is "));
console.log(getReply("hello my name is shabnam"));
console.log(getReply("hello f my name is shabnam"));
console.log(getReply("hello my name is banoo"));

console.log(getReply("What is my name"));

console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply('What is on my todo'));

console.log(getReply("remove fishing from my todo"));
console.log(getReply('What is on my todo'));
console.log(getReply('What day is it today?'));
console.log(getReply('what is 4 + 12'));
console.log(getReply('what is 4 - 12'));
console.log(getReply('what is 4 * 12'));
console.log(getReply('what is 4 / 12'));
console.log(getReply('what is 4 12'));
console.log(getReply('Set a timer for 1 minutes'));
