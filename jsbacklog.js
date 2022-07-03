const arrowUp = document.querySelector("#arrow-up");
const arrowDown = document.querySelector("#arrow-down");
let inputValue = parseInt(document.querySelector("#arrow-input").value);
const input = document.querySelector("#arrow-input");
const complete = document.querySelector("#completed")
let output = document.querySelector("#Output")

const upFunction = () => {
    inputValue = inputValue + 1;
    input.value = inputValue;
}
const downFunction = () => {
    inputValue = inputValue > 0 ? inputValue - 1 : 0;
    input.value = inputValue;
}

arrowUp.addEventListener("click", upFunction);
arrowDown.addEventListener("click", downFunction);
const myFunction = () => { inputValue = parseInt(input.value) }
const outputs = () => { output.value = inputValue }
input.addEventListener("change", myFunction); complete.addEventListener('click', outputs);

