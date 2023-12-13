/**
 * @typedef {object} ToggleDrawerEventDetail
 * @property {boolean|undefined} open
 *
 */

/**
 * Toggle the drawer.
 *
 * @extends {CustomEvent<ToggleDrawerEventDetail>}
 */
export default class ToggleDrawerEvent extends CustomEvent {
    /**
     * Default constructor.
     * @param {boolean} [open]
     */
    constructor(open) {
        super('toggle-drawer', {
            bubbles: true,
            composed: true,
            detail: {
                open,
            },
        })
    }
}
