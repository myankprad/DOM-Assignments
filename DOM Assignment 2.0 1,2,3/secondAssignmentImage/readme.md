# Second Assignment
## About

### Task 1
![](./task1Output.png)

### Chaing background color of all h3
### Solution
```
let par = document.getElementsByTagName("p");
console.log(par)
par[2].style.display = "block";
par[3].style.display = "block";
```

### Task 2
![](./task2Output.png)

### Adding new element -> Skills
### Solution
```
let wrap = document.querySelector(".accordian-wrapper");
let a = document.createElement("div");
console.log(a)
a.classList.add("accordian");
wrap.appendChild(acc);

let h3 = document.createElement("h3");
h3.innerText = "Skills";
a.appendChild(h3);

let p = document.createElement("p");
p.innerText = "I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the Github"
a.appendChild(p);

const aHeading = document.querySelectorAll(".accordian h3");
aHeading.forEach((val) => (val.style.backgroundColor = "#DADAF8"));

aHeading.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});

```
