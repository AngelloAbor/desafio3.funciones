
//codigo original

// function pintar(){
//     ele.style.backgroundColor = 'yellow'
//     }
//     const ele = document.getElementById("ele1")

// ejercicio 3.2

// function pintar(element){
//     element.style.backgroundColor='yellow';

// }
// const ele = document.getElementById("ele1");
// ele.addEventListener("click", function(){
//     pintar(ele);
// });

//ejercicio 3.3

const ele = document.getElementById("ele1");
ele.addEventListener("click", function() {
    pintar(ele, 'yellow');
});

const pintar = function(element, color = 'green') {
    element.style.backgroundColor = color;
};
