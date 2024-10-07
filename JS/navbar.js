const menuToggle = document.getElementById('mobile-menu');
const dropdownMenu = document.getElementById('dropdown');

menuToggle.addEventListener('click', function() {
    dropdownMenu.classList.toggle('open');
});
