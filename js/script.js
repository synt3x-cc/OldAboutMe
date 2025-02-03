// Particles.js for dynamic background
particlesJS("particles-js", {
    particles: {
        number: { value: 80 },
        color: { value: "#ffffff" },
        shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
        },
        opacity: { value: 0.5 },
        size: { value: 3 },
        move: { speed: 6 },
    },
    interactivity: {
        events: { onhover: { enable: true, mode: "repulse" } },
    },
});

// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 50, // Adjusted for nav height
            behavior: 'smooth',
        });
    });
});
