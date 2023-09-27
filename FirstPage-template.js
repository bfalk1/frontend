import { html } from 'lit';
import { InputString } from './input-string';
import {InfoboxPage} from './infobox';
import { Navbar } from './navbar';


export const FirstPageTemplate = (context) => {
    return html `
    <style>
    .button {
        background-color: rgb(6, 28, 113);
        color: #fff;
        padding: 10px 20px;
        border: none;
        cursor: pointer;
        border-radius: 10px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    }
    .inputText {
      border-radius: 5px;
      width: 270px;
      background-color: #faf7f7;
      height: 30px;
      border-style: solid;
      border-color: lightgray;
      margin-left: 5px;
      margin-right: 5px;
  }
</style>
    <div style="position: fixed;">
    <div 
    style=
    "width:400px; 
    height: 467px;
    position: relative;
    background-color:whitesmoke;
    border-radius: 20px;
    top: 150px;
    left: 150px;"
    >
      <div
      style=
      " background-color: rgb(6, 28, 113);
      border-radius: 10px;
      height: 50px;
      text-align: center;
      width: 400px;
      font-size: x-large;
      font-family: sans-serif;
      color: white;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);"
      >
      Sign Up</div>
      <div style ="
      position: relative;
      top: 18px;
      width: 300px;
      left: 50px;
      
      ">
      <header style=
        "background-color: rgb(6, 28, 113);
        height: 30px;
        border-radius: 10px;
        color: white;
        font-size: x-large;
        text-align: center;
        padding: 10px 0;
        width: 100%;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);">Already a Member ?</header>

    </div>

    
    
    
    ${context.studentCheckBoxClicked ? html`<style>
    .inputText {
      flex: 1;
      border-radius: 5px;
      width: 250px;
      background-color: #faf7f7;
      height: 30px;
      border-style: solid;
      border-color: lightgray;
      margin-left: 5px;
      margin-right: 5px;
  }
  .button {
      background-image: rgb(6, 28, 113);
      color: #fff;
      padding: 10px 20px;
      border: none;
      cursor: pointer;
      border-radius: 10px;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }
  .labelClass {
      color: #aeaeae;
  }
  .container {
      width: 800px;
      margin: 0 auto; /* Center the container horizontally */
  }

  .row {
      display: flex;
      margin-bottom: 20px;
  }

  </style>
  
  <div style="
      height: 600px;
      width: 800px;
      position: relative;
      top: -166px;
      left: -100px;
      background-color: white;
      border-radius: 10px;
      border-style: solid;
      border-color: lightgray;
     " class="container">
     <div style="height: 55px;
     background-color: rgb(6, 28, 113);
     border-radius: 9px;
     border-bottom-left-radius: 0;
     border-bottom-right-radius: 0;
     color: white;
     text-align: center;
     font-size: x-large;
     margin-bottom: 10px;
     border-bottom-style: solid;
     border-color: lightgray;"
 >About You</div>
 
     <div class="row">
          <div class="input-component">
            <input-string
            width=250
            placeholder="First Name"
            type="First Name"
            >
            </input-string>
          </div>
          <div class="input-component">
            <input-string
            width=250
            placeholder="Last Name"
            type="Last Name"
            >
            </input-string>
          </div>
          <div class="input-component">
            <input-string
            width=250
            placeholder="Age"
            type="Age"
            >
            </input-string>
          </div>
      </div>

      <div class="row">
          <div class="input-component">
            <input-string
            width=250
            placeholder="Email"
            type="Email"
            >
            </input-string>
          </div>
          <div class="input-component">
                <input-string
                width=250
                placeholder="Phone Number"
                type="Phone Number"
                >
                </input-string>
          </div>
          <div class="input-component">
            <input-string
            width=250
            placeholder="School"
            type="School"
            >
            </input-string>
          </div>
      </div>

      <div class="row">
          <div class="input-component">
            <input-string
            width=250
            placeholder="Years Completed"
            type="Years Completed"
            >
            </input-string>
          </div>
          <div class="input-component">
            <input-string
            width=250
            placeholder="GPA"
            type="GPA"
            >
            </input-string>
          </div>
      </div>
      <div style="
      height:18.5px;
      margin-left: 5px;
      color: red;
        ">
      ${context.error ? html`${context.error}` : html``}
      </div>
      <button class="button" id="'submitButton" @focusout=${(e) => context.routeToHome(e)} style=
      "position: relative;
      top: 306px;
      left: 10px;"
      >
      I'll do this later</button>
      <button class="button" @click=${(e) => context.routeToHome(e)} style=
      "position: relative;
      top: 306px;
      left: 570px;"
      >
      Continue</button>
  </div>` : 
  html ``}
  
    <div style="
      width: 298px;
      height: 300px;
      border-style: solid;
      border-color: lightgrey;
      position: relative;
      left: 50px;
      top: 0px;
      border-top-style: none;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;">
      <p style="
      margin: 0px;
      position: relative;
      top: 30px;
      text-align: center;
      font-size: x-large;"
      >Login</p>
      <input type="text" style="position: relative;
      top: 80px;" class="inputText" placeholder="Email">
      <input type="text" style="position: relative;
      top: 90px;"class="inputText" placeholder="Password">
    </div>
      <button class="button" id="myButton" style=
      "position: relative;
      top: 22px;
      left: 10px;"
      @click=${(e) => context.studentcheckBox(e)}
      >
      I'm a Student</button>
      <button class="button" style=
      "position: relative;
      top: 22px;
      left: 134px;"
      @click=${(e) => context.employeecheckBox(e)}
      >
      I'm an Employer</button>
  </div>
  
</div>
<info-box> </info-box >

    `;
}

function buildPreviousEmployment() {
    console.log("here");
    return html`<div class="row">
    <div class="input-component">
      <input-string
      width=250
      placeholder="Position"
      type="Position"
      >
      </input-string>
    </div>
    <div class="input-component">
          <input-string
          width=250
          placeholder="Company"
          type="Company"
          >
          </input-string>
    </div>
    <div class="input-component">
      <input-string
      width=250
      placeholder="Start Date"
      type="Start Date"
      >
      </input-string>
    </div>
    <div class="input-component">
      <input-string
      width=250
      placeholder="End Date"
      type="End Date"
      >
      </input-string>
    </div>
</div>`
}