import { html} from 'lit';
import { EventCard } from '../../Components/eventCard/eventCard';
import { PopupPage } from '../../Components/popup/popup';
import { InputString } from '../../Components/input-string/input-string';
import { InputParagraph } from '../../Components/input-paragraph/input-paragraph';

const xptemplate = (context) =>{
  return html`
  <style>
  .row {
    display: flex;
    margin-bottom: 20px;
   } 
   .button {
    background-color: rgb(6, 28, 113);
    color: #fff;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    width: 10%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
}
  </style>
  <div>
  <h1>Add New Experience</h1>
  <div class="row">
  <div class="input-component">
  <input-string width=250px; placeholder="Position" type="position"></input-string>
  </div>
  <div class="input-component">
  <input-string width=250px; placeholder="Company" type="company"></input-string>
  </div>
  <div class="input-component">
  <input-string width=250px; placeholder="Start Date" type="StartDate"></input-string>
</div>
</div>
<div class="row">
  <div class="input-component">
  <input-string width=250px; placeholder="End Date" type="EndDate"></input-string>
  </div>
  <div class="input-component">
  <input-paragraph width=250 placeholder="Description" type="description"></input-paragraph>
  </div>
</div>

    <button class="button" @click=${(e) => context.addExperience(e, {})}>Add</button>
  </div>
  `;

}

const personalInfoTemplate = (context) =>{
  return html`
  <style>
  .row {
    display: flex;
    margin-bottom: 20px;
   } 
   .button {
    background-color: rgb(6, 28, 113);
    color: #fff;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    width: 10%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
}
  </style>
  <div>
  <h1>Add New Experience</h1>
  <div class="row">
  <div class="input-component">
  <input-string width=250px; placeholder="FirstName" type="FirstName"></input-string>
  </div>
  <div class="input-component">
  <input-string width=250px; placeholder="School" type="School"></input-string>
  </div>
  <div class="input-component">
  <input-string width=250px; placeholder="GPA" type="GPA"></input-string>
</div>
</div>
<div class="row">
  <div class="input-component">
  <input-string width=250px; placeholder="Expected graduation Year" type="Expected graduation Year"></input-string>
  </div>
  <div class="input-component">
  <input-string width=250px; placeholder="About me" type="aboutMe"></input-string>
  </div>
</div>

    <button class="button" @click=${(e) => context.editPersonalInformation(e)}>Save</button>
  </div>
  `;

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
        border-radius:10px;
        
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
        border-radius:10px;
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
    .card-button {
      border: none;
      padding: 0;
      margin: 0;
      background:none;
    }
      .xp{

      }
    </style>
    <div class="container">
      <div class="profile-box">
      ${context.isCurrentUsersPage ? html`<div class="button-container" style="display: flex; justify-content: flex-end;">
      <svg style="width:20px;position:relative;top: 2px;
      left: 30px;
  "viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z"/></svg>
      <pop-up width=30 height=30 buttonTitle="" .content=${personalInfoTemplate(context)}></pop-up>
      </div>
      `
      :html``}
        <h1 style="border-bottom: lightgray;
        border-bottom-style: solid; margin-bottom:2px;margin-top: 0px">${context.user.FirstName} ${context.user.LastName}</h1>
        <div class="h-stack">
          <h3 class="">${context.user.school}</h2>
          <h3 class="">GPA: ${context.user.gpa}</h3>
          <h3 class="">Year: ${context.user.year}</h3>
          <div></div>
        </div>
        <div>
        <h2 style="border-bottom: lightgray;
        border-bottom-style: solid;">About Me</h2>
        ${context.user.aboutMe}
        </div>
      </div>
      <div class="event-grid">
        <h1 style="border-bottom: lightgray;
        border-bottom-style: solid;">Past Events</h1>
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
          ${context.isCurrentUsersPage ? html` <pop-up buttonTitle="+" .content=${xptemplate(context)}></pop-up>` :html ``}
        </div>
      </div>
    </div>
    
  `;
};

