// Function to show the selected page and hide others
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show the selected page
    document.getElementById(pageId).classList.add('active');
    
    // Update active navigation link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Find and activate the corresponding nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.textContent.toLowerCase() === pageId) {
            link.classList.add('active');
        } else if (pageId === 'home' && link.textContent.toLowerCase() === 'home') {
            link.classList.add('active');
        }
    });
    
    // Close mobile menu if open
    document.getElementById('navMenu').classList.remove('active');
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Toggle mobile menu
document.getElementById('menuToggle').addEventListener('click', function() {
    document.getElementById('navMenu').classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const navMenu = document.getElementById('navMenu');
    const menuToggle = document.getElementById('menuToggle');
    
    if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        navMenu.classList.remove('active');
    }
});

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Show home page by default
    showPage('home');
});