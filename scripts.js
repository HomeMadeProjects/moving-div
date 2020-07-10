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

// stworzyć funkcję, która sprawdzi, jaka jest aktualnie dodana klasa (currentClass), jeśli klikam LEWO to dodaje 'left', jeśli jeszcze raz - blokuje przycisk (dodać klasę 'blocked'), jeśli klikam PRAWO to usuwa aktualną klasę i dodaje nową itp. Rotate musi działać cały czas, bez względu na położenie DIVa - JAK BY TO ZROBIĆ???