


let btn = document.getElementById("btn")
let input = document.getElementById("input");
let result = document.getElementById("result")


btn.addEventListener("click", () => {
    let total = input.value.trim()
    result.innerText = total.length == 0 ? "Oh no, no words?" : "Thank you!"
})