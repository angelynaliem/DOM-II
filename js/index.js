
// //event listener #1
let logoHeading = document.querySelector(".logo-heading");

logoHeading.addEventListener('mouseover', (event) => {
    event.target.style.color = "red"
})

//event listener #2
let intro = document.querySelector(".intro");

intro.addEventListener('dblclick', (event) => {
    event.target.style.cursor = "zoom-in";
})

// //event listener #3
let nav = document.querySelector("nav");

nav.addEventListener("focusin", (event) => {
    event.preventDefault();
    event.target.style.fontSize = "4rem"
})

// //event litener #4
nav.addEventListener("focusout", (event) => {
    event.target.style.color = "purple";
})

//event listener #5
window.ononline = (event) => {
    alert("You are now connected to the network!")
}

//event listener #6
window.addEventListener("offline", (event) => {
    alert("You are not connected to the network!")
})

//event listener #7
window.addEventListener("resize", (event) => {
    alert("Just playing with resizing")
})

//event listener #8
let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
    alert("Playing with scrolling")
}

window.addEventListener("scroll", function(e) {
    last_known_scroll_position = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(function() {
            doSomething(last_known_scroll_position);
            ticking = false;
        })
        ticking = true;
    }
})

//event listener #9
let textContent = document.querySelector(".text-content");

textContent.addEventListener("copy", (event) => {
    event.target.style.textShadow = "5px 5px 1px #ff0000"
})

//event listener #10
let p = document.querySelector(".intro p");

document.addEventListener("keydown", logKey);

function logKey(e) {
    p.textContent += "Hello";
}

//Using stopPropagation by nesting

let bigP = document.querySelector(".intro");

bigP.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "yellow";
})

p.addEventListener("click", (event) => {
    event.stopPropagation();
    event.target.style.backgroundColor = "red";
})

