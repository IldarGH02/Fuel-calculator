const $distance = document.querySelector('.distance'),
      $consumption = document.querySelector('.consumption'),
      $price = document.querySelector('.price'),
      $depreciationPrice = document.querySelector('.depreciation')

const $form = document.getElementById('form')
const $send = document.querySelector('.form__send')
const $resultFuel = document.getElementById('result__fuel')
const $resultDepreciation = document.getElementById('result__depreciation')

let fuelPrice;
let depreciation;

const getFuelPrice = (distance, consumption, price, depreciationPrice) => {
    let _distance = Number(distance.value)
    let _consumption = Number(consumption.value)
    let _price = Number(price.value)
    let _depreciationPrice = Number(depreciationPrice.value)

    fuelPrice = Number(Math.floor((_distance / _consumption) * _price).toFixed(2))
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
    getFuelPrice($distance, $consumption, $price, $depreciationPrice)
    $distance.value = ''
    $consumption.value = ''
    $price.value = ''
    $depreciationPrice.value = '' 
})



