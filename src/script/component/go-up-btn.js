class GoUpButton extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <a href="#app-bar" role="button" class="btn btn-secondary position-fixed" id="go-up-btn" title="Go Up">
            <span class="material-icons">arrow_upward</span>
        </a>
        `;
    }
}

customElements.define("go-up-btn", GoUpButton);