import { html } from 'lit';

export const FirstPageTemplate = (context) => {
    return html `
    <style>
    .button {
        background-image: linear-gradient(to left, #000cf9, #00e1ff);
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
    <div id="outlet"></div>
    <script type="module" src="router.js"></script>
      <div
      style=
      " background-image: linear-gradient(to left, #000cf9, #00e1ff);;
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
        "background-color: blue;
        height: 30px;
        border-radius: 10px;
        color: white;
        font-size: xx-large;
        text-align: center;
        padding: 10px 0;
        width: 100%;
        background-image: linear-gradient(to left, #000cf9, #00e1ff);
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
      background-image: linear-gradient(to left, #000cf9, #00e1ff);
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
     background-image: linear-gradient(to left, #000cf9, #00e1ff);
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
          <input type="text" id="first_name" class="inputText" name="first_name" placeholder="First Name">
          </div>
          <div class="input-component">
          <input type="text" id="last_name" class="inputText" name="last_name" placeholder="Last Name">
          </div>
          <div class="input-component">
          <input type="text" id="age" class="inputText" name="age" placeholder="Age">
          </div>
      </div>

      <div class="row">
          <div class="input-component">
          <input type="text" id="email" class="inputText" placeholder="email">
          </div>
          <div class="input-component">
          <input type="text" id="phone" class="inputText" placeholder="phone">
          </div>
          <div class="input-component">
              <input type="text" id="phone" class="inputText" placeholder="School">
          </div>
      </div>

      <div class="row">
          <div class="input-component">
          <input type="text" class="inputText" placeholder="Years completed">
          </div>
          <div class="input-component">
          <input type="text" class="inputText" placeholder="GPA">
          </div>
      </div>
      <button class="button" @click=${(e) => context.routeToHome(e)} style=
      "position: relative;
      top: 325px;
      left: 10px;"
      >
      I'll do this later</button>
      <button class="button" @click=${(e) => context.routeToHome(e)} style=
      "position: relative;
      top: 325px;
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
      >
      I'm an Employer</button>
</div>
</div>
    `;
}