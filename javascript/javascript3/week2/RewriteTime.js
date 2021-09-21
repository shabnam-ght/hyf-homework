
 

  ///////////////////////////////////////////////////////////

function getCurrentLocation(){
    try{
        return new Promise(function(resolve,reject){
              function success(pos) {
                var crd = pos.coords;
                console.log('Your current position is:');
                console.log(`Latitude : ${crd.latitude}`);
                console.log(`Longitude: ${crd.longitude}`);
                console.log(`More or less ${crd.accuracy} meters.`);
                resolve();
              }
              function error(err) {
                console.warn(`ERROR(${err.code}): ${err.message}`);
              }
              navigator.geolocation.getCurrentPosition(success, error);
            success(resolve('location allocated!'));
            error(reject('location not allocated!'));
        });
    }catch(execption){
        return execption;
    }
}
getCurrentLocation()
  .then((position) => {
    function setTimeoutPromise(resolveAfter){
        try{
            return new Promise(resolve=>{setTimeout(resolve,resolveAfter)},reject);
        }catch(execption){
            return execption;
        }
    }
    setTimeoutPromise(3000).then(() => {
        console.log("Called after 3 seconds");
      });
    console.log(position);
  })
  .catch((error) => {
    console.log(error);
  });