const schemeSvg = document.querySelector('.scheme-svg')
const totalPriceTag = document.querySelector('.price-total')

let cost = 25
let totalPrice = 0

schemeSvg.addEventListener('click', (event) => {
    if (!event.target.classList.contains('booked')) {
        event.target.classList.toggle('active')
        let seat = schemeSvg.querySelectorAll('.active').length
        totalPrice = seat * cost
        totalPriceTag.textContent = totalPrice
    } 
})