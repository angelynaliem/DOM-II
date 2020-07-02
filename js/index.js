// Your code goes here


//event listener #1
let logoHeading = document.querySelector(".logo-heading");

logoHeading.addEventListener('mouseover', (event) => {
    event.target.style.color = "red"
})

//event listener #2
let intro = document.querySelector(".intro");

intro.addEventListener('dblclick', (event) => {
    event.target.style.cursor = "zoom-in"
})

// let image1 = document.querySelector(".img-content");

// image1.addEventListener('keydown', (event) => {
//     event.target.style.opacity= "0.5"
// })

// window.ononline = (event) => {
//     console.log("You are now connected to the network.");
//   };

//event listener #3
window.ononline = (event) => {
    alert("You are now connected to the network!")
}

//event listener #4

