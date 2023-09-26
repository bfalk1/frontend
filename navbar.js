import { LitElement, html } from 'lit';
import { PopupTemplate } from './popup-template';

export class Navbar extends LitElement {
    render() {
      return NavbarTemplate(this);
    }

    static get properties() {
        return {
            
        };
        }
    
        constructor() {
            super();
        }
        
        
}


customElements.define('navbar', Navbar);