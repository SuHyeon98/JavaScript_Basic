const data = {
  name: "John",
  age: 27,
  hobby: ["Music", "YouTube", "Game"],
};

const template = `
    <h3>${data.name}</h3>
    <span>${data.age}</span>
    <ul>${data.hobby.map((v) => `<li>${v}</li>`).join("")}</ul>
`;
// Object 안에서 hobby가 array 이기에 map 함수를 이용해 <li>${v}</li> 로 정의 가능

const div = document.createElement("div");
document.body.appendChild(template);

div.insertAdjacentHTML("afterend", template);
