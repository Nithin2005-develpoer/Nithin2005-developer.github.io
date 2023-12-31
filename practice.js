let myscore=document.querySelector("#score1");
let compscore=document.querySelector("#score2");
let move=document.querySelector("#move");
let score1=0;
let score2=0;
let choices=document.querySelectorAll(".choice");
const generatecompid=()=>{
    let options=["rockimg","scissorimg","paperimg"];
    let p=Math.floor(Math.random()*3);
    return options[p];
}
const playgame=(choiceid)=>{
    let x=choiceid;
    let y=generatecompid();
    console.log(x);
    console.log(y);
    if(x==y){
        move.innerHTML="Match Was Draw";
    }
    else if(x=="rockimg" && y=="paperimg"){
        move.innerHTML="You Lost!!!Paper Beats Rock";
        compscore.innerHTML=++score2;
    }
    else if(y=="rockimg" && x=="paperimg"){
        move.innerHTML="You Won!!!Paper Beats Rock";
        myscore.innerHTML=++score1;
    }
    else if(x=="rockimg" && y=="scissorimg"){
        move.innerHTML="You Won!!!Rock Beats Scissor";
        myscore.innerHTML=++score1;
    }
    else if(y=="rockimg" && x=="scissorimg"){
        move.innerHTML="You Lost!!!Rock Beats Scissor";
        compscore.innerHTML=++score2;
    }
    else if(x=="scissorimg" && y=="paperimg"){
        move.innerHTML="You Won!!!Scissor Beats Rock";
        myscore.innerHTML=++score1;
    }
    else if(y=="scissorimg" && x=="paperimg"){
        move.innerHTML="You Lost!!!Scissor Beats Rock";
        compscore.innerHTML=++score2;
    }

}
choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
    let choiceid=choice.getAttribute("id");
    playgame(choiceid);
    });
});