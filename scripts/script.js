// Scripts by AS
// ****************************************  Global variables:
const $ = document;
const popUpWith = 125;      // half of width of pop up
const popUpHeight = 80;     // half of height of pop up

// ****************************************  DOM Elements:
const popUpContainerElem = $.getElementById('popUpContainer');
const paletteElems = $.querySelectorAll('.popup-child');  

// ****************************************  Standalone functions:
    // calculate x cordinate of pop up context menu
function calculateX(xcor) {
    const windowWidth = window.innerWidth;

    if(windowWidth-xcor<popUpWith)
        xcor -= popUpWith;
    else if (xcor<popUpWith)
        xcor += popUpWith;

    xcor -= popUpWith;
    return xcor;
}
    // calculate y cordinate of pop up context menu
function calculateY(ycor) {
    const windowHeight = window.innerHeight;

    if(windowHeight-ycor <popUpHeight)
        ycor -=popUpHeight*2;  

    return ycor;
}
    // show pop up context menu
function showPopUp(xCor, yCor) {
    popUpContainerElem.style.display = 'block';
    xCor += 'px';
    yCor += 'px';
    popUpContainerElem.style.left = xCor;
    popUpContainerElem.style.top = yCor;
}

// **************************************** Event Listener callback functions:
    // callback function for right click event on body
function showContextMenu(event) {
    event.preventDefault();
    let xCor = calculateX(event.pageX);
    let yCor = calculateY(event.pageY);
    showPopUp(xCor, yCor);
}
    // to hide pop up context menu
function hidePopUp() {
    popUpContainerElem.style.display = 'none';
}
    // callback function for click event on paletteElems
function changeColor(event) {
    let bgColor = event.target.style.backgroundColor;
    $.body.style.backgroundColor = bgColor;
}

// ****************************************  Set Event on DOM Elements:
    // Set click event listener on body
$.body.addEventListener('click',hidePopUp);

    // set click event listener on each palette elem
paletteElems.forEach(function(item) {
    item.addEventListener('click',changeColor);
})