document.addEventListener('DOMContentLoaded', () => {
    console.log('Static website loaded successfully');

    // Mobile menu toggle logic
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Set active link based on current URL
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').replace('./', '/');
        if (currentPath.endsWith(linkPath) || (currentPath.endsWith('/') && linkPath === '/index.html')) {
            link.classList.add('text-primary', 'border-b-2', 'border-primary');
            link.classList.remove('text-slate-600', 'dark:text-slate-300');
        }
    });
});
