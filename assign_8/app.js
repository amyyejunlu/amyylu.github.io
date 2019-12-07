var modalClose = document.getElementById('notmodal')
var btn = document.getElementById('startbutton');
var i = 0;


function choosebkgdX(){
    document.getElementById('chooseX').style.backgroundColor =  "#018786"; 
    document.getElementById('chooseO').style.backgroundColor =  "none"; 
    document.getElementById('chooseX').style.border="1px solid #018786";
    // for (var i=1; i <= 9; i++) {
    //     clearBox(i);
    // }
    // // document.turn="X";
    // document.turn ='<img src = "images/boardx.png">';
}

function choosebkgdO(){
    document.getElementById('chooseX').style.backgroundColor =  "none"; 
    document.getElementById('chooseO').style.backgroundColor =  "#7F47C2"; 
    document.getElementById('chooseO').style.border="1px solid #7F47C2";
    // for (var i=1; i <= 9; i++) {
    //     clearBox(i);
    // }
    // // document.turn="O";
    // document.turn = '<img src = "images/boardo.png">';
}

// const xoro = document.getElementById("chooseX img");
// xoro.forEach(img => img.addEventListener('click', closePopup()));
document.getElementById('startbutton').addEventListener('click', closePopup);
var modalOpen = document.getElementById('modalpop');
var animateCloseModal = document.getElementById('middleModal')


function closePopup() {
    if (document.getElementById('chooseX').style.backgroundColor =  "#018786") {
    
        document.getElementById('startbutton').style.backgroundColor =  "black";   
        // animateCloseModal.classList.add('animated', 'bounceOutLeft');
        modalOpen.style.display = 'none'; 
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

// function startGame(){
//     for (var i=1; i <= 9; i++) {
//         clearBox(i);
//     }
//     document.turn="x";
// }
document.querySelector("div.detailtoegrid").addEventListener("click", nextMove);
let turn = "X";


function choosebkgdX(){
  for (var i=1; i <= 9; i++) {
    clearBox(i);
  }
  turn ='X';
}

function choosebkgdO(){
  for (var i=1; i <= 9; i++) {
   clearBox(i);
  }
  turn = 'O';
}

function nextMove(event) {
  if (turn==="X") {
    event.target.innerHTML = '<img src = "images/boardx.png">';
  } else {
    event.target.innerHTML = '<img src = "images/boardo.png">';
  }

  switchTurn();
  console.log('running switch')
}

function switchTurn(){
  if(checkForWinner(turn)) {
    console.log('running turn');
    alert("You Won!");
  } else if (turn == 'X') {   
    turn = 'O';
  } else {
    turn = "X";
  }
}

function checkForWinner(turn) {
console.log(turn);
  var result = false;
  if (checkRow(1, 2, 3, turn)|| checkRow(4, 5, 6, turn)||
      checkRow(7, 8, 9, turn)|| checkRow(1, 4, 7, turn)||
      checkRow(2, 5, 8, turn)|| checkRow(3, 6, 9, turn)||
      checkRow(1, 5, 9, turn)|| checkRow(3, 5, 7, turn)) {
    result = true;
  }
  return result;
}

function checkRow(a, b, c, turn){
  var result = false;
  if (getBox(a) == turn && getBox(b) == turn && getBox(c) == turn){
   result = true;
  }
  return result;
}

function getBox(number){
  return document.getElementById('s' + number).innerHTML;
}

function clearBox() {
    for (var i=1; i <= 9; i++) {
      document.getElementById('s' + i).innerHTML = "";
    }
  }
// function nextMove(square) {
//     if (document.turn==="X") {
//     // if (document.turn==='<img src = "images/boardx.png">'){
//         //  square.innerHTML = "X";
//          square.innerHTML = '<img src = "images/boardx.png">';
//      } else {
//         // square.innerHTML = "O";
//         square.innerHTML = '<img src = "images/boardo.png">';
//      } switchTurn();
//     }

// function switchTurn(){
//     if(checkForWinner(document.turn)) {
//         alert("You Won!");
//     } else if (document.turn == 'X') {   
//     // } else if (document.turn == '<images/boardx.png">') {   
//         // document.turn = 'O';
//      document.turn = '<img src = "images/boardo.png">';
//     } else {
//         document.turn = "X";
//     //  document.turn = '<images/boardx.png">';
//   }
// }

// function checkForWinner (move) {
//     var result = false;
//     if (checkRow(1, 2, 3, move)|| 
//         checkRow(4, 5, 6, move)||
//         checkRow(7, 8, 9, move)||
//         checkRow(1, 4, 7, move)||
//         checkRow(2, 5, 8, move)||
//         checkRow(3, 6, 9, move)||
//         checkRow(1, 5, 9, move)||
//         checkRow(3, 5, 7, move)) {
//         result = true;
//     }
//     return result;
// }
// function checkRow(a, b, c, move){
//     var result = false;
//     if (getBox(a) == move && getBox(b) == move && getBox(c) == move){
//         result = true;
//     }
//     return result;
// }

// function getBox(number){
//     return document.getElementById('s' + number).innerHTML;
// }

// function clearBox() {
//     for (var i=1; i <= 9; i++) {
//         document.getElementById('s' + i).innerHTML = "";
//     }
// }