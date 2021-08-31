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
    this.age = age
  }
  get returnAge(){
    return this._age;
  }
  set setAge(value){
    this._age = value < 0 ? 0 : value;
  }
}

const user = new User("a","b",12);
user.setAge = 12
console.log(user.returnAge)//12

//3.Fields (public,private)
//private 선언 시에는 클래스 내부에서만
class Experiment{
  publicField = 2;
  #privateField = 0;
}

//4.Static propeties and methods/
//static은 object에 상관없이 클래스 자체에 연결
//memory의 사용을 줄일 수 있다.
class Article{
  static public = 'Hi';
  constructor(number){
    this.number = number;
  }
  static print(){
    console.log(Article.public)
  }
}

console.log(Article.public);
Article.print();


//5.Inheritance 상속 & 다양성
//a way for one clas to extend another class.
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

const rectangle = new Rectangle(20,20,'blue')
rectangle.draw(); //drawing blue color!

class Triangle extends Shape{
  //overriding
  getArea(){
    return this.width * this.width / 2 //const area = super.getArea() => return area/2
  }
  toString(){
    return `${this.color}입니다.`
  }
}
const triangle = new Triangle(20,20,'red')
console.log(triangle.getArea())

//6.Class checking: instanceOf
console.log(rectangle instanceof Rectangle);//t
console.log(triangle instanceof Rectangle);//f
console.log(triangle instanceof Triangle);//t
console.log(triangle instanceof Shape);//t
console.log(triangle instanceof Object);//t
//js에서 만든 모든 object들은 Object클래스를 상속 받은 것
console.log(triangle.toString())