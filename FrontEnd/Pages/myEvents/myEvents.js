import { LitElement, html } from 'lit';
import { MyEventsTemplate } from './myEventsTemplate';

export class MyEventsPage extends LitElement {
    render() {
        return MyEventsTemplate(this);
    }

    static get properties() {
        return {
            popupOpen: { type: Boolean },
            popupData: {}
        };
    }

    constructor() {
        super();
        this.popupData = {}
        this.popupOpen = false
    }
    togglePopup(e) {
        this.popupOpen = !this.popupOpen
        console.log(e);

    }
    closePopup(e) {
        this.popupOpen = false
    }
    setPopupData(event) {
        this.popupData = event;
    }
    handelEnroll(e) {

    }

    connectedCallback() {
        super.connectedCallback();
        console.log("Loaded into the dom");
    }


}


customElements.define('my-events', MyEventsPage);