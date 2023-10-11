import { html, css } from 'lit';
import { InputImage } from '../input-image/input-image';

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
      .header-title {
        border-bottom-style: None; 
        margin-bottom:2px;
        color: rgb(6, 28, 113);
        margin-top: 0px
      }
    </style>
    <div class="card">
      <h3 class="header-title">${context.title}</h3>
      <p class="description">${context.description}</p>
      <input-image .selectedFile=${context.img}></input-image>
    </div>`;
};
