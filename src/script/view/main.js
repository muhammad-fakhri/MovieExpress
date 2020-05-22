import "../component/search-bar.js";
import "../component/movie-list.js";
import "../component/popular-list.js";
import DataSource from "../data/data-source.js";

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const movieListElement = document.querySelector("movie-list");
    const popularListElement = document.querySelector("popular-list");

    const renderPopular = results => {
        popularListElement.movies = results;
    };

    const fetchPopularMovie = async () => {
        try {
            const result = await DataSource.getPopular();
            renderPopular(result);
        } catch (message) {
            fallbackResult(message);
        }
    }

    const onButtonSearchClicked = async () => {
        try {
            const result = await DataSource.searchMovie(searchElement.value);
            renderResult(result, searchElement.value);
            movieListElement.scrollIntoView();
        } catch (error) {
            fallbackResult(error);
        }
    };

    const renderResult = (results, keyword) => {
        if (results.length > 0) {
            movieListElement.movies = results;
        } else {
            movieListElement.renderError(`${keyword} doesn't found`);
        }
    };

    const fallbackResult = message => {
        movieListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
    fetchPopularMovie();
};

export default main;