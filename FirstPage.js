import { LitElement, html } from 'lit';
import { Router } from "@vaadin/router";
import {FirstPageTemplate} from './FirstPage-template';
import { initRouter } from "./router";

class FirstPage extends LitElement {
  render() {
    return FirstPageTemplate(this);
  }
  static get properties() {
    return {
        ButtonClicked: { Type: Boolean},
        studentCheckBoxClicked: { Type: Boolean},
        error: { Type: String},
        employmentButton: { Type: String},
    };
    }

    constructor() {
        super();
        this.ButtonClicked = false;
        this.studentCheckBoxClicked = false;
        this.error = null;
        this.UserAttributes = {};
        this.employmentButton = false;
        this.addEventListener('custom-string-event', this.handleChangedValue);
    }

    handleChangedValue(e) {
        e.stopPropagation();
        switch(e.detail.type) {
            case "Age" :
                this.validateAge(e.detail.value,e.detail.type);
                break;
            case "Email" :
                this.validateEmail(e.detail.value,e.detail.type);
                break;
            case "Years Completed":
                this.validateYearsCompleted(e.detail.value,e.detail.type);
                break;
            case "Phone Number":
                this.validatePhoneNumber(e.detail.value,e.detail.type);
                break;
            case "GPA":
                this.validateGPA(e.detail.value,e.detail.type);
                break;
            default: 
                this.validateString(e.detail.value,e.detail.type);
                return;     
        }
    }

    studentcheckBox(e) {
        this.studentCheckBoxClicked = true;
    }

    routeToHome(e) {
        console.log(this.UserAttributes);
        initRouter();
        Router.go("/home");
    }

    validateEmail(input,type) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(input)) {
           this.error = "Invalid Email";
        } else {
            this.error = null;
            this.UserAttributes[type] = input;
        }
    }

    validateAge(input,type) {
        if (input >= 15 && input <= 100) {
            this.error = null;
            this.UserAttributes[type] = input;
        } else {
            this.error = "Please Enter a Valid Age";
            console.log(this.error);
        }
    }

    validateGPA(input,type) {
        if (input >= 1.5 && input <= 4.3) {
            this.error = null;
            this.UserAttributes[type] = input;
        } else {
            this.error = "Please Enter a Valid Age";
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

    validateYearsCompleted(input,type) {
        if (input >= 0 && input <= 4) {
            this.error = null;
            this.UserAttributes[type] = input;
        } else {
            this.error = "Invalid Input";
        }
    }

    validatePhoneNumber(input,type) {
        const phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
        if (phoneRegex.test(input)) {
            this.error = null;
            this.UserAttributes[type] = input;
        } else {
           this.error = "Invalid Input";
        }
    }

    buildEmploymentSection() {
        this.employmentButton = true;
    }

}

customElements.define('first-page', FirstPage);
