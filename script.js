document.addEventListener('DOMContentLoaded', () => {
    console.log("Franklin's Portfolio loaded successfully!");

    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Default to dark cyber mode, check local storage if user set preference
    if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light-theme');
        themeToggleBtn.textContent = '🌙';
    } else {
        themeToggleBtn.textContent = '☀️';
    }

    // Toggle theme on click
    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('light-theme');
        
        if (body.classList.contains('light-theme')) {
            themeToggleBtn.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        } else {
            themeToggleBtn.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        }
    });
});
