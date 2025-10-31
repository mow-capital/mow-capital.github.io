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
// Contact Form Handling
// ===========================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Construct mailto link with pre-filled data
        const mailtoLink = `mailto:hello@mowcaps.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        
        // Open email client
        window.location.href = mailtoLink;
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
// Deals Section - Click on Deal Count to Scroll
// ===========================
const dealCountStat = document.getElementById('dealCountStat');
const dealsSection = document.getElementById('deals');

if (dealCountStat && dealsSection) {
    dealCountStat.addEventListener('click', () => {
        const offsetTop = dealsSection.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
}

// ===========================
// Deals Horizontal Scroll Navigation
// ===========================
const dealsGrid = document.getElementById('dealsGrid');
const scrollLeftBtn = document.getElementById('scrollLeft');
const scrollRightBtn = document.getElementById('scrollRight');

if (scrollLeftBtn && scrollRightBtn && dealsGrid) {
    const scrollAmount = 350;

    scrollLeftBtn.addEventListener('click', () => {
        dealsGrid.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    scrollRightBtn.addEventListener('click', () => {
        dealsGrid.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
}

// ===========================
// Deal Modal Functionality
// ===========================
const dealModal = document.getElementById('dealModal');
const closeModalBtn = document.getElementById('closeModal');
const dealCards = document.querySelectorAll('.deal-card');

// Deal data with descriptions
const dealData = {
    1: {
        title: 'Tech Merger Advisory',
        category: 'Technology',
        value: '$500M Transaction',
        icon: 'fa-building',
        description: `Advised on the strategic merger of two leading technology firms, combining their complementary product portfolios and market reach. The transaction created significant synergies in R&D and go-to-market capabilities, positioning the combined entity as a market leader in enterprise software solutions. Our team managed the entire deal lifecycle from valuation to regulatory approvals, ensuring a smooth integration process that preserved shareholder value.`
    },
    2: {
        title: 'Banking Acquisition',
        category: 'Finance',
        value: '$1.2B Transaction',
        icon: 'fa-university',
        description: `Led the acquisition advisory for a regional banking institution expanding into new markets through strategic acquisition. The transaction involved comprehensive due diligence, regulatory compliance navigation, and integration planning across multiple jurisdictions. Our financial modeling and risk assessment frameworks enabled the client to achieve their expansion goals while maintaining capital adequacy ratios and regulatory compliance throughout the process.`
    },
    3: {
        title: 'Healthcare Network Consolidation',
        category: 'Healthcare',
        value: '$750M Transaction',
        icon: 'fa-hospital',
        description: `Facilitated the consolidation of three regional healthcare networks to create economies of scale and improve patient care delivery. The transaction required careful navigation of complex regulatory requirements, physician employment agreements, and managed care contracts. Our healthcare specialists developed innovative solutions to preserve clinical autonomy while achieving operational efficiencies, resulting in improved financial performance and patient outcomes.`
    },
    4: {
        title: 'Retail Chain Expansion',
        category: 'Retail',
        value: '$350M Transaction',
        icon: 'fa-shopping-cart',
        description: `Advised a national retail chain on its strategic expansion through acquisition of complementary retail assets in high-growth markets. The transaction included comprehensive market analysis, real estate portfolio optimization, and supply chain integration planning. Our retail experts identified significant cost synergies in procurement and distribution while preserving the acquired brand's customer loyalty and market positioning in key demographic segments.`
    },
    5: {
        title: 'Manufacturing M&A',
        category: 'Industrial',
        value: '$900M Transaction',
        icon: 'fa-industry',
        description: `Orchestrated the merger of two manufacturing companies to create a vertically integrated industry leader with enhanced production capabilities and market access. The transaction involved complex operational due diligence, including plant assessments, supply chain analysis, and workforce integration planning. Our industrial team identified opportunities for operational excellence through lean manufacturing principles and technology investments that drove significant margin improvements.`
    },
    6: {
        title: 'Private Equity Investment',
        category: 'Finance',
        value: '$600M Transaction',
        icon: 'fa-chart-line',
        description: `Advised a private equity firm on a platform investment in the business services sector, including buy-and-build strategy development and operational improvement initiatives. The transaction required sophisticated financial modeling, management assessment, and market positioning analysis. Our team developed a comprehensive value creation plan that identified multiple expansion opportunities and operational improvements, providing a clear roadmap to achieve target returns over the investment period.`
    },
    7: {
        title: 'SaaS Platform Acquisition',
        category: 'Technology',
        value: '$400M Transaction',
        icon: 'fa-mobile-alt',
        description: `Guided the acquisition of a high-growth SaaS platform by a strategic buyer seeking to expand its cloud-based product offerings. The transaction included detailed technology due diligence, customer contract analysis, and revenue model optimization. Our technology specialists evaluated the platform's scalability, security architecture, and competitive positioning to ensure alignment with the acquirer's strategic objectives and identified opportunities for cross-selling and product integration.`
    },
    8: {
        title: 'Renewable Energy Investment',
        category: 'Energy',
        value: '$1.5B Transaction',
        icon: 'fa-leaf',
        description: `Structured and advised on a landmark renewable energy infrastructure investment involving solar and wind generation assets across multiple states. The transaction required expertise in project finance, power purchase agreements, and regulatory incentives at federal and state levels. Our energy team conducted comprehensive technical and commercial due diligence, negotiated favorable financing terms, and developed an asset management strategy to optimize long-term returns while supporting the client's sustainability objectives.`
    }
};

// Open modal when clicking a deal card
dealCards.forEach(card => {
    card.addEventListener('click', () => {
        const dealId = card.getAttribute('data-deal');
        const deal = dealData[dealId];
        
        if (deal) {
            // Update modal content
            document.getElementById('modalTitle').textContent = deal.title;
            document.getElementById('modalCategory').innerHTML = `<i class="fas fa-tag"></i> ${deal.category}`;
            document.getElementById('modalValue').textContent = deal.value;
            document.getElementById('modalDescription').innerHTML = `<p>${deal.description}</p>`;
            document.getElementById('modalIcon').innerHTML = `<i class="fas ${deal.icon}"></i>`;
            
            // Show modal
            dealModal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }
    });
});

// Close modal when clicking close button
if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
        dealModal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    });
}

// Close modal when clicking outside the modal content
dealModal.addEventListener('click', (e) => {
    if (e.target === dealModal) {
        dealModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && dealModal.classList.contains('active')) {
        dealModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});
