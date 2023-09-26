import { LitElement, html } from 'lit';
import { NavbarTemplate } from './navbarTemplate';

export class Navbar extends LitElement {
    render() {
      return NavbarTemplate(this);
    }

    static get properties() {
        return {
            dropdown : {type: Boolean},
        };
        }
        
        constructor() {
            super();
            this.dropdown = false
        }
        
        toggleDropdown(e){
            this.dropdown = !this.dropdown;
        }
}


customElements.define('navbar', Navbar);