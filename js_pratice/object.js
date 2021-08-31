// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = {key:value}의 집합체 { 변수:값 }

//1.Literals and properties
const obj1 = {}; //'object literal' syntax
const obj2 = new Object(); //`object constructor` syntax 클래스를 템플릿으로 object만들기

function print(person){
  console.log(person.name);
  console.log(person.age);
}

const jay = {name:'jay' , age:25};
print(jay);

jay.job = true; //object를 추가했더라도 추가가 가능
console.log(jay);

delete jay.job; //삭제도 가능
console.log(jay);

//2. Computed properties
//key should be a always string
console.log(jay.name);
console.log(jay['name']);//key는 string형태로 접근

jay['job'] = true;
console.log(jay.job);

function printValue(obj,key){
  console.log(obj[key]); //키에 관련된 값들을 받을 때
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
//클래스 같은 function
function Person(name,age){
  //this = {}; 생략
  this.name = name;
  this.age = age;
  //return this 생략
}

//5.in operator: property existence check(key in obj);
//키가 존재하는지 확인 가능한 키워드
console.log('name' in jay); //true
console.log('age' in jay); // true
console.log('dasd' in jay);//false

//6. for..in vs for..of
//for (key in obj)
//object안에 모든 키들 출력
for(a in jay){
    console.log(a);
}

//for(value of iterable)
//for of는 array의 모든 값들이 value에 할당
const array = [1,2,3,4,5];
for(value of array){
  console.log(value);
}

//7.Fun cloning
///Object.assign(dest,[obj1,obj2,obj3...])
const user = {name:'jay',age:'20'};
const user2 = user;
console.log(user);

//Object를 복사하는 방법     
//old way
const user3 = {};
for(key in user){
  user3[key] = user[key]; //key 순서 => name , age
}
console.log(user3);

const user4 = {};
Object.assign(user4,user);//Object는 js에 기본으로 존재하는 것, assign메소드
//assing은 복사하고자하는 타겟전달
console.log(user4);
console.log(user);

//another example
//2개 이상 조합
const fruit1 = {color:'red',weight:54};
const fruit2 = {color:'blue',size:'big'};
const mixed = Object.assign({},fruit1,fruit2);//뒤에서 계속 덮어씌우기
console.log(mixed);
