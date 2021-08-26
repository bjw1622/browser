'use strict';

//2.Variable(read/write)
// let(added in ES6)
let globalName = 'global name';
{
let name = 'jay';
console.log(name);
name = "baek";
console.log(name)
}
// console.log(name);
console.log(globalName)
//block scope
//var hoisting(선언이 제일 위로 올라간다.)
//has no block scope

// 3.Constant(read only)
//use const whenever possible
//선언함과 동시에 할당한 후 값 변경 x
//favor immutable data type always for a few reasons:
//  -security
//  -thread safety
//  -reduce human mistakes
const datsInWeek = 7;
const maxNumber = 5;

//4.Variable types
//메모리 저장 타입 =>  primitive(value로 값 저장),object(object를 가르키는 reference가 저장)
//primitive(더 이상 작은 단위로 나눠질 수 없는 것 ), single item:number,string,boolean,null,undefined,symbol
//object , box container
//function, first-calss function

//number,bigInt
//string
//boolean
//false:0,null,undefined,NaN.''
//true:any other value

//null
let noting = null;
console.log(noting)
//undeined
let x;
console.log(x)

//symbol,create unique identifiers for objets 고유한 식별자
const symbol1 = Symbol('id')
const symbol2 = Symbol('id')
console.log(symbol1 === symbol2) /// false

//object,real-life object, data structure
const jay = {name:'jay', age:20}
jay.name = 'baek';
console.log(jay.name);
//5.Dynamic typing: dynamically typed language
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`)
text = 1;
console.log(`value: ${text}, type: ${typeof text}`)
text = '7' + 5; // string
console.log(`value: ${text}, type: ${typeof text}`)
text = '8' / '2'; //number
console.log(`value: ${text}, type: ${typeof text}`)

