let boxes = document.querySelectorAll(".box");
let  resetbtn = document.querySelector("#reset");
let  newGameBtn= document.querySelector("#new");
let  msgContainer= document.querySelector(".msg");
let  msgparagraph= document.querySelector("#para");
let  msgdraw= document.querySelector(".d");

let turnO = true;
let count = 0;

const winpatterns = [

    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText = " O ";
            turnO= false;
            box.style.color = "white";
        }
        else{
            box.innerText = " X ";
            turnO= true;
            box.style.color = "black";  
        }
        box.disabled = true;
        checkwinner();
    })
})

const disableBosex =()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBosex =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const matchDraw =()=>{
        msgparagraph.innerText="Match Draw , Please Try Again";
        msgContainer.classList.remove("hide");
        disableBosex();
    }
const showWinner=(winner)=>{
    msgparagraph.innerText=`Congratulation , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBosex();
    
}

const checkwinner = ()=>{
    for(pattern of winpatterns){
          let pos1val = boxes[pattern[0]].innerText;
          let pos2val = boxes[pattern[1]].innerText;
          let pos3val = boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val&&pos2val===pos3val){
                showWinner(pos1val);
                
            }
        }
    }
    if (count === 9) {
        matchDraw()
    }
};

const resetGame=()=>{
    turnO =true;
enableBosex();
msgContainer.classList.add("hide");
}

newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);