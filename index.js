const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let options = ["", "", "", "", "", "", "", "", ""];
console.log[options];
let currentPlayer = "X";
let running = false;



initializeGame();

function initializeGame(){
    
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    restartBtn.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer}'s turn`;
    running= true;
}


function cellClicked(check){
    const id= this.getAttribute("cellIndex");

    if(options[id]=== "" &&running){
        options[id] = currentPlayer;
        check.target.innerText= currentPlayer;
        currentPlayer = currentPlayer == "X" ? "O" : "X";
        statusText.textContent = `${currentPlayer}'s turn`;
        winner();
    }
   
}

function winner(){
    let roundWon= false;
    for (const condition of winConditions) {
        let [a, b, c] = condition
        if (options[a]== "" || options[b]== ""|| options[c]== ""){
            continue;
        }
        if(options[a] && (options[a] == options[b] && options[a] == options[c])) {
        roundWon = true;
           break;
        }
    }
    if(roundWon){
        currentPlayer = currentPlayer == "O" ? "X" : "O";
        statusText.textContent = `${currentPlayer} win!`;
        running = false;
    }
    else if(!options.includes("")){
        statusText.textContent = `Draw!`;
        running = false;
    }
    
}



function restartGame(){
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
}