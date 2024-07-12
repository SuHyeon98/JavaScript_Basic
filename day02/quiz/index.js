// 1번
const coffee = window.prompt("어떤 커피 드실래요?");
const s = Number(window.prompt("샷은 어떻게 할까요?"));
const shot = s >= 3 ? "진하게" : "연하게";
window.alert(`${coffee} 커피가 ${shot} 나왔습니다.`);

// 2번
const num = Number(window.prompt("정수를 입력하세요"));
window.alert(num % 2 == 0 ? "짝수" : "홀수");
