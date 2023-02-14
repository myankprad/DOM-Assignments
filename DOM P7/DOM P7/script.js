let main = document.querySelectorAll(".main__languages a");

let arr  = Array.from(main);

arr.forEach((e) =>{
    if(e.textContent.includes('2.0')){
        e.style.display = "none";
    }
})

let input = document.querySelector(".main__form-input");
input.disabled = false;



let button = document.querySelector(".main__form-btn")
button.removeAttribute("disabled")

button.addEventListener("click", (e)=>{
e.preventDefault();
localStorage.setItem("inputvalue",input.value)
location.reload()
})


window.addEventListener("load", ()=>{

    const storedValue = localStorage.getItem("inputValue");
    input.value = storedValue;
    const language = document.querySelector(".main__languages")
    const a = document.createComment("a")
    a.target = "blank"
    a.href = "https://www.ineuron.ai"
    a.innerText = storedValue;
    language.append(a)
    
})
