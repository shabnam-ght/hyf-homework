
let pressS=0;
    let pressL=0;
    let miliSec=0;
    let btn=document.getElementById('btn');
    btn.addEventListener("click",()=>{
        miliSec=document.getElementById('seconds').value*1000;
        let body=document.querySelector('html');
        body.addEventListener("keydown",letterCounter);

        function letterCounter(event){
            if(event.keyCode===76){
                document.getElementById('pressL').innerHTML=++pressL;
            }else if(event.keyCode===83){
                document.getElementById('pressS').innerHTML=++pressS;
            }
        }

        setTimeout(function(){
            if(pressS>pressL){
                alert('S wins!');
            }else if(pressS<pressL){
                alert('L wins!');
            }else{
                alert('Tie!');
            }
            pressL=0;
            pressS=0;
            document.getElementById('pressL').innerHTML=0;
            document.getElementById('pressS').innerHTML=0;
            body.removeEventListener("keydown", letterCounter);
        },miliSec);
    });