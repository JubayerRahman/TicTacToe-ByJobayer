let clickSound = new Audio("ting.mp3");
let turn = "X";
let gameover = false;

//turn function
const Changeturn = () => {
    return turn === "X"? "0": "X"
} 

// win function
const winFunction =()=>{
    let boxText = document.getElementsByClassName("boxText");
    let winPossibility =[
        [0,1,2],
        [0,3,6],
        [3,4,5],
        [1,4,7],
        [6,7,8],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    winPossibility.forEach(e =>{
        console.log("win Function Called")
        if( (boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== "")){
            document.getElementById("turnInfo").innerText = boxText[e[0]].innerText + " Wins"
            gameover = true;
            let VictoryAudio = new Audio('victorySound.mp3');
            VictoryAudio.play();
            document.getElementById("winTitle").innerHTML = boxText[e[0]].innerText +" Wins";
            document.getElementById('dance').style.width ="300px";
            document.getElementById('winTitle').style.width ="200px";
            document.getElementById('reloadDialoag').innerText = "Reset to start a now game"
            boxText[e[0]].style.color="#1ED760";
            boxText[e[1]].style.color="#1ED760";
            boxText[e[2]].style.color="#1ED760";
        }
    })
}

let box = document.getElementsByClassName("box");
Array.from(box).forEach(element=>{
    let boxText = element.querySelector(".boxText");
    element.addEventListener('click',()=>{
        if(boxText.innerText === ""){
        boxText.innerText = turn;
        turn = Changeturn();
        clickSound.currentTime =0;
        clickSound.play();
        winFunction();
        if(!gameover){
            document.getElementsByClassName("turnInfo")[0].innerText =" Turn for " + turn;
        }
        }
    })
})

//reset button

document.getElementById("reset").addEventListener("click", ()=>{
    location.reload();
})
