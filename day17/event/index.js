// 1. javascript에 직접 생성해 추가하는 방법
// const button = document.createElement("button");
// button.innerText = "럭키비키😀";
// button.addEventListener("click", () => {
//   alert("비키비키!");
// });
// document.body.appendChild(button);

// 빨간, 노랑, 초록 버튼 생성

// const msg = document.createElement("button");
// msg.innerText = "아무것도 안누름";
// document.body.appendChild(msg);

// const makeBtn = (color) => {
//   const button = document.createElement("button");
//   button.innerText = `${color}버튼`;
//   button.addEventListener("click", () => {
//     msg.innerText = `${color} 버튼 누름`;
//   });
//   document.body.appendChild(button);
// };

// ["red", "yellow", "green"].forEach((v) => makeBtn(v));

// quiz. - 0 + 상태로 눌렀을 때 숫자가 변하는 코드 작성

const up = document.createElement("button");
up.innerText = `+`;
up.addEventListener("click", () => {
  num.innerText = Number(num.innerText) + 1;
  num.innerText == 10 ? (num.style.color = "red") : num;
  num.innerText > 10 ? (num.innerText = Number(num.innerText) - 1) : num;
});

// up.addEventListener("click", () => {
//   num.innerText === 10 ? 10 : Number(num.innerText) + 1;
//   num.style.color = Number(num.innerText) === 10 ? "red" : "black";
// });

const num = document.createElement("span");
num.innerText = "0";
num.style.padding = "5px";

const down = document.createElement("button");
down.innerText = `-`;
down.addEventListener("click", () => {
  num.innerText = Number(num.innerText) - 1;
  num.innerText < 10 ? (num.style.color = "black") : num;
  num.innerText < 0 ? (num.innerText = Number(num.innerText) + 1) : num;
});

// down.addEventListener("click", () => {
//   num.innerText === 0 ? 0 : Number(num.innerText) - 1;
//   num.style.color = "black";
// });

document.body.appendChild(up);
document.body.appendChild(num);
document.body.appendChild(down);

// 0 밑으로 안됨 10 초과 안됨 10이면 빨간색 폰트
