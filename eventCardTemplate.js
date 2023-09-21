import { html, css } from 'lit';

export const eventCardTemplate = (context) => {

  return html`<style>
    .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        border-radius: 5px; /* 5px rounded corners */
        max-width:300px
       
      }
      .card img {
        max-width: 100%;
        height: auto;
      }
      .title{
        padding:5px
      }
      .description{
        padding:5px
      }
      .popup {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.7);
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }

    .popup-content {
      background-color: white;
      padding: 20px;
      border-radius: 5px;
      text-align: center;
    }
    .opened {
    display: flex;
    }
    .closed {
      display: none;
    }
      </style>
      <button class="card" @click=${(e) => context.togglePopup(e)}> 
        <h3 class="title">${context.title}</h3>
        <p class="description">${context.description}</p>
        <img class="card img" src=${context.img} alt=${context.placeholder}>
      </button>
      ${context.popupOpen ? html`<div class="popup-content">
        <h1 class="title">${context.title}</h1>
      </div>` : html``}

      
      
      `

}