let Img = document.querySelector("header img");
Img.src = "./assets/ineuron-logo.png";

let p = document.querySelector(".app span");
p.innerText = "$10";

let footerText = document.querySelector(".footer_text");
let strong = document.querySelector(".footer_problems strong");
 
footerText.style.color = "#5A5A5A";
strong.style.color = "#000";


let footerSocial = document.querySelector(".footer_social"); 
let div = document.createElement("div");
div.className = "footer_social_ico";

let i = document.createElement("i");
i.classList = "fa-brands fa-linkedin";

div.append(i);
footerSocial.append(div);
