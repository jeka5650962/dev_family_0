const setLike = document.querySelectorAll('.item__like')

setLike.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active')
    })
})

