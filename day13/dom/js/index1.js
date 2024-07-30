// const div = document.createElement("div");
// // div.innerText or div.textContent
// div.innerText = "지금 식곤증온당";
// div.style.backgroundColor = "skyblue";
// document.body.appendChild(div);

// quiz 1번
// box 만들기 유저에게 원하는 색깔, 원하는 내용, 높이(height)와 넓이(width) 입력 받고 화면에 그리기
const [backgroundColor, content, height, width] =
  prompt("색깔 내용 높이 넓이").split(" ");
const box = document.createElement("div");
box.style.background = backgroundColor;
box.innerText = content;
box.style.height = height + "px";
box.style.width = width + "px";
document.body.appendChild(box);
