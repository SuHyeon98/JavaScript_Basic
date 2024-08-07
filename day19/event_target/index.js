const idInput = document.createElement("input");

idInput.addEventListener("input", () => {
  console.log(idInput.value); // console에 찍히게 함
  idInput.value.length >= 10
    ? (idInput.style.color = "red")
    : (idInput.style.color = "black");
  //   idInput.style.color = idInput.value.length >= 10 ? "red" : "black";
});

document.body.appendChild(idInput);
