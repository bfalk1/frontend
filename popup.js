import { LitElement, html } from 'lit';
import { PopupTemplate } from './popup-template';

class PopupPage extends LitElement {
    render() {
      return PopupTemplate(this);
    }

    static get properties() {
        return {
            popupOpen: {type: Boolean},
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
        setPopupData(data){
            this.popupData = data;
        }
        
}


customElements.define('home-page', HomePage);