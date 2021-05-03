let square = document.getElementById(`square`)
let userGuess = document.getElementById(`userGuess`)
let submitButton = document.getElementById(`submitButton`)
let resultParagraph = document.getElementById(`resultParagraph`)
let restartButton = document.getElementById(`restartButton`)

let colors = [`red`, `green`, `blue`]
let randomNum

renderBalls()

submitButton.addEventListener(`click`, submitGuess)
restartButton.addEventListener(`click`, restartGame)

function renderBalls() {
  square.innerHTML = ``
  randomNum = Math.floor(Math.random() * 900) + 100

  for (let i = 0; i < randomNum; i++) {
    let randomColor = colors[Math.floor(Math.random() * colors.length)]
    let randomLeft = Math.floor(Math.random() * 391)
    let randomTop = Math.floor(Math.random() * 391)

    let ball = document.createElement(`div`)
    ball.classList.add(`ball`)
    ball.style.backgroundColor = randomColor
    ball.style.left = `${randomLeft}px`
    ball.style.top = `${randomTop}px`

    square.appendChild(ball)
  }
}

function submitGuess() {

  resultParagraph.innerHTML = ``
  
  if (userGuess.value == NaN || userGuess.value == ``) {
    resultParagraph.innerHTML = `Please input a number between 100 and 999.`
    return
  }

  if (userGuess.value == randomNum) {
    resultParagraph.innerHTML = `Correct!`
  }
  else {
    resultParagraph.innerHTML = `Count is ${randomNum}. You were off by ${Math.abs(randomNum - userGuess.value)}`
  }
  submitButton.disabled = true
  restartButton.style.display = `block`
}

function restartGame() {
  userGuess.value = ``
  resultParagraph.innerHTML = ``
  submitButton.disabled = false
  restartButton.style.display = `none`
  renderBalls()
}



