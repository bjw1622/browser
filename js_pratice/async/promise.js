"use strict";
//Promise is a JavaScript object for asynchronous operation.a

//Promise object
//비동기를 콜백함수 대신 유용하게 사용 가능
//1.state 성공 실패(process가 무거운 operation을 수행 중인지, 아니면 기능 수행을 다 하고 성공,실패 했는지)
//2.producer(정보 제공) 와 consumer(정보 소비) 차이 이해하기

//state: pending(우리가 지정한 opreation 수행 중) => fulfilled(operation 성공적으로 완료) or rejected(오류 발생)
//Producer vs Consumer

//1.Producer
//시간이 오래걸리는 작업은 promise를 이용하여 비동기 처리
//동기로 처리하면 file을 읽고 네트워크에서 데이터를 받아 오는 동안 다음 라인의 코드가 실행되지 않음
//새로운 promise가 만들어질때는 전달한 executor 함수는 바로 실행이 된다.
//promise는 object.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network,read files)와 같은 operationg은 비동기로 처리.
  console.log(`doing something.....`);
  setTimeout(() => {
    resolve(`ellie`);
    // reject(new Error(`no network`));
  }, 2000);
});

//2.Consumers: then, catch, finally
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log(`finally`);
  });
