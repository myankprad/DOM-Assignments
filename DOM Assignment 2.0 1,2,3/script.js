

// Task 1
let list = document.getElementsByTagName("ul")
console.log(list[0])

list[0].appendChild(document.createElement("li")).innerText = "hire me"


// Task 2

let search= document.querySelector(".search-field")
search.firstElementChild.value = "Search My Project"

// Task 3


let span = document.getElementsByTagName("span")
console.log(span)
span[3].innerText = "ineuron intelligence pvt. ltd."
span[2].innerText = "an employee"

// Task 4

const IMAGE = document.querySelector('.hero-right-section img')

IMAGE.src = './goku.jpg'

// Task 5

let button = document.querySelector(".hero-right-section-btns")
button.appendChild(document.createElement("button")).innerText = "Support me"




