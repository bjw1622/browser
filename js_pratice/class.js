'user strict';
//Object-oriendted progrmmaing
//class:template
//objcet:instance of a class

// 1.Class declarations
class Person{
  //constructor
  constructor(name,age){
    this.name = name;
    this.age = age;
  }

  //methods
  speak(){
    console.log(`${this.name}:hello!`)
  }
}
//object 생성
const jay = new Person('jay',22);
console.log(jay.name);
jay.speak();

//2.Getter and Setter
class User{
  constructor(firstName,lastName,age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get age(){
    return this._age;
  }
  set age(value){
    this._age = value < 0 ? 0: value;
  }
}
const user = new User('jay','job',-1);
console.log(user.age);
console.log(user._age) 

//5.Inheritance
class Shape{
  constructor(width,height,color){
    this.width = width;
    this.height = height;
    this.color = color;
  }
  draw(){
    console.log(`drawing ${this.color} color!`)
  }
  getArea(){
    return this.width * this.height;
  }
}

class Rectangle extends Shape{}
class Triangle extends Shape{
  //overriding
  getArea(){
    console.log(super.getArea());
    return (this.width * this.height /2)
  }
}
const rectangle = new Rectangle(20,20,'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20,20,'blue');
console.log(triangle.getArea());

//6.Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(rectangle instanceof Object);