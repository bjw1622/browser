'usr strict';

//JavaScript is synchromous.
//hoisiting: var 변수, function delcaration(선언)이 자동적으로 제일 위로 선언이 되는 것
//hoising이 일어난 이후 코드 실행
console.log(`1`);
setTimeout(function(){
  console.log('2');
},1000)//browser api 
//setTimeout에 우리가 만든 함수를 파라미터로 전달
console.log(`3`);


//Synchronous Call back function
//함수는 호이스팅 되기 때문에 맨 위로
function print(print){
  print();
}
print(() => {console.log(`hello`)});

//Asynchronous Call back function
function printDelay(print,time){
  setTimeout(print,time);
}
printDelay(()=>console.log(`hi`),2000);

//Callback Hell example

class UserStorage{
  loginUser(id,password,onSuccess,onError){
    setTimeout(()=>{
      if(
        (id === `ellie` && password === `dream`) ||
        (id === `coder` && password === `academy`)
      ){
        onSuccess(id);
      }
      else{
        onError(new Error(`not found`));
      }
    },2000)
  }
  getRoles(user,onSuccess,onError){
    setTimeout(()=>{
      if(user === `ellie`){
        onSuccess({name:`ellie`,role:'admin'});
      }
      else{
        onError(new Error(`no acess`))
      }
    },1000)
  }
}

const UserStorage = new UserStorage();
const id = prompt(`enter your id`);
const password = prompt(`enter your pw`);

UserStorage.loginUser(id,password,(user)=>{},(error)=>{});