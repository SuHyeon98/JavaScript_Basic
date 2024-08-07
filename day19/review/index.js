// box 생성
const box = document.createElement("div");

// button 3개
const Btn = document.createElement("button");
const backgroundBtn = document.createElement("button");
const radiusBtn = document.createElement("button");

// className 지정
box.className = "box";

// width: 100px , height : 100px box
box.style.width = "100px";
box.style.height = "100px";

// text 명 지정
Btn.innerText = "plus";
backgroundBtn.innerText = "white";
backgroundBtn.innerText = "black";
radiusBtn.innerText = "angle";

// if문을 활용해 innerText 를 기준으로 해서 event 를 지정할 수 있음
// 크게 작게 -> 100px 기준
Btn.addEventListener("click", () => {
  if (Btn.innerText == "plus") {
    box.style.width = parseInt(box.style.width) + 100 + "px";
    box.style.height = parseInt(box.style.height) + 100 + "px";
    Btn.innerText = "minus";
  } else {
    box.style.width = parseInt(box.style.width) - 100 + "px";
    box.style.height = parseInt(box.style.height) - 100 + "px";
    Btn.innerText = "plus";
  }
});

// backgroundColor 배경색 : 검은색 -> 흰색
backgroundBtn.addEventListener("click", () => {
  if (backgroundBtn.innerText == "black") {
    box.style.backgroundColor = "white";
    backgroundBtn.innerText = "white";
  } else {
    box.style.backgroundColor = "black";
    backgroundBtn.innerText = "black";
  }
});

// borderRadius 테두리 : 둥글게 -> 직각
radiusBtn.addEventListener("click", () => {
  if (radiusBtn.innerText == "angle") {
    box.style.borderRadius = "0";
    radiusBtn.innerText = "radius";
  } else {
    box.style.borderRadius = "50%";
    radiusBtn.innerText = "angle";
  }
});

// document
document.body.appendChild(box);
document.body.appendChild(Btn);
document.body.appendChild(backgroundBtn);
document.body.appendChild(radiusBtn);
