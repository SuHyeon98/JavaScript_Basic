// 기본 : String, Number, boolean, null, undefined
// 참조 타입 : 배열

// 숫자배열 : 15명의 나이 변수를 한번에 담기
const ages = [18, 21, 22, 31, 24, 28];
console.log(ages);
console.log(ages[0]);
console.log(ages[3]);

// 문자배열 : 음식을 한번에 담기
const food = ['피자', '스시', '짜장면', '마라탕', '삼계탕'];
console.log(`오늘은 복날이니 ${food[4]}를 먹자`);

// 배열 안에 배열
const paik = [
  ['아메리카노', '라떼', '바닐라라떼'],
  ['미숫가루', '빽스치노', '레몬에이드'],
];
console.log(`나는 ${paik[0][1]}와 ${paik[1][2]} 마실래`);

// 벼수를 선언한 배열을 변수에 넣을 수도 있음
const coffee = ['메가리카노', '꿀아메리카노', '카라멜 마끼야또'];
const beverage = ['아이스티', '자몽에이드', '체리콕'];
const dessert = ['쿠키', '마카롱', '조각 케이크'];
const megaCoffee = [coffee, beverage, dessert];
console.log(
  `음료는 ${megaCoffee[0][1]} 먹고 디저트는 ${megaCoffee[2][2]} 먹어야지`
);
