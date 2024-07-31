// 축약
const theater = document.createElement("div");
theater.className = "theater";

const seats = [..."ABCDEFGHIJKL"].map((col) =>
  [..."123456789"].map((row) => col + row)
);
seats.push("10");

const seatsLevel = (x) => {
  if ([..."ABCD"].some((v) => x.includes(v))) return `seat front`;
  else if ([..."EFGHI"].some((v) => x.includes(v))) return `seat middle`;
  else return `seat back`;
};

const makeSeat = (x) => {
  const box = document.createElement("div");
  box.className = seatsLevel(x);
  box.innerText = x;
  return box;
};

seats.forEach((col) =>
  col.forEach((row) => theater.appendChild(makeSeat(row)))
);

document.body.appendChild(theater);
