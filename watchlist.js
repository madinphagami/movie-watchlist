const movieList = document.getElementById("movie-list")

render = () => {
    const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    watchlist.forEach(movie => {
        movieList.innerHTML += `<div>${movie}</div>`
    });
}

render()