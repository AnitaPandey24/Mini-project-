let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-button");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newGame = document.querySelector("#btn");
let turn0 = true;
const winPattern =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,7],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];
boxes.forEach((box)=>{
    box.addEventListener("click", () => {
   
        if(turn0){
            //player0
            box.innerText = "O";
            turn0 = false ;

        }
        else{
            //player X
box.innerText = "X";
turn0 = true;
        }
        box.disabled = true;
     checkwinner ();
    });
        
     });
const disableBoxes =() =>{
    for (let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes =() =>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText ="";
    }
};


const showWinner = (winner ) =>{
    msg.innerText= "CONGRATULATION , Winner is ${winner}";
    msgcontainer.classList.remove("hide");
    disableBoxes();
}
const checkwinner = () => {
    for (let pattern of winPattern){
      let pos1val = boxes[pattern[0]].innerText;
      let pos2val = boxes[pattern[1]].innerText;
      let pos3val = boxes[pattern[2]].innerText;
    
    if(pos1val !="" && pos2val !="" &&pos3val !=""){
        if(pos1val===pos2val&&pos2val===pos3val){
            console.log("WINNER" , pos1val);
        showWinner(pos1val);
        }
    }
    }

};
const resetGame = () =>{
turn0 = true;
enableBoxes();
msgcontainer.classList.add("hide");
}

newGame.addEventListener("click" ,resetGame );
btn.addEventListener("click" , resetGame);