import '../component/movie-list.js';
import '../component/search-bar.js';
import {
    DataSource,
    Main
} from '../data/data-source.js';

const search = () => {
    const searchElement = document.querySelector("search-bar");
    const movieListElement = document.querySelector("movie-list");

    const onButtonSearchClicked = async () => {
        try {
            const result = await DataSource.searchMovie(searchElement.value);
            document.getElementById("category").innerHTML = `<h4 id="category" class="text-white">${searchElement.value} :</h4>`;
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
            document.getElementById("category").innerHTML = `<h4 id="category" class="text-white">Now Playing :</h4>`;
            renderResult(result);
        } catch (message) {
            fallbackResult(message);
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

export {
    main,
    search
}