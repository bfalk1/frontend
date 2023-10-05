import { LitElement } from 'lit';
import { ProfileTemplate } from './profileTemplate';
import { Navbar } from '../../Components/navbar/navbar';

export class ProfilePage extends LitElement {
    render() {
      return ProfileTemplate(this);
    }

    static get properties() {
        return {
          experience: {type: Object},
          newXP: {type: Object}
        };
        }
    
        constructor() {
            super();
            this.experience = [];
            this.newXP = {
              "Company": "",
              "Position": "",
              "Start Date": "",
              "End Date": "",
              "Description": ""
            }
            this.addEventListener('custom-string-event', this.handleChangedValue);
        }
       
        addExperience(e){
          this.experience.push(this.newXP);
        }

        handleChangedValue(e) {
          e.stopPropagation();
          
          switch(e.detail.type) {
              case "Company" :
                  this.newXP.Company = e.detail.value
                  break;
              case "Position" :
                  this.newXP.Position = e.detail.value
                  break;
              case "Start Date":
                  this.newXP['Start Date'] = e.detail.value
                  break;
              case "End Date" :
                this.newXP['End Date'] = e.detail.value
                  break;
              case "Description" :
                this.newXP.Description = e.detail.value
                  break;
              default: 
                  this.validateString(e.detail.value,e.detail.type);
                  return;     
          }
      }
      validateString(input,type) {
        const alphabetRegex = /^[a-zA-Z ]*$/;
        if (alphabetRegex.test(input)) {
            this.error = null;
            this.UserAttributes[type] = input;
        } else {
           this.error = "Invalid Input";
        }
    }
}


customElements.define('profile-page', ProfilePage);