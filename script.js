// to get rid of the ReferenceError: document is not defined at Object.<anonymous>
// not remove in devp environnement
if (typeof window !== 'undefined') {


const wordsTitle = ['a creative', 'an analytical', 'a technical'];
const selectWords = document.querySelector('#words');
let index = 0;

setInterval(() => {
  selectWords.innerText = wordsTitle[index];
  index = (index + 1) % wordsTitle.length;
}, 1000);


// closes the DOM conditional opened at the begining of the doc.
}
