import { html} from 'lit';
import { EventCard } from '../../Components/eventCard/eventCard';

export const MyEventsTemplate = (context) => {
    const handleBackgroundClick = (e) => {
        if (e.target.classList.contains('popup')) {
            context.closePopup();
        }
    };
    const eventData = [
        {
          "id": 1,
          "title": "Web Dev",
          "start-date": "2023-10-15",
          "end-date": "2023-10-15",
          "location": "Google",
          "shortdescription": "A conference on the latest technology trends and innovations.",
          "longdescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          "img": "https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1024x768_scale,f_auto,q_auto:best/streams/2013/March/130326/1C6639340-google-logo.jpg"
        },
        
        
      ];
    
    return html`
    <style>
      .event-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        overflow-y: auto;
        max-height: 800px;
        padding-top:80px;
       
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
        display: flex;
        cursor: pointer;
      }

      .popup-content {
        background-color: white;
        padding: 20px;
        border-radius: 5px;
        text-align: left;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1010;
        width: 70%;
        height: 80%;
      }
      .card-button {
        background-color: white;
        color: black;
        border: none;
        padding: 10px 20px;
        display: inline-block;
        cursor: pointer;
        border-radius: 5px;
      }
      .close-button{
        background-color: red;
        position: absolute;
        top: 0%;
        right: 0%;
      }
      .enroll-button{
        background-color: rgba(0, 0, 0, 0.2) ;
        position: absolute;
        left: 10%%;
      }
    </style>

    <div class="event-grid">
      ${eventData.map(event => html`
        <button class="card-button" @click=${(e) => openPopup(e, event)}>
          <event-card
            title=${event.title}
            description=${event.shortdescription}
            img=${event.img}
            placeholder=""
          ></event-card>
        </button>
      `)}
    </div>

    ${context.popupOpen ? html`
      <div class="popup" @click=${handleBackgroundClick}>
        <div class="popup-content">
          <button class="close-button" @click=${(e) => context.closePopup()} >X</button>
          <h1>${context.popupData.title}</h1>
          <p>${context.popupData.longdescription}</p>
          <button class="enroll-button" @click=${(e) => context.handleEnroll(e)}>Enroll</button>
        </div>
      </div>`
            : html``}
  `;

};