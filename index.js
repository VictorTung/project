const openBtn = document.querySelector('.open_btn')
const closeBtn = document.querySelector('.close_btn')
const navEls = document.querySelectorAll('.nav')
const mode_Trigger = document.querySelector('#mode-trigger')
const html = document.querySelector('html')

openBtn.addEventListener('click', () => navEls.forEach(nav => nav.classList.add('visible')))

closeBtn.addEventListener('click', () => navEls.forEach(nav => nav.classList.remove('visible')))

const randomBtn = document.querySelector('#randomBtn')
let pageData = ['water-record', 'hover-box', 'split-photo', 'movie-info', 'todo-list']


randomBtn.addEventListener('click', () => {
  randomBtn.href = `${pageData[getRandomPage()]}/index.html`
})

function getRandomPage() {
  return Math.floor(Math.random() * pageData.length)
}

mode_Trigger.addEventListener('click', () => {
  html.classList.toggle('dark')
  html.classList.contains('dark') ? mode_Trigger.innerHTML = 'Light mode' : mode_Trigger.innerHTML = 'Dark mode'
})