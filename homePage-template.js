import { html, css } from 'lit';
import { EventCard } from './eventCard';
import { InputString } from './input-string';

export const HomePageTemplate = (context) => {
  return html`
    <style>
      .event-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr); /* 4 columns */
        gap: 20x; /* Adjust the gap as needed */
        overflow-y: auto; /* Enable vertical scrolling if needed */
        max-height: 600px; /* Set a maximum height for the grid with scrolling */
        padding: 60px; /* Add padding for spacing */
        padding-top: 80px
      }
      .popup {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.3);
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }

    .popup-content {
      background-color: white;
      padding: 20px;
      border-radius: 5px;
      text-align: center;
      position: absolute;
      top: 50%; /* Center vertically */
      left: 50%; /* Center horizontally */
      transform: translate(-50%, -50%); /* Center the content */
    }
    
    </style>
    
    <div class="event-grid">
      <button @click=${(e) => context.togglePopup(e)}> 
      <event-card
          title="Software Dev"
          description="Good Internship"
          img="https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1024x768_scale,f_auto,q_auto:best/streams/2013/March/130326/1C6639340-google-logo.jpg"
          placeholder=""
        ></event-card>
      </button>
    </div>
    ${context.popupOpen ? html`
      <div class="popup">
        <div class="popup-content">
          <h1 class="">Hello</h1>
        <button @click=${(e) => context.togglePopup(e)} >close</button>
      </div>
        
      </div>` 
      : html``}
  `;
};
