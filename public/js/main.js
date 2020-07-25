const toggleMenu = document.getElementById('toggle-menu');
const navigation = document.getElementById('navigation');

toggleMenu.addEventListener('click', () => {
    navigation.classList.toggle('show');
});

// Scrollreveal
window.sr = ScrollReveal();

sr.reveal('.page-header', {
    duration: 2000,
    origin: 'bottom',
    distance: '-100px'
});

sr.reveal('.hero__title', {
    duration: 2000,
    origin: 'left',
    distance: '-100px'
});

sr.reveal('.hero__slogan', {
    duration: 2000,
    origin: 'right',
    distance: '-100px'
});

sr.reveal('.search-bar__inner', {
    duration: 2000,
    origin: 'top',
    distance: '-100px'
});

sr.reveal('.hotels__item', {
    duration: 2000,
    origin: 'top',
    distance: '-100px'
});

sr.reveal('.pagination', {
    duration: 2000,
    origin: 'top',
    distance: '-100px'
});

sr.reveal('.newsletter__register', {
    duration: 2000,
    origin: 'top',
    distance: '-50px'
});

sr.reveal('.social', {
    duration: 2000,
    origin: 'bottom',
    distance: '-50px'
});

