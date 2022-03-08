const openBtn = document.querySelector('.open_btn')
const closeBtn = document.querySelector('.close_btn')
const navEls = document.querySelectorAll('.nav')

openBtn.addEventListener('click', () => navEls.forEach(nav => nav.classList.add('visible')))

closeBtn.addEventListener('click', () => navEls.forEach(nav => nav.classList.remove('visible')))

const randomBtn = document.querySelector('#randomBtn')
let pageData = ['water-record','hover-box']


randomBtn.addEventListener('click', () => {
  randomBtn.href = `${pageData[getRandomPage()]}/index.html`
})

function getRandomPage() {
  return Math.floor(Math.random() * pageData.length)
}