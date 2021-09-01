"user strict";
//Array
//1.Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// //2.Index position
const fruits = [11, 22];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

//3.Looping over an array
//a.for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
//b.for of
for (let fruit of fruits) {
  console.log(fruit);
}
//c.forEach;
fruits.forEach((index, fruits) => console.log(index, fruits)); //파라미터로 value,index,array

//4.Additon,deletion,copy
//push: add an item to the end
//pop:remove an item from the end
//unshift:add an item to the bengigging
//shift:remove an item from the benigging

//note!! shift,unshift are slower than pop,push
//splice:remove an item by index position
//splice(start,deletecount,add)

//combine two arrays
const fruits2 = [1, 2, 3, 4];
const newFruits = fruits2.concat(fruits); //fruits2에 fruits붙임
console.log(fruits);
console.log(fruits2);
console.log(newFruits);

//5.Searching
//indexOf: find the index
console.log(fruits.indexOf(11));
console.log(fruits.indexOf(22));
console.log(fruits.indexOf(3123)); //없는 값이면 -1 return

//includes true,false 반환
console.log(fruits.includes(11));
console.log(fruits.includes(2231));

//lastIndexOf
fruits.push(11);
console.log(fruits);
console.log(fruits.lastIndexOf(11)); //제일 마지막에 있는 index 출력
