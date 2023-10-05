import { html} from 'lit';
import { EventCard } from '../../Components/eventCard/eventCard';
import { PopupPage } from '../../Components/popup/popup';
import { InputString } from '../../Components/input-string/input-string';

const xptemplate = (context) =>{
  return html`
  <div>
    <h1>Add New Experience</h1>
    <input-string width=250px; placeholder="Position" type="Position"></input-string>
    <input-string width=250px; placeholder="Company" type="Company"></input-string>
    <input-string width=250px; placeholder="Start Date" type="Start Date"></input-string>
    <input-string width=250px; placeholder="End Date" type="End Date"></input-string>
    <input-string width=250px; placeholder="Description" type="Description"></input-string>
    <button @click=${(e) => context.addExperience(e, {})}>Add</button>
  </div>
  `;

}

const user = {
  "uid" : 1,
  "name" : "Benajmin Falkner",
  "school": "Queen's University",
  "year": "3",
  "location": "Kingston",
  "gpa":"4.0"

}
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

export const ProfileTemplate = (context) => {
  
  return html`
    <style>
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100vh; /* This ensures the container takes up the full viewport height */
      }

      .profile-box {
        
        background-color: white;
        width: 50%;
        border-radius: 5px;
        box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.3);
        padding: 1%;
        margin-top: 80px;
        
      }
      .h-stack {
        display: flex;
        justify-content: space-between; /* Space elements evenly */
      }
      .event-grid {
        background-color: white;
        width: 50%;
        border-radius: 5px;
        box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.3);
        padding: 1%;
        margin-top: 10px;
      }
      .experience-box {
        background-color: white;
        width: 50%;
        border-radius: 5px;
        box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.3);
        padding: 1%;
        margin-top: 10px;
      }
      .xp{

      }
    </style>
    <div class="container">
      <div class="profile-box">
        <h1>${user.name}</h1>
        <div class="h-stack">
          <h2 class="">${user.school}</h2>
          <h3 class="">GPA: ${user.gpa}</h3>
          <h3 class="">Year: ${user.year}</h3>
          <div></div>
        </div>
      </div>
      <div class="event-grid">
        <h1>Past Events</h1>
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
      <div class="experience-box">
        <div class="h-stack">
          <h1>Experience</h1>
          <pop-up buttonTitle="+" .content=${xptemplate(context)}></pop-up>
        </div>
      </div>
    </div>
    
  `;
};

