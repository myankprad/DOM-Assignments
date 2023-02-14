### Task 1
![](./ass8.1-after.png)

### Making new Section scrollable-----*/
```
let border = document.querySelector(".new");

border.style.border = "5px solid red";
border.style.padding ="35px";
border.style.overflow = "auto";
```


### Task2: Navbar toggler
![](./ass8.2-after.png)

```
let navBarToggler = document.querySelector(".navbar-toggler");

let navBarCollapse = document.querySelector(".navbar-collapse");

navBarToggler.addEventListener("click", ()=>{
    navBarCollapse.classList.toggle("show");
})
```