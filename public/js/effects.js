"use strict";
window.addEventListener('load', function () {
    addEvent();
    function effectClick(event) {
        var mouseMove = event;
        var eventTarget = event.target;
        var X = mouseMove.clientX - eventTarget.offsetLeft;
        var Y = mouseMove.clientY - eventTarget.offsetTop;
        var span = document.createElement('span');
        span.style.left = X + "px";
        span.style.top = Y + "px";
        eventTarget.appendChild(span);
        setTimeout(function () {
            span.remove();
        }, 600);
    }
    function addEvent() {
        var effects = document.querySelectorAll('[effect]');
        var links = document.querySelectorAll('#scroll');
        var buttons = document.querySelectorAll('[click]');
        effects.forEach(function (effect) {
            effect.addEventListener('click', effectClick);
        });
        links.forEach(function (link) {
            link.addEventListener('click', linkClick);
        });
        buttons.forEach(function (button) {
            button.addEventListener('click', buttonClick);
        });
    }
    function buttonClick(event) {
        var navbar = document.querySelector('[navbar]');
        var elementHTML = event.target;
        elementHTML.classList.toggle('active');
        navbar.classList.toggle('active');
    }
    function linkClick(event) {
        event.preventDefault();
        var elementHTML = event.target;
        var id = elementHTML.getAttribute('href');
        var link = document.querySelector(id);
        var top = link.offsetTop - (window.innerHeight - link.clientHeight) * 0.5;
        window.scrollTo({
            top: top,
            behavior: 'smooth',
        });
    }
});
