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

    // Sticky Header & Scroll-to-top logic
    const header = document.getElementById('main-header');
    const scrollTopBtn = document.getElementById('scroll-to-top');

    const handleScroll = () => {
        if (window.scrollY > 50) {
            // Header solid
            if (header) {
                header.classList.add('bg-[#14120A]/90', 'shadow-md');
                header.classList.remove('bg-white/5', 'dark:bg-black/20', 'backdrop-blur-sm');
            }
            // Show scroll to top
            if (scrollTopBtn) {
                scrollTopBtn.classList.remove('opacity-0', 'invisible', 'translate-y-4');
                scrollTopBtn.classList.add('opacity-100', 'visible', 'translate-y-0');
            }
        } else {
            // Header transparent
            if (header) {
                header.classList.remove('bg-[#14120A]/90', 'shadow-md');
                header.classList.add('bg-white/5', 'dark:bg-black/20', 'backdrop-blur-sm');
            }
            // Hide scroll to top
            if (scrollTopBtn) {
                scrollTopBtn.classList.add('opacity-0', 'invisible', 'translate-y-4');
                scrollTopBtn.classList.remove('opacity-100', 'visible', 'translate-y-0');
            }
        }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();

    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
