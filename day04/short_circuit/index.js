// short_circuit [단축 평가]
// &&(and) : 모두 참이어야 참
// ||(or) : 하나라도 참이면 참
// truthy & falsy["", 0, -0, null, undefined, []]

// or
const a = true || "마라탕";
const b = false || "탕후루";

const userName = window.prompt("손님 이름");
const name = userName || "Guest";
console.log(`${name}님이 들어왔습니다.`);

// and
const c = true && "제로콜라"; // 제로콜라
const d = false && "제로펩시"; // false

const isLoggin = window.prompt("비밀번호 입력") === "1234";
isLoggin && window.alert("로그인 성공");
