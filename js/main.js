const sw = document.querySelector('.sw')
const body = document.querySelector('body')
const color = document.querySelector('.color')


sw.addEventListener('click', () => {
    body.classList.toggle('active')
    sw.classList.toggle('active')
})



$('.color div').on('click', function (e) {
    $(this).addClass('active')
    $(this).siblings().removeClass('active')

    body.id = `main_${e.target.id}`

})






