import { html, css } from 'lit';
import {PopupPage} from '../popup/popup';

export const infoboxTemplate = (context) => {
  return html`
    <style>
      .box {
        width: 40%;
        height: 60%;
        position: absolute;
        right: 5%;
        top: 22%;
        background-color: #f4f4f4;
        border: 1px solid lightgrey;
        border-radius: 10px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        
      }

      .title {
        font-size: 28px;
        margin: 0;
        margin-bottom: 20px;
        color: #333;
      }

      .description {
        font-size: 16px;
        text-align: center;
        color: #666;
        margin-bottom: 30px;
      }

      .features {
        display: flex;
        justify-content: space-around;
        width: 80%;
        margin-bottom: 30px;
      }

      .feature {
        text-align: center;
        max-width: 30%;
      }

      .icon {
        font-size: 36px;
        margin-bottom: 10px;
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
      <h1 class="title">Blinq</h1>
      <p class="description">Your platform for competing for jobs by showcasing your skills and building experience through projects.</p>
      <div class="features">
        <div class="feature">
          <span class="icon">🏆</span>
          <p>Compete for Jobs</p>
        </div>
        <div class="feature">
          <span class="icon">📚</span>
          <p>Gain Experience</p>
        </div>
        <div class="feature">
          <span class="icon">👥</span>
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