// input, button, span tag 생성
const id = document.createElement("input");
const login = document.createElement("button");
const idLength = document.createElement("span"); // 0

// input tag 길이가 변하면 idLength value가 변경 조건이 맞으면 login

login.innerText = "중복확인";
idLength.innerText = `0 / 20`;

login.style.margin = "0 5px";
login.style.borderRadius = "10px";
idLength.style.marginLeft = "0 5px";
idLength.style.color = "gray";

id.addEventListener("input", (e) => {
  idLength.innerText = `${e.target.value.length} / 20`;
  if (e.target.value.length >= 8 && e.target.value.length <= 20) {
    idLength.style.color = "yellowGreen";
    login.style.color = "white";
    login.style.backgroundColor = "black";
    login.style.border = "1px solid white";
  } else if (e.target.value.length > 20) {
    idLength.innerText = `20 / 20`;
  } else {
    idLength.style.color = "gray";
    login.style.color = "black";
    login.style.border = "1px solid black";
    login.style.backgroundColor = "white";
  }
});

document.body.appendChild(id);
document.body.appendChild(login);
document.body.appendChild(idLength);
