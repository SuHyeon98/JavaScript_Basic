// 유저에게 품목과 가격을 입력 받고
const item = prompt("품목, 가격").split(" ");

// 장바구비 프로그램 만들기

const up = document.createElement("button");
up.innerText = `+`;
up.addEventListener("click", () => {
  num.innerText = Number(num.innerText) + 1;
  num.innerText == 10 ? (num.style.color = "red") : num;
  num.innerText > 10 ? (num.innerText = Number(num.innerText) - 1) : num;
});

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

const buy = document.createElement("button");
buy.innerText = "구매하기";
buy.addEventListener("click", () => {
  alert(` ${item[0]}값 : ${Number(num.innerText) * Number(item[1])}원`);
});

document.body.appendChild(up);
document.body.appendChild(num);
document.body.appendChild(down);
document.body.appendChild(buy);
