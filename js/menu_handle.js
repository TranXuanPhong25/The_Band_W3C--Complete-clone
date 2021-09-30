(() => {
    const [a, ...list_items] = document.querySelectorAll('header nav li')
    const More_drop = document.querySelector('.more__subnav--dropdown')
    const More = document.querySelector('nav li:nth-child(5)')
    const bar_btn = document.querySelector('i.fa-bars')
    const display_item = () => list_items.forEach(item => item.classList.toggle('active-ib'))
    const Dropmenu = (e) => {
        e.preventDefault()
        More_drop.classList.toggle('hidden')
    }
    bar_btn.addEventListener('click', display_item)
    More.addEventListener('click', Dropmenu)
})()