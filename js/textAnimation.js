export default function textAnim() {
  const initializeHomeScripts = () => {
    const wordsTitle = ['a creative', 'an analytical', 'a technical'];
    const selectWords = document.querySelector('#words');
    if (!selectWords) {
      console.error("Element with id 'words' not found");
      return;
    }
    let index = 0;

    function showNextWord() {
      selectWords.style.opacity = 0;

      setTimeout(() => {
        selectWords.innerText = wordsTitle[index];
        index = (index + 1) % wordsTitle.length;
        selectWords.style.opacity = 1;
      }, 500);
    }

    selectWords.style.opacity = 1;
    setInterval(showNextWord, 2000);
  };

  //load the script only when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeHomeScripts);
  } else {
    initializeHomeScripts();
  }
}
