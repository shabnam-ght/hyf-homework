const myPromise= new Promise(function(resolve){setTimeout(()=>{
       fetch('https://yesno.wtf/api')
       .then(response=>response.json())
       .then(data=>{resolve(data);})},3000)},reject);
myPromise.then((data) => {console.log(data);});



function yesNoAsync(){
       try{
              return setTimeout(async function(){
                     const response= await fetch("https://yesno.wtf/api")
                     const data = await response.json();
                     console.log(data);
              }, 7000);
              
       }catch(error){
              console.log("error");
       }
}
yesNoAsync();


