// This is all you.

// Selection of HTML objects
const burger = document.querySelector('.burger');
const burgerOpen = document.querySelector('#burgerOpen');
const burgerClosed = document.querySelector('#burgerClosed');
const nav = document.querySelector('.nav');
const body = document.querySelector('body');
// Defining a function
function toggleNav() {
    nav.classList.toggle('hidden');
    body.classList.toggle('fixed');
}
// Calling the function after click event occurs
burgerOpen.addEventListener('click', function() {
    toggleNav();
});
burgerClosed.addEventListener('click', function() {
    toggleNav();
});
