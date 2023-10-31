import { LitElement } from 'lit';
import { ProfileTemplate } from './profileTemplate';
import { Navbar } from '../../Components/navbar/navbar';
import { Router } from "@vaadin/router";

export class ProfilePage extends LitElement {
    render() {
      return ProfileTemplate(this);
    }

    static get properties() {
        return {
          experience: {type: Object},
          newXP: {type: Object},
          user: {type: Object}

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
            this.user = "";
            this.currentUser = {"email":sessionStorage.getItem('email')};
            this.role = sessionStorage.getItem('role');
            this.isCurrentUsersPage = false;
            this.addEventListener('custom-string-event', this.handleChangedValue);
        }

        connectedCallback() {
          super.connectedCallback();
          if (!this.user) {
            this.isCurrentUsersPage = true;
            this.fetchUserData(String(this.currentUser.email));
            return;
          }
          this.fetchUserData(String(this.user));
          if (this.user.toLowerCase() !== this.currentUser.email.toLowerCase()) {
            this.isCurrentUsersPage = false;
          } else {
            this.isCurrentUsersPage = true;
          }
      }

      fetchUserData(input) {
        fetch(`http://localhost:5001/api/profile?username=${input}`)
        .then(response => response.json())
        .then(data => {
          this.user = data;
          console.log(this.currentUser)
        })
        .catch(error => {
           this.error = "User Not Found"
        });
      }
       
        addExperience(e){
          this.experience.push(this.newXP);
          console.log(this.experience);
        }

        editPersonalInformation(e) {
          console.log("here");
        }


        handleChangedValue(e) {
          e.stopPropagation();
          
          switch(e.detail.type) {
              case "Company" :
                  this.newXP.Company = e.detail.value
                  console.log(this.user);
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
              case "description" :
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
            this.user[type] = input;
        } else {
           this.error = "Invalid Input";
        }
    }

    disconnectedCallback() {
      super.disconnectedCallback();
    }
}


customElements.define('profile-page', ProfilePage);