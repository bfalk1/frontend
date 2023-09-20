import { LitElement, html } from 'lit';
import { eventCardTemplate } from './eventCardTemplate';

export class EventCard extends LitElement {
    render() {
      return eventCardTemplate (this);
    }

    static get properties() {
        return {
           value: { type: String },
           description : { type: String},
           img : {type : String},
           width: { type: String },
           placeholder: { type: String },
           type: { type: String }
        };
        }
    
    constructor() {
        super();
        this.title = "";
        this.description = "";
        this.img = "";
        this.width = "";
        this.placeholder = "";
        this.type = "";
    }

    dispatchCustomEvent(e) {
        this.value = this.shadowRoot.querySelector('.inputText').value;
        const customEvent = new CustomEvent('custom-string-event', {
            detail: {
                type: this.type,
                value: this.value
            },
            bubbles: true, 
            composed: true 
        });

        this.dispatchEvent(customEvent);
    }
}


customElements.define('event-card', EventCard);