var l = document.querySelectorAll('.cell')
l.forEach(e =>{
    e.addEventListener('click', ()=>{
        document.querySelector('.active').classList.remove('active')
        e.classList.add('active')
    })
})