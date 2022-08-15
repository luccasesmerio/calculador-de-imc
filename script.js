function start() {
  var buttonCalculateImc = document.querySelector('#button-calculate-imc')
  buttonCalculateImc.addEventListener('click', handleButtonClick)

  var inputWeight = document.querySelector('#input-weight')
  var inputHeight = document.querySelector('#input-height')

  inputWeight.addEventListener('input', handleButtonClick)
  inputHeight.addEventListener('input', handleButtonClick)

  handleButtonClick()
}

function calculateImc(weight, height) {
  return weight / (height * height)
}

function handleButtonClick() {
  var inputWeight = document.querySelector('#input-weight')
  var inputHeight = document.querySelector('#input-height')
  var imcResult = document.querySelector('#imc-result')
  var imcReturn = document.querySelector('#imc-return')

  var weight = Number(inputWeight.value)
  var height = Number(inputHeight.value)

  var imc = calculateImc(weight, height)
  var formattedImc = imc.toFixed(2).replace('.', ',')

  imcResult.textContent = formattedImc

  if (imc > 40) {
    imcReturn.textContent = 'Obesidade grau III'
  } else if (imc > 34.99) {
    imcReturn.textContent = 'Obesidade grau II'
  } else if (imc > 29.99) {
    imcReturn.textContent = 'Obesidade grau I'
  } else if (imc > 24.99) {
    imcReturn.textContent = 'Acima do peso'
  } else if (imc > 18.49) {
    imcReturn.textContent = 'Peso normal'
  } else if (imc > 17) {
    imcReturn.textContent = 'Abaixo do peso'
  } else if (imc > 15.99) {
    imcReturn.textContent = 'Muito abaixo do peso'
  } else if (imc < 16) {
    imcReturn.textContent = 'Inválida'
  } else {
    imcReturn.textContent = 'inválido'
  }
}

start()
