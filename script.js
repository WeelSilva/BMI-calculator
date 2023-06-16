// variáveis - variables
const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

form.onsubmit = (event) => {
  event.preventDefault() // não faça o padrão

  const weight = inputWeight.value
  const height = inputHeight.value

  console.log(weight, height)
}
