// JavaScript Document
console.log("hi");

const hamburgerButton = document.querySelector('header button:nth-of-type(2)')
const closeButton = document.querySelector('[class="close-button"]')
const navMenu = document.querySelector('[id="nav-menu"]')

function openMenu() {
    navMenu.classList.add('open')
    console.log('hamburgermenu is geopend')
}

function closeMenu() {
    navMenu.classList.remove('open')
    console.log('hamburgermenu is gesloten')
}

hamburgerButton.addEventListener('click', openMenu)
closeButton.addEventListener('click', closeMenu)
