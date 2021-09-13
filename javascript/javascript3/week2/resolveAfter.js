async function myPromise(resolveAfter){
    try{
        const promise=await new Promise(resolve=>{setTimeout(resolve,resolveAfter)});
        return promise;
    }catch(execption){
        return execption;
    }
}
 
myPromise(5000).then(() => {console.log("I am called asynchronously");});

