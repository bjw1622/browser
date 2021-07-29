//1.String concatenation
console.log(`my` + ` cat`);
console.log(`1`+2);
console.log(`string literals: 1+2 = ${1+2}`);

//2.Numeric operators

//3.Increment and decrement operator
let counter = 2;
const preIncrement = ++counter;
//counter = counter + 1;
const postIncrement = counter++;
//postIncrement = counter
//counter += 1;

//6.Logical operators
// || (or), finds the first truthy value
// &&(and), finds the first falsy value

// 7.Equality
// == loose equality, with type conversion(타입 확인x)
// === strict equality, no type conversion

//8. Conditional operators: if

//9. Ternary operator:?
//codition ? value1 : value2;
const a = 'jay'
console.log(a === 'jay' ? 'yes' :'no' );

//10.switch

//11.Loops
//while
//do while => 조건문 먼저 실행하고 싶을 때

//for loop, for(begin; conditions; step)

//break,continue
//Q1. iterate from 0 to 10 and print only even numbers
for(let i = 0; i <= 10 ; i++){
  if(i % 2 === 0){
    continue;
  }
  else{
    console.log(i);
  }
}

//Q2. iterate from 0 to 10 and print numbers untill reaching 8
for(let i = 0; i <= 10 ; i++){
  if(i === 8){
    break;
  }
  else{
    console.log(i);
  }
}