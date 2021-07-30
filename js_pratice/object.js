//Objects
//object = {key:value}의 집합체
//1.Literals and properties
const obj1 = {}; //'object literal' syntax
const obj2 = new Object(); //`object constructor` syntax

function print(person){
  console.log(person.name);
  console.log(person.age);
}

const jay = {name:'jay' , age:25};
print(jay);

jay.job = true;
console.log(jay);

delete jay.job;
console.log(jay);

//2. Computed properties
//key should be a always string
console.log(jay.name);
console.log(jay['name']);
jay['job'] = true;
console.log(jay.job);

function printValue(obj,key){
  console.log(obj[key]);
}
printValue(jay,'name');
printValue(jay,'age');

//3.Property value shorthand
const person1 = {name:'bob',age:2};
const person2 = {name:'steve',age:3};
const person3 = {name:'dave',age:4};
const person4 = new Person('jay',25);
console.log(person4);

//4.Constuctor function
function Person(name,age){
  //this = {};
  this.name = name;
  this.age = age;
  //return this
}

//5.in operator: property existence check(key in obj);
console.log('name' in jay); //true
console.log('age' in jay); // true
console.log('dasd' in jay);//false

console.clear();
//6. for..in vs for..of
//for (key in obj)
  for(a in jay){
    console.log(a);
}

//for(value of iterable)
const array = [1,2,3,4,5];
for(value of array){
  console.log(value);
}

//7.Fun cloning
///Object.assign(dest,[obj1,obj2,obj3...])
const user = {name:'jay',age:'20'};
const user2 = user;
console.log(user);

//old way
const user3 = {};
for(key in user){
  user3[key] = user[key];
}
console.log(user3);

const user4 = {};
Object.assign(user4,user);
console.log(user4);
console.log(user);

//another example
const fruit1 = {color:'red',weight:54};
const fruit2 = {color:'blue',size:'big'};
const mixed = Object.assign({},fruit1,fruit2);//뒤에서 계속 덮어씌우기
console.log(mixed);
