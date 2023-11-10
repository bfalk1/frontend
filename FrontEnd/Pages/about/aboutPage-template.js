import { html, css } from 'lit';
import { Navbar } from '../../Components/navbar/navbar';




export const AboutPageTemplate = (context) => {
  

  return html`
  

<style>
  /* Basic reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Body and typography styles */
body {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
  padding: 20px;
}

header, section, footer {
  margin-bottom: 40px;
}

/* Header styles */
header {
  text-align: center;
  padding: 20px;
}

h1 {
  font-size: 2em;
  color: #000;
  margin-bottom: 10px;
}

p {
  margin-bottom: 20px;
  color: #555;
}

.company-logos {
  display: flex;
  justify-content: center;
  gap: 20px;
}

/* Section styles */
section {
  padding: 20px;
}

.global-scale, .journey {
  background-color: #f4f4f4;
  border-radius: 8px;
  padding: 20px;
}

.leadership-team {
  text-align: center;
}

.profiles {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

/* Footer styles */
footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 20px;
}

footer a {
  color: #0af;
  text-decoration: none;
}

/* Responsive styles */
@media (max-width: 768px) {
  .company-logos, .profiles {
    flex-direction: column;
  }

  header h1, footer h2 {
    font-size: 1.5em;
  }
}

</style>
<body>
<header>
  <nav>
    <!-- Navigation links would go here -->
  </nav>
  <h1>We're building a payments ecosystem to fuel your growth</h1>
  <p>By sourcing best in class payments providers in each region, so that you don't have to.</p>
  <!-- Placeholder for company logos -->
  <div class="company-logos">
    <!-- Company logos would go here -->
  </div>
</header>

<main>
  <section class="global-scale">
    <h2>Helping your business scale globally</h2>
    <p>Global payments are painful — but they don't have to be. With our platform, you can unlock access to new markets through one contract, and one API.</p>
  </section>

  <section class="leadership-team">
    <h2>Meet the Leadership Team</h2>
    <!-- Placeholder for leadership team profiles -->
    <div class="profiles">
      <!-- Profiles would go here -->
    </div>
  </section>

  <section class="journey">
    <h2>We're on an exciting journey to change the payments landscape forever</h2>
    <p>We're an ambitious and creative team based across the UK and Europe. We are all hugely passionate about making payments simpler, and most importantly, about building a solution that enhances our partners' ability to reach new customers.</p>
  </section>
</main>


</body>


  `;
};
