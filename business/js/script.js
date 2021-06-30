const toggle = document.querySelector('.toggle')
const navigation = document.querySelector('.navigation')
const options = document.querySelector('#options')

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active')
  navigation.classList.toggle('active')
})

options.addEventListener('click', () => {
  toggle.classList.toggle('active')
  navigation.classList.toggle('active')
})

const btn = document.getElementById('sendEmail')

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '20px',
  duration: 900,
  reset: true,
})

/*SHOWCASE SCROLL*/
sr.reveal('.home', {})
sr.reveal('.intro', { delay: 200 })
sr.reveal('.intro__a', { delay: 400 })
sr.reveal('.home-img', { interval: 200 })

/*SCROLL ABOUT*/
sr.reveal('.title', {})
sr.reveal('.about', { delay: 300 })
sr.reveal('.about__p', { delay: 400 })
sr.reveal('.service_1 ', { delay: 500 })
sr.reveal('.service_2 ', { delay: 200 })
sr.reveal('.service_3 ', { delay: 400 })
sr.reveal('.service_4 ', { delay: 600 })

/*SCROLL SERVICES*/
sr.reveal('.service', {})
sr.reveal('.', {})
sr.reveal('.service', { interval: 200 })
sr.reveal('.service', { delay: 300 })

/*SCROLL WORK*/
sr.reveal('.work__img', { interval: 200 })

/*SCROLL CONTACT*/
sr.reveal('.contact__input', { interval: 200 })
