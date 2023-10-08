import { html } from 'lit-element';
import { SearchBar } from '../search-bar/search-bar';

export const NavbarTemplate = (context) => {

    return html`
    <style>
    .navbar {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      color: white;
      background-color: rgb(6, 28, 113);
      display: flex;
      justify-content: center;
      align-items: center;
      height: 60px; /* Adjust the height as needed */
    }

    .navbar-title {
      font-size: 24px;
      margin: 0;
      margin-left: 10px;
    }

    .profile-button {
      background-color: #555;
      color: #fff;
      border: none;
      padding: 8px 16px;
      cursor: pointer;
    }
    .button {
      background-color: #fff;
      color: rgb(6, 28, 113);
      padding: 10px 20px;
      border: none;
      cursor: pointer;
      border-radius: 10px;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
      margin-left: 5px;
  }

    .dropdown {
      display: ${context.isDropdownOpen ? 'block' : 'none'};
      position: absolute;
      background-color: #555;
      min-width: 160px;
      z-index: 1;
    }

    .dropdown-button {
      background-color: #555;
      color: #fff;
      border: none;
      width: 100%;
      text-align: left;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      cursor: pointer;
    }
    </style>
      <div class="navbar">
      <span class="navbar-title">Blinq</span>
        <button class="button" @click=${(e) => context.routeToFirst(e)}>Landing Page</button>
        <button class="button" @click=${(e) => context.routeToHome(e)}>Home</button>
        <button class="button" @click=${(e) => context.routeToMyEvents(e)}>My Events</button>
        <button class="button" @click=${(e) => context.routeToProfile(e)}>Profile</button>
        <div style="flex-grow: 1;"></div>
        <search-bar width=250></search-bar>
      </div>
    `;
}