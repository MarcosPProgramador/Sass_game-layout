window.addEventListener("load", () => {
    addEvent();

    function effectClick(e) {
        let X = e.clientX - e.target.offsetLeft;
        let Y = e.clientY - e.target.offsetTop;

        const span = document.createElement("span");
        span.style.left = `${X}px`;
        span.style.top = `${Y}px`;

        e.target.appendChild(span);
        setTimeout(() => {
            span.remove();
        }, 600);
    }
    function addEvent() {
        const effects = document.querySelectorAll("[effect]");
        const links = document.querySelectorAll("#scroll");
        const buttons = document.querySelectorAll("[click]");
        effects.forEach((effect) => {
            effect.addEventListener("click", effectClick);
        });
        links.forEach((link) => {
            link.addEventListener("click", linkClick);
        });
        buttons.forEach((button) => {
            button.addEventListener("click", buttonClick);
        });
    }
    function buttonClick(e) {
        const navbar = document.querySelector("[navbar]");
        e.target.classList.toggle("active");
        navbar.classList.toggle("active");
    }
    function linkClick(e) {
        e.preventDefault();

        let id = e.target.getAttribute("href");
        const link = document.querySelector(id);
        const top =
            link.offsetTop - (window.innerHeight - link.clientHeight) * 0.5;

        window.scrollTo({
            top: top,
            behavior: "smooth",
        });
    }
});
