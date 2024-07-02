// to get rid of the ReferenceError: document is not defined at Object.<anonymous>
// not remove in devp environnement
if (typeof window !== 'undefined') {


const wordsTitle = ['a creative', 'an analytical', 'a technical'];
const selectWords = document.querySelector('#words');
let index = 0;

function showNextWord() {
  selectWords.style.opacity = 0;

  setTimeout(() => {
      selectWords.innerText = wordsTitle[index];
      index = (index + 1) % wordsTitle.length;
      // Fade in
      selectWords.style.opacity = 1;
    }, 500); // Match this delay with the CSS transition duration
  }

  // Initialize first word
  selectWords.style.opacity = 1;

  setInterval(showNextWord, 2000);
}
// closes the DOM conditional opened at the begining of the doc.
