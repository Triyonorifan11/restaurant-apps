class LoaderElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
    #loading {
        width: 3rem;
        height: 3rem;
        border: 5px solid #f3f3f3;
        border-top: 6px solid #0e82c5;
        border-radius: 100%;
        margin: auto;
        visibility: hidden;
        animation: spin 1s infinite linear;
        margin-top: 3rem;
      }
      #loading.display {
        visibility: visible;
      }
      @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
      }
    </style>
    <div id="loading"></div>
    `;
  }
}

customElements.define('loader-element', LoaderElement);
