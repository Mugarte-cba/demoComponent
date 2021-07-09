import { html, css, LitElement } from 'lit-element';

export class FirstComponent extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--first-component-text-color, #000);
      }

      .background-button{
        background-color:red;
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
  }

  async firstUpdated() {
    await this.updateComplete;
    this.shadowRoot.querySelector('.background-button').setAttribute('style', 'background-color:blue');
  }
  __increment() {
    this.counter += 1;
    console.log('X', this.counter);
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button class="background-button" @click=${this.__increment}>increment</button>
      <div> Miguel </div>
    `;
  }
}
