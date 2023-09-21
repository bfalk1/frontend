import { LitElement, html } from 'lit';
import {HomePageTemplate} from './homePage-template';

class HomePage extends LitElement {
    render() {
      return HomePageTemplate(this);
    }

    static get properties() {
        return {
            popupOpen: {type: Boolean}
        };
        }
    
        constructor() {
            super();
        }
        togglePopup(e) {
            this.popupOpen = !this.popupOpen
            console.log(this.popupOpen);
        }
    
        closePopup(e) {
            this.popupOpen = false
        }
}


customElements.define('home-page', HomePage);