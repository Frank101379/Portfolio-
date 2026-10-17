document.addEventListener('DOMContentLoaded', () => {
    console.log("Franklin's Portfolio loaded successfully!");

    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Check if user previously had dark mode enabled
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-theme');
        themeToggleBtn.textContent = '☀️';
    }

    // Toggle dark mode on click
    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        
        if (body.classList.contains('dark-theme')) {
            themeToggleBtn.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggleBtn.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        }
    });
});