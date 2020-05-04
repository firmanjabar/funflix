class MovieItem extends HTMLElement {
  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div id="${this._movie.id}" class="card overflow-hidden rounded-4 text-center text-white bg-dark h-100" type="button" data-toggle="modal" data-target="#exampleModalCenter">
      <img class="p-2 card-img rounded-4 card-img-top" src="${this._movie.poster_path !== null || undefined || "" ? "https://image.tmdb.org/t/p/w500"+this._movie.poster_path : "/src/img/null.png"}" alt="Poster Movie">
        <div class="card-img-overlay d-flex flex-column justify-content-end">
          <p class="grad1 card-title"><strong>${this._movie.original_title}</strong> (${this._movie.release_date ? this._movie.release_date.substring(0,4) : ""})</p>
        </div>
      </div>
    `;
  }
}

customElements.define("movie-item", MovieItem);