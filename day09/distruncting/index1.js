// ... 연산자
// 1. spread[펼침] 연산
// String
const arr = [..."latte"]; // ["l","a","t","t","e"]

// Array
const arr2 = [...arr, "a", "b", "c"]; // ["l", "a", "t", "t", "e" ,"a", "b", "c"]

// Object
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { ...obj1, d: 4 }; // { a: 1, b: 2, c: 3, d: 4 }

// 2. rest[나머지] 연산
// Array
const num = [1, 2, 3, 4, 5];
const [one, ...rest] = num; // rest : [2,3,4,5]

// Object
const coffee = { name: "coffee", price: 3000, shot: 2 };
const { price, ...rest1 } = coffee;
console.log(price); // 3000 value
console.log(rest1); // name:"coffee" , shot: 2 }
