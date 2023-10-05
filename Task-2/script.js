let celsiusInput = document.querySelector('#celsius > input')
let fahrenheitInput = document.querySelector('#fahrenheit > input')

let btn = document.querySelector('.button button')

function roundNumber(number){
    return Math.round(number*100)/100
}

celsiusInput.addEventListener('input', function(){
    let clesius = parseFloat(celsiusInput.value)
    let fahrenheit = (clesius*(9/5)) + 32

    fahrenheitInput.value = roundNumber(fahrenheit)
})
fahrenheitInput.addEventListener('input', function(){
    let fahrenheit = parseFloat(fahrenheitInput.value)
    let clesius = (fahrenheit - 32) * (5/9)

    celsiusInput.value = roundNumber(cTemp)
})

btn.addEventListener('click', ()=>{
    celsiusInput.value = ""
    fahrenheitInput.value = ""
})