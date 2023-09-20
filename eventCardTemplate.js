import { html, css } from 'lit';

export const eventCardTemplate = (context) => {
    return html `<style>
    .card {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        border-radius: 5px; /* 5px rounded corners */
        margin-top: 100px
      }
    
      .card img {
        max-width: 100%;
        height: auto;
      }
      </style>
      <div class="card">
        <h3>${context.title}</h3>
        <p>${context.description}</p>
        <img class="card img" src=${context.img} alt=${context.placeholder}>
      </div>
      `
}