let cellContainer = document.getElementById("grid");
let startBtn = document.getElementById("start");

startBtn.addEventListener("click", function () {

    for (let i = 1; i <= 64; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.append(i);

        cell.addEventListener("click", function (){
            this.classList.toggle("bckgBlue");
        })

        cellContainer.appendChild(cell);
    }
})

