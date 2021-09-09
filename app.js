const button = document.querySelector('button')
const buttonSection = document.querySelector('.open_button')
const modal = document.querySelector('.modal')
const modalContent = document.querySelector('.modal-content')
const closeButton = document.querySelector('.modal-close-button')

function showModal () {
    modal.style.visibility='visible'
    modalContent.style.animationName = "showModalAnimation"
    modalContent.style.transform='translateY(10px)'
    button.classList.add('shadow')
    closeButton.classList.add('shadow')
}

function hideModal () {
    modalContent.style.animationName = "hideModalAnimation"
    modal.style.visibility='hidden'
}

function windowClick(event) {
    if (event.target == modal) {
        hideModal ()
    }
    if (event.target == modalContent) {
        closeButton.classList.remove('shadow')
    }
    if (event.target == buttonSection) {
        button.classList.remove('shadow')
    }
}

function escapeClick(e) {
    if (e.key === "Escape" || e.key === "Esc") {
        hideModal ()
    }
}

button.addEventListener('click',showModal)
closeButton.addEventListener('click',hideModal)
window.addEventListener('click', windowClick)
window.addEventListener('keydown', escapeClick)


