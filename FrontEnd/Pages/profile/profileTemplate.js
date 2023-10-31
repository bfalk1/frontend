import { html} from 'lit';
import { EventCard } from '../../Components/eventCard/eventCard';
import { PopupPage } from '../../Components/popup/popup';
import { InputString } from '../../Components/input-string/input-string';
import { InputParagraph } from '../../Components/input-paragraph/input-paragraph';

export const ProfileTemplate = (context) => {
  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains('popup')) {
        context.closePopup();
    }
};

const openPopup = (e, eventData) => {
  context.setPopupData(eventData);
  context.togglePopup(e);
};
  
  return html`
    <style>
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100vh; /* This ensures the container takes up the full viewport height */
      }
      .container-popup {
        width: 50%;
        background-color: #ffffff;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }

      a {
        color: #007BFF;
        text-decoration: none;
      }

      p {
        font-family: arial,sans-serif;
        color: #292929;
        font-size: large;
      }
    
      a:hover {
          text-decoration: underline;
      }

      body {
        font-family: Arial, sans-serif;
        background-color: #f5f5f5;
        padding: 20px;
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
      .card-button {
        color: black;
        background-color: white;
        display: inline-block;
        cursor: pointer;
        border: none; /* Remove the border */
        padding: 0; /* Remove padding */
        margin-bottom: 10px;
      }
      .close-button{
        background-color: red;
        position: absolute;
        top: 0%;
        right: 0%;
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

      .profile-box {
        
        background-color: white;
        width: 90%;
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
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
        width: 99%;
        border-radius: 5px;
        padding: 1%;
        margin-top: 10px;
        overflow-y: auto;
      }

      .experience-box {
        background-color: white;
        width: 90%;
        border-radius: 5px;
        box-shadow: 1px 1px 1px 0 rgba(0, 0, 0, 0.3);
        padding: 1%;
        margin-top: 10px;
        margin-bottom: 10px;
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
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      background-color: #f7f7f7;
  }

  .job-container {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 20px;
}

.job-card {
    display: flex;
    align-items: center;
    padding: 20px;
    background-color: white;
    border-radius: 8px;
    margin-bottom: 2px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

  .job-logo {
      width: 50px;
      height: 50px;
      display: inline-block;
      vertical-align: middle;
  }
  .job-title {
    display: inline-block;
    vertical-align: middle;
    margin-left: 20px;
}

.job-title h2 {
    margin: 0;
    font-size: 18px;
}

.job-details {
    margin-top: 10px;
    font-size: 14px;
    color: #777;
}
.skills-container {
  display: flex;
  flex-wrap: wrap;
}
.skill-item {
  flex: 0 0 50%;  /* takes up half the width of the container */
  list-style-type: disc;  /* bullet point style */
  padding: 5px;
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
        <h1 style="border-bottom: lightgray; color:rgb(6, 28, 113);
        border-bottom-style: solid; margin-bottom:2px;margin-top: 0px">${context.user.FirstName} ${context.user.LastName}</h1>
        <div class="h-stack" style="width:50%">
          <h4 class=""> Student at ${context.user.school}</h4>
          <h4 class="">GPA: ${context.user.gpa}</h4>
          <h4 class="">Year: ${context.user.year}</h4>
        </div>
        <div class="h-stack">
          <h4 class="">${context.user.city}, ${context.user.province}</h4>
          </div>
        <div>
        <h2 style="border-bottom: lightgray; color:rgb(6, 28, 113);
        border-bottom-style: solid;">About Me</h2>
        <p>${context.user.aboutMe}</p>
        </div>
        <h2 style="border-bottom: lightgray; color:rgb(6, 28, 113);
        border-bottom-style: solid; margin-bottom:2px;margin-top: 10px">Contact Information</h2>
        <div class="h-stack">
        <h4 class="">${context.user.email}</h4>
        </div>
      </div>
        <div class="profile-box" style="margin-top:10px;">
        <h1 style="border-bottom: lightgray; color:rgb(6, 28, 113);
        border-bottom-style: solid;">Past Events</h1>
      <div class="event-grid">
        ${context.eventData.map(event => html`
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
      </div>
      <div class="experience-box">
          <h1 style="color:rgb(6, 28, 113); border-bottom: lightgray; border-bottom-style: solid; margin-bottom:10px;">Experience</h1>
          <div class="job-container">
          ${context.experience.map(event => html`
          <div class="job-card">
          <div class="job-title">
          <h2>${event.position}</h2>
          <div class="job-details">
            ${event.company}<br>
            ${event.StartDate}- ${event.EndDate}<br>
            ${event.city}, ${event.province}, ${event.country} · Hybrid
            <br>${event.description}
          </div>
          </div>
          </div>
        `)}
          ${context.isCurrentUsersPage ? html` <pop-up buttonTitle="+" .content=${xptemplate(context)}></pop-up>` :html ``}
      </div>
        </div>
        <div class="experience-box">
          <h1 style="color:rgb(6, 28, 113); border-bottom: lightgray; border-bottom-style: solid; margin-bottom:10px;">Skills</h1>
          <ul class="skills-container">
          ${context.user && context.user.skills ? context.user.skills.map(skill => html`
          <li class="skill-item">${skill}</li>
        `) : html`<li class="skill-item">No skills available</li>`}
        </ul>
          ${context.isCurrentUsersPage ? html` <pop-up buttonTitle="+" width=600 .content=${skilltemplate(context)}></pop-up>` :html ``}
        </div>
    </div>
    ${context.popupOpen ? html`
    <div class="popup" @focusout=${handleBackgroundClick}>
    <body>
    <div class="container-popup">
    <button class="close-button" @click=${(e) => context.closePopup(e,context.popupData.id)} >X</button>
        <h2 style="border-bottom: lightgray; color:rgb(6, 28, 113);
        border-bottom-style: solid; margin-bottom:2px;margin-top: 10px">${context.popupData.eventTitle}</h2>
        <p>${context.popupData.eventDescription}</p>
        <p>${context.popupData.eventStartDate} - ${context.popupData.eventEndDate}</p>
        <h2 style="border-bottom: lightgray; color:rgb(6, 28, 113);
        border-bottom-style: solid; margin-bottom:2px;margin-top: 30px">${context.popupData.companyName} Company Information</h2>
        <p>${context.popupData.longdescription}</p>
    </div>
      </body>
      </div>
    
      
      `: html``}
    
  `;
};


const xptemplate = (context) =>{
  return html`
  <style>
  .row {
    display: flex;
    margin-bottom: 20px;
    flex-wrap: wrap; 
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

@media (max-width: 600px) {
  .input-component {
      min-width: auto; /* Let the components take the full width */
      width: 100%; /* Take full width */
  }

  .button {
      width: 100%; /* Let the button take the full width */
      margin-top: 10px; /* Space from the above element */
  }
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
  <input-string width=250px; placeholder="Country" type="country"></input-string>
  </div>
  <div class="input-component">
  <input-string width=250px; placeholder="Province" type="province"></input-string>
  </div>
  <div class="input-component">
  <input-string width=250px; placeholder="City" type="city"></input-string>
  </div>
  <div class="input-component">
  <input-paragraph width=250 placeholder="Description" type="description"></input-paragraph>
  </div>
</div>

    <button class="button" @click=${(e) => context.addExperience(e, {})}>Add</button>
  </div>
  `;

}

const skilltemplate = (context) =>{
  return html`
  <style>
  
  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .close-btn {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
  }
  
  .required {
    color: red;
  }
  
  .modal-body {
    margin-top: 20px;
  }
  
  #skill-input {
  }
  
  .suggested-skills {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 20px;
  }
  
  .suggested-skills button {
    padding: 5px 15px;
    background: #f1f1f1;
    border: 1px solid #ccc;
    border-radius: 20px;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  .suggested-skills button:hover {
    background: #ddd;
  }
  
  .save-btn {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: rgb(6, 28, 113);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  .save-btn:hover {
    background: darkblue;
  }
  </style>
  <div class="modal">
  <div class="modal-header">
    <h2>Add skill</h2>
  </div>
  <div class="modal-body">
    <p><span class="required">*</span> Indicates required</p>
    <label for="skill-input">Skill<span class="required">*</span></label>
    <input-string width=95% placeholder="" id="skill-input" type="skill"></input-string>
    <h3>Suggested based on your profile</h3>
    <div class="suggested-skills">
      <button>SQL</button>
      <button>Node.js</button>
      <button>Artificial Intelligence (AI)</button>
      <button>DevOps</button>
      <button>C++</button>
      <button>Express.js</button>
      <button>Agile Methodologies</button>
      <button>Confluence</button>
      <button>Object Oriented Design</button>
      <button>Full-Stack Development</button>
    </div>
    <button class="save-btn" @click=${(e) => context.saveSkill(e)}>Save</button>
  </div>
</div>
`}

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

