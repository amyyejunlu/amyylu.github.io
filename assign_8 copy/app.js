var modalClose = document.getElementById('notmodal')
var btn = document.getElementById('startbutton');
var i = 0;


function choosebkgdX(){
    document.getElementById('chooseX').style.backgroundColor =  "#018786"; 
    document.getElementById('chooseO').style.backgroundColor =  "none"; 
    document.getElementById('chooseX').style.border="1px solid #018786";
    startGame();
}


function choosebkgdO(){
    document.getElementById('chooseX').style.backgroundColor =  "none"; 
    document.getElementById('chooseO').style.backgroundColor =  "#7F47C2"; 
    document.getElementById('chooseO').style.border="1px solid #7F47C2";
}

// const xoro = document.getElementById("chooseX img");
// xoro.forEach(img => img.addEventListener('click', closePopup()));
document.getElementById('startbutton').addEventListener('click', closePopup);
var modalOpen = document.getElementById('modalpop');

function closePopup() {
    if (document.getElementById('chooseX').style.backgroundColor =  "#018786") {
        modalOpen.style.display = 'none';  
        document.getElementById('startbutton').style.backgroundColor =  "black";   
        console.log('close')
        // modalOpen.style.display = "none";
    }
   
 }


// // close popup
// btn.onclick = function () {
//     modalOpen.style.display = 'none';    
// }
 
// //this is to change background
// const bkgd = document.getElementById('chooseX');
// console.log(bkgd);
// bkgd.forEach(img => img.addEventListener('click', bkgdClick));

// function bkgdClick() {
//     if (bkgd.clicked == true) {
//         document.getElementById('chooseX').style.backgroundColor =  "#018786"; 
//         console.log("true");
//     } else {
//         return 
//     }
// }

//play game
// var x = document.createElement("x");
//  x.src= "boardx.png";

// var o = document.createElement('o');
// o.src = "images/boardo.png";

function startGame(){
    document.turn="x";
}

function nextMove(square) {
     square.innerText = document.turn;
     switchTurn();
     }

function switchTurn(){
    if (document.turn == 'x') {     
      document.turn = 'o';
  } else {
    document.turn = "x";
  }
}


function checkRow(a, b, c, move){

}

function getBox(number){
    return document.getElementById('s' + number).innerText;
}
