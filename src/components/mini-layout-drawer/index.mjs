/**
  * @typedef {import("./ToggleDrawerEvent.mjs").ToggleDrawerEvent} ToggleDrawerEvent
  */

const template = document.createElement('template');
template.innerHTML = `
    <slot></slot>
    <slot name="drawer"></slot>
`;

const tabletSize = 786;

export default class DrawerLayout extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    static get is() {
        return 'mini-drawer-layout';
    }

    connectedCallback() {
        this.addEventListener('toggle-drawer', this.toggleDrawer);
        this.render();
        // If screen width is greater than 786px, open the drawer
        if (window.innerWidth > tabletSize) {
            this.toggleDrawer();
        }
    }

    disconnectedCallback() {
        this.removeEventListener('toggle-drawer', this.toggleDrawer);
    }

    /**
      * Toggle the drawer
      * @param {ToggleDrawerEvent} [event]
      * @returns {void}
      */
    toggleDrawer(event) {
        const open = event?.detail?.open;
        if (open === undefined) {
            this.classList.toggle('open');
            return;
        }
        if (open) {
            this.classList.add('open');
            return;
        }
        this.classList.remove('open');
    }

    render() {
        this.shadowRoot.innerHTML = template.cloneNode(true).innerHTML;
    }
}

if (!customElements.get(DrawerLayout.is)) {
    customElements.define(DrawerLayout.is, DrawerLayout);
}
