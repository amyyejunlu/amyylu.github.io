//sets the empty array;
var cart =[];


//this is to change image onclick
const current = document.querySelector('current');
const thumbnail = document.querySelectorAll('.thumbnail img');
thumbnail.forEach(img => img.addEventListener('click', imgClick));

// var thumbOne = document.getElementById("thumbnailOne");
// var thumbTwo = document.getElementById("thumbnailTwo");

var largeOne = document.getElementById("current");
// var largeTwo = document.getElementById("current");

// define  a js dict
// key "/Images/walnut_thumbnail_1.png" --> value "/Images/Walnut.jpg"

function imgClick(){
    console.log(this.id)
    var thisthumb = document.getElementById(this.id);
   // largeOne.src = dict[thisthumb.getAttribute('src')]
   
    if (thisthumb.getAttribute('src')== "Images/walnut_thumbnail_1.png") {
        largeOne.src = "Images/Walnut.jpg";
        // document.getElementById('thumbnailOne').style.border="2px solid black";
        // document.getElementById('thumbnailOne').style.borderRadius="40px";
        // document.getElementById('thumbnailTwo').style.border="hidden";
    } else if (thisthumb.getAttribute('src')== "Images/walnut_thumbnail_2.png")
        largeOne.src = "Images/Caramel Pecan.jpg";
        // document.getElementById('thumbnailOne').style.border="hidden";
        // document.getElementById('thumbnailTwo').style.border="2px solid black";
        // document.getElementById('thumbnailTwo').style.borderRadius="40px";

    }
    // if (thumbTwo.getAttribute('src')== "/Images/walnut_thumbnail_2.png") {
    // }   largeTwo.src = "/Images/Caramel Pecan.jpg";
    // }

//this is to add border to glaze
const border = document.querySelectorAll('#glazeGrid img');
border.forEach(img => img.addEventListener('click', borderClick));

function borderClick() {
    // console.log(this.id)
    var thisborder = document.getElementById(this.id);

    if (thisborder.getAttribute('src') == "Images/None.png") {
        document.getElementById('clickBorderOne').style.border="2px solid black";
        document.getElementById('clickBorderOne').style.borderRadius="30px";
        document.getElementById('clickBorderTwo').style.border="hidden";
        document.getElementById('clickBorderThree').style.border="hidden";
        document.getElementById('clickBorderFour').style.border="hidden";
    }  if (thisborder.getAttribute('src') == "Images/Sugar-milk.png") {
        document.getElementById('clickBorderTwo').style.border="2px solid black";
        document.getElementById('clickBorderTwo').style.borderRadius="30px";
        document.getElementById('clickBorderOne').style.border="hidden";
        document.getElementById('clickBorderThree').style.border="hidden";
        document.getElementById('clickBorderFour').style.border="hidden";
    } if (thisborder.getAttribute('src') == "Images/Vanilla-Milk.png") {
        document.getElementById('clickBorderOne').style.border="hidden";
        document.getElementById('clickBorderTwo').style.border="hidden";
        document.getElementById('clickBorderThree').style.border="2px solid black";
        document.getElementById('clickBorderThree').style.borderRadius="30px";
        document.getElementById('clickBorderFour').style.border="hidden";
    } if (thisborder.getAttribute('src') == "Images/Double-Chocolate.png") {
        document.getElementById('clickBorderOne').style.border="hidden";
        document.getElementById('clickBorderTwo').style.border="hidden";
        document.getElementById('clickBorderThree').style.border="hidden";
        document.getElementById('clickBorderFour').style.border="2px solid black";
        document.getElementById('clickBorderFour').style.borderRadius="30px";
    } 
}

//Add to cart pop up
var modalOpen = document.getElementById('modalpop');
var modalClose = document.getElementById('notmodal')
var btn = document.getElementById('cartButton');
var i = 0;


btn.onclick = function () {
    modalOpen.style.display = 'block';
    var number = document.getElementById('cart2');
    i ++;
    number.innerHTML = i;  
    document.getElementById('cart2');
    // document.getElementById("modalGlaze").innerHTML = cart.toString();
    document.getElementById("modalGlaze").innerHTML = JSON.parse(localStorage.getItem('globalshoppingCart'));
    updateToGlobal();  
}

//Makes an object 
function bunSelection(name, glaze, price, count) {
    this.name = name;
    this.glaze = glaze;
    this.price = price;
    this.count = count;
}

//Gets the glaze alt attribute from html
var x;
var y;
makeclickable = function(){
    x = event.target.alt;
    // y = ;
    //console.log(x);
    
    // bunorder = new bunSelection("walnut", x, 6.75, y);
    // console.log(typeof bunorder);
    // console.log(bunorder);
    //var y = JSON.parse(localStorage.getItem('globalshoppingCart'));
    //x = y ;    //bunOne.glaze = x;
    // console.log(cart);  
    cart.push(x);
    console.log(cart);
    updateToGlobal();  
    
};

//Local Storage
function updateToGlobal(){
    var stringCart = JSON.stringify(cart)
    localStorage.setItem('globalshoppingCart', stringCart);
    var getStringCart = JSON.parse(localStorage.getItem('cart'));
    console.log(getStringCart);
};






//Pop up close 
window.onclick = function(event) {
//    console.log('event.target');
    if (event.target == modalClose) {
        // console.log('window2')
        modalOpen.style.display = 'none';
        }
        // modalOpen.style.display = 'none';

    }



//sticky navbar
window.onscroll = function() {myFunction()};
        
        var header = document.getElementById("myHeader");
        var sticky = header.offsetTop;
        
        function myFunction() {
          if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
          } else {
            header.classList.remove("sticky");
          }
        }

