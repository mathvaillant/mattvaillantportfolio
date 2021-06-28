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
