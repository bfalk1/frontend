import { LitElement, html } from 'lit';
import { eventCardTemplate } from './eventCardTemplate';

export class EventCard extends LitElement {
    render() {
      return eventCardTemplate (this);
    }

    static get properties() {
        return {
           title: { type: String },
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

    connectedCallback() {
        super.connectedCallback();
        console.log(this.title);
        console.log(this.description);
        console.log(this.img);
    }
}


customElements.define('event-card', EventCard);