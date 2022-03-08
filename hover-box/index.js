const container = document.querySelector('.container')
const colorArray = ['#fff', 'red', 'orange', 'yellow', 'green', 'blue', 'purple']
const SQUARES = 500

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => { changeColor(square) })
  square.addEventListener('mouseleave', () => { removeColor(square) })

  container.appendChild(square)
}

function changeColor(square) {
  let color = colorArray[Math.floor(Math.random() * colorArray.length)]
  square.style.background = color
  square.style.boxShadow = `0 0 5px ${color}, 0 0 10px ${color}`
}

function removeColor(square) {
  square.style.background = '#1d1d1d'
  square.style.boxShadow = ' 0 0 5px rgba(0, 0, 0, 0.4)'

}