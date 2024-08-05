import { trainers } from "./export.js";

const container = document.createElement("seection");
container.style.display = "grid";
container.style.gridAutoColumns = "repeat(2,1fr)";
container.style.gap = "10px";

trainers.forEach((x) => {
  const tag = `
        <div class = "trainer">
            <div class = "imageBox">
                <img src = "${x.profileImage}" alt="">
            </div>
            <div class = "info">
                <div class = "title">
                    <span class = "name">${x.name}</span>
                    <span class = "position">${x.position}</span>
                    <span class = "location">${x.gymName}</span>
                </div>
            </div>
            <div class = "address">
                <span>${x.gymAddress}</span>
            </div>
            <div class = "type"></div>
        </div>
    `;
  container.insertAdjacentHTML("beforeend", tag);
});

document.body.appendChild(container);
