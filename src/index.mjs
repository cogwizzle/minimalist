import './components/mini-layout-drawer/index.mjs';
import './components/mini-drawer-toggle/index.mjs';
import './components/mini-container/index.mjs';

(function() {
    const noJs = document.querySelectorAll('.noJs');
    noJs.forEach((element) => {
        element.classList.remove('noJs');
    });
})();

