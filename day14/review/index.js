// container 만들기
const container = document.createElement("section");

// 유저에게 box 갯수
const num = Number(prompt("box 갯수"));

// width, heigth
const [width, height] = prompt("넓이 높이").split(" ");

// backgroundColor
const backgroundColor = prompt("배경색");

// grid repeat(4, 1fr)
const column = prompt("그리드 컬럼 몇개?");

// gap 물어보기
const gap = prompt("gap 몇 개?");

container.style.display = "grid";
container.style.gridTemplateColumns = `repeat(${Number(column)}, 1fr)`;
container.style.gap = gap + "px";

const number = Array(num)
  .fill()
  .forEach((x) => {
    const div = document.createElement("div");
    div.style.width = width + "px";
    div.style.height = height + "px";
    div.style.backgroundColor = backgroundColor;
    container.appendChild(div);
  });

document.body.appendChild(container);
