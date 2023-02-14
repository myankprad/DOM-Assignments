# Project 4

## Task 1
![](./04_DOM%20Project/Output/DOM%20P1%20SS.png)

### Background color

## Soltuion
``` 
let clearfix = document.querySelectorAll(".clearfix")
let arr = ["#EC9B3B", "#EE5487", "#F6901A", "#82BB30", "#4FACFF"]

for(let i=0; i<arr.length; i++){
    clearfix[i].style.background = arr[i];
}

```

### White color
```
let t = document.querySelectorAll(".one-third div")
t.forEach((e)=>{
    e.style.color = "#ffffff";
})

```
