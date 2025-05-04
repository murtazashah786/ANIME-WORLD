 /**
 * Main JavaScript file for the Anime Website
 * Contains functions for navigation, form validation and animations
 */

// Wait for the DOM to be fully loaded before executing JavaScript
document.addEventListener("DOMContentLoaded", function () {
    // ========================================
    // Mobile Navigation Toggle with Smooth Animation
    // ========================================
    const navbarToggle = document.getElementById("navbar-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    if (navbarToggle && mobileMenu) {
        navbarToggle.addEventListener("click", function () {
            // Toggle the mobile menu with smooth height animation
            if (mobileMenu.classList.contains("h-0")) {
                // Get the scroll height of the element
                const height = mobileMenu.scrollHeight;
                mobileMenu.style.height = height + "px";
                mobileMenu.classList.remove("h-0");
                navbarToggle.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                mobileMenu.style.height = "0";
                mobileMenu.classList.add("h-0");
                navbarToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    }

    // ========================================
    // Active Navigation Link Highlighting
    // ========================================
    const currentPage = window.location.pathname;

    // Both desktop and mobile navigation links
    const navLinks = document.querySelectorAll(
        ".navbar-menu a, #mobile-menu a",
    );

    navLinks.forEach((link) => {
        const linkPath = link.getAttribute("href");
        // Check if the current page matches the link's href or if we're on the home page
        if (
            currentPage.endsWith(linkPath) ||
            (linkPath === "index.html" &&
                (currentPage === "/" || currentPage.endsWith("/")))
        ) {
            link.classList.add("active");
        }
    });

    // ========================================
    // Contact Form Validation
    // ========================================
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            // Get form values
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            let isValid = true;
            let errorMessages = [];

            // Validate name
            if (!name.trim()) {
                isValid = false;
                errorMessages.push("Name is required");
                document.getElementById("name").classList.add("border-danger");
                document
                    .getElementById("name")
                    .classList.remove("border-gray-300");
            } else {
                document
                    .getElementById("name")
                    .classList.remove("border-danger");
                document
                    .getElementById("name")
                    .classList.add("border-gray-300");
            }

            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email.trim() || !emailRegex.test(email)) {
                isValid = false;
                errorMessages.push("Valid email is required");
                document.getElementById("email").classList.add("border-danger");
                document
                    .getElementById("email")
                    .classList.remove("border-gray-300");
            } else {
                document
                    .getElementById("email")
                    .classList.remove("border-danger");
                document
                    .getElementById("email")
                    .classList.add("border-gray-300");
            }

            // Validate message
            if (!message.trim()) {
                isValid = false;
                errorMessages.push("Message is required");
                document
                    .getElementById("message")
                    .classList.add("border-danger");
                document
                    .getElementById("message")
                    .classList.remove("border-gray-300");
            } else {
                document
                    .getElementById("message")
                    .classList.remove("border-danger");
                document
                    .getElementById("message")
                    .classList.add("border-gray-300");
            }

            // Display success or error message
            const formStatus = document.getElementById("form-status");
            formStatus.classList.remove("hidden");

            if (isValid) {
                formStatus.textContent =
                    "Message sent successfully! We'll get back to you soon.";
                formStatus.classList.add("bg-success/10", "text-success");
                formStatus.classList.remove("bg-danger/10", "text-danger");
                contactForm.reset();

                // Hide success message after 3 seconds
                setTimeout(() => {
                    formStatus.classList.add("hidden");
                }, 3000);
            } else {
                formStatus.textContent =
                    "Please fix the following errors: " +
                    errorMessages.join(", ");
                formStatus.classList.add("bg-danger/10", "text-danger");
                formStatus.classList.remove("bg-success/10", "text-success");
            }
        });
    }

    // ========================================
    // Login Form Validation
    // ========================================
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            // Get form values
            const email = document.getElementById("login-email").value;
            const password = document.getElementById("login-password").value;

            let isValid = true;
            let errorMessages = [];

            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email.trim() || !emailRegex.test(email)) {
                isValid = false;
                errorMessages.push("Valid email is required");
                document
                    .getElementById("login-email")
                    .classList.add("border-danger");
                document
                    .getElementById("login-email")
                    .classList.remove("border-gray-300");
            } else {
                document
                    .getElementById("login-email")
                    .classList.remove("border-danger");
                document
                    .getElementById("login-email")
                    .classList.add("border-gray-300");
            }

            // Validate password
            if (!password.trim()) {
                isValid = false;
                errorMessages.push("Password is required");
                document
                    .getElementById("login-password")
                    .classList.add("border-danger");
                document
                    .getElementById("login-password")
                    .classList.remove("border-gray-300");
            } else {
                document
                    .getElementById("login-password")
                    .classList.remove("border-danger");
                document
                    .getElementById("login-password")
                    .classList.add("border-gray-300");
            }

            // Display success or error message
            const loginStatus = document.getElementById("login-status");
            loginStatus.classList.remove("hidden");

            if (isValid) {
                loginStatus.textContent = "Login successful!";
                loginStatus.classList.add("bg-success/10", "text-success");
                loginStatus.classList.remove("bg-danger/10", "text-danger");
                loginForm.reset();

                // Hide success message after 3 seconds
                setTimeout(() => {
                    loginStatus.classList.add("hidden");
                }, 3000);

                // You could redirect the user to home page or dashboard after successful login
                // window.location.href = 'index.html';
            } else {
                loginStatus.textContent =
                    "Please fix the following errors: " +
                    errorMessages.join(", ");
                loginStatus.classList.add("bg-danger/10", "text-danger");
                loginStatus.classList.remove("bg-success/10", "text-success");
            }
        });
    }

    // ========================================
    // Register Form Validation
    // ========================================
    const registerForm = document.getElementById("register-form");
    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();

            // Get form values
            const firstName = document.getElementById("first-name").value;
            const lastName = document.getElementById("last-name").value;
            const email = document.getElementById("register-email").value;
            const username = document.getElementById("username").value;
            const password = document.getElementById("register-password").value;
            const confirmPassword =
                document.getElementById("confirm-password").value;
            const terms = document.getElementById("terms").checked;

            let isValid = true;
            let errorMessages = [];

            // Validate first name
            if (!firstName.trim()) {
                isValid = false;
                errorMessages.push("First name is required");
                document
                    .getElementById("first-name")
                    .classList.add("border-danger");
                document
                    .getElementById("first-name")
                    .classList.remove("border-gray-300");
            } else {
                document
                    .getElementById("first-name")
                    .classList.remove("border-danger");
                document
                    .getElementById("first-name")
                    .classList.add("border-gray-300");
            }

            // Validate last name
            if (!lastName.trim()) {
                isValid = false;
                errorMessages.push("Last name is required");
                document
                    .getElementById("last-name")
                    .classList.add("border-danger");
                document
                    .getElementById("last-name")
                    .classList.remove("border-gray-300");
            } else {
                document
                    .getElementById("last-name")
                    .classList.remove("border-danger");
                document
                    .getElementById("last-name")
                    .classList.add("border-gray-300");
            }

            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email.trim() || !emailRegex.test(email)) {
                isValid = false;
                errorMessages.push("Valid email is required");
                document
                    .getElementById("register-email")
                    .classList.add("border-danger");
                document
                    .getElementById("register-email")
                    .classList.remove("border-gray-300");
            } else {
                document
                    .getElementById("register-email")
                    .classList.remove("border-danger");
                document
                    .getElementById("register-email")
                    .classList.add("border-gray-300");
            }

            // Validate username
            if (!username.trim()) {
                isValid = false;
                errorMessages.push("Username is required");
                document
                    .getElementById("username")
                    .classList.add("border-danger");
                document
                    .getElementById("username")
                    .classList.remove("border-gray-300");
            } else {
                document
                    .getElementById("username")
                    .classList.remove("border-danger");
                document
                    .getElementById("username")
                    .classList.add("border-gray-300");
            }

            // Validate password
            if (!password.trim() || password.length < 8) {
                isValid = false;
                errorMessages.push("Password must be at least 8 characters");
                document
                    .getElementById("register-password")
                    .classList.add("border-danger");
                document
                    .getElementById("register-password")
                    .classList.remove("border-gray-300");
            } else {
                document
                    .getElementById("register-password")
                    .classList.remove("border-danger");
                document
                    .getElementById("register-password")
                    .classList.add("border-gray-300");
            }

            // Validate confirm password
            if (password !== confirmPassword) {
                isValid = false;
                errorMessages.push("Passwords do not match");
                document
                    .getElementById("confirm-password")
                    .classList.add("border-danger");
                document
                    .getElementById("confirm-password")
                    .classList.remove("border-gray-300");
            } else {
                document
                    .getElementById("confirm-password")
                    .classList.remove("border-danger");
                document
                    .getElementById("confirm-password")
                    .classList.add("border-gray-300");
            }

            // Validate terms
            const termsError = document.getElementById("terms-error");
            if (!terms) {
                isValid = false;
                errorMessages.push("You must agree to the terms");
                termsError.textContent = "You must agree to the terms";
                termsError.classList.remove("hidden");
            } else {
                termsError.textContent = "";
                termsError.classList.add("hidden");
            }

            // Display success or error message
            const registerStatus = document.getElementById("register-status");
            registerStatus.classList.remove("hidden");

            if (isValid) {
                registerStatus.textContent = "Registration successful!";
                registerStatus.classList.add("bg-success/10", "text-success");
                registerStatus.classList.remove("bg-danger/10", "text-danger");
                registerForm.reset();

                // Hide success message after 3 seconds
                setTimeout(() => {
                    registerStatus.classList.add("hidden");
                }, 3000);

                // You could redirect the user to login page after successful registration
                // window.location.href = 'login.html';
            } else {
                registerStatus.textContent =
                    "Please fix the following errors: " +
                    errorMessages.join(", ");
                registerStatus.classList.add("bg-danger/10", "text-danger");
                registerStatus.classList.remove(
                    "bg-success/10",
                    "text-success",
                );
            }
        });
    }

    // ========================================
    // Newsletter Form Validation
    // ========================================
    const newsletterForm = document.getElementById("newsletter-form");
    if (newsletterForm) {
        newsletterForm.addEventListener("submit", function (event) {
            event.preventDefault();

            // Get form value
            const email = document.getElementById("newsletter-email").value;

            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email.trim() || !emailRegex.test(email)) {
                alert("Please enter a valid email address");
            } else {
                alert("Thank you for subscribing to our newsletter!");
                newsletterForm.reset();
            }
        });
    }

    // ========================================
    // Animation for elements when they come into view
    // ========================================
    const animatedElements = document.querySelectorAll(".fade-in, .slide-up");

    // Function to check if an element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <=
                (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }

    // Function to handle scroll animation
    function handleScrollAnimation() {
        animatedElements.forEach((element) => {
            if (
                isInViewport(element) &&
                !element.classList.contains("animated")
            ) {
                element.classList.add("animated");
            }
        });
    }

    // Initial check and scroll event listener
    handleScrollAnimation();
    window.addEventListener("scroll", handleScrollAnimation);
});
