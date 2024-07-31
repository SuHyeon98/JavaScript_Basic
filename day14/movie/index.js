// 영화 좌석
// A ~ L 15번까지
// A ~ C 까지는
// D ~ F 까지는
const seatBox = document.createElement("section");

seatBox.style.display = "grid";
seatBox.style.gridTemplateColumns = `repeat(10, 1fr)`;

const col = [..."ABCDEFGHIJKL"];
const row = [..."123456789"];
row.push("10");

const seats = col.map((alpha) => row.map((num) => alpha + num));

const [width, height, bg1, bg2, bg3] = prompt(
  "넓이 높이 배경색1, 배경색2 배경색3"
).split(" ");

seats.forEach((arr) =>
  arr.forEach((v) => {
    const box = document.createElement("div");
    box.style.width = width + "px";
    box.style.height = height + "px";
    box.style.display = "flex";
    box.style.textAlign = "center";
    box.style.justifyContent = "center";

    if ([..."ABCD"].some((x) => v.includes(x))) {
      box.style.border = `1px solid ${bg1}`;
    } else if ([..."EFGHI"].some((x) => v.includes(x))) {
      box.style.border = `1px solid ${bg2}`;
    } else {
      box.style.border = `1px solid ${bg3}`;
    }

    box.innerText = v;
    seatBox.appendChild(box);
  })
);

document.body.appendChild(seatBox);
