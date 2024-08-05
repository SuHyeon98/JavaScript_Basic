// 유저에게 품목과 가격을 입력 받고
const [item, price] = prompt("품목, 가격").split(" ");

// 장바구비 프로그램 만들기

const up = document.createElement("button");
const num = document.createElement("span");
const down = document.createElement("button");
const buy = document.createElement("button");

up.innerText = `+`;
num.innerText = "0";
num.style.padding = "5px";
down.innerText = `-`;

up.addEventListener("click", () => {
  num.innerText = Number(num.innerText) + 1;
  num.innerText > 10 ? (num.innerText = Number(num.innerText) - 1) : num;
});

down.addEventListener("click", () => {
  num.innerText = Number(num.innerText) - 1;
  num.innerText < 0 ? (num.innerText = Number(num.innerText) + 1) : num;
});

buy.innerText = "구매하기";
buy.addEventListener("click", () => {
  alert(
    ` ${item} ${num.innerText}개 가격은 : ${
      Number(num.innerText) * Number(price)
    }원`
  );
});

document.body.appendChild(up);
document.body.appendChild(num);
document.body.appendChild(down);
document.body.appendChild(buy);
