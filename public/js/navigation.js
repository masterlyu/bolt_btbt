// navigation.js
console.log('navigation.js 로드됨');

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    const mobileNavButton = document.querySelector('.mobile-nav-button button');
    const pcNav = document.querySelector('.pc-nav');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector('header').offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile navigation button interaction
    mobileNavButton.addEventListener('click', () => {
        pcNav.classList.toggle('mobile-open');
    });
});
