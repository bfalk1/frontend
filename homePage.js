import { LitElement, html } from 'lit';
import {HomePageTemplate} from './homePage-template';

class HomePage extends LitElement {
    render() {
      return HomePageTemplate(this);
    }

    static get properties() {
        return {
            ButtonClicked: { Type: Boolean},
            studentCheckBoxClicked: { Type: Boolean}
        };
        }
    
        constructor() {
            super();
        }

}


customElements.define('home-page', HomePage);