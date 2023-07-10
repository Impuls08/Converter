const valueInputNode = document.querySelector('.js-value-input')
const valueCurrencyNode = document.querySelector('.js-currency-selector')
const outputNode = document.querySelector('.js-output')

function getInput() {
  return {
    uah:  Number(valueInputNode.value),
    currency: valueCurrencyNode.value,
  }
}

function render(result) {
  outputNode.innerText = result;
}

valueInputNode.addEventListener('input', function() {
  const result = convert(getInput());

  render(result)
});

valueCurrencyNode.addEventListener('change', function() {
  const result = convert(getInput());

  render(result)
})