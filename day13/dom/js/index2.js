// quiz 2번
// color : #1abx9c, #16a085, #f1c40f, #f39c12
const container = document.createElement("div");
container.style.display = "flex";
container.style.flexDirection = "column";

["#1abc9c", "#16a085", "#f1c40f", "#f39c12"].forEach((x) => {
  const box = document.createElement("div");
  box.style.width = "150px";
  box.style.height = "100px";
  box.style.backgroundColor = x;
  container.appendChild(box); // appendChild 자식태그로 넣는 함수
});

document.body.appendChild(container);
