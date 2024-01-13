import { LitElement, html, css } from "lit";

export class WebComponentTitle extends LitElement {
  static styles = css`
    h1 {
      font-size: 3.5rem;
      font-weight: 900;
      color: var(--primary-color);
      padding: 1.5rem 0;
      margin: 0;
    }
  `;
  constructor() {
    super();
  }

  render() {
    return html`
      <h1>
        Guía de estilos de <br />
        The Vegan Restaurant
      </h1>
    `;
  }
}
