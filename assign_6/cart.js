var removeCartButton = document.getElementById('deletebtn');
console.log(removeCartButton);

var button = removeCartButton;
button.addEventListener('click', function(event) {
        console.log('clicked');
        var buttonClicked = event.target;
        buttonClicked.parentElement.remove();
    })
