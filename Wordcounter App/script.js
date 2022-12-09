const textarea = document.querySelector("#text");
const word = document.querySelector(".word");
const character = document.querySelector(".char");

textarea.addEventListener("input", (e) => {
  word.textContent = 0;
  // count character
  character.textContent = textarea.value.trim().length;

  //count words
  wordcount = textarea.value.match(/\w+/g);
  word.textContent = wordcount.length;
});

// follow for more git- https://github.com/arpit-pathak
