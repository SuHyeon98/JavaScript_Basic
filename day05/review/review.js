// 1번
const word = prompt("영단어").toUpperCase();
console.log(word);
// console.log(prompt("영단어").toUpperCase()); // 기억한 변수가 없어 출력하면 끝

// 2번
const sentence = prompt("영문자").split(" ");
console.log(sentence[1]);

// 3번
coffee = [];
const menu1 = prompt("커피 음료");
const menu2 = prompt("커피 음료");
const menu3 = prompt("커피 음료");
coffee.push(menu1);
coffee.push(menu2);
coffee.push(menu3);
console.log(coffee);

// console.log(prompt("커피 음료").split(" "));
