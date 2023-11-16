// Add smooth scrolling to navigation links
const navLinks = document.querySelectorAll('nav a');

for (const link of navLinks) {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
}
