// 유저에게 3개의 품목과 3개의 가격을 입력 받고
const [i1, i2, i3, p1, p2, p3] = prompt("품목 수량").split(" ");

// 수량에 따라서 총 가격이 바뀌는 프로그램 만들기

const makeItem = (name, price) => {
  const itemName = document.createElement("span");
  const itemPrice = document.createElement("span");
  const up = document.createElement("button");
  const num = document.createElement("span");
  const down = document.createElement("button");
  const buy = document.createElement("button");

  itemName.innerText = name;
  itemPrice.innerText = price;
  up.innerText = `+`;
  num.innerText = "0";
  down.innerText = `-`;

  buy.style.margin = "0 5px";

  up.addEventListener("click", () => {
    num.innerText = Number(num.innerText) + 1;
    total.innerText = Number(total.innerText) + Number(itemPrice.innerText);
  });
  down.addEventListener("click", () => {
    const quantity = Number(num.innerText);
    if (quantity === 0) {
      num.innerText = "0";
    } else {
      num.innerText = Number(num.innerText) - 1;
      total.innerText = Number(total.innerText) - Number(itemPrice.innerText);
    }
  });
  buy.innerText = "구매하기";
  buy.addEventListener("click", () => {
    alert(
      ` ${itemName.innerText} ${num.innerText}개 가격은 : ${
        Number(num.innerText) * Number(itemPrice.innerText)
      }원`
    );
  });
  const box = document.createElement("div");
  box.appendChild(itemName);
  box.appendChild(itemPrice);
  box.appendChild(up);
  box.appendChild(num);
  box.appendChild(down);
  box.appendChild(buy);
  document.body.appendChild(box);
};

makeItem(i1, p1);
makeItem(i2, p2);
makeItem(i3, p3);

const total = document.createElement("span");
total.innerText = "0";
document.body.appendChild(total);
