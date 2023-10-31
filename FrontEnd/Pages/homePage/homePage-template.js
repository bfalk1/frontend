import { html, css } from 'lit';
import { EventCard } from '../../Components/eventCard/eventCard';
import { InputString } from '../../Components/input-string/input-string';
import { Navbar } from '../../Components/navbar/navbar';




export const HomePageTemplate = (context) => {
  // Function to close the pop-up when clicked outside
  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains('popup')) {
      context.closePopup();
    }
  };


  // Function to open the pop-up with event data
  const openPopup = (e, eventData) => {
    context.setPopupData(eventData);
    context.togglePopup(e);
  };

  return html`
    <style>
      .event-section {
        background-color: white; /* Set the background color to white */
        border-radius: 15px;
        padding: 20px;
        max-width: 90%; /* Set maximum width for the section */
        margin: 0 auto; /* Center the section horizontally */
        margin-top: 105px;
        
    }
    

      .event-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2%;
        max-height: 800px;
        padding-top: 2%;
        width: 95%;
        margin: 0 auto; /* Center the event grid horizontally */
        overflow: hidden;
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
        color: black;
        background-color: white;
        width: 100%;
        display: inline-block;
        cursor: pointer;
        border: none;
        padding: none;
        margin: none;
        transition: 0.3s; /* Add transition for smooth hover effect */
      }
      .card-button:hover {
        
        transform: scale(1.03); /* Scale up the button slightly */
      }
      
      .close-button{
        background-color: red;
        position: absolute;
        top: 0%;
        right: 0%;
      }
      .enroll-button{
          background-color: rgb(6, 28, 113);
          color: #fff;
          padding: 10px 20px;
          border: none;
          cursor: pointer;
          border-radius: 10px;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
          position: absolute;
          left: 10%%;
      }
    </style>

    <h1 style="
    border-bottom: 
    lightgray; 
    position: relative;
    top: 90px;
    text-align: center;
    border-bottom-style: solid; 
    padding-bottom: 10px;
    color: rgb(6, 28, 113);
    margin-top: 0px">Upcoming Events</h1>
    <section class="event-section">
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
    </section>
    

    ${context.popupOpen ? html`
    <div class="popup" @focusout=${handleBackgroundClick}>
    <div class="popup-content">
      <button class="close-button" @click=${(e) => context.closePopup(e,context.popupData.id)} >X</button>
      <h1 style="
      border-bottom: 
      lightgray;
      text-align: center;
      border-bottom-style: solid; 
      margin-bottom:2px;
      color: rgb(6, 28, 113);
      margin-top: 0px">${context.popupData.eventTitle}</h1>
      <h3 style="
      text-align: center;
      border-bottom-style: none; 
      margin-bottom:2px;
      color: rgb(6, 28, 113);
      margin-top: 0px">Event Details</h3>
      <p>${context.popupData.eventDescription}</p>
      <div>${context.popupData.eventStartDate} - ${context.popupData.eventEndDate}</div>
      <h3 style="
      text-align: center;
      border-bottom-style: none; 
      margin-bottom:2px;
      color: rgb(6, 28, 113);
      margin-top: 0px">Company Details</h3>
      <p>${context.popupData.longdescription}</p>
      <h3 style="
      text-align: center;
      border-bottom-style: none; 
      margin-bottom:2px;
      color: rgb(6, 28, 113);
      margin-top: 0px">Attachments and Dowloads</h3>
          ${context.succesfullyEnrolled !==null ? html`<h2 style="
          height:18.5px;
          margin-left: 5px;
          position: relative;
          top: 300px;
          color:rgb(6, 28, 113);">${context.succesfullyEnrolled}</h2>`
          :html`<button class="enroll-button" @click=${(e) => context.handleEnroll(e,context.popupData)}>Enroll</button>`}
        </div>
      </div>`
      : html``}
  `;
};
