const copybtn = document.querySelector(".btn");
const copytext = document.querySelector(".copy-text");
const link = document.querySelector(".copy-text input");

copybtn.addEventListener("click", () => {
    navigator.clipboard.writeText(link.value);
    copybtn.innerHTML = "Copied"
    copytext.classList.add("border");
    setTimeout(function (){
        copybtn.innerHTML = "Copy"
        copytext.classList.remove("border");
    }, 2000)
})