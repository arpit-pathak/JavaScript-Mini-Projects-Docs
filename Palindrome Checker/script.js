const inputText = document.querySelector(".inputs input");
const checkBtn = document.querySelector(".inputs button");
const outputText = document.querySelector(".output");
let filterInput;

checkBtn.addEventListener("click", () => {
  let reverseInput = filterInput.split("").reverse().join("");
  outputText.style.display = "block";
  if (filterInput != reverseInput) {
    return (outputText.innerHTML = `No, <span>'${inputText.value}'</span> isn't a palindrome!`);
  }
  outputText.innerHTML = `Yes, <span>'${inputText.value}'</span> is a palindrome!`;
});

inputText.addEventListener("keyup", () => {
  filterInput = inputText.value.toLowerCase().replace(/[^A-Z0-9]/gi, "");
  if (filterInput) {
    return checkBtn.classList.add("active");
  }
  outputText.style.display = "none";
  checkBtn.classList.remove("active");
});