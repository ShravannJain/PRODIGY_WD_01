document.addEventListener('scroll', () => {
    const container = document.querySelector('.root-container'); // Use '.' for class or '#' for ID
    if (window.scrollY > 100) {
        container.classList.add('scrolled');
    } else {
        container.classList.remove('scrolled');
    }
});

