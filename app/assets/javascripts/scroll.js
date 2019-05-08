let arrow = document.querySelector('.down-arrow')

arrow.addEventListener('click', (e) => {
  let welcome = document.querySelector('.large-content-page-left')
  welcome.scrollIntoView({ block: 'start',  behavior: 'smooth' })
})
