let uparrow = document.querySelector('.up-arrow')
uparrow.addEventListener('click', (e) => {
  let header = document.querySelector('.header')
  header.scrollIntoView({ block: 'start',  behavior: 'smooth' })
})
