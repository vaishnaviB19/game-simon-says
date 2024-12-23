let gameseq=[];
let userseq=[];
let level=0;
let start=false;
let btns=["yellow","red","purple","green"];
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
      if (start==false) {
        console.log('game started');
        start=true;
        levelUp();
      }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function levelUp() {
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random() *3);
    let randomColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randomColor}`);
    gameseq.push(randomColor);
    console.log(gameseq);
    btnFlash(randbtn);
}

function checkAns(idx) {
   if (userseq[idx]===gameseq[idx]) {
    if (userseq.length==gameseq.length) {
        setTimeout(levelUp,500);
    }
   }else{
    h2.innerHTML=`Game Over!<b>Your Score${level}</b> press any key to start`;
    reset();
   }
}
function btnPress(){
   let btn=this;
   btnFlash(btn);

   userColor=btn.getAttribute("id");
   console.log(userColor);
   userseq.push(userColor);
   checkAns(userseq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset() {
    start=false;
    level=0;
    userseq=[];
    gameseq=[];
}