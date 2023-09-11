import { html } from 'lit';

export const buttonTemplate = (context) => {
    return html `${context.ButtonClicked ? html`
    <style>
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
    </div>
    
    
    
    
        ` 
    : 
    html ``}`
}