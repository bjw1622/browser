//Function
// -fundamental building block in the program


// 1.Function CSSStyleDeclaration
// function name(pra,1.param2){
//   body --- return;
// }
//function is object in JS

// 2.Parameters
function changeName(obj){
  obj.name = 'coder';
}
const jay = {name:'jay'};
changeName('baek');
console.log(jay)

//3.Default parameters(added in ES6)
//파라미터가 입력되지 않아도 default값 대체 지정
function showMessage(message, from="jay"){
  console.log(`${message} by ${from}`)
}
showMessage(`Hi`);

//4.Rest parameters(added in ES6)
function printall(...args){
  for(let i =0; i < args.length; i++){
    console.log(args[i])
  }
}
printall('dream','coding','jay')

//5.Local scope

//6.return

//7.Early return,early exist 

//Arrow function
const simple = () => {

}
//IIFE: Immediately Invoked Function Expression
(function hello(){
  console.log('IIFE')
})();

//Quiz time
//function calculate(command,a,b)
//command: add,substract,divide,mulitply,remainder

function calculate(command,a,b){
  switch(command){
    case'add':{
      return a+b;
      break;
    }case'sub':{
      return a-b;
      break;
    }case'div':{
      return a/b;
      break;
    }case'mul':{
      return a*b;
      break;
    }case'remainder':{
      return a%b;
      break;
    }
  }
}
console.log(calculate('add',4,2));
