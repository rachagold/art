// ============================================
// SERIES NAVIGATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Series navigation
    const seriesOverview = document.getElementById('seriesOverview');
    const galleryDetail = document.getElementById('galleryDetail');
    const seriesCards = document.querySelectorAll('.series-card');
    const backBtn = document.getElementById('backToSeries');
    const gallerySections = document.querySelectorAll('.gallery-section');

    // Show series when card is clicked
    seriesCards.forEach(card => {
        card.addEventListener('click', function() {
            const seriesName = this.dataset.series;
            
            // Hide overview, show detail
            if (seriesOverview) seriesOverview.style.display = 'none';
            if (galleryDetail) {
                galleryDetail.style.display = 'block';
                galleryDetail.classList.add('active');
            }

            // Show the selected series section
            gallerySections.forEach(section => {
                section.style.display = 'none';
            });
            const targetSection = document.getElementById(seriesName);
            if (targetSection) {
                targetSection.style.display = 'block';
            }

            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // Back button functionality
    if (backBtn) {
        backBtn.addEventListener('click', function() {
            // Hide detail, show overview
            if (galleryDetail) {
                galleryDetail.style.display = 'none';
                galleryDetail.classList.remove('active');
            }
            if (seriesOverview) seriesOverview.style.display = 'block';

            // Hide all gallery sections
            gallerySections.forEach(section => {
                section.style.display = 'none';
            });

            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ============================================
    // ZOOM FUNCTIONALITY
    // ============================================

    // Get all artwork items
    const artworkItems = document.querySelectorAll('.artwork-item');
    const zoomModal = document.getElementById('zoomModal');
    const zoomImage = document.getElementById('zoomImage');
    const zoomTitle = document.getElementById('zoomTitle');
    const zoomDetails = document.getElementById('zoomDetails');
    const closeZoom = document.querySelector('.close-zoom');

    // Add click event to each artwork item
    artworkItems.forEach(item => {
        const imageContainer = item.querySelector('.artwork-image-container');
        const image = item.querySelector('.artwork-image');
        const title = item.querySelector('.artwork-title').textContent;
        const year = item.querySelector('.artwork-year').textContent;
        const medium = item.querySelector('.artwork-medium').textContent;
        const size = item.querySelector('.artwork-size').textContent;

        imageContainer.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Set modal content
            zoomImage.src = image.src.replace('w=600&h=600', 'w=1200&h=1200');
            zoomImage.alt = image.alt;
            zoomTitle.textContent = title;
            zoomDetails.textContent = `${year} • ${medium} • ${size}`;
            
            // Show modal
            zoomModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close modal
    function closeModal() {
        zoomModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (closeZoom) {
        closeZoom.addEventListener('click', closeModal);
    }

    // Close modal on background click
    zoomModal.addEventListener('click', function(e) {
        if (e.target === zoomModal) {
            closeModal();
        }
    });

    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && zoomModal.classList.contains('active')) {
            closeModal();
        }
    });

    // ============================================
    // SMOOTH SCROLLING FOR NAVIGATION
    // ============================================

    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // ============================================
    // INTERSECTION OBSERVER FOR ANIMATIONS
    // ============================================

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe artwork items
    artworkItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });

    // ============================================
    // FORM HANDLING
    // ============================================

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // Simple validation
            if (!formData.name || !formData.email || !formData.subject || !formData.message) {
                alert('Please fill in all fields.');
                return;
            }

            // Here you would typically send the form data to a server
            // For now, we'll just show a success message
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            // Simulate form submission
            setTimeout(() => {
                submitBtn.textContent = 'Message Sent!';
                submitBtn.style.background = '#8bc4a0';
                
                // Reset form
                contactForm.reset();
                
                // Reset button after 3 seconds
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                }, 3000);
            }, 1000);
        });
    }

    // ============================================
    // NAVBAR SCROLL EFFECT
    // ============================================

    const navbar = document.querySelector('.main-nav');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });

    // ============================================
    // PARALLAX EFFECT FOR GEOMETRIC SHAPES
    // ============================================

    const geometricShapes = document.querySelectorAll('.geometric-shape');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
        geometricShapes.forEach((shape, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            shape.style.transform = `translateY(${yPos}px) ${shape.style.transform.includes('rotate') ? shape.style.transform.match(/rotate\([^)]+\)/)?.[0] || '' : ''}`;
        });
    });

    // ============================================
    // IMAGE LAZY LOADING
    // ============================================

    const images = document.querySelectorAll('.artwork-image, .sub-image');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => {
            if (img.dataset.src) {
                imageObserver.observe(img);
            }
        });
    }

    // ============================================
    // KEYBOARD NAVIGATION FOR GALLERY
    // ============================================

    let currentArtworkIndex = -1;
    const allArtworks = Array.from(artworkItems);

    document.addEventListener('keydown', function(e) {
        if (zoomModal.classList.contains('active')) {
            if (e.key === 'ArrowLeft') {
                // Previous artwork
                if (currentArtworkIndex > 0) {
                    currentArtworkIndex--;
                    openArtwork(currentArtworkIndex);
                }
            } else if (e.key === 'ArrowRight') {
                // Next artwork
                if (currentArtworkIndex < allArtworks.length - 1) {
                    currentArtworkIndex++;
                    openArtwork(currentArtworkIndex);
                }
            }
        }
    });

    function openArtwork(index) {
        const item = allArtworks[index];
        const image = item.querySelector('.artwork-image');
        const title = item.querySelector('.artwork-title').textContent;
        const year = item.querySelector('.artwork-year').textContent;
        const medium = item.querySelector('.artwork-medium').textContent;
        const size = item.querySelector('.artwork-size').textContent;

        zoomImage.src = image.src.replace('w=600&h=600', 'w=1200&h=1200');
        zoomImage.alt = image.alt;
        zoomTitle.textContent = title;
        zoomDetails.textContent = `${year} • ${medium} • ${size}`;
    }

    // Update current index when opening modal
    artworkItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            currentArtworkIndex = index;
        });
    });

    // ============================================
    // TOUCH GESTURES FOR MOBILE
    // ============================================

    let touchStartX = 0;
    let touchEndX = 0;

    zoomModal.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    zoomModal.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        if (touchEndX < touchStartX - 50 && currentArtworkIndex < allArtworks.length - 1) {
            // Swipe left - next
            currentArtworkIndex++;
            openArtwork(currentArtworkIndex);
        }
        if (touchEndX > touchStartX + 50 && currentArtworkIndex > 0) {
            // Swipe right - previous
            currentArtworkIndex--;
            openArtwork(currentArtworkIndex);
        }
    }

    // ============================================
    // PERFORMANCE OPTIMIZATION
    // ============================================

    // Throttle scroll events
    function throttle(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Apply throttling to scroll-heavy functions
    window.addEventListener('scroll', throttle(function() {
        // Scroll-based animations
    }, 16)); // ~60fps
});

