class PopularItem extends HTMLElement {
    constructor() {
        super();
        // this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render() {
        // this.shadowDOM.innerHTML = `
        // <style>
        // :host {
        //     // display: block;
        //     border: 1px solid red;
        // }
        // </style>
        this.innerHTML = `
        <div class="carousel-item">
                    <img src="https://via.placeholder.com/400x300" class="d-block w-100" alt="${this._movie.title}">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>${this._movie.title}</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                </div>
        `;
    }
}

customElements.define("popular-item", PopularItem);