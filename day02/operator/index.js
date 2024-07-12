// operator [연산자]
// 연산 : something 을 가공함
// token : +,-,*,/

// 수리 연산 [+,-,*,/]
const a = 1 + 2;
const a1 = 1 - 2;
const a2 = 1 * 3;
const a3 = 3 / 2;
const a4 = 2 ** 2; // 거듭제곱
const a5 = 3 % 2; // 나머지 1

// 문자열 연결 연산
const a6 = 10 + "10"; // 문자 "1010"

// 단항 덧셈 연산
const a7 = +"100"; // 숫자 100

// 단항 뺄셈 연산
const a8 = -1; // 부호 반대 - 음수

// 대입 연산[=, +=, -=, *=, **=, /=, %=]
const b = "Hyeon";
const b1 = 100;
const b2 = 100 + b1; // 200

// 비교 연산[>, >=, <, <=, ==, !=] -> boolean : true or false
const c = 5 > 3; // true
const c1 = 5 >= 6; // false
const c2 = 5 < 6; // true
const c3 = 5 <= 6; // true
const c4 = 4 == 5; // false
const c5 = "아아" != "아메리카노"; // true
const c6 = 7 != 6; // true

const c7 = "1" == 1; // type을 강제 변환해 비교 true
const c8 = "1" === 1; // type의 값이 같은지 비교 false
const c9 = 1 === 1; // true

// 논리 연산[집합 : &&(and), ||(or), !(not)]
const d = 5 > 3 && 5 > 7; // false
const d1 = true && true && true && false; // false
const d2 = 5 > 10 || 5 > 7 || 5 > 3; // true
const d3 = 5 != 1 || 5 > 8 || "아아" !== "아아"; // true
const d4 = !true; // false
const d5 = !(5 > 3 && 5 > 4); // false
const d6 = !!""; // false
const d7 = !!1; // true

// [드모르간 법칙]
const d8 = 5 < 3 || 5 <= 4; // false
const d9 = !(5 > 3 && 5 >= 4); // false

// 삼항 연산[조건 ? 참 : 거짓]
const e = 5 > 3 ? "장원영" : "안유진"; // 참 : 거짓 -> 참
const e1 = 5 > 7 ? "아이유" : "비비"; // 거짓

// typeof 연산
const f = typeof 1; // Number
const f1 = typeof !fasle; // Boolean
