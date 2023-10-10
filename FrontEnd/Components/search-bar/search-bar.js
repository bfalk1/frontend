import { LitElement, html } from 'lit';
import {searchBarTemplate } from './search-bar-template';
import { Router } from "@vaadin/router";

export class SearchBar extends LitElement {
    render() {
      return searchBarTemplate (this);
    }

    static get properties() {
        return {
           value: { type: String },
           width: { type: String },
           placeholder: { type: String },
           type: { type: String },
           users: { type: Object },
           usersInSearch: { type: Object }
        };
        }
    
    constructor() {
        super();
        this.value = "";
        this.width = "";
        this.placeholder = "";
        this.type = "";
        this.users = "";
        this.usersInSearch = null;
        this.usersFetchedSuccesfully = false;
    }

    fetchUsers(e) {
        if (!this.usersFetchedSuccesfully) {
            fetch("http://localhost:5001/api/fullUserList")
            .then(response => response.json())
            .then(data => {
              this.users = data.userlist;
              this.usersFetchedSuccesfully = true;// Log the data here
            })
            .catch(error => {
              console.error("Error fetching data:", error);
            });
        } else {
            return;
        }
    }

    searchUsers(e) {
        if (e.inputType === "deleteContentBackward") {
            this.usersInSearch = null;
            this.shadowRoot.querySelector('.inputText').value = "";
            return;
        }
        if (!this.usersInSearch) {
            this.usersInSearch = this.users;
       }
       var tempArray = [];
       for (let i = 0; i <= this.usersInSearch.length-1; i++) {
            if (this.usersInSearch[i].Name.trim().toLowerCase().includes(e.target.value.trim().toLowerCase())) {
                tempArray.push(this.usersInSearch[i]);
            }
       }
       this.usersInSearch = tempArray;
       console.log(this.usersInSearch);
    }

    routeToSearchedUser (e,userName) {
        this.usersInSearch = null;
        this.shadowRoot.querySelector('.inputText').value = "";
        const userId = userName.trim();
        console.log(userId);
        Router.go(`/profile/${userId}`);
    }
}


customElements.define('search-bar', SearchBar);