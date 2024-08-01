import { makeSeats } from "./function.js";

const airplane = document.createElement("div");
airplane.style.display = "grid";
airplane.style.gridTemplateColumns = "repeat(6,1fr)";
airplane.style.gap = "5px";

const seats = makeSeats();
seats.forEach((v) => {
  const div = document.createElement("div");
  div.style.border = `1px solid ${v.state}`;
  div.innerText = v.col + v.row;
  airplane.appendChild(div);
});

document.body.appendChild(airplane);
