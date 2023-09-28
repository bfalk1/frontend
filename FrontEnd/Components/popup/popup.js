import { LitElement, html } from 'lit';
import { PopupTemplate } from './popup-template';

export class PopupPage extends LitElement {
    render() {
      return PopupTemplate(this);
    }

    static get properties() {
        return {
            popupOpen: {type: Boolean},
            popupData: {type: Object},
            buttonTitle: {type: String}
        };
        }
    
        constructor() {
            super();
            this.popupData = {};
            this.popupOpen = false;
            this.buttonTitle = "";
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


customElements.define('pop-up', PopupPage);