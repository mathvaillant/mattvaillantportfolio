const toggle = document.querySelector('.toggle')
const navigation = document.querySelector('.navigation')

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active')
  navigation.classList.toggle('active')
})

const btn = document.getElementById('sendEmail')

document.getElementById('form').addEventListener('submit', function (event) {
  event.preventDefault()

  btn.value = 'Sending...'

  const serviceID = 'default_service'
  const templateID = 'VaillantMedia'

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = 'Send Email'
      alert('Email Enviado!')
    },
    (err) => {
      btn.value = 'Send Email'
      alert(JSON.stringify(err))
    }
  )
})
