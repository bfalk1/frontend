import { html } from 'lit';
import { InputString } from '../../Components/input-string/input-string';
import { InputPassword } from '../../Components/input-password/input-password';
import { Navbar } from '../../Components/navbar/navbar';
import {Infobox} from '../../Components/infobox/infobox'

export const FirstPageTemplate = (context) => {
  const headerText = context.studentCheckBoxClicked ? "Sign Up" : "Login";
    return html `
    <style>
    .button {
        background-color: rgb(6, 28, 113);
        color: #fff;
        padding: 10px 20px;
        border: none;
        cursor: pointer;
        border-radius:6px;
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
    <div 
    style=
    "width:30%; 
    height: 70%;
    position: relative;
    background-color:white;
    border-radius: 10px;
    position: absolute;
    left:10%;
    top: 20%;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);"
    
    >
      <div
      style=
      " background-color: rgb(6, 28, 113);
      border-radius: 10px;
      height: 60px;
      text-align: center;
      width: 100%;
      font-size: 30px;
      font-family: sans-serif;
      color: white;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;"
      >
      ${headerText}</div>
      <div style ="
      position: relative;
      top: 18px;
      width: 300px;
      left: 50px;
      ">
      

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
      width: 804px;
      position: relative;
      top: 0%;
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
    <div style="
    text-align: center;
    width: 100%;
    color: rgb(6, 28, 113);
    font-size: x-large;"
    >Login Infomation</div>
 </div>
 <div class="row">
          <div class="input-component">
            <input-string
            width=250px;
            placeholder="Email"
            type="email"
            >
            </input-string>
          </div>
          <div class="input-component">
              <input-password 
                width=250
                placeholder="Password"
                type="Password">
              </input-password>
          </div>
          <div class="input-component">
          <input-password
            width=250
            placeholder="Confirm Password"
          type="Confirm Password"
          >
          </input-password>
    </div>
      </div>
      <div class="row">
    <div style="
    text-align: center;
    width: 100%;
    color: rgb(6, 28, 113);
    font-size: x-large;"
    >Personal Information</div>
 </div>
     <div class="row">
          <div class="input-component">
            <input-string
            width=250
            placeholder="First Name"
            type="FirstName"
            >
            </input-string>
          </div>
          <div class="input-component">
            <input-string
            width=250
            placeholder="Last Name"
            type="LastName"
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
          <div class="input-component">
            <input-string
            width=250
            placeholder="Years Completed"
            type="Years Completed"
            >
            </input-string>
          </div>
      </div>

      <div class="row">
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
      color:rgb(6, 28, 113);
        ">
      ${context.error ? html`${context.error}` : html``}
      </div>
      <button class="button" id="'submitButton" @focusout=${(e) => context.routeToHome(e)} style=
      "position: relative;
      top: 131px;
      left: 10px;"
      >
      I'll do this later</button>
      <button class="button" @click=${(e) => context.routeToHome(e)} style=
      "position: relative;
      top: 131px;
      left: 570px;"
      >
      Continue</button>
  </div>` : 
  html ``}
    <div style="
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 55%;
      height: 50%;
      border-style: solid;
      border-color: lightgrey;
      border-radius: 10px;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      margin: 0 auto; /* Center the container horizontally */
      margin-top:40px;
      padding:30px;
      "
      >
      <p style="
    font-size: x-large;
    color: black;
    font-weight: bold; /* Optionally make the font bold */
">
    Welcome!
</p>

      
      <input-string style="position: relative;
      top: 20px;
      "
        width=278
        placeholder="Email"
        type="Email">
      </input-string>
      <input-password 
      style="position: relative;
      top: 30px; "
        width=278
        placeholder="Password"
        type="Password">
      </input-password>
      <div style="
      height:18.5px;
      margin-left: 5px;
      position: relative;
      top: px;
      color: rgb(6, 28, 113);
      text-align: center;
        ">
      ${context.error ? html`${context.error}` : html``}
      </div>
      <button class="button" id="myButton" style=
      "position: relative;
      top: 20px;
      width: 100%;
      font-size:15px;"
      @click=${(e) => context.memberLogin(e)}
      >Ready</button>
    </div>
      <div style="display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center; 
      padding:20px;">
        <button id="myButton" style=
      "background-color: rgba(250,235,240,255);
        color: black;
        padding: 5px 10px;
        border: none;
        cursor: pointer;
        border-radius: 6px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
        width: 75%;
        "
      @click=${(e) => context.studentcheckBox(e)}
      >
      Don't have an account? Sign up</button></div>
      <!-- <button class="button" style=
      "position: relative;
      top: 22px;
      left: 106px;"
      @click=${(e) => context.employeecheckBox(e)}
      >
      Enterprise sign up</button> -->
  </div>
  
</div>

${!context.studentCheckBoxClicked ? html`<info-box></info-box>` : html``}
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