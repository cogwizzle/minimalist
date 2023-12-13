import MiniComponent from '../MiniComponent.mjs'

const template = document.createElement('template')
template.innerHTML = `
    <slot></slot>
    <style>
        :host slot::slotted(*) {
            margin-top: var(--spacing-2);
            max-width: 768px;
            padding: var(--spacing-2);
            width: 100%;
        }
    </style>
`

class MiniContainer extends MiniComponent {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        if (this.shadowRoot) {
            this.shadowRoot.appendChild(template.content.cloneNode(true))
        }
    }

    static get is() {
        return 'mini-container'
    }
}

if (!customElements.get(MiniContainer.is)) {
    customElements.define(MiniContainer.is, MiniContainer)
}
