let title = document.querySelector(".caption h1");
let Img = document.querySelector(".add-to-cart img");

title.style.color = "#DC143C";
Img.src = "./images/icon-cart.svg";


let button = document.querySelector(".add-to-cart");
button.addEventListener("mouseover", ()=>{
    button.style.background = "#B9345A";
});

button.addEventListener("mouseout", ()=>{
    button.style.background = "hsl(158, 36%, 37%)";
});
