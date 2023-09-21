import { html, css } from 'lit';

export const PopupTemplate = (context) => {
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
      
      .close-button{
        background-color: red;
        position: absolute;
        top: 0%;
        right: 0%;
      }
      
    </style>

    
    
      <div class="popup" @click=${handleBackgroundClick}>
        <div class="popup-content">
          <button class="close-button" @click=${(e) => context.closePopup()} >X</button>
          <h1>${context.popupData.title}</h1>
          <p>${context.popupData.longdescription}</p>
          <button class="enroll-button" @click=${(e) => context.handleEnroll(e)}>Enroll</button>
        </div>
      </div>
  `;
};
