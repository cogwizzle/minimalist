/**
 * @typedef {typeof import('./Component.mjs').default} Component
 */
/**
 * Creates a Shadow DOM for the component.
 *
 * @mixin
 * @function
 * @template {Component} T
 * @param {T} Base - The base class to extend.
 * @param {ShadowRootMode} [mode='open'] - The shadow root mode.
 */
export function ShadowComponentMixin(Base, mode = 'open') {
    /**
     * Component with shadow DOM.
     *
     * @property {ShadowRoot} shadowRoot - The shadow root.
     */
    class ShadowComponent extends Base {
        /**
          * @type {ShadowRoot}
          */
        shadowRoot
        constructor(...args) {
            super(...args)
            this.attachShadow({ mode })
        }
    }
    return ShadowComponent
}

export default ShadowComponentMixin(HTMLElement)
