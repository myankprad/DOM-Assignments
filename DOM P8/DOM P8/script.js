// one 

let border = document.querySelector(".new");

border.style.border = "5px solid red";
border.style.padding ="35px";
border.style.overflow = "auto";

//  two

let navBarToggler = document.querySelector(".navbar-toggler");

let navBarCollapse = document.querySelector(".navbar-collapse");

navBarToggler.addEventListener("click", ()=>{
    navBarCollapse.classList.toggle("show");
})
