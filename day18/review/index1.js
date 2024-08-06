// 그림판 색깔 만들기

// 자주 사용하는 색 1, 2 tag 생성
const mostPick = document.createElement("div");
mostPick.className = "mostPick";
document.body.appendChild(mostPick);

// 랜덤 색 지정
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  const color = "#";
  for (let i = 0; i < 6; i++) {
    color + letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// 그림판 색 목록 저장 container 생성
const container = document.createElement("div");
container.className = "container";

ten.forEach((x) => {
  const c = document.createElement("div");
  c.className = "colorPick";
  c.addEventListener("click", (v) => {
    mostPick.style.backgroundColor = v;
  });
  container.appendChild(c);
  document.body.appendChild(container);
});

const up = document.createElement("button");
const down = document.createElement("button");

up.innerText = `+`;
down.innerText = `-`;

up.addEventListener("click", () => {
  mostPick.style.width = parseInt(mostPick.style.width - 10) + "px";
  mostPick.style.height = parseInt(mostPick.style.height - 10) + "px";
});
down.addEventListener("click", () => {
  mostPick.style.width = parseInt(mostPick.style.width - 10) + "px";
  mostPick.style.height = parseInt(mostPick.style.height - 10) + "px";
});

document.body.appendChild(up);
document.body.appendChild(down);
