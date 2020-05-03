import './movie-item.js';

class MovieList extends HTMLElement {

    set movies(movies) {
        this._movies = movies;
        this.render();
    }

    render() {
        this.innerHTML = "";
        this._movies.forEach(movie => {
            const movieItemElement = document.createElement("movie-item");
            movieItemElement.movie = movie;
            this.appendChild(movieItemElement);
        })
    }

    renderError(message) {
        this.innerHTML = `
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>${message}</strong>. Please search with another keyword!
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        </div>
        `;
    }
}

customElements.define("movie-list", MovieList);