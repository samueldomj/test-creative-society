const toggleMenu = document.getElementById('toggle-menu');
const navigation = document.getElementById('navigation');

toggleMenu.addEventListener('click', () => {
    navigation.classList.toggle('show');
});