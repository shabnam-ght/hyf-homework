const activities = [];
    const limit=200;
    function addActivity(date, activity, duration) {
        let obj={

            'date':date,
            'activity':activity,
            'duration':parseInt(duration)

        }
        activities.push(arr);
    }

    function showStatus(arr){
        let arrlength=arr.length;
        if(arrlength===0){
            console.log('Add some activities before calling showStatus');
        }else{
            let temp=0;
            for( let i = 0; i < arrlength; i++){
                temp+=arr[i]['duration'];
            }
            let str='You have added '+arrlength+' activities. They amount to '+temp+' min. of usage';
            console.log(str);
            if(temp>limit){
                console.log('You have reached your limit, no more smartphoning for you!');
            }
        }
    }
 

    addActivity("23/7-18", "google", 60);
    addActivity("23/7-18", "stackOverFlow", 45);
    addActivity("23/7-18", "w3schools", 30);
    addActivity("23/7-18", "Youtube", 15);
    showStatus(activities);
    console.log(activities);