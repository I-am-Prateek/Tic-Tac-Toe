let gamebox= document.querySelectorAll(".btn");
let restart= document.querySelectorAll(".restart");
let newgame= document.querySelectorAll("#new-game")
let msgBox= document.querySelectorAll(".msg-box")
let msg= document.querySelectorAll("#msg")
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

gamebox.forEach((btn) => {
    btn.addEventListener("click", ()=>{
        console.log("Clicked")
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

const showwinner = (winner) => {
    msg.innerText =`Congratulations, Winner is ${winner}`;
    msgBox.classList.remove("hide");
};
const mywinner=()=> {
    for( let pattern of winningpattern){
        let firstposval= gamebox[pattern[0]].innerHTML;
        let secondposval= gamebox[pattern[1]].innerHTML;
        let thirdposval= gamebox[pattern[2]].innerHTML;

        if(firstposval!="" && secondposval!="" && thirdposval!=""){
            if(firstposval===secondposval && secondposval===thirdposval){
               console.log("winner", firstposval);
               showwinner(firstposval);
            }
        }
    } 
};