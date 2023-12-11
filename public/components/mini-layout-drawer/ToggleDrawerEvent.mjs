/**
  * @typedef {object} ToggleDrawerEventDetail
  * @property {boolean|undefined} open
  *
  * @typedef {CustomEvent<ToggleDrawerEventDetail>} ToggleDrawerEvent
  */

/**
  * Toggle the drawer.
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
                open
            }
        });
    }
}
