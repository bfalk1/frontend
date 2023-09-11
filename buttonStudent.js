import {LitElement} from 'lit';
import {buttonTemplate} from './buttton-template'

class buttonStudent extends LitElement {

    render() {
        return buttonTemplate(this);
    }

    static get properties() {
        return {
            ButtonClicked: { Type: Boolean},
            studentCheckBoxClicked: { Type: Boolean}
        };
    }

    constructor() {
        super();
        this.myButton = document.getElementById("myButton");
        this.myButton.addEventListener("click", this.handleClick.bind(this));
        this.ButtonClicked = false;
        this.studentCheckBoxClicked = false;
    }

    handleClick() {
       this.ButtonClicked = true;
    }

    studentcheckBox(e) {
        this.studentCheckBoxClicked = true;
    }
}

customElements.define('button-student', buttonStudent);