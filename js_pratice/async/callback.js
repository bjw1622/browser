// "usr strict";

// //JavaScript is synchromous. 동기적
// //hoisiting: var, function delcaration(선언)이 자동적으로 제일 위로 선언이 되는 것
// //hoising이 일어난 이후 하나하나 동기적으로 코드가 실행
// console.log(`1`);
// setTimeout(function () {
//   console.log("2");
// }, 1000); //browser api, 브라우저에게 1초뒤에 함수를 실행시켜달라고 요청

// //setTimeout에 우리가 만든 함수를 파라미터로 전달
// console.log(`3`);
// // 1, 3, 2

// //Synchronous Call back function
// //함수는 호이스팅 되기 때문에 맨 위로
// function printIm(print) {
//   print();
// }
// printIm(() => {
//   console.log(`hello`);
// });

// //Asynchronous Call back function
// function printDelay(print, time) {
//   setTimeout(print, time);
// }
// printDelay(() => console.log(`hi`), 2000);

//Callback Hell example
//콜백 체인의 문제점
//1.가독성 x
//2.문제 발생 시 에러 파악, 디버깅의 문제
//3.유지보수의 문제
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === `ellie` && password === `dream`) ||
        (id === `coder` && password === `academy`)
      ) {
        onSuccess(id);
      } else {
        onError(new Error(`not found`));
      }
    }, 2000);
  }
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === `ellie`) {
        onSuccess({ name: `ellie`, role: "admin" });
      } else {
        onError(new Error(`no acess`));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("id");
const pw = prompt("pw");
userStorage.loginUser(
  id,
  pw,
  (user) => {
    userStorage.getRoles(user, (userWithRole) => {
      alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
    });
  },
  (error) => {
    console.lop(error);
  }
);
