// 1번
const base = Number(window.prompt('밑변'));
const height = Number(window.prompt('높이'));
const area = (base * height) / 2;
window.alert(`정삼각형의 넓이는 ${area} 입니다.`);
// window.alert(`정삼각형의 넓이는 ${base * height * 0.5} 입니다.`);

// 2번
const num = Number(window.prompt('정수 입력'));
window.alert(num > 0 ? '양수' : '0 또는 음수');

// 3번
const number = Number(window.prompt('정수 입력'));

const tenThousand = parseInt(number / 10000);
const thousand = parseInt((number % 10000) / 1000);
const hundred = parseInt((number % 1000) / 100);
const ten = parseInt((number % 100) / 10);
const one = parseInt(number % 10);

window.alert(`${tenThousand}만 ${thousand}천 ${hundred}백 ${ten}십 ${one}`);

// 4번
const num1 = Number(window.prompt('정수 입력'));
const hund = parseInt((num1 % 1000) - (num1 % 100));
// const hund = parseInt((num1 % 1000) * 100);
window.alert(`${hund}`);
