//Add to cart pop up
var modalOpen = document.getElementById('modalpop');
var modalClose = document.getElementById('notmodal')
var btn = document.getElementById('startbutton');
var i = 0;

function popup() {
    choosePopup();
    closePopup();
}

function choosePopup(){
    if (document.getElementById('chooseX').clicked == true) {
        document.getElementById('chooseX').style.backgroundColor =  "#018786"; 
        console.log("true");
    }

function closePopup () {
    if ((document.getElementById('chooseX').clicked == true) && (document.getElementById('startbutton').clicked == true)) {
        modalOpen.style.display = "none";
    } else {
        modalOpen.style.display ="";
    }
}
popup();


btn.onclick = function () {
    modalOpen.style.display = 'block';    
}
 
//play game
//  var x = document.createElement("x");
//  x.src= "boardx.png";

//  var o = document.createElement('o');
//  o.src = "images/boardo.png";

// function startGame(){
//     document.turn="x";
// }

// function nextMove(square) {
//     square.innerText = document.turn;
//     switchTurn();
// }

// function switchTurn(){
//     if (document.turn == 'x') {     
//         document.turn = 'o';
//    } else {
//         document.turn = "x";
//     }}
