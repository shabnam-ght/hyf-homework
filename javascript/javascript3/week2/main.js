const redBox = document.querySelector('ul.marks li:nth-child(1)');
const blueBox = document.querySelector('ul.marks li:nth-child(2)');
const greenBox = document.querySelector('ul.marks li:nth-child(3)');

// function moveAll(){
//     return new Promise(resolve=>{
//         let redTop=20-parseInt(redBox.style.left);
//         let redLeft=300-parseInt(redBox.style.top);

//         let blueTop=400-parseInt(blueBox.style.left);
//         let blueLeft=300-parseInt(blueBox.style.top);

//         let greenTop=400-parseInt(greenBox.style.left);
//         let greenLeft=20-parseInt(greenBox.style.top);
//         moveElement(redBox, { x: redTop, y: redLeft });
//         moveElement(blueBox, { x: blueTop, y: blueLeft });
//         moveElement(greenBox, { x: greenTop, y: greenLeft });
//         resolve();
//     });
// }
 
// moveAll().then(() => {
//     console.log("all Elements has been moved");
//   });
  




  
function moveOne(doc,pos,sec){
    try{
            setTimeout(async function(){

                let boxTop=pos.x-parseInt(doc.style.left);
                let boxLeft=pos.y-parseInt(doc.style.top);
                moveElement(doc, { x: boxTop, y: boxLeft });
                console.log('box moved from: x='+doc.style.left+', y='+doc.style.top+' to: x='+pos.x+', y='+pos.y);
           }, sec);
           return 1;
           
    }catch(error){
           console.log("error");
    }
}
moveOne(redBox,{x:20,y:300},1000);
moveOne(blueBox,{x:400,y:300},3000);
moveOne(greenBox,{x:400,y:20},5000);
