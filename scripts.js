const movieList = document.getElementById("movie-list")
const searchForm = document.getElementById("movie-search")
const inputMovie = document.getElementById("input-movie")

let movieResult = []

searchForm.addEventListener("submit", async function getData(e) {
    e.preventDefault()
    const res = await fetch(`https://www.omdbapi.com/?s=${inputMovie.value}&apikey=862f3b4d`)
    const data = await res.json()
    console.log(data.Search)
    data.Search.forEach((movie,index) => {
        movieResult.push(movie.Title)
        movieList.innerHTML += `<div>${movie.Title}</div>
        <button class="add-watchlist" data-id="${index}"> + Watchlist</button>`
    });
})

movieList.addEventListener("click", (e)=>{
    e.preventDefault();
    if(e.target.classList.contains("add-watchlist")){
        const moveiId = e.target.dataset.id
        const movie = movieResult[moveiId]
        const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
        watchlist.push(movie)
        localStorage.setItem("watchlist", JSON.stringify(watchlist));
        console.log(localStorage.getItem('watchlist'))
    }
})