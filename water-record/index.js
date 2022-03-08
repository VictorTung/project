const liter = document.querySelector('.liter')
const percentage = document.querySelector('.percentage')
const cups = document.querySelectorAll('.cup-small')
const remained = document.querySelector('.remained')

update()

cups.forEach((cup, idx) => {
  cup.addEventListener('click', () => {
    changeConsumption(idx)
  })
})

function changeConsumption(idx) {
  if (
    (idx === 7 &&
      cups[idx].classList.contains('filled')) ||
    (cups[idx].classList.contains('filled') &&
      !cups[idx].nextElementSibling.classList.contains('filled'))
  ) {
    idx--
  }
  cups[idx].classList.remove('filled')
  cups.forEach((cup, idx2) => {
    if (idx >= idx2) {
      cup.classList.add('filled')
    } else {
      cup.classList.remove('filled')
    }
  })
  update()
}

function update() {
  const total = cups.length
  const consumpted = document.querySelectorAll('.filled').length

  if (consumpted === 0) {
    percentage.style.visibility = 'hidden'
    percentage.style.height = 0
  } else {
    percentage.style.visibility = 'visible'
    percentage.style.height = `${(consumpted / 8) * 100}%`
    percentage.innerText = `${(consumpted / 8) * 100}%`
  }

  if (consumpted === total) {
    remained.style.visibility = 'hidden'
    remained.style.height = 0
  } else {
    remained.style.visibility = 'visible'
    liter.innerText = `${2 - (consumpted * 250 / 1000)}L`
  }


}