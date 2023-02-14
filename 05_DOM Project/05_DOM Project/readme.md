# Project 5

## Tasks
![](../05_DOM%20Project/Output/DOM%20P2%20SS.png)


### Solution
```
// Subscription button
let newb = document.querySelector(".nav-center");
let button = document.createElement("button");
button.classList.add("btn1");
button.innerText = "Pro Subscription";
newb.appendChild(button);


// Adding a new card of recipe
let gallery = document.querySelector(".recipe-gallery");

//  div
let card = document.createElement("div");
card.className = "card";
gallery.appendChild(card);

//  tag
let recipe = document.createElement("a");
recipe.href = "#";
recipe.className = "recipe-text";
card.appendChild(recipe);

//  img tag
let image = document.createElement("img");
image.className = "recipe-img";
image.src ="./img/recipe-1.jpeg";
recipe.appendChild(image);

//  h5 tag
let h5 = document.createElement("h5");
h5.className = "recipe-name";
h5.innerText = "Dum-Aallo";
recipe.appendChild(h5);

// adding text
let para = document.createElement("p");
para.className = "recipe-disp";
para.innerText = "Prep : 14min | Cook : 12min";
recipe.appendChild(para);



let tagContainer = document.querySelector(".tags-container div");
let tag = document.createElement("a");
tag.href = "#";
tag.innerText = "Chinesee(7)";

tagContainer.appendChild(tag);

// Name
let tagg = document.getElementsByTagName("a")
// console.log(tagg)
tagg[19].innerHTML = "Mayank Pradhan"


```
