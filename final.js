// First problem solved!
var getTextLink = document.getElementById("get-text");

function changeFromHelloToWorld (evt) {
    evt.preventDefault();
    divToChange = document.getElementById('text-box-replace');
    divToChange.innerHTML = "world";
}

getTextLink.addEventListener('click', changeFromHelloToWorld);

// Second problem, change color of a div


