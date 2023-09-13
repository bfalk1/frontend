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
    }

    studentcheckBox(e) {
        this.studentCheckBoxClicked = true;
    }

    routeToHome(e) {
        initRouter();
        Router.go("/home");
    }

}

customElements.define('first-page', FirstPage);
