import ToggleDrawerEvent from '../mini-layout-drawer/ToggleDrawerEvent.mjs';
import MiniComponent from '../MiniComponent.mjs';

const styles = `
    <style>
        button {
            position: fixed;
            top: var(--spacing-2);
            right: var(--spacing-2);
            z-index: 100;
            color: var(--font-color);
            background-color: transparent;
            border: none;
            outline: none;
        }
    </style>
`;
const openTemplate = document.createElement('template');
openTemplate.innerHTML = `
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    <button id="drawer-handle" class="material-symbols-outlined">
        menu
    </button>
    ${styles}
`;
const closeTemplate = document.createElement('template');
closeTemplate.innerHTML = `
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    <button class="material-symbols-outlined">
        close
    </button>  
    ${styles}
`;

export default class DrawerToggle extends MiniComponent {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get is() {
        return 'mini-drawer-toggle';
    }

    attachEvents() {
        const button = this.shadowRoot.querySelector('button');
        if (!button) {
            return;
        }
        button.addEventListener('click', this.toggleDrawer.bind(this));
    }

    removeEvents() {
        const button = this.shadowRoot.querySelector('button');
        if (!button) {
            return;
        }
        button.removeEventListener('click', this.toggleDrawer.bind(this));
    }

    connectedCallback() {
        this.render();
    }

    disconnectedCallback() {
        this.removeEvents();
    }

    toggleDrawer() {
        const drawer = document.querySelector('mini-drawer-layout')
        if (!drawer) {
            return;
        }
        drawer.toggleDrawer(new ToggleDrawerEvent());
        this.render();
    }

    render() {
        this.removeEvents();
        const drawer = document.querySelector('mini-drawer-layout')
        if (!drawer) {
            return;
        }
        const isOpen = drawer.classList.contains('open');
        if (isOpen) {
            this.shadowRoot.innerHTML = closeTemplate.cloneNode(true).innerHTML;
        } else {
            this.shadowRoot.innerHTML = openTemplate.cloneNode(true).innerHTML;
        }
        this.attachEvents();
    }
}

if (!customElements.get(DrawerToggle.is)) {
    customElements.define(DrawerToggle.is, DrawerToggle);
}
