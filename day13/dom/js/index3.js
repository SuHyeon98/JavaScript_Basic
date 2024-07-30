// 1. container 직접 만들어서 넣는것 document.createElement() -> appendChild()
// 2. 만들어진 container를 가져와서 넣기
const container = document.querySelector(".container");

// Math.random() 으로 색깔 200개 만들기
const hex = [..."123456789abcdef"];
getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

// 헥사코드 만들기
const makeColor = () =>
  "#" +
  Array(6)
    .fill()
    .map((v) => hex[getRandomInt(0, hex.length)])
    .join("");

// 200개 배열의 컬러함수 채우기
const colors = Array(200)
  .fill()
  .map((v) => makeColor());

// 200개 배열을 순회해 div 만들고 색 채워 컨테이너에 넣기
colors.forEach((v) => {
  const div = document.createElement("div");
  div.className = "box";
  div.style.backgroundColor = v;
  container.appendChild(div);
});
