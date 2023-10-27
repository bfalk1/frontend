import { html, css } from 'lit';
import {PopupPage} from '../popup/popup';

export const infoboxTemplate = (context) => {
  return html`
    <style>
      .box {
        width: 45%;
        height: 65%;
        position: absolute;
        right: 5%;
        top: 20%;
        background-color: white;
        border: 1px solid lightgrey;
        border-radius: 10px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        align-items: center;
        padding:2%;
        
      }

      .title {
        font-size: 28px;
        color: 62929E;
      }

      .description {
        font-size: 25px; /* Increase the font size */
        font-weight: bold; /* Make the text bold */
        text-align: left; /* Align the text to the left */
        color: black;
        padding-left:5%
    }


      .features {
        display: flex;
        justify-content: space-around;
        width: 80%;
      }

      .feature {
        text-align: center;
        max-width: 30%;
        font-size: 17px;
      }
      .icon {
        width:130px;
        margin-bottom: 10px;
        color: #0078d4; /* Use your brand color */
      }
      .icons {
        width:150px;
    
        color: #0078d4; /* Use your brand color */
      }
      
      .button {
        background-color: rgb(6, 28, 113);
        color: #fff;
        padding: 10px 20px;
        border: none;
        cursor: pointer;
        border-radius: 10px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
        
      }
    </style>
    <div class="box">
      <p class="description">Need a Job? Showcase your skills in hackathon style competition, WIN BIG PRIZES. </p>
      <div class="features">
        <div class="feature">
        <img src="/Assets/CompetitionB.png" class="icon" alt="Logo">
          <p>Compete for Jobs</p>
        </div>
        <div class="feature">
        <img src="/Assets/ExperienceB.png" class="icon" alt="Logo">
          <p>Gain Experience</p>
        </div>
        <div class="feature">
        <img src="/Assets/RecrutingB.png" class="icon" alt="Logo">
          <p>Simplify Recruiting</p>
        </div>
      </div>
      <pop-up 
    buttonTitle = "Learn more"
    >
    </pop-up>
    </div>
    
  `;
};