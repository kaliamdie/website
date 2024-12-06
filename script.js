// Navigation: Handle Page Navigation
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function (e) {
        // Get the URL in the href attribute
        const targetPage = this.getAttribute("href");

        // Navigate to the target page
        window.location.href = targetPage;
    });
});

// Highlight Active Page in the Navigation Menu
const navLinks = document.querySelectorAll("nav ul li a");
const currentPath = window.location.pathname;

navLinks.forEach(link => {
    const linkPath = link.getAttribute("href");
    if (currentPath.includes(linkPath)) {
        link.classList.add("active");
    } else {
        link.classList.remove("active");
    }
});

// Contact Form Validation
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = contactForm.querySelector("input[placeholder='Your Name']");
        const email = contactForm.querySelector("input[placeholder='Your Email']");
        const message = contactForm.querySelector("textarea[placeholder='Your Message']");
        let valid = true;

        // Validate Name
        if (!name.value.trim()) {
            alert("Name is required.");
            valid = false;
        }

        // Validate Email
        if (!email.value.trim() || !/^\S+@\S+\.\S+$/.test(email.value)) {
            alert("Please provide a valid email.");
            valid = false;
        }

        // Validate Message
        if (!message.value.trim()) {
            alert("Message cannot be empty.");
            valid = false;
        }

        if (valid) {
            alert("Thank you for contacting us! We will get back to you shortly.");
            contactForm.reset();
        }
    });
}

// Auto-Rotating Hero Section (Optional Feature for Home Page)
const heroMessages = [
    "Experience the rich flavors of Ethiopia.",
    "Authentic dishes crafted with love.",
    "Where tradition meets taste."
];
const heroMessageElement = document.querySelector(".hero h2");

if (heroMessageElement) {
    let messageIndex = 0;

    setInterval(() => {
        heroMessageElement.textContent = heroMessages[messageIndex];
        messageIndex = (messageIndex + 1) % heroMessages.length;
    }, 4000);
}
