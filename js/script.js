let range = document.querySelector('#range')
let container = document.querySelector('.container')
let brightness = document.querySelector('.brightness-box')

container.addEventListener('change', function (event){
    let brightnessLevel = event.target.value
    container.style.filter = 'brightness('+brightnessLevel+'%)'
})