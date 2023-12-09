const template = document.createElement('template');
template.innerHTML = `
    <slot></slot>
    <slot name="drawer"></slot>
`;

class DrawerLayout extends HTMLElement {
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
    }

    disconnectedCallback() {
        console.log('disconnected');
        this.removeEventListener('toggle-drawer', this.toggleDrawer);
    }

    toggleDrawer() {
        const drawer = this.shadowRoot.querySelector('slot[name="drawer"]');
        drawer?.assignedElements()?.[0]?.classList?.toggle('open');
    }

    render() {
        this.shadowRoot.innerHTML = template.cloneNode(true).innerHTML;
    }
}

if (!customElements.get(DrawerLayout.is)) {
    customElements.define(DrawerLayout.is, DrawerLayout);
}
