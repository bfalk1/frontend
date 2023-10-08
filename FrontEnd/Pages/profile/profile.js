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
            this.addEventListener('custom-user-search-event', this.findSearchedUser);
            this.addEventListener('custom-string-event', this.handleChangedValue);
        }

        connectedCallback() {
          super.connectedCallback();
          //const route = Router.getInstance().location.route;
          //const userId = route.parameters.userId;
          this.fetchUserData({"Name":"Julian Brickman"});
      }

      fetchUserData(userData) {
      /*  fetch("http://localhost:5001/api/currentUser")
        .then(response => response.json())
        .then(data => {
          this.user = (data.Currentuser[0]); // Assign the data
          console.log(this.user.FirstName); // Log the data here
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });*/
        fetch("http://localhost:5001/api/findUser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        })
          .then((response) => response.json())
          .then((data) => {
            this.user = data; // Assign the data
            console.log(this.user); // Log the data here
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }

      findSearchedUser(e) {
        console.log("hello world");
      }
       
        addExperience(e){
          this.experience.push(this.newXP);
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
            this.user[type] = input;
        } else {
           this.error = "Invalid Input";
        }
    }
}


customElements.define('profile-page', ProfilePage);