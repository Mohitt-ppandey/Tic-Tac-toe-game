let btns = document.querySelectorAll(".btn");
let msgContainer = document.querySelector(".msg-container");
let newBtn = document.getElementsByClassName("new-btn");
let winMsg = document.getElementById("win-msg");
let newGame = document.querySelector(".new-btn");

// let turnX = document.getElementById("p-1").value; 
// let turnO = document.getElementById("p-2").value; 
// let play = turnX;

let turnX = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


btns.forEach((btn) => {
    btn.addEventListener("click" , () => {
        if(turnX){
            btn.innerHTML = "X";
            btn.style.color = "#e11313ff"
            turnX = false;
        }else{
            btn.innerHTML = "O";
            btn.style.color = "#1a34daff"
            turnX = true
        }
        btn.disabled = true;
         checkWinner();
    });
});


const winner = (person) =>{
   winMsg.innerHTML = `Congratulation , The Winner is ${person}`;
   winMsg.style.color = "#d040cbff";
   msgContainer.classList.remove("hide");
   disable()
}


const disable = () => {
    for (const btn of btns) {
        btn.disabled = true;
    }
}

const enableBtn = () => {
    for (const btn of btns) {
        btn.disabled = false;
        btn.innerHTML = "";
    }
}

const reset = () => {
    turnX = true;
    enableBtn();
    msgContainer.classList.add("hide");
}

const checkTie = () => {
     let isFull = true;
     btns.forEach(btn => {
        if(btn.textContent === ""){
            isFull = false;
        }
     });
     if(isFull && !winner()){
        winMsg.innerHTML = `It's a Tie⚖️`
     }
}

const checkWinner = () => {
    let hasWinner = false;
    for (const patter of winPatterns) {
        let pos1Val = btns[patter[0]].innerText;
        let pos2Val = btns[patter[1]].innerText;
        let pos3Val = btns[patter[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                winner(pos1Val);
                hasWinner = true;
                break;
            }
        }
    }
    if(!hasWinner){
        checkTie();
    }
}


newGame.addEventListener("click" , reset);