import { html, css } from 'lit';

export const eventCardTemplate = (context) => {
  return html`<style>
    .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.6);
        transition: 0.3s;
        border-radius: 5px; /* 5px rounded corners */
        width: 300px;
        background-color: white;
        
      }
      .card-img {
        max-width: 100%;
        height: auto;
        border: 0px;
      }
      .title {
        padding-top: 5px;
        text-align: center;
        border-bottom-style: none; 
        margin-bottom:2px;
        color: rgb(6, 28, 113);
        margin-top: 0px;
      }
      .description {
        padding: 5px;
      }
    </style>
    <div class="card">
      <h3 class="title">${context.title}</h3>
      <p class="description">${context.description}</p>
      <img class="card-img" src=${context.img} alt=${context.placeholder}>
    </div>`;
};
