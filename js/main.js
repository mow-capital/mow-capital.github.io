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
// Focus Sectors Horizontal Scroll Navigation
// ===========================
const sectorsGrid = document.getElementById('sectorsGrid');
const sectorsScrollLeftBtn = document.getElementById('sectorsScrollLeft');
const sectorsScrollRightBtn = document.getElementById('sectorsScrollRight');

if (sectorsScrollLeftBtn && sectorsScrollRightBtn && sectorsGrid) {
    const scrollAmount = 350;

    sectorsScrollLeftBtn.addEventListener('click', () => {
        sectorsGrid.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    sectorsScrollRightBtn.addEventListener('click', () => {
        sectorsGrid.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
}

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

// ===========================
// Sector Modal Functionality
// ===========================
const sectorModal = document.getElementById('sectorModal');
const closeSectorModalBtn = document.getElementById('closeSectorModal');
const sectorCards = document.querySelectorAll('.sector-card');

// Sector data with thought leadership articles
const sectorData = {
    1: {
        title: 'Financial Services',
        subtitle: 'Banking & Capital Markets',
        icon: 'fa-university',
        articleTitle: 'The Digital Transformation of Financial Services',
        article: `
            <p>The financial services industry is undergoing its most profound transformation in decades. Digital technologies are not just improving existing processes—they're fundamentally reshaping how financial institutions operate, compete, and create value for customers.</p>
            
            <h5>The Imperative for Change</h5>
            <p>Traditional banks face unprecedented pressure from fintech disruptors, changing customer expectations, and evolving regulatory landscapes. The COVID-19 pandemic accelerated digital adoption by an estimated five years, making digital transformation no longer optional but essential for survival.</p>
            
            <h5>Key Strategic Priorities</h5>
            <p>Leading financial institutions are focusing on three critical areas: modernizing core banking systems to enable real-time processing and enhanced customer experiences; implementing advanced analytics and AI to improve risk management and personalize services; and building open banking platforms that foster ecosystem partnerships and innovation.</p>
            
            <h5>The Path Forward</h5>
            <p>Success requires more than technology investments. It demands a fundamental shift in organizational culture, talent acquisition strategies, and operating models. Financial institutions that embrace this transformation holistically—combining technology with business model innovation—will emerge as the leaders of tomorrow's financial services landscape.</p>
        `
    },
    2: {
        title: 'Technology & Software',
        subtitle: 'Innovation & Digital',
        icon: 'fa-microchip',
        articleTitle: 'Enterprise Software: Navigating the Cloud-Native Era',
        article: `
            <p>The enterprise software landscape has entered a new era defined by cloud-native architectures, AI-driven capabilities, and platform-based business models. Companies that understand and adapt to these shifts will capture disproportionate value in the coming decade.</p>
            
            <h5>The Cloud-Native Imperative</h5>
            <p>Moving beyond simple cloud migration, true cloud-native development leverages microservices, containers, and serverless computing to achieve unprecedented scalability, resilience, and velocity. Organizations embracing these architectures are seeing 40-60% reductions in infrastructure costs while dramatically improving time-to-market for new features.</p>
            
            <h5>AI as a Core Differentiator</h5>
            <p>Artificial intelligence is no longer a feature—it's becoming the foundation of competitive advantage. From intelligent automation to predictive analytics and natural language interfaces, AI capabilities are being embedded at every layer of the software stack. Companies that treat AI as a strategic imperative rather than a tactical addition are pulling away from the competition.</p>
            
            <h5>Platform Economics</h5>
            <p>The most successful software companies are evolving from products to platforms, creating ecosystems that multiply value through network effects. This transition requires rethinking pricing models, developer relations, and go-to-market strategies—but the rewards are substantial, with platform businesses achieving valuations 2-3x higher than traditional software vendors.</p>
        `
    },
    3: {
        title: 'Healthcare & Life Sciences',
        subtitle: 'Medical & Biotech',
        icon: 'fa-heartbeat',
        articleTitle: 'Healthcare Innovation: From Digital Health to Precision Medicine',
        article: `
            <p>Healthcare stands at the intersection of multiple technological revolutions—digital health, genomics, artificial intelligence, and advanced therapeutics. These convergent trends are creating unprecedented opportunities to improve patient outcomes while addressing the industry's persistent cost and access challenges.</p>
            
            <h5>The Digital Health Revolution</h5>
            <p>Telemedicine adoption surged during the pandemic and has permanently altered healthcare delivery models. Remote patient monitoring, virtual care platforms, and digital therapeutics are shifting care from episodic and reactive to continuous and proactive. Healthcare organizations investing in integrated digital strategies are seeing 25-30% improvements in patient engagement and outcomes.</p>
            
            <h5>Precision Medicine Comes of Age</h5>
            <p>The convergence of genomics, proteomics, and advanced analytics is enabling truly personalized medicine. Targeted therapies based on individual genetic profiles are achieving remarkable results in oncology and rare diseases. As sequencing costs continue to plummet and our understanding of the genome deepens, precision medicine will expand from specialized applications to mainstream care.</p>
            
            <h5>Strategic Imperatives</h5>
            <p>Healthcare organizations must balance innovation with the sector's unique challenges: complex regulations, disparate data systems, and entrenched stakeholder interests. Success requires strategic partnerships across the healthcare ecosystem, substantial investments in data infrastructure, and a relentless focus on demonstrating clinical and economic value.</p>
        `
    },
    4: {
        title: 'Energy & Sustainability',
        subtitle: 'Renewable & Green Tech',
        icon: 'fa-leaf',
        articleTitle: 'The Energy Transition: Opportunities in a Decarbonizing World',
        article: `
            <p>The global energy transition represents the largest capital reallocation in history—an estimated $150 trillion investment over the next three decades. This transformation creates extraordinary opportunities for companies that can navigate the complex interplay of technology innovation, policy evolution, and market dynamics.</p>
            
            <h5>Beyond Renewables</h5>
            <p>While solar and wind power dominate headlines, the energy transition encompasses a broader spectrum of innovations: advanced energy storage systems enabling grid-scale renewable integration, green hydrogen production for hard-to-decarbonize sectors, carbon capture technologies, and next-generation nuclear power. Investors and operators must take a portfolio approach across this technology landscape.</p>
            
            <h5>The Grid of the Future</h5>
            <p>Decentralized, bidirectional energy systems are replacing the traditional hub-and-spoke model. Smart grids, virtual power plants, and peer-to-peer energy trading platforms are creating new business models and market opportunities. Companies that can aggregate and orchestrate distributed energy resources will capture significant value in the evolving energy ecosystem.</p>
            
            <h5>Policy and Market Dynamics</h5>
            <p>Government policies—carbon pricing, renewable mandates, tax incentives—are critical drivers of the energy transition. Successful strategies must account for regulatory complexity across jurisdictions while positioning for policy evolution. Additionally, corporate sustainability commitments are creating massive demand for renewable energy and carbon offsets, fundamentally reshaping power purchase dynamics.</p>
        `
    },
    5: {
        title: 'Consumer & Retail',
        subtitle: 'E-commerce & Brands',
        icon: 'fa-store',
        articleTitle: 'Retail Reimagined: The Future of Commerce',
        article: `
            <p>Retail is experiencing a fundamental reinvention driven by changing consumer behaviors, technological capabilities, and competitive dynamics. The pandemic accelerated trends that were already underway, creating a "retail apocalypse" for some while opening unprecedented opportunities for others.</p>
            
            <h5>The Omnichannel Imperative</h5>
            <p>The distinction between online and offline retail has dissolved. Consumers expect seamless experiences across all touchpoints—researching online before buying in-store, or ordering online for curbside pickup. Retailers must integrate inventory management, customer data, and fulfillment operations across channels to meet these expectations. Those achieving true omnichannel excellence are seeing 20-30% higher customer lifetime values.</p>
            
            <h5>Direct-to-Consumer Revolution</h5>
            <p>Digital platforms have enabled brands to bypass traditional retail intermediaries and build direct customer relationships. This shift provides better margins, richer customer data, and stronger brand control—but requires capabilities in e-commerce, logistics, and digital marketing. Established brands and new entrants alike are reconfiguring their channel strategies to balance DTC and wholesale relationships.</p>
            
            <h5>Experience and Community</h5>
            <p>As e-commerce commoditizes product access, physical retail is evolving from transaction-focused to experience-centered. Successful retailers are creating destinations that combine shopping with entertainment, education, and community building. Additionally, brands are leveraging social commerce and building engaged communities that drive both acquisition and retention through authentic connections and user-generated content.</p>
        `
    },
    6: {
        title: 'Industrial & Manufacturing',
        subtitle: 'Smart Factories & IoT',
        icon: 'fa-industry',
        articleTitle: 'Industry 4.0: The Smart Manufacturing Revolution',
        article: `
            <p>Manufacturing is undergoing its fourth industrial revolution—Industry 4.0—as digital technologies transform operations, business models, and competitive dynamics. The convergence of IoT, AI, robotics, and advanced analytics is creating "smart factories" that are more efficient, flexible, and responsive than ever before.</p>
            
            <h5>The Connected Factory</h5>
            <p>Industrial IoT sensors are generating unprecedented visibility into production processes, equipment performance, and supply chain dynamics. Real-time data enables predictive maintenance, quality control, and operational optimization at scales previously impossible. Leading manufacturers are achieving 15-30% improvements in overall equipment effectiveness through IoT-enabled insights.</p>
            
            <h5>Automation and Augmentation</h5>
            <p>Advanced robotics and AI are not simply replacing human workers—they're augmenting human capabilities and enabling mass customization at scale. Collaborative robots work alongside humans, AI systems optimize production scheduling, and augmented reality guides workers through complex tasks. The most successful implementations balance automation with human expertise, creating hybrid operations that leverage the strengths of both.</p>
            
            <h5>Reshaping Supply Chains</h5>
            <p>Industry 4.0 technologies are enabling more resilient, responsive, and sustainable supply chains. Digital twins provide end-to-end visibility, blockchain ensures traceability and trust, and AI optimizes inventory and logistics in real-time. The pandemic exposed vulnerabilities in globalized supply chains, accelerating adoption of these technologies and prompting strategic reassessments of sourcing and manufacturing footprints.</p>
        `
    },
    7: {
        title: 'Telecommunications',
        subtitle: '5G & Connectivity',
        icon: 'fa-network-wired',
        articleTitle: '5G and Beyond: The Next Generation of Connectivity',
        article: `
            <p>5G represents more than incremental improvements in mobile connectivity—it's a platform technology enabling entirely new applications and business models. As 5G networks roll out globally and attention turns to 6G research, telecommunications companies face both tremendous opportunities and existential challenges.</p>
            
            <h5>Beyond Faster Phones</h5>
            <p>While enhanced mobile broadband grabs headlines, 5G's transformative potential lies in enabling massive IoT deployments and ultra-reliable low-latency communications. These capabilities unlock applications from autonomous vehicles to remote surgery to smart cities. Telecom operators must look beyond traditional connectivity services to capture value from these emerging use cases.</p>
            
            <h5>Edge Computing Convergence</h5>
            <p>5G and edge computing are co-enabling technologies. By processing data closer to where it's generated, edge computing addresses latency and bandwidth challenges while improving privacy and reducing costs. Telecom operators are uniquely positioned to provide edge infrastructure, but face competition from cloud providers and must develop new partnerships and business models.</p>
            
            <h5>Strategic Imperatives</h5>
            <p>5G deployment requires massive capital investments at a time when traditional telecom revenues face pressure. Success requires strategic focus on high-value use cases, partnerships across the ecosystem, and potentially new business models like network slicing and private networks. Additionally, operators must navigate complex regulatory landscapes and address concerns about security, particularly regarding network equipment sourcing.</p>
        `
    },
    8: {
        title: 'Real Estate & Infrastructure',
        subtitle: 'PropTech & Development',
        icon: 'fa-home',
        articleTitle: 'PropTech and the Future of Real Estate',
        article: `
            <p>Real estate, traditionally one of the least digitized industries, is experiencing rapid technological transformation. PropTech innovations are reshaping how properties are designed, built, marketed, transacted, managed, and utilized—creating opportunities for new entrants while challenging incumbent business models.</p>
            
            <h5>The Smart Building Revolution</h5>
            <p>Buildings are becoming intelligent, connected platforms. IoT sensors, AI-driven building management systems, and digital twin technologies optimize energy efficiency, space utilization, and occupant experience. Green buildings with smart systems command premium rents and valuations while reducing operating costs by 20-30%. As ESG pressures intensify, smart building capabilities are transitioning from nice-to-have to must-have.</p>
            
            <h5>Digital Transformation of Transactions</h5>
            <p>Technology is streamlining every aspect of real estate transactions—from virtual tours and e-signatures to blockchain-based title management and fractional ownership platforms. These innovations reduce transaction costs, increase market liquidity, and expand access to real estate investment. Traditional intermediaries must adapt their value propositions or risk disintermediation.</p>
            
            <h5>Flexible Space and New Models</h5>
            <p>The rise of remote work, changing retail dynamics, and evolving lifestyle preferences are driving demand for flexible, adaptable spaces. Co-working operators, flexible lease platforms, and mixed-use developments are responding to these shifts. Real estate developers and investors must rethink asset strategies, considering not just location and physical attributes but also flexibility, community amenities, and technological infrastructure that enable diverse use cases.</p>
        `
    }
};

// Open modal when clicking a sector card
sectorCards.forEach(card => {
    card.addEventListener('click', () => {
        const sectorId = card.getAttribute('data-sector');
        const sector = sectorData[sectorId];
        
        if (sector) {
            // Update modal content
            document.getElementById('sectorModalTitle').textContent = sector.title;
            document.getElementById('sectorModalSubtitle').textContent = sector.subtitle;
            document.getElementById('sectorModalArticleTitle').textContent = sector.articleTitle;
            document.getElementById('sectorModalArticle').innerHTML = sector.article;
            document.getElementById('sectorModalIcon').innerHTML = `<i class="fas ${sector.icon}"></i>`;
            
            // Show modal
            sectorModal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }
    });
});

// Close modal when clicking close button
if (closeSectorModalBtn) {
    closeSectorModalBtn.addEventListener('click', () => {
        sectorModal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    });
}

// Close modal when clicking outside the modal content
sectorModal.addEventListener('click', (e) => {
    if (e.target === sectorModal) {
        sectorModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Close sector modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sectorModal.classList.contains('active')) {
        sectorModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});
