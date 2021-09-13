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
//executor가 바로 실행되는 점을 유의해야 함
//whe new Promise is created, the executor runs automatically.
//promise는 object.
// const promise = new Promise((resolve, reject) => {
//   // doing some heavy work (network,read files)와 같은 operationg은 비동기로 처리.
//   console.log(`doing something.....`);
//   setTimeout(() => {
//     //성공적으로 실행 시 resolve라는 function을 call back으로
//     // resolve(`ellie`);

//     //실패시에 ``에러 전달
//     reject(new Error(`no network`));
//   }, 2000);
// });

// //2.Consumers: then, catch, finally
// //then:promise가 정상적으로 수행이 된다면 resolv를 통해 전달한 값이 파라미터로 전달
// //catch:실패한 에러 받아옴.
// //finally:성공 실패 상관 x => 무조건 마지막에 실행
// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log(`finally`);
//   });
// //promise에서 then을 호출하면 promise가 return , return 된 promise에 다시 catch 등록

//3. Promise chaining
// const fetchNumeber = new Promise((resolove, reject) => {
//   setTimeout(() => {
//     resolove(1);
//   }, 1000);
// });

// fetchNumeber
//   .then((num) => num * 2)
//   .then((num) => num * 3)
//   .then((num) => {
//     return new Promise((resolove, reject) => {
//       setTimeout(() => resolove(num - 1), 1000);
//     });
//   })
//   .then((num) => {
//     console.log(num);
//   });
//then은 값, promise 전달 가능

//4.오류를 잘 처리하자
// const getHen = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("A");
//     }, 1000);
//   });

// const getEgg = (hen) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => resolve(`${hen} => B`), 1000);
//   });

// const cook = (egg) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => resolve(`${egg} => C`), 1000);
//   });

// getHen().then(getEgg).then(cook).then(console.log);

// const pratice = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(100);
//   }, 1000);
// });

// pratice
//   .then((total) => {
//     console.log(total);
//     return total * 100;
//   })
//   .then((total) => {
//     console.log(total);
//     return total / 100;
//   })
//   .then((total) => {
//     console.log(total);
//   });

// const f1 = (message) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("1번 주문 완료");
//     }, 1000);
//   });
// };

// const f2 = (callback) => {
//   setTimeout(() => {
//     console.log("2번 주문 완료");
//     callback();
//   }, 2000);
// };

// const f1 = (callback) => {
//   setTimeout(() => {
//     console.log("3번 주문 완료");
//     callback();
//   }, 3000);
// };

// console.log("시작");
