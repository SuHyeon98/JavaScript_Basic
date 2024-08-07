// input tag 생성
// 특수문자 !,@,#,* 중 하나라도 들어가면 빨간색

const red = document.createElement("input");
const sign = "! @ # *".split(" ");

red.addEventListener("input", (e) => {
  e.target.style.color = sign.some((v) => e.target.value.includes(v))
    ? "red"
    : "black";
});

document.body.appendChild(red);
