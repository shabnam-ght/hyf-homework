let userName="";
let toDoList=[];
function getReply(command){
    command=command.toLowerCase();
    let resualt='command is not defined!';
    
    if (command.includes("hello my name is ")){
        if(userName===''){
            userName=command.substr(17,command.length-1);
            if(userName===''){
                resualt='please inter your name!';
            }else{
                resualt='nice to meet you '+userName;
            }
        }else{
            resualt='we have met before '+userName;
        }
    }else if(command.includes("what is my name")){
        if(userName===''){
            resualt="we have not met before!";
        }else{
            resualt='you are '+userName;
        }
    }else if (command.includes("add ") && command.includes(" to my todo")){
        let todo=command.substr(4,command.length - 15);
        toDoList.push(todo);
        resualt=todo + ' added to your todo!';
    }else if (command.includes("remove ") && command.includes(" from my todo")){
        let todo=command.substr(7,command.length - 20);
        for(let i=0;i<toDoList.length;i++){
            if(toDoList[i]===todo){
                toDoList.splice(i,1);
            }
        }
        resualt=todo + ' removed from your todo!';
    }else if (command.includes("what is on my todo")){
         resualt=toDoList;
    }else if (command.includes("what day is it today")){
        let date=new Date();
        let day=date.getDay();
        let digitMonth=date.getMonth();
        let year=date.getFullYear();
        let month = ["January", "February","March", "April","May", "June", "July","August","September","October","November","December"]
        resualt= day+'. of '+month[digitMonth]+' '+year;
    }else if(command.includes("what is ")){
        let numbers=command.substr(8,command.length);
        numbers=numbers.split(' ');
        if(numbers.length===3){
            if(numbers[1]==='+'){
                resualt=parseInt(numbers[0])+parseInt(numbers[2]);
            }else if(numbers[1]==='-'){
                resualt=parseInt(numbers[0])-parseInt(numbers[2]);
            }else if(numbers[1]==='*'){
                resualt=parseInt(numbers[0])*parseInt(numbers[2]);
            }else if(numbers[1]==='/'){
                resualt=parseInt(numbers[0])/parseInt(numbers[2]);
            }else{
                resualt=0;
            }
            resualt='resualt is:'+resualt;
        }

    }else if (command.includes("set a timer for ")){
        let minutes=parseInt(command.substr(16,command.lenght-9));
        let seconds=minutes*60;
        let totalSeconds = 0;
        let interid=setInterval(setTime, 1000);
        resualt='timer started:';
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
