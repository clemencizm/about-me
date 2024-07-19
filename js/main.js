// Import specific module scripts
import textAnim from './textAnimation.js';

const initializeScripts = (location) => {
  // Check the path and initialize relevant scripts
  if (location === "/") {
    textAnim();
  }
};

// Ensure the DOM is fully loaded before initializing scripts AND does that everytime the path changes
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => initializeScripts(window.location.pathname));
} else {
  initializeScripts(window.location.pathname);
};

export { initializeScripts };
