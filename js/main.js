let cellContainer = document.getElementById("grid");
let startBtn = document.getElementById("start");


function difficultySelect(event) {

    let selectElement = document.getElementById("difficultySelect");
    selectElement = event.target;
    var value = selectElement.value;
    return value;
}

startBtn.addEventListener("click", function () {

    for (let i = 1; i <= 64; i++) {
        const cell = document.createElement("div");
        cell.classList.add("easyCell");
        cell.append(i);

        cell.addEventListener("click", function (){
            this.classList.toggle("bckgBlue");
        })

        cellContainer.appendChild(cell);
    }
})



