document.addEventListener('DOMContentLoaded', () => {
    // --- Theme Toggle ---
    const themeToggleBtn = document.querySelector('.theme-toggle');
    const html = document.documentElement;
    const body = document.body;

    // Check for saved theme
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        html.setAttribute('data-theme', currentTheme);
        body.setAttribute('data-theme', currentTheme);
        updateThemeIcon(currentTheme);
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const isDark = html.getAttribute('data-theme') === 'dark';
            const newTheme = isDark ? 'light' : 'dark';

            html.setAttribute('data-theme', newTheme);
            body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }

    function updateThemeIcon(theme) {
        if (!themeToggleBtn) return;
        if (theme === 'dark') {
            themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
        }
    }

    // --- Dashboard Dropdown ---
    const dashboardBtn = document.querySelector('.dashboard-btn');
    const dropdown = document.querySelector('.dropdown');

    if (dashboardBtn && dropdown) {
        dashboardBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('active');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });
    }

    // --- Mobile Menu Toggle ---
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileBtn && navMenu) {
        mobileBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            body.classList.toggle('menu-open');

            // Toggle hamburger icon
            const icon = mobileBtn.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when clicking a link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                body.classList.remove('menu-open');
                const icon = mobileBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }

    // --- Simple Drag and Drop for Kanban (Demo) ---
    const draggables = document.querySelectorAll('.kanban-card');
    const containers = document.querySelectorAll('.kanban-col');

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', () => {
            draggable.classList.add('dragging');
        });

        draggable.addEventListener('dragend', () => {
            draggable.classList.remove('dragging');
        });
    });

    containers.forEach(container => {
        container.addEventListener('dragover', e => {
            e.preventDefault();
            const afterElement = getDragAfterElement(container, e.clientY);
            const draggable = document.querySelector('.dragging');
            if (afterElement == null) {
                container.appendChild(draggable);
            } else {
                container.insertBefore(draggable, afterElement);
            }
        });
    });

    function getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll('.kanban-card:not(.dragging)')];

        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child };
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }

    // --- Back to Top Button ---
    const backToTopBtn = document.createElement('button');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopBtn.setAttribute('title', 'Back to Top');
    document.body.appendChild(backToTopBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // --- Dashboard Sidebar Navigation ---
    const sidebarLinks = document.querySelectorAll('.sidebar-link[data-section]');
    const dashboardSections = document.querySelectorAll('.dashboard-section');
    const sectionTitle = document.getElementById('section-title');

    if (sidebarLinks.length > 0) {
        sidebarLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetSectionId = `${link.getAttribute('data-section')}-section`;
                const targetSection = document.getElementById(targetSectionId);

                if (targetSection) {
                    // Update Sidebar Links
                    sidebarLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');

                    // Update Main Content Sections
                    dashboardSections.forEach(section => {
                        section.classList.remove('active');
                    });
                    targetSection.classList.add('active');

                    // Update Page Header Title
                    if (sectionTitle) {
                        sectionTitle.textContent = link.textContent.trim();
                    }
                }
            });
        });
    }

    // --- Dashboard Sidebar Mobile Toggle ---
    const dashboardSidebarBtn = document.querySelector('.dashboard-sidebar-btn');
    const dashboardSidebar = document.querySelector('.sidebar');

    if (dashboardSidebarBtn && dashboardSidebar) {
        dashboardSidebarBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            dashboardSidebar.classList.toggle('active');
        });

        // Close sidebar when clicking outside
        document.addEventListener('click', (e) => {
            if (dashboardSidebar.classList.contains('active') &&
                !dashboardSidebar.contains(e.target) &&
                !dashboardSidebarBtn.contains(e.target)) {
                dashboardSidebar.classList.remove('active');
            }
        });
    }

    // --- Auth Pages Logic ---
    // Password Visibility Toggle
    const togglePasswordIcons = document.querySelectorAll('.toggle-password');
    togglePasswordIcons.forEach(icon => {
        icon.addEventListener('click', function () {
            const passwordInput = this.previousElementSibling;
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            // Toggle eye/eye-slash icon
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    });

    // Sign Up Terms Checkbox
    const termsCheckbox = document.getElementById('terms-checkbox');
    const signupBtn = document.getElementById('signup-btn');

    if (termsCheckbox && signupBtn) {
        termsCheckbox.addEventListener('change', function () {
            signupBtn.disabled = !this.checked;
        });
    }

    // --- Entrance Animations on Scroll ---
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-up');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Once it's revealed, we can stop observing it
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before it comes into full view
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // Handle elements that might already be in view on load
    // (IntersectionObserver handles this by default, but we can double check)
});

