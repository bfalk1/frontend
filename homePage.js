import { LitElement, html } from 'lit';
import {HomePageTemplate} from './homePage-template';

class HomePage extends LitElement {
    render() {
      return HomePageTemplate(this);
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
        setPopupData(event){
            this.popupData = event;
        }
        handelEnroll(e){
            
        }
}


customElements.define('home-page', HomePage);