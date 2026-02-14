// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initHeaderScroll();
    initNewsletterForm();
    initProductHover();
    initSmoothScrolling();
});

// Header scroll effect
function initHeaderScroll() {
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
}

// Newsletter form handling
function initNewsletterForm() {
    const form = document.querySelector('.newsletter-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            if (validateEmail(email)) {
                // Show success message
                alert('Thank you for subscribing!');
                this.reset();
            } else {
                alert('Please enter a valid email address');
            }
        });
    }
}

// Product card hover effects
function initProductHover() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Add click functionality
        card.addEventListener('click', function() {
            const productName = this.querySelector('h3').textContent;
            alert(`Viewing ${productName}`);
        });
    });
}



// Smooth scrolling for navigation
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1); // Remove #
            
            let targetElement;
            if (targetId === 'collection') {
                targetElement = document.querySelector('.collection');
            } else if (targetId === 'men') {
                targetElement = document.querySelector('.men');
            } else if (targetId === 'women') {
                targetElement = document.querySelector('.women');
            } else if (targetId === 'new') {
                targetElement = document.querySelector('.hero');
            }
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 120; // Account for fixed header
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Utility Functions
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function copyToClipboard(text) {
    // Create temporary textarea
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    
    // Select and copy
    textarea.select();
    document.execCommand('copy');
    
    // Clean up
    document.body.removeChild(textarea);
}



// Function to show placeholder when image fails to load
function showPlaceholder(imgElement, imagePath) {
    // Create a placeholder div to replace the img element
    const placeholder = document.createElement('div');
    placeholder.className = 'image-placeholder';
    placeholder.setAttribute('data-src', imagePath);
    placeholder.textContent = `Image: ${imagePath}`;
    
    // Replace the img element with the placeholder
    imgElement.parentNode.replaceChild(placeholder, imgElement);
    
    // Add click functionality to copy path
    placeholder.addEventListener('click', function() {
        copyToClipboard(imagePath);
        alert(`Copied path: ${imagePath}`);
    });
    
    // Add hover effect
    placeholder.addEventListener('mouseenter', function() {
        this.style.opacity = '0.8';
        this.style.cursor = 'pointer';
    });
    
    placeholder.addEventListener('mouseleave', function() {
        this.style.opacity = '1';
    });
}

// Function to convert placeholder to actual image when available
function loadImageIfExists(imagePath, containerElement) {
    const img = new Image();
    img.onload = function() {
        // If image loads successfully, replace placeholder with actual image
        const imgElement = document.createElement('img');
        imgElement.src = imagePath;
        imgElement.alt = `Image: ${imagePath}`;
        imgElement.className = 'actual-image';
        imgElement.onerror = function() {
            showPlaceholder(this, imagePath);
        };
        containerElement.innerHTML = '';
        containerElement.appendChild(imgElement);
    };
    img.onerror = function() {
        // Image doesn't exist, keep the placeholder
        const placeholder = document.createElement('div');
        placeholder.className = 'image-placeholder';
        placeholder.setAttribute('data-src', imagePath);
        placeholder.textContent = `Image: ${imagePath}`;
        containerElement.innerHTML = '';
        containerElement.appendChild(placeholder);
        
        // Add click functionality to copy path
        placeholder.addEventListener('click', function() {
            copyToClipboard(imagePath);
            alert(`Copied path: ${imagePath}`);
        });
        
        // Add hover effect
        placeholder.addEventListener('mouseenter', function() {
            this.style.opacity = '0.8';
            this.style.cursor = 'pointer';
        });
        
        placeholder.addEventListener('mouseleave', function() {
            this.style.opacity = '1';
        });
    };
    img.src = imagePath;
}

// Convert all placeholders to images on page load
document.addEventListener('DOMContentLoaded', function() {
    // Find all elements that should contain images
    const imageContainers = document.querySelectorAll('.image-placeholder');
    imageContainers.forEach(function(container) {
        const imagePath = container.getAttribute('data-src');
        loadImageIfExists(imagePath, container.parentNode);
    });
});

