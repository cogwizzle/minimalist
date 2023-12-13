export default class MiniComponent extends HTMLElement {
    constructor() {
        super()
        if (this.classList.contains('noJs')) {
            this.classList.remove('noJs')
        }
    }
}
