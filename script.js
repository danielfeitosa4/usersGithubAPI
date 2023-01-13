const toUpdate = document.getElementById('toUpdate')
const open = document.querySelector('.profile')

function clear() {
  toUpdate.addEventListener('click', () => {
    profile.classList.remove('exibir')
  })
}

function active() {
  if (  open.style.display == 'block') {
    open.style.display = 'none'
  } else {
    open.style.display = 'block'
  }
}