const arr=[];
arr[0]=function(){console.log("function1 is called")};
arr[1]=function(){console.log("function2 is called")};
arr[2]=function(){console.log("function3 is called")};
let i=0;
while(i<3){
    let temp=arr[i++];
    temp();
}

const fnc=()=>console.log("this const is a function");
function normalFnc(){console.log("this function as a normal function");}

fnc();
normalFnc();

const obj ={key:()=>console.log("function is called inside an obj")}
obj.key();