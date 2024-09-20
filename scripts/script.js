// JavaScript Document
console.log("hi");

const hamburgerButton = document.querySelector('.hamburger-button')
const closeButton = document.querySelector('.close-button')
const navMenu = document.querySelector('#nav-menu')

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
