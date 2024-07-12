// 문자 -> 숫자로 변환
// 1. Number("문자")
const num = Number("100");

const num1 = Number(window.prompt("첫 번째 숫자를 입력하세요"));
const num2 = Number(window.prompt("두 번째 숫자를 입력하세요"));

const result = window.alert(`두 수의 합은 ${num1 + num2} 입니다`);

// const num1 = window.prompt("첫 번째 숫자를 입력하세요");
// const num2 = window.prompt("두 번째 숫자를 입력하세요");
// const sum = Number(num1) + Number(num2);
// const result = window.alert(`두 수의 합은 ${sum} 입니다`);

// 2. parseInt("문자")
// parse[해석하다] + Int[정수] = 정수로 해석하다
// 사회에서 사용하는 단위들을 표시할 때도 정수로 해석
const num3 = parseInt("100");

// 3. + / 단항 연산에 한에
const num4 = +"100";

// 숫자 -> 문자로 변환
// 1. String(숫자)
const str = String(100); // 문자 100

// 2. "" + anyType
const str1 = 100 + ""; // 문자 100

// boolean type : true or false
const bool = true; // boolean
const bool1 = false; // boolean
const bool2 = "true"; // String
const bool3 = "false"; // String

// trthy value : 아래 제외 나머지
// falsy value : "", 0, -0, null, undefined
const i = Boolean(""); // false

// NULL type : 값이 없음
// Undefined type : 정의되지 않음
