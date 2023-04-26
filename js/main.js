let cellContainer = document.getElementById("grid");
let startBtn = document.getElementById("start");

startBtn.addEventListener("click", function () {

    for (let i = 0; i < 64; i++) {
        const cell = document.createElement("div");
        cell.classlist.add("cell");
        cellContainer.appendChild(cell);
    }
})

