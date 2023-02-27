
/* SHOW POP UP */

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})


function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}



/* Save Preferences ALERT */

function savePreferences() {
  var preferences = {
    strictlyNecessary: document.getElementsByName('strictly-necessary')[0].checked,
    preferences: document.getElementsByName('preferences')[0].checked,
    statistics: document.getElementsByName('statistics')[0].checked,
    marketing: document.getElementsByName('marketing')[0].checked,
  };
  document.cookie = 'preferences=' + JSON.stringify(preferences);
  alert('Your preferences have been saved.');
}