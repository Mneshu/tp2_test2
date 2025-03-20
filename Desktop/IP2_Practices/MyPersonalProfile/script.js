document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll functionality for section navigation
    const buttons = document.querySelectorAll('header button');

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const target = e.target.textContent.toLowerCase();
            const section = document.getElementById(target);

            window.scrollTo({
                top: section.offsetTop - 60, // Offset to avoid header overlay
                behavior: 'smooth'
            });
        });
    });
});
