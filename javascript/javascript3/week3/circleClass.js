//i didnt read the homework compeletely so i animated a circle :) which you can find it  in the commented codes below
/*

const canvas =document.getElementById("canvas");
const context = canvas.getContext("2d");
 
const window_height=window.innerHeight;
const window_width=window.innerWidth;
 
canvas.width=window_width;
canvas.height=window_height;
canvas.style.background="violet";

let hit_counter=0;

class circle{
    constructor(xpos,ypos,radious,color,text,speed){
        this.xpos=xpos;
        this.ypos=ypos;
        this.radious=radious;
        this.color=color;
        this.text=text;
        this.speed=speed;
        this.dx=1*this.speed;
        this.dy=1*this.speed;



    }
    draw(context){
        context.beginPath();

        context.strokeStyle=this.color
        context.textAlign="center";
        context.textBaseLine="middle"
        context.font="20px Arial"
        context.fillText(this.text,this.xpos,this.ypos)
        context.linewidth=5;
                //context.strokeText(this.text,this.xpos,this.ypos);

        context.arc(this.xpos, this.ypos,this.radious,0,Math.PI*2,false);
        context.stroke();


        context.closePath();
    }
    update(){
        this.text=hit_counter;
context.clearRect(0,0,window_width,window_height);

        this.draw(context);

        if((this.xpos+this.radious)>window_width){
            this.dx=-this.dx;
            hit_counter++;
        }
        if((this.xpos+this.radious)<0){
            this.dx=-this.dx;
            hit_counter++;

        }
        if((this.ypos+this.radious)>window_height){
            this.dy=-this.dy;
            hit_counter++;

        }
        if((this.ypos+this.radious)<0){
            this.dy=-this.dy;
            hit_counter++;

        }


        this.xpos+=this.dx;
        this.ypos+=this.dy;

    }
}
//let random_x= Math.random()*window_width;
//let random_y= Math.random()*window_width;

//let  allCircle=[];


let myCircle=new circle(100,100,50,"purple",hit_counter,5);

//let createCircle=function(circle){
    myCircle.draw(context);
//}

let updateCircle =function(){
  requestAnimationFrame(updateCircle);
  myCircle.update();  
}


updateCircle();


/*
for (let numbers=0;numbers<1;numbers++){
    let random_x= Math.random()*window_width
    let random_y= Math.random()*window_width

    let myCircle=new circle(random_x,random_y,50,"purple",circle_counter,1);
    allCircle.push(myCircle);
    createCircle(allCircle[numbers]);
    circle_counter++;
};
*/


const canvas =document.getElementById("canvas");
const context = canvas.getContext("2d");
if (canvas.getContext){
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
    canvas.style.background="violet";
}

class Circle{
    constructor(x,y,r, startAngle, endAngle, fillColor){
        this.x=x;
        this.y=y;
        this.r=r;
        this.startAngle=startAngle;
        this.endAngle=endAngle;
        this.fillColor=fillColor;
    }
    draw(){
        context.beginPath();
        context.arc(this.x,this.y,this.r, this.startAngle, this.endAngle);
        context.fillStyle=this.fillColor;
        context.fill();
        context.strokeStyle='#'+Math.floor(Math.random()*16777215).toString(16);
        context.stroke(); 
        context.closePath();
        return;
    }
}

// const c1 = new Circle(100, 100, 20, 0, 2 * Math.PI, '#ffffff');
// c1.draw();
// const c2 = new Circle(200, 200, 30, 0, 2 * Math.PI, '#ffffff');
// c2.draw();
// const c3 = new Circle(300, 300, 40, 0, 2 * Math.PI, '#ffffff');
// c3.draw();

setInterval(() => {
    context.clearRect(0,0,window.innerWidth,window.innerHeight);
    //let mousex=parseInt(Math.random()*500);
    //let mousey=parseInt(Math.random()*500);
    document.addEventListener("mousemove", () => {
        mousex = event.clientX; 
        mousey = event.clientY; 
      });
    let x=mousex;
    let y=mousey;
    let r=parseInt(Math.random()*30);
    let fillColor='#'+Math.floor(Math.random()*16777215).toString(16);
    c = new Circle(x,y,r, 0, 2 * Math.PI, fillColor);
    c.draw();
}, 100);



