const square = document.querySelector(".movingSquare");
const leftBtn = document.querySelector(".goLeft");
const rotateBtn = document.querySelector(".rotate");
const rightBtn = document.querySelector(".goRight");


leftBtn.addEventListener('click', function () {

    square.style.transform = "translate: -200, 0";

});

rotateBtn.addEventListener('click', function () {

    square.classList.add('rolling');

});

rightBtn.addEventListener('click', function () {

    square.classList.add('right');

});