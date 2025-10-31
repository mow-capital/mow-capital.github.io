// ===========================
// Initialize AOS (Animate On Scroll)
// ===========================
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// ===========================
// Navbar Scroll Effect
// ===========================
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Update active nav link based on scroll position
    updateActiveNavLink();
});

// ===========================
// Mobile Menu Toggle
// ===========================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===========================
// Active Nav Link on Scroll
// ===========================
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (correspondingLink) {
                correspondingLink.classList.add('active');
            }
        }
    });
}

// ===========================
// Smooth Scroll
// ===========================
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Animated Counters
// ===========================
const counters = document.querySelectorAll('.stat-number');
let counterAnimated = false;

function animateCounters() {
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };

        updateCounter();
    });
}

// Trigger counter animation when stats section is in view
const statsSection = document.querySelector('.stats');
const observerOptions = {
    threshold: 0.5
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !counterAnimated) {
            animateCounters();
            counterAnimated = true;
        }
    });
}, observerOptions);

if (statsSection) {
    statsObserver.observe(statsSection);
}

// ===========================
// Portfolio Filter
// ===========================
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
                // Re-trigger AOS animation
                item.classList.add('aos-animate');
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// ===========================
// Testimonials Slider
// ===========================
const testimonialCards = document.querySelectorAll('.testimonial-card');
const prevBtn = document.getElementById('prevTestimonial');
const nextBtn = document.getElementById('nextTestimonial');
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonialCards.forEach(card => card.classList.remove('active'));
    testimonialCards[index].classList.add('active');
}

if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial - 1 + testimonialCards.length) % testimonialCards.length;
        showTestimonial(currentTestimonial);
    });

    nextBtn.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
        showTestimonial(currentTestimonial);
    });

    // Auto-rotate testimonials every 5 seconds
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
        showTestimonial(currentTestimonial);
    }, 5000);
}

// ===========================
// Contact Form Handling
// ===========================
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        try {
            // Using Formspree (free email service for static sites)
            // Replace 'YOUR_FORM_ID' with your actual Formspree form ID
            // Get one at: https://formspree.io/
            const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                formMessage.textContent = 'Thank you! Your message has been sent successfully.';
                formMessage.className = 'form-message success';
                contactForm.reset();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            // For demo purposes, show success message even without Formspree configured
            formMessage.textContent = 'Thank you! Your message has been received. (Demo mode - configure Formspree for actual email delivery)';
            formMessage.className = 'form-message success';
            contactForm.reset();
        }

        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    });
}

// ===========================
// Back to Top Button
// ===========================
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===========================
// Page Load Animation
// ===========================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===========================
// Prevent Form Resubmission
// ===========================
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}

// ===========================
// Enhanced Horse Animation
// ===========================
function createEmeraldAccents() {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        if (index % 2 === 0) {
            for (let i = 0; i < 3; i++) {
                const accent = document.createElement('div');
                accent.className = 'emerald-accent';
                accent.style.top = `${Math.random() * 100}%`;
                accent.style.left = `${Math.random() * 100}%`;
                accent.style.animationDelay = `${Math.random() * 3}s`;
                section.appendChild(accent);
            }
        }
    });
}

// Create accents on load
window.addEventListener('load', () => {
    createEmeraldAccents();
});

// Add premium glow effects to cards
const cards = document.querySelectorAll('.service-card, .portfolio-item');
cards.forEach(card => {
    card.addEventListener('mouseenter', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        this.style.setProperty('--mouse-x', `${x}px`);
        this.style.setProperty('--mouse-y', `${y}px`);
    });
});

// ===========================
// Deal Count Click to Scroll
// ===========================
const dealCountStat = document.getElementById('dealCountStat');
if (dealCountStat) {
    dealCountStat.addEventListener('click', () => {
        const dealsSection = document.getElementById('deals');
        if (dealsSection) {
            dealsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
}

// ===========================
// Deal Modal Data
// ===========================
const dealData = {
    1: {
        title: 'Tech Acquisition Advisory',
        category: 'Technology',
        value: '$50M+',
        icon: 'fa-chart-line',
        description: 'Successfully advised a leading tech startup through a strategic acquisition process. Our comprehensive due diligence and valuation services helped secure optimal terms for our client. The transaction included technology transfer, talent retention strategies, and post-merger integration planning. We facilitated negotiations between multiple stakeholders and ensured regulatory compliance throughout the process. The deal closed ahead of schedule with favorable conditions for all parties involved.'
    },
    2: {
        title: 'Healthcare Network Merger',
        category: 'Healthcare',
        value: '$200M+',
        icon: 'fa-hospital',
        description: 'Orchestrated the merger of two regional healthcare networks, creating one of the largest integrated health systems in the region. Our team conducted extensive operational analysis, identified synergies, and developed a comprehensive integration roadmap. We navigated complex regulatory requirements and stakeholder concerns while maintaining operational continuity. The merger resulted in improved patient care capabilities, enhanced operational efficiency, and significant cost savings.'
    },
    3: {
        title: 'Real Estate Portfolio Sale',
        category: 'Real Estate',
        value: '$150M+',
        icon: 'fa-building',
        description: 'Advised on the strategic sale of a diverse commercial real estate portfolio spanning multiple markets. Our market analysis and valuation expertise attracted premium buyers and generated competitive bidding. We structured the transaction to optimize tax efficiency and maximize returns for stakeholders. The deal included complex lease assignments and tenant negotiations, all executed seamlessly under tight timelines.'
    },
    4: {
        title: 'Manufacturing M&A',
        category: 'Manufacturing',
        value: '$75M+',
        icon: 'fa-industry',
        description: 'Guided a mid-market manufacturing company through a transformative acquisition that doubled their production capacity and market reach. We identified strategic targets, conducted thorough operational due diligence, and negotiated favorable terms. Our post-merger integration strategy ensured smooth operations and achieved projected synergies within the first year. The combined entity now leads their market segment with enhanced competitive advantages.'
    },
    5: {
        title: 'Retail Chain Expansion',
        category: 'Retail',
        value: '$30M+',
        icon: 'fa-store',
        description: 'Supported a regional retail chain in securing growth capital and executing a strategic expansion plan across new markets. We developed comprehensive financial models, pitched to strategic investors, and negotiated favorable financing terms. Our market entry strategy and site selection analysis led to successful new store openings with strong performance metrics. The expansion positioned the client for continued growth and market leadership.'
    },
    6: {
        title: 'SaaS Platform Valuation',
        category: 'Technology',
        value: '$100M+',
        icon: 'fa-laptop-code',
        description: 'Conducted a comprehensive valuation for a high-growth SaaS platform preparing for Series C funding. Our detailed financial analysis, market positioning study, and growth projections attracted top-tier venture capital firms. We advised on cap table optimization and deal structure to align with long-term strategic goals. The successful funding round exceeded targets and positioned the company for accelerated growth and market expansion.'
    },
    7: {
        title: 'Green Energy Investment',
        category: 'Energy',
        value: '$250M+',
        icon: 'fa-leaf',
        description: 'Structured and advised on a landmark renewable energy infrastructure investment involving multiple stakeholders and complex financing arrangements. Our team navigated regulatory frameworks, secured tax incentives, and coordinated with government agencies. The project financing included a mix of equity, debt, and green bonds, optimized for returns and risk management. This transformative investment contributes to regional sustainability goals while delivering strong financial performance.'
    },
    8: {
        title: 'EdTech Funding Round',
        category: 'Education',
        value: '$20M+',
        icon: 'fa-graduation-cap',
        description: 'Advised an innovative EdTech startup through their Series A funding round, connecting them with education-focused venture capital and strategic corporate investors. Our pitch strategy highlighted the platform\'s proven user growth, engagement metrics, and market differentiation. We negotiated terms that balanced growth capital needs with founder control objectives. The successful raise enabled product development acceleration and expansion into new geographic markets.'
    }
};

// ===========================
// Deal Card Click Handler
// ===========================
const dealCards = document.querySelectorAll('.deal-card');
const dealOverlay = document.getElementById('dealOverlay');
const dealOverlayClose = document.querySelector('.deal-overlay-close');

dealCards.forEach(card => {
    card.addEventListener('click', () => {
        const dealId = card.getAttribute('data-deal-id');
        const deal = dealData[dealId];
        
        if (deal) {
            // Update overlay content
            document.getElementById('dealOverlayTitle').textContent = deal.title;
            document.getElementById('dealOverlayCategory').textContent = deal.category;
            document.getElementById('dealOverlayDescription').textContent = deal.description;
            document.getElementById('dealOverlayValue').textContent = deal.value;
            
            // Update icon
            const overlayIcon = document.querySelector('.deal-overlay-icon i');
            overlayIcon.className = `fas ${deal.icon}`;
            
            // Show overlay
            dealOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

// Close overlay on close button click
if (dealOverlayClose) {
    dealOverlayClose.addEventListener('click', () => {
        dealOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
}

// Close overlay on background click
dealOverlay.addEventListener('click', (e) => {
    if (e.target === dealOverlay) {
        dealOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Close overlay on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && dealOverlay.classList.contains('active')) {
        dealOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});
