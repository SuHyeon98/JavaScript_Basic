// 구 문법
const box = document.createElement("div");
box.innerHTML = `
    <button>버튼</button>
    <span>장원영</span>
`;
document.body.appendChild(box);

// 중간 문법
const data = [
  { name: "장원영", logo: "럭키비키" },
  { name: "안유진", logo: "지락실" },
  { name: "레이", logo: "경차" },
];

data.forEach(({ name, logo }) => {
  const box = document.createElement("div");
  box.innerHTML = `
        <div>
            <h1>${name}</h1>
            <p>${logo}</p>
        </div>
    `;
  document.body.appendChild(box);
});

// 신 문법
