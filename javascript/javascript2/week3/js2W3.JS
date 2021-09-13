//1
function callString() {
    setTimeout(function(){(console.log("Called after 2.5 seconds")); },2500);
  };
  callString();
//2
  function stringToLog(delay, stringToLog){
    setTimeout(function(){(console.log(stringToLog)); },delay* 1000);
  };
  stringToLog(3, "im here");
//3
  const btn=document.getElementById("btn");
  btn.addEventListener("click", ()=>{
      stringToLog(5, "this string logged after 5 sec")
  });
  //4
const earthLogger=()=>{
    console.log("Earth");
};
earthLogger();


const saturnLogger=()=>{
    console.log("saturn");
};
saturnLogger()

function planetLogFunction(param){
    return param()
};
planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

//5  const locBtn=document.getElementById("locationBtn");
//6    
//7
function runAfterDelay(delay, callback){
    setTimeout(()=>{
      return callback();
     },delay* 1000);
  };
  runAfterDelay(4, function(){
    console.log("should be logged after 4 seconds");
  });
  //8
  const body=document.querySelector("body");
  body.addEventListener("dblclick", function(){
    console.log("double click");
  });
  //9
  function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke ){
    logFunnyJoke=()=>console.log("funny joke");
    logBadJoke=()=>console.log("bad joke");
    shouldTellFunnyJoke===true?logFunnyJoke():logBadJoke();

  };
  jokeCreator(true);
  jokeCreator(false);