import { LitElement } from 'lit';
import { ProfileTemplate } from './profileTemplate';

export class ProfilePage extends LitElement {
    render() {
      return ProfileTemplate(this);
    }

    static get properties() {
        return {
        };
        }
    
        constructor() {
            super();
        }
       
        
}


customElements.define('profile', ProfilePage);