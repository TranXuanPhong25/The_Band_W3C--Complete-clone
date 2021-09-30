(() => {
    // select Element
    const Modal_CloseBtn = document.querySelectorAll(".js-modal-close")
    const BuyTickets = document.querySelectorAll(".js-modal-tickets-open")
    const Modal_content = document.querySelector(".modal__window--content")
    const Modal_window = document.querySelector(".modal__window-popup--buy-tickets")
    //function handle event
    const Close_modal = () => {
        Modal_window.classList.remove('appear-animated')
        Modal_content.classList.add('flyup-animated')
        Modal_window.classList.add('dissolve-animated')
        setTimeout(() => {
            Modal_window.classList.remove('active')
            Modal_window.classList.add('hidden')
        }, 450)
    }
    const openModal = () => {
        Modal_window.classList.remove('hidden')
        Modal_window.classList.add('active')
        setTimeout(() => {
            Modal_content.classList.remove('flyup-animated')
            Modal_window.classList.remove('dissolve-animated')
            Modal_window.classList.add('appear-animated')
        }, 10)
    }
    //add event 
    Modal_CloseBtn.forEach(button => button.onclick = Close_modal)
    BuyTickets.forEach(button => button.onclick = openModal)
    Modal_window.onclick = e => e.target == Modal_window ? Close_modal() : ''
})()