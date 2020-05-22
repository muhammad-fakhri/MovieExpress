class MovieItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render() {
        // set poster URL
        let url;
        if (this._movie.poster_path) {
            url = `https://image.tmdb.org/t/p/original/${this._movie.poster_path}`;
        } else {
            url = 'https://via.placeholder.com/500x300?text=Poster+Not+Available';
        }

        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            :host {
                display: block;
                margin-bottom: 18px;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                border-radius: 10px;
                overflow: hidden;
            }
            
            .movie-poster {
                width: 100%;
                max-height: 300px;
                object-fit: cover;
                object-position: center;
            }
            
            .movie-info {
                padding: 24px;
            }
            
            .movie-info > h2 {
                font-weight: lighter;
            }
            
            .movie-info > p {
                margin-top: 10px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 10; /* number of lines to show */
            }
            
            .movie-info > a {
                margin-top: 20px;
            }
        </style>

        <img class="movie-poster" src="${url}" alt="Movie Poster">
        <div class="movie-info">
            <h2>${this._movie.title}</h2>
            <p>${this._movie.overview}</p>
            <p>
                <a href="https://www.themoviedb.org/movie/${this._movie.id}" target="_blank">Click here for more detail...</a>
            </p>
        </div>
        `;
    }
}

customElements.define("movie-item", MovieItem);