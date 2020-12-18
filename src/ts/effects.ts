window.addEventListener('load', () => {
    addEvent()

    function effectClick(event: Event) {
        const mouseMove = <MouseEvent>event
        const eventTarget = <HTMLElement>event.target

        let X = mouseMove.clientX - eventTarget.offsetLeft
        let Y = mouseMove.clientY - eventTarget.offsetTop

        const span = document.createElement('span')
        span.style.left = `${X}px`
        span.style.top = `${Y}px`

        eventTarget.appendChild(span)
        setTimeout(() => {
            span.remove()
        }, 600)
    }
    function addEvent() {
        const effects = document.querySelectorAll('[effect]')
        const links = document.querySelectorAll('#scroll')
        const buttons = document.querySelectorAll('[click]')
        effects.forEach((effect) => {
            effect.addEventListener('click', effectClick)
        })
        links.forEach((link) => {
            link.addEventListener('click', linkClick)
        })
        buttons.forEach((button) => {
            button.addEventListener('click', buttonClick)
        })
    }
    function buttonClick(event: Event) {
        const navbar = <HTMLElement>document.querySelector('[navbar]')
        const elementHTML = <HTMLElement>event.target

        elementHTML.classList.toggle('active')
        navbar.classList.toggle('active')
    }

    function linkClick(event: Event) {
        event.preventDefault()

        const elementHTML = <HTMLElement>event.target
        let id = <string>elementHTML.getAttribute('href')
        const link = <HTMLElement>document.querySelector(id)

        const top =
            link.offsetTop - (window.innerHeight - link.clientHeight) * 0.5

        window.scrollTo({
            top: top,
            behavior: 'smooth',
        })
    }
})
