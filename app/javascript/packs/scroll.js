let downarrow = document.querySelector('.down-arrow')
downarrow.addEventListener('click', (e) => {
  let welcome = document.querySelector('.large-content-page-left')
  welcome.scrollIntoView({ block: 'start',  behavior: 'smooth' })
})

let uparrow = document.querySelector('.up-arrow')
uparrow.addEventListener('click', (e) => {
  let header = document.querySelector('.header')
  header.scrollIntoView({ block: 'start',  behavior: 'smooth' })
})
