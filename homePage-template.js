import { html, css } from 'lit';
import { EventCard } from './eventCard';
import { InputString } from './input-string';

export const HomePageTemplate = (context) => {
  return html`
    <style>
      .event-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr); /* 4 columns */
        gap: 20px; /* Adjust the gap as needed */
        overflow-y: auto; /* Enable vertical scrolling if needed */
        max-height: 600px; /* Set a maximum height for the grid with scrolling */
        padding: 60px; /* Add padding for spacing */
        padding-top: 80px
      }
    </style>
    <div class="event-grid">
      <event-card
        title="Software Dev"
        description="Good Internship"
        img="https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1024x768_scale,f_auto,q_auto:best/streams/2013/March/130326/1C6639340-google-logo.jpg"
        placeholder=""
      ></event-card>
      <event-card
        title="Software Dev"
        description="Good Internship"
        img="https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1024x768_scale,f_auto,q_auto:best/streams/2013/March/130326/1C6639340-google-logo.jpg"
        placeholder=""
      ></event-card>
      <event-card
        title="Software Dev"
        description="Good Internship"
        img="https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1024x768_scale,f_auto,q_auto:best/streams/2013/March/130326/1C6639340-google-logo.jpg"
        placeholder=""
      ></event-card>
      <event-card
        title="Software Dev"
        description="Good Internship"
        img="https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1024x768_scale,f_auto,q_auto:best/streams/2013/March/130326/1C6639340-google-logo.jpg"
        placeholder=""
      ></event-card>
      <event-card
        title="Software Dev"
        description="Good Internship"
        img="https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1024x768_scale,f_auto,q_auto:best/streams/2013/March/130326/1C6639340-google-logo.jpg"
        placeholder=""
      ></event-card>
      
    </div>
  `;
};
