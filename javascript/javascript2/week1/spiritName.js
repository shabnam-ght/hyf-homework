const inputName= document.getElementById("getName");
const result=document.getElementById("result");
const spiritName=["axar", "drogo", "mooroopna" ,"achak", "ahriman"," alastor"]
const spiritBtn= document.getElementById("btn");
spiritBtn.addEventListener("click",function(){
  const rndmName=spiritName[Math.floor(Math.random() * spiritName.length)];
  result.innerHTML= inputName.value + ' - '+ rndmName ;
});