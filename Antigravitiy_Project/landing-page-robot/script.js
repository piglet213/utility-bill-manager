// Simple interaction for scroll or animations can be added here
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.feature-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.2}s`;
        observer.observe(card);
    });

    // Modal Logic
    const modal = document.getElementById("loginModal");
    const btn = document.querySelector(".hero .btn-primary"); // Select the Login button in hero
    const span = document.getElementsByClassName("close-btn")[0];

    // Open logic
    if (btn) {
        btn.onclick = function () {
            modal.style.display = "flex"; // Changed to flex to use justify/align center
        }
    }

    // Close logic
    if (span) {
        span.onclick = function () {
            modal.style.display = "none";
        }
    }

    // Click outside to close
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Password Toggle Logic
    const passwordToggle = document.getElementById('passwordToggle');
    const passwordInput = document.getElementById('password');
    if (passwordToggle && passwordInput) {
        passwordToggle.addEventListener('click', () => {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);

            // Update icon
            if (type === 'text') {
                passwordToggle.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="eye-icon"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>';
            } else {
                passwordToggle.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="eye-icon"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>';
            }
        });
    }

    // Login Form Submission
    const form = document.getElementById("loginForm");
    const loginError = document.getElementById("loginError");

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const usernameInput = document.getElementById('username');
            const passwordInput = document.getElementById('password');

            if (usernameInput.value === 'suklae' && passwordInput.value === 'Piglet123') {
                window.location.href = '../utility-bill-manager/index.html';
            } else {
                loginError.textContent = 'Invalid ID or Password. Please try again.';
                loginError.style.display = 'block';
                passwordInput.value = ''; // Clear password field
                passwordInput.focus();
            }
        });
    }

    // Hide error message when user starts typing
    const inputs = document.querySelectorAll('#loginForm input');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            loginError.style.display = 'none';
        });
    });
});
