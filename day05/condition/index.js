// 제어문[control statement] - 조건문
const num = Number(prompt("숫자 입력"));

if (num % 2) {
  // 1은 trushy 이기 때문에 true로써 생략 가능, 0은 falshy이기 때문에 넣어야 함
  alert(`${num}은 홀수입니다.`);
} else {
  alert(`${num}은 짝수입니다.`);
}

// quiz
// // 1번
if (num > 0) {
  alert(`${num}은 양수입니다.`);
} else {
  alert(`${num}은 양수가 아닙니다.`);
}

// 2번
const from = ["마포", "강남", "신사", "압구정", "신촌", "노원", "화곡", "화양"];
const where = prompt("어디삼?");

if (from.includes(where)) {
  alert(`사는 곳이 서울이군요!`);
} else if (where == "인천") {
  alert(`인천 사람이군요!`);
} else {
  alert(`촌사람이군요!`);
}

// 3번
// 코드는 기억하는 것이 아니라 기록하는 것!!

const positive = num > 0;
const negative = num < 0;
const odd = num % 2;
const even = !(num % 2);

if (num > 0 && num % 2) {
  alert("양의 홀수");
} else if (num > 0 && num % 2 == 0) {
  // num % 2 == 0 === !(num % 2) => 나머지 0 / 짝수
  alert("양의 짝수");
} else if (num < 0 && num % 2) {
  alert("음의 홀수");
} else if (num < 0 && !(num % 2)) {
  alert("음의 짝수");
} else {
  alert("0입니다!");
}

// 4번
const score = Number(prompt("영어 점수"));
const perfect = score === 100;
const a = score >= 90;
const b = score < 90 && score >= 80;
const c = score < 80 && score >= 70;

if (perfect) {
  alert("만점입니다! 😊");
} else if (a) {
  alert("A 입니다");
} else if (b) {
  alert("B 입니다");
} else if (c) {
  alert("C 입니다");
} else {
  alert("그 외 F 입니다 😁");
}

// 5번
// 0도 : x , 0~90사이 : 예각, 90도 : 직각, 90~180사이 : 둔각, 180도 : 평각
const angle = Number(prompt("각도"));
const acute = angle > 0 && angle < 90;
const right = angle === 90;
const obtuse = angle > 90 && angle < 180;
const straight = angle === 180;

if (straight) {
  alert("평각");
} else if (obtuse) {
  alert("둔각");
} else if (right) {
  alert("직각");
} else if (acute) {
  alert("예각");
} else {
  alert("x");
}

// 6번
const height = Number(prompt("키")); // m 값
const weight = Number(prompt("몸무게"));
const bmi = weight / height ** 2;

// const bmi = Number(prompt("몸무게")) / Number(prompt("키")) ** 2;

if (bmi > 25) {
  alert("비만");
} else if (bmi <= 25 && bmi > 23) {
  alert("과체중");
} else if (bmi <= 23 && bmi > 18.5) {
  alert("정상");
} else if (bmi <= 18.5 && bmi > 0) {
  alert("저체중");
} else {
  alert("측정오류");
}
