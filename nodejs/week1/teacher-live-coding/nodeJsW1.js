class Circle{
    constructor(radius){
        this.radius=radius;
    }
    getDiameter(){
        return this.radius*2;
    }
    getCircumference(){
        return Math.PI*diameter;
    }
    getArea(){
        return Math.PI*this.radius*this.radius;
    }
}
const circle = new Circle(10);
const diameter =circle.getDiameter();
const circumference =circle.getCircumference();
const area =circle.getArea();
console.log({ diameter: diameter, circumference: circumference, area: area });