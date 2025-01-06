let gamebox= document.querySelectorAll(".btn");
let reset= document.querySelector(".reset");
let newgame= document.querySelector("#new-game")
let msgBox= document.querySelector(".msg-box")
let msg= document.querySelector(".msg")
let turnX= true; //track the turn of the player

const winningpattern=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]];

const resetGame=()=>{
    turnX=true;
    enableBoxes();
    msgBox.classList.add("hide");
  };

gamebox.forEach((btn) => {
    btn.addEventListener("click", ()=>{
        if(turnX){
            btn.innerHTML="X";
            turnX=false;
        }else{
            btn.innerHTML="O";
            turnX=true;
        }
        btn.disabled=true;
        mywinner();
    });
});

const disableBoxes=()=>{
    for(let btn of gamebox){
        btn.disabled=true;
    }
};

const enableBoxes=()=>{
    for(let btn of gamebox){
        btn.disabled=false;
        btn.innerHTML="";
    }
};

const showwinner = (winner) => {            //TO show the winner of the game
    msg.innerText =`Congratulations, Winner is ${winner}`;
    msgBox.classList.remove("hide");
    disableBoxes();
};

// const drawChecker =()=>{
//     msg.innerText=`Game Draw, Play Again`;
//     msgBox.classList.remove("hide");
//     disableBoxes();
// };

const mywinner=()=> {
    for( let pattern of winningpattern){
        let firstposval= gamebox[pattern[0]].innerHTML;
        let secondposval= gamebox[pattern[1]].innerHTML;
        let thirdposval= gamebox[pattern[2]].innerHTML;

        if(firstposval !="" && secondposval !="" && thirdposval !=""){
            if(firstposval===secondposval && secondposval===thirdposval){
                showwinner(firstposval);
            }     
        }
    }
};

newgame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);