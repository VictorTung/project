const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=01f2b211e11625f1ebcd68dffeef8845&page=1'
const IMG_URL = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=01f2b211e11625f1ebcd68dffeef8845&query='

const form = document.querySelector('#form')
const search = document.querySelector('.search')
const main = document.querySelector('#main')

getData(API_URL)

async function getData(url) {
  const res = await fetch(url)
  const data = await res.json()

  generateMovieEi(data.results)
}

function generateMovieEi(movies) {
  main.innerHTML = ''

  movies.forEach(movie => {
    const { title, vote_average, poster_path, overview } = movie

    const movieEl = document.createElement('div')
    movieEl.classList.add('movie')

    movieEl.innerHTML = `
    <img
      src="${IMG_URL + poster_path}" alt="${title}"
    />
    <div class="movie-info">
      <div class="movie-title">${title}</div>
      <span class="rating ${getclass(vote_average)}">${vote_average}</span>
    </div>
    <div class="overview">
      <h3>overview</h3>
      <p>${overview}</p>
    </div>
    `

    main.appendChild(movieEl)
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  let searchTerm = search.value

  if (searchTerm && searchTerm.trim() !== '') {
    getData(SEARCH_URL + searchTerm)
    search.value = ''
  } else {
    window.location.reload()
  }

})

function getclass(rating) {
  if (rating >= 8) {
    return "green"
  } else if (rating <= 3) {
    return 'red'
  } else {
    return 'orange'
  }
}



// sticky nav scroll
const nav = document.querySelector('#form')

window.addEventListener('scroll', (e) => {
  if (window.scrollY > nav.offsetHeight + 50) {
    nav.classList.add('active')
  } else {
    nav.classList.remove('active')
  }
})