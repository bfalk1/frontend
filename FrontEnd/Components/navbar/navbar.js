import { LitElement, html } from 'lit';
import { NavbarTemplate } from './navbarTemplate';
import { Router } from "@vaadin/router";
import { initRouter } from "../../router";
//import { initRouter } from "../../../router";

export class Navbar extends LitElement {
    render() {
      return NavbarTemplate(this);
    }

    static get properties() {
        return {
            isDropdownOpen : {type: Boolean}
        };
        }
        
        constructor() {
            super();
            this.isDropdownOpen = false;
        }
        
        toggleDropdown(e){
            this.isDropdownOpen = !this.isDropdownOpen;
        }
        routeToFirst(){
            initRouter();
            Router.go("/");
        }
        routeToHome(){
            initRouter();
            Router.go("/home");
        }
        routeToProfile(){
            initRouter();
            Router.go("/Profile");
        }
        routeToMyEvents(e){
            initRouter();
            Router.go("/myEvents");
        }
}


customElements.define('nav-bar', Navbar);