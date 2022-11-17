let input = document.querySelector(".input");
let button = document.querySelectorAll(".num");
const equal = document.querySelector(".equal");

input.value = 0;
button.forEach((button) => {
    button.addEventListener("click", () => {
        input.value += button.innerHTML;
        console.log(`${button.innerHTML} and its type is ${typeof button.innerHTML}`);
    });
});

equal.addEventListener("click", evaluate);

function evaluate() {
    input.value = eval(input.value);
    console.log(input.value);
}

function allClear() {
    input.value = "";
}

function del() {
    input.value = input.value.slice(0, -1);
}
