let cellContainer = document.getElementById("grid");
let startBtn = document.getElementById("start");
let gridWidth = 49;


function difficultySelect(change) {

    let selectElement = document.getElementById("difficultySelect");
    selectElement = change.target;
    var value = selectElement.value;
    gridWidth = value;
    return gridWidth;
}

startBtn.addEventListener("click", function () {

    for (let i = 1; i <= gridWidth; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");

        if (gridWidth == 49) {
            cell.classList.add("easyCell");
        }

        if (gridWidth == 81) {
            cell.classList.add("mediumCell");
        }

        if (gridWidth == 100) {
            cell.classList.add("hardCell");
        }
        
        cell.append(i);

        cell.addEventListener("click", function (){
            this.classList.toggle("bckgBlue");
        })

        cellContainer.appendChild(cell);
    }
})



