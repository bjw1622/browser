// JSON
// JavaScript Object Notation

//1.Object to JSON
//stringfy(obj) object를 json으로 변환
let json = JSON.stringify(true);
// console.log(json);

json = JSON.stringify(["apple", "banana"]);
// console.log(json);

const rabbit = {
  name: "tori",
  color: `white`,
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${this.name} can jump!`);
  },
};
// console.log(rabbit);
// json = JSON.stringify(rabbit);
// console.log(json);

// json = JSON.stringify(rabbit, ["name", "color"]);
// console.log(json);

// json = JSON.stringify(rabbit, (key, value) => {
//   return value;
// });
// console.log(json);

//2.JSON to Object
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
obj.jump();
