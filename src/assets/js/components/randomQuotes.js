import { allQuotes } from "./quotes.js";

class randomQuotes extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    console.log("component loaded");

    this.trigger = this.querySelector(".js-quote-trigger");
    this.quoteText = this.querySelector(".js-quote-text");
    this.quoteAuthor = this.querySelector(".js-quote-author");

    if (!this.trigger || !this.quoteText || !this.quoteAuthor) {
      return;
    }

    this.handleEvents();
    this.changeQuote();
  }

  handleEvents() {
    this.trigger.addEventListener("click", (event) => {
      this.changeQuote();
    });
  }

  changeQuote() {
    const randomNumber = Math.floor(Math.random() * allQuotes.length);

    this.quoteText.textContent = allQuotes[randomNumber].text;
    this.quoteAuthor.textContent = allQuotes[randomNumber].author;
  }
}

customElements.define("random-quotes", randomQuotes);
