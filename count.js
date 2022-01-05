let counterValue = document.querySelector("#counterValue");
let increment = document.querySelector("#increment");
let decrement = document.querySelector("#decrement");

let counter = 0;

increment.addEventListener("click", ()=>{
    counter++;
    counterValue.innerHTML = counter;
    if(counter < 0){
        counterValue.style.color = "red";
    }else{
        counterValue.style.color = "green";
    }
})

decrement.addEventListener("click", ()=>{
    counter--;
    counterValue.innerHTML = counter;
    if(counter < 0){
        counterValue.style.color = "red";
    }else{
        counterValue.style.color = "green";
    }
})