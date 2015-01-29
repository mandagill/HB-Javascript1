// First problem solved!
var getTextLink = document.getElementById("get-text");

function changeFromHelloToWorld (evt) {
    evt.preventDefault();
    divToChange = document.getElementById('text-box-replace');
    divToChange.innerHTML = "world";
}

getTextLink.addEventListener('click', changeFromHelloToWorld);

// Second problem, change color of a div
var getColorLink = document.getElementById("get-color");

function changeDivColor (evt) {
    evt.preventDefault();
    divToChange = document.getElementById('text-box-color');
    //FIXME this sets the attribute but doesn't change the color
    divToChange.setAttribute('background-color', 'red');
    divToChange.innerHTML = "I am the color red!";
}

getColorLink.addEventListener('click', changeDivColor);