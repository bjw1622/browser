'use strict';

//Promise object
//비동기를 콜백함수 대신 유용하게 사용 가능
//state 성공 실패
//producer consumer 차이

//state: pending => fulfilled or rejected
//Producer vs Consumer

//1.Producer
//시간이 오래걸리는 작업은 promise를 이용하여 비동기 처리
//새로운 promise가 만들어질때는 전달한 executor 함수는 바로 실행이 된다.
const promise = new Promise((resolve,reject)=>{
  console.log(`doing something.....`);
  setTimeout(()=>{
    resolve(`ellie`);
    // reject(new Error(`no network`));
  },2000);
});

//2.Consumers: then, catch, finally
promise
.then((value)=>{
  console.log(value);
})
.catch((error)=>{
  console.log(error);
})
.finally(()=>{
  console.log(`finally`);
});