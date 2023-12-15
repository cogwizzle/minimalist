/**
 * @typedef {typeof import('./Component.mjs').default} Component
 */
/**
 * Automatically remove the noJs class from the element.
 *
 * @mixin
 * @function
 * @template {Component} T
 * @param {T} Base - The base class to extend.
 */
export function MiniComponentMixin(Base) {
    return class MiniComponent extends Base {
        constructor(...args) {
            super(...args)
            this.classList.remove('noJs');
        }
    }
}

export default MiniComponentMixin(HTMLElement);
