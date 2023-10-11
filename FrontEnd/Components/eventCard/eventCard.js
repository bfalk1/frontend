import { LitElement, html } from 'lit';
import { eventCardTemplate } from './eventCardTemplate';

export class EventCard extends LitElement {
    render() {
        return eventCardTemplate(this);
    }

    static get properties() {
        return {
            title: { type: String },
            description: { type: String },
            img: { type: String },
            placeholder: { type: String },
            popupOpen: { type: Boolean },
            eventTitleitle: { type: String },

        };
    }

    constructor() {
        super();
        this.title = "";
        this.eventTitle ="";
        this.eventstartdate = "";
        this.eventenddate = "";
        this.eventdescription = "";
        this.companyName = "";
        this.description = "";
        this.img = "";
        this.placeholder = "";
        this.popupOpen = false

    }

    connectedCallback(){
        super.connectedCallback();
        console.log(this.eventstartdate);
    }

    
    togglePopup(e) {
        this.popupOpen = !this.popupOpen
        console.log("here");
    }

    closePopup(e) {
        this.popupOpen = false
    }
}


customElements.define('event-card', EventCard);