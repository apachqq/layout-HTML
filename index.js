let orders = document.querySelector('.orders')
let direction = document.querySelector('.direction')
let howWork = document.querySelector('.how-work')

window.addEventListener('scroll', function() {
    orders.classList.add('active')
    direction.classList.add('active')
    howWork.classList.add('animation')
})
