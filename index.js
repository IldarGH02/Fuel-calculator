const $distance = document.querySelector('.distance'),
      $consumption = document.querySelector('.consumption'),
      $price = document.querySelector('.price'),
      $depreciationPrice = document.querySelector('.depreciation')

const $form = document.getElementById('form')
const $send = document.querySelector('.form__send')
const $resultFuel = document.getElementById('result__fuel')
const $resultDepreciation = document.getElementById('result__depreciation')

const inputs = document.querySelectorAll('.form__input')

let fuelPrice;
let depreciation;

const checkInputs = (inputValue, inputData, position) => {
    let regex =  /[\d.]/  
    const length = inputData.value.length
    
    if(length > 10) {
        inputData.classList.add('error_input')
        alert('Куда разогнался? Не больше 10 символов!!!')
        inputData.value = ''        
    } else if(length > 0) {
        inputData.classList.remove('error_input')
    }

    if(!regex.test(inputValue)) {
        inputData.value = inputData.value.substring(0, position-1) + inputData.value.substring(position+1)
    }
}

$distance.addEventListener('input', (e) => {
    const value = e.target.value
    const position = e.target.selectionStart
    checkInputs(value, $distance, position)
})

$consumption.addEventListener('input', (e) => {
    const value = e.target.value
    const position = e.target.selectionStart
    checkInputs(value, $consumption, position)
})

$price.addEventListener('input', (e) => {
    const value = e.target.value
    const position = e.target.selectionStart
    checkInputs(value, $price, position)
})

$depreciationPrice.addEventListener('input', (e) => {
    const value = e.target.value
    const position = e.target.selectionStart
    checkInputs(value, $depreciationPrice, position)
})

const getFuelPrice = (distance, consumption, price, depreciationPrice, inputs) => {
    let _distance = Number(distance.value)
    let _consumption = Number(consumption.value)
    let _price = Number(price.value)
    let _depreciationPrice = Number(depreciationPrice.value)

    fuelPrice = Number(Math.floor((_distance * (_consumption / 100)) * _price).toFixed(2))
    depreciation = Number(Math.floor(_distance * _depreciationPrice).toFixed(2))
    
    if(!isNaN(fuelPrice) && !isNaN(depreciation)) {
        $resultFuel.innerText = fuelPrice + 'p.'
        $resultDepreciation.innerText = depreciation + 'p.'
    } else {
        $resultFuel.innerHTML = 'Форма заполнена неверно'
        $resultDepreciation.innerHTML = 'Форма заполнена неверно'
    }
}

$send.addEventListener('click', (e) => {
    e.preventDefault()
    getFuelPrice($distance, $consumption, $price, $depreciationPrice, inputs) 
    $distance.value = ''
    $consumption.value = ''
    $price.value = ''
    $depreciationPrice.value = ''
})