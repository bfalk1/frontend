import { html, css } from 'lit';
import { EventCard } from './eventCard';

export const HomePageTemplate = (context) => {
  
  return html`
  <style> .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 40px
    
  }
  </style>
    <div class="card-container">
      <EventCard 
      title = "Software Dev"
      description = "Good Internship"
      img = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia-cldnry.s-nbcnews.com%2Fimage%2Fupload%2Ft_social_share_1024x768_scale%2Cf_auto%2Cq_auto%3Abest%2Fstreams%2F2013%2FMarch%2F130326%2F1C6639340-google-logo.jpg&tbnid=pKlM-PHd4IX4CM&vet=12ahUKEwjRgf_Uv7mBAxV3DWIAHWHqD2MQMygDegQIARB7..i&imgrefurl=https%3A%2F%2Fwww.nbcnews.com%2Ftechnolog%2Fno-googling-says-google-unless-you-really-mean-it-1c9078566&docid=K8yx_b7zWxx-3M&w=1024&h=601&q=google%20image&client=safari&ved=2ahUKEwjRgf_Uv7mBAxV3DWIAHWHqD2MQMygDegQIARB7"
      placeholder = "Google Image"/> 
    </div>

     
    `;
}
