import { html, css } from 'lit';
import { InputImage } from '../input-image/input-image';
import {CountdownTimer} from '../countdown-timer/countdown-timer';

export const eventCardTemplate = (context) => {
  return html`
    <style>
      .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
        transition: 0.3s;
        border-radius: 10px;
        width: 400px;
        background-color: ${context.colour};
        overflow: hidden;
      }

      .title {
        text-align: left;
        margin: 0;
        color: black;
        font-size: 1.4rem; /* Increased header font size */
        padding-left:3%;
        padding-top:3%;
      }

      .description {
        font-size: 0.9rem;
        text-align: left;
        color: black;
        padding-left:3%;
        padding-top:3%;
      }
      
      .card-img {
        border: 0;
        object-fit: contain;
      }
    </style>

    <div class="card">
      <h3 class="title">${context.title}</h3>
      <p class="description">${context.description}</p>

      <input-image .selectedFile=${context.img}></input-image>
      <countdown-timer></countdown-timer>
    </div>`;
};
