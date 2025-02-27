document.querySelector('.hamburger').addEventListener('click', function() {
    var mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu.style.display === 'flex') {
        mobileMenu.style.display = 'none';
    } else {
        mobileMenu.style.display = 'flex';
    }
});