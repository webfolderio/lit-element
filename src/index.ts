import { customElement, LitElement, property } from '@polymer/lit-element';
import { html } from 'lit-html';

@customElement('foo-element' as any)
class Foo extends LitElement {

  @property()
  value = 'sample';

  @property()
  counter: number = 0;

  constructor() {
    super();
  }

  render() {
    return html`<h1
        style="cursor: pointer; user-select: none; color: ${this.counter % 2 ? 'red' : 'blue'}"
         @click="${this.clickHandler}">
          ${this.value} ${this.counter}</h1>`;
  }

  clickHandler(_: Event) {
    this.counter++;
  }
}

window.addEventListener('load', () => {
  document.body.appendChild(document.createElement('foo-element'));
}, false);
