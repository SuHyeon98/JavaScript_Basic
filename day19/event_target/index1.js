// e : 해당 tag에 일어날 수 있는 모든 event를 보여주는 것
// target : 해당 event 를 발생시키는 tag , object로 이루어져 있음
// 그래서 target을 적으면 해당 tag가 출력되는 것

// const button = document.createElement("button");
// button.innerText = "우웩";
// button.addEventListener("click", (e) => {
//   console.log(e.target.innerText);
// });
// document.body.appendChild(button);

const idInput = document.createElement("input");
idInput.addEventListener("input", (e) => {
  console.log(e.target.style.color); // black이면 black, red면 red 출력
  console.log(e.target.value); // value값 출력
  e.target.style.color = e.target.value.length >= 10 ? "red" : "black";
});
document.body.appendChild(idInput);

const inputBox = document.createElement("input");
inputBox.addEventListener("input", (e) => {
  e.target.value =
    e.target.value.length > 10 ? e.target.value.slice(0, 10) : e.target.value;
});
document.body.appendChild(inputBox);
