// 1. 태어난 년도를 prompt로 물어보고 만 나이 alert 로 출력하기
const year = parseInt(window.prompt("태어난 년도"));
const old = 2024 - year;
window.alert(`당신의 나이는 ${old}살 입니다`);

// 2. 한 변의 길이를 입력 받아 정사각형의 넓이를 출력
const length = parseInt(window.prompt("한 변의 길이를 입력하세요"));
const square = length * length;
// const square = length ** 2;
window.alert(`정사각형 넓이는 ${square} 입니다.`);

// 3. 원화를 입력하면 현재 엔화를 출력
const won = parseInt(window.prompt("원화를 입력하세요"));
const jpy = 0.12 * won;
window.alert(`환율가는 ${jpy}엔 입니다.`);
