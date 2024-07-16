// 1번
const ade = prompt("음료 주문");
alert(ade.includes("에이드") ? "에이드 주문" : "음료 주문");

// 2번
const eng = prompt("영단어");
alert(eng.indexOf("e") + 1 || "없음!");

// 3번
const word = prompt("영어 문자");
const spl = word.split(" ");
console.log(spl);

// 4번
const sentence = prompt("영어 문장 입력");
const alphabet = prompt("알파벳 입력");
const num = Number(prompt("숫자 입력"));

const separate = sentence.split(alphabet)[0].repeat(num);
alert(separate);
