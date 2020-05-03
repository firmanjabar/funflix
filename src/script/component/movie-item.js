class MovieItem extends HTMLElement {
  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div id="${this._movie.id}" class="card text-white bg-dark" type="button" data-toggle="modal" data-target="#exampleModalCenter">
      <img class="card-img-top" src="${this._movie.poster_path !== null || undefined || "" ? "https://image.tmdb.org/t/p/w500"+this._movie.poster_path : "/src/img/null.png"}" alt="Poster Movie">
          <div class="card-body">
          <p class="card-title"><strong>${this._movie.original_title}</strong></p>
          <p class="card-text">${this._movie.release_date ? this._movie.release_date : "Release Date - Not Found"}</p>
          </div>
      </div>
    `;
  }
}

customElements.define("movie-item", MovieItem);