import { html } from 'lit';
import { InputString } from '../../Components/input-string/input-string';
import { InputPassword } from '../../Components/input-password/input-password';
import { Navbar } from '../../Components/navbar/navbar';
import {Infobox} from '../../Components/infobox/infobox'

export const FirstPageTemplate = (context) => {
  
    return html `
    <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f2f2f2;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
  }
  
  .container {
      display: flex;
      background-color: #fff;
      width: 100%;
      height: 80%;
      position: absolute;
      top: 11%;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
  }
  
  .promo-section, .login-section {
      flex: 1;
      padding: 40px;
      margin-right:10px;
  }
  
  .icons {
      display: flex;
      justify-content: space-between;
      margin: 20px 0;
  }
  
  .icons div {
      display: flex;
      flex-direction: column;
      align-items: center;
  }
  
  .login-section input {
      width: 100%;
      padding: 10px;
      margin: 10px 0;
      border: 1px solid #ddd;
      border-radius: 4px;
  }
  
  .login-btn, .create-account-btn, .ready-btn {
      width: 100%;
      padding: 10px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-weight: bold;
      color: white;
  }
  
  .login-btn {
      background-color: #1877F2;
  }
  
  .create-account-btn {
      background-color: #42B72A;
  }
  
  .ready-btn {
      background-color: #3B5998;
  }
  
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
      margin-bottom: 10px;
      width:100%;
  }

  .input-component {
    width: 30%;
  }
  .button-container {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-left: 10px;
    margin-right: 10px;
  }

  </style>
  <div style="display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;">
      <div 
        style=
        "width: 65%;
        height: 70%;
        background-color:white;
        border-radius: 10px;
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
          Signup</div>
          
          <div class="row">
        <div style="
        text-align: center;
        width: 100%;
        color: rgb(6, 28, 113);
        font-size: x-large;
        padding-top: 10px;"
        >Login Infomation</div>
    </div>
    <div class="row">
              <div class="input-component" style="position: relative;
              top: 10px">
                <input-string
                width=90%;
                placeholder="Email"
                type="email"
                >
                </input-string>
              </div>
              <div class="input-component">
                  <input-password 
                    width=90%
                    placeholder="Password"
                    type="Password">
                  </input-password>
              </div>
              <div class="input-component">
              <input-password
                width=90%
                placeholder="Confirm Password"
              type="Confirm Password"
              >
              </input-password>
        </div>
          </div>
          <div class="row">
        <div style="
        text-align: center;
        width: 90%;
        color: rgb(6, 28, 113);
        font-size: x-large;"
        >Personal Information</div>
    </div>
        <div class="row">
              <div class="input-component">
                <input-string
                width=90%
                placeholder="First Name"
                type="FirstName"
                >
                </input-string>
              </div>
              <div class="input-component">
                <input-string
                width=90%
                placeholder="Last Name"
                type="LastName"
                >
                </input-string>
              </div>
              <div class="input-component">
                <input-string
                width=90%
                placeholder="Age"
                type="Age"
                >
                </input-string>
              </div>
          </div>

          <div class="row">
              <div class="input-component">
                    <input-string
                    width=90%
                    placeholder="Phone Number"
                    type="Phone Number"
                    >
                    </input-string>
              </div>
              <div class="input-component">
                <input-string
                width=90%
                placeholder="School"
                type="school"
                >
                </input-string>
              </div>
              <div class="input-component">
                <input-string
                width=90%
                placeholder="Years Completed"
                type="year"
                >
                </input-string>
              </div>
          </div>

          <div class="row">
              <div class="input-component">
                <input-string
                width=90%
                placeholder="GPA"
                type="gpa"
                >
                </input-string>
              </div>
              <div class="input-component">
                <input-string
                width=90%
                placeholder="City of residence"
                type="city"
                >
                </input-string>
              </div>
              <div class="input-component">
                <input-string
                width=90%
                placeholder="Province"
                type="province"
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
          <div class="button-container">
            <button class="button" @click=${(e) => context.studentuncheckBox(e)}>
              Back
            </button>
            <div>
              <button class="button" @click=${(e) => context.routeToHome(e)}>
                Continue
              </button>
            </div>
          </div>
      </div>
    </div>
    </div>
 ` : 
  html `
  <body>

    <div class="container">
        <!-- Promotional Section -->
        <div class="promo-section">
        ${!context.studentCheckBoxClicked ? html`<info-box></info-box>` : html``}
        </div>
        <div class="login-section">
        <div style="position:absolute;top:20%;width: 40%;
        height: 42%;
        border: 1.5px solid lightgray;
        border-radius: 10px;
        padding-top: 10px;">
        <h2 style="border-bottom: lightgray; color:rgb(6, 28, 113);
        border-bottom-style: solid;text-align:center;">Login</h2>
        <input-string style="padding-bottom:10px;"
        width=97%
        placeholder="Email"
        type="Email">
      </input-string>
      <input-password 
        width=97%
        placeholder="Password"
        type="Password">
      </input-password>
      ${context.error ? html`${context.error}` : html``}
      <button class="button" id="myButton" style=
      "
    width: 98.5%;
    margin-left: 5px;
    margin-top: 10px;
    font-size: 15px;
    padding-bottom: 10px;"
      @click=${(e) => context.memberLogin(e)}
      >Ready</button>
      <button id="myButton" style=
      "background-color: rgba(250,235,240,255);
        color: black;
        padding: 5px 10px;
        border: none;
        cursor: pointer;
        border-radius: 6px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
        width: 98.5%;
        margin-left: 5px;
        margin-top: 10px;
        font-size: 15px;
        padding-bottom: 10px;
        "
      @click=${(e) => context.studentcheckBox(e)}
      >
      Don't have an account? Sign up</button>
      </div>
        </div>
    </div>

</body>
`}
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