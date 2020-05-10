class AppBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        :host {
            display: block;
            width: 100%;
            background-color: #281e66;
            color: white;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        }
        h2,h3{
            color: #ebebeb;
            text-align:center;
        }
        h2{
            margin-bottom:10px;
        }
        h3{
            font-size:14px;
        }
        div {
            padding:10px;
        }
        </style>
        <div>
            <h2>Movie Express</h2>
            <h3>Your fast movie catalog</h3>
        </div>
        `;
    }
}

customElements.define("app-bar", AppBar);