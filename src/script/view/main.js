import '../component/movie-list.js';
import '../component/search-bar.js';
import {
    DataSource,
    Main,
    Detail
} from '../data/data-source.js';

const search = () => {
    const searchElement = document.querySelector("search-bar");
    const movieListElement = document.querySelector("movie-list");

    const onButtonSearchClicked = async () => {
        try {
            const result = await DataSource.searchMovie(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };

    const renderResult = results => {
        movieListElement.movies = results;
    };

    const fallbackResult = message => {
        movieListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

const main = () => {
    const movieListElement = document.querySelector("movie-list");

    const mainView = async () => {
        try {
            const result = await Main.fetchMov();
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };

    const renderResult = results => {
        movieListElement.movies = results;
    };

    const fallbackResult = message => {
        movieListElement.renderError(message);
    };

    mainView();
}

const detail = (movie_id) => {
    const movieElement = document.querySelectorAll("movie-item");
    const modalElement = document.querySelector("modal-movie");

    const onButtonSearchClicked = async () => {
        try {
            const result = await Detail.fetchMov(movie_id);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };

    const renderResult = results => {
        modalElement.movies = results;
    };

    const fallbackResult = message => {
        modalElement.renderError(message);
    };

    movieElement.clickEvent = onButtonSearchClicked;
};

export {
    main,
    search,
    detail
}