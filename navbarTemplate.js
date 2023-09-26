import { html } from 'lit-element';

export const NavbarTemplate = (context) => {

    return html`
    <style>

    .navbar-title {
      font-size: 24px;
      margin: 0;
    }

    .profile-button {
      background-color: #555;
      color: #fff;
      border: none;
      padding: 8px 16px;
      cursor: pointer;
    }

    .dropdown {
      display: ${this.isDropdownOpen ? 'block' : 'none'};
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
      <div class="navbar-title">Blinq</div>
       
    `;

}
