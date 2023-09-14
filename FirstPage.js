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
        studentCheckBoxClicked: { Type: Boolean}
    };
    }

    constructor() {
        super();
        this.ButtonClicked = false;
        this.studentCheckBoxClicked = false;
        this.error = false;
        this.addEventListener('custom-string-event', this.handleChangedValue);
    }

    handleChangedValue(e) {
        console.log("here");
        console.log(e);
        e.stopPropagation();
    }

    studentcheckBox(e) {
        this.studentCheckBoxClicked = true;
    }

    routeToHome(e) {
        initRouter();
        Router.go("/home");
    }

    validateEmail(e) {
        console.log(e);
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        //if (!emailRegex.test(email)) {
          //  this.error = "Invalid Email";
       // } else {
      //      this.error = "";
     //   }
    }

    validateString(e) {
        console.log(e);
        const alphabetRegex = /^[a-zA-Z]+$/;
       // if (!alphabetRegex.test(input.trim())) {
         //   this.error = "Invalid Input";
        //} else {
          //  this.error = "";
        //}
    }

}

customElements.define('first-page', FirstPage);
