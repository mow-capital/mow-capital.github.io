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
        const mailtoLink = `mailto:aditya.vardhan@mowcaps.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        
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
        title: 'Persivia Recapitalization',
        category: 'Healthcare',
        value: '$107M Transaction',
        icon: 'fa-heartbeat',
        description: `Led the $107M recapitalization of Persivia, an AI-driven digital health solutions leader, in partnership with Aldrich Capital Partners. The investment is supporting Persivia's national expansion, growth of its sales force, and the launch of new AI healthcare solutions. The transaction enabled Persivia to strengthen its market position and deliver innovative population health management tools for over 200 hospitals and 12,000 clinicians nationwide.`
    },
    2: {
        title: 'SpinSci Control Investment',
        category: 'Technology/Healthcare',
        value: '$53M Transaction',
        icon: 'fa-laptop-medical',
        description: `Advised on a $53M majority investment in SpinSci, a pioneer in AI-powered patient engagement and healthcare workflow automation. The investment is fueling SpinSci's expansion into new markets and accelerating development of its digital healthcare platform, which supports patient interactions and streamlines provider workflows for over 40 million patients annually. SpinSci's solutions include human-assisted contact centers and generative AI self-service tools for healthcare providers.`
    },
    3: {
        title: 'Fortis Group Block Placement',
        category: 'Healthcare',
        value: '₹800 Crore Transaction',
        icon: 'fa-hospital',
        description: `Advised on an ₹800 crore block placement for Fortis Healthcare, supporting the company's ambitious expansion plans. The transaction enabled Fortis to add over 400 beds to its Mohali campus, strengthen its market position, and enhance Punjab's role as a healthcare and medical tourism hub. The deal is expected to generate thousands of direct and indirect jobs and further accelerate Fortis' growth trajectory.`
    },
    4: {
        title: 'HCGDBL Structured Investment',
        category: 'Green Energy',
        value: '₹500 Crore Transaction',
        icon: 'fa-leaf',
        description: `Secured Hold of Terms (HoT) for a ₹500 crore structured investment for HCGDBL (Haryana City Gas Distribution), with contributions from Alpha Alternatives, JM Alternatives, and Standard Chartered Capital. The structure, based on Payment-In-Kind (PIK) terms, is powering the company's green energy initiatives and infrastructure growth.`
    },
    5: {
        title: 'Jyoti Structures Preferential Issue',
        category: 'Infrastructure',
        value: '₹170 Crore Transaction',
        icon: 'fa-building',
        description: `Led the strategic advisory for a ₹170 crore preferential equity issue by Jyoti Structures Limited. The funds supported the company's growth initiatives, helping scale operations and improve capital structure in the competitive infrastructure sector.`
    },
    6: {
        title: 'Sarveshwar Foods Preferential Issue',
        category: 'Food & Agro',
        value: '₹98 Crore Transaction',
        icon: 'fa-seedling',
        description: `Provided advisory for a ₹98 crore preferential equity issue for Sarveshwar Foods Limited (SFL), securing capital for business expansion and innovation across their food processing and organic foods business lines.`
    },
    7: {
        title: 'Oriental Trimex Capital Raise',
        category: 'Construction Materials',
        value: '₹65 Crore Transaction',
        icon: 'fa-hammer',
        description: `Advised on both an ₹20 crore preferential equity issue and an ₹45 crore rights issue for Oriental Trimex Limited. These capital raises enabled the firm to finance new projects and strengthen its position in construction materials and marble solutions.`
    },
    8: {
        title: 'OnePlan Solutions Investment',
        category: 'Technology',
        value: 'Growth Equity Investment',
        icon: 'fa-chart-line',
        description: `Advised on Aldrich Capital Partners' strategic investment in OnePlan Solutions, a leading provider of AI-enabled Strategic Portfolio and Work Management software. This partnership is propelling OnePlan's expansion into new markets, accelerating product development, and strengthening its global reach. The investment is helping organizations streamline planning, resource optimization, and financial forecasting, driving operational excellence and agility for enterprise clients.`
    },
    9: {
        title: 'Compliancy Group Investment',
        category: 'Healthcare IT',
        value: 'Control Investment',
        icon: 'fa-shield-alt',
        description: `Aldrich Capital Partners invested in Compliancy Group, a prominent healthcare compliance and risk management SaaS provider. The deal supports the company's growth strategy, expansion of its digital compliance solutions, and enhanced service offerings for healthcare organizations nationwide. Compliancy Group's platform empowers clinics, hospitals, and service providers to navigate complex regulatory requirements with greater efficiency and accuracy.`
    },
    10: {
        title: 'Zeteo Media Launch',
        category: 'Media',
        value: 'Advisory Project',
        icon: 'fa-newspaper',
        description: `Assisted with the successful launch of Zeteo, an independent digital media company founded by renowned journalist Mehdi Hasan. Built on a subscription model, Zeteo publishes interviews, podcasts, and editorial content across digital channels. The venture aims to deliver fearless, in-depth journalism and assemble a high-profile team of contributors from media, activism, and Hollywood.`
    },
    11: {
        title: 'SME IPO Advisory',
        category: 'Multiple Sectors',
        value: 'Continental Seeds, AKG Exim, Buddha Global, Sirca Paints',
        icon: 'fa-chart-pie',
        description: `Guided Continental Seeds, AKG Exim Limited, Buddha Global Limited, and Sirca Paints Limited through successful SME IPO listings on NSE Emerge, supporting each company's transition to public markets and fueling growth across agriculture, trading, and specialty paints.`
    },
    12: {
        title: 'Himalayan Bio Organic Foods IPO',
        category: 'Agro',
        value: 'IPO Advisory',
        icon: 'fa-apple-alt',
        description: `Handled the IPO for Himalayan Bio Organic Foods (a wholly owned subsidiary of SFL), enabling fresh capital infusion and market expansion in organic food products.`
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

// ===========================
// Team Member Modal Functionality
// ===========================
const teamModal = document.getElementById('teamModal');
const closeTeamModalBtn = document.getElementById('closeTeamModal');
const teamCards = document.querySelectorAll('.team-card');
const advisoryCards = document.querySelectorAll('.advisory-card');

// Team member data with full biographies from about.md
const teamData = {
    1: {
        name: 'Aditya Vardhan',
        role: 'Founder',
        icon: 'fa-user',
        bio: `<p>With over a decade of experience in growth-stage investing, Aditya has honed his expertise through key roles at a US-based $750M fund. He has directly managed four portfolio companies—Compliancy, One Plan, WT, and Pria—driving strategic value across dynamic sectors.</p>
        
        <p>Currently, he oversees six portfolio companies in India, supporting their journey toward SME and Main Board IPO listings. His guidance spans renewable energy, healthcare (IVF), lighting solutions, solar EPC, and cable tray manufacturing, where he holds advisory equity stakes and actively pushes each business towards meaningful growth. His hands-on advisory extends across strategy, capital markets, and operational scale.</p>
        
        <p>Beyond listed opportunities, he specializes in helping DeepTech and AI ventures architect deals and navigate fundraising from pre-seed to Series B. An alumnus of Narsee Monjee, Aditya blends global investment perspective with deep local market knowledge, distinguished by his ability to support founders and build enduring ventures through each stage of growth.</p>`
    },
    2: {
        name: 'Aditya Kaushik',
        role: 'Founding Member',
        icon: 'fa-user',
        bio: `<p>Aditya is a graduate of Netaji Subhash Institute of Technology (now NSUT), specializing in Manufacturing Processes and Automation. He began his career as a Research Analyst in the patent department at Evalueserve, developing a strong analytical foundation before moving into management.</p>
        
        <p>After earning his MBA with dual specializations in Marketing and Finance from the Faculty of Management Studies, University of Delhi—a distinction accomplished by less than 20% of his cohort—Aditya was offered a role in Mahindra and Mahindra's strategy team directly from campus. Choosing instead to deepen his academic focus, he embarked on a PhD in management at the Indian Institute of Foreign Trade, where he became passionate about the intersection of industry and academia.</p>
        
        <p>Over the years, Aditya has delivered consulting projects across strategy, marketing, HR, and finance for top firms including Flipkart, Paytm, Adobe, and TVS, among others. His work centers on improving organizational efficiency and streamlining operations, driving meaningful results for the bottom line. Aditya's consulting philosophy puts people first, focused on motivating teams and ensuring alignment with the company's vision while building enduring value for clients.</p>`
    },
    3: {
        name: 'Vedant G.',
        role: 'M&A Advisor',
        icon: 'fa-user',
        bio: `<p>Vedant serves as an M&A Advisor to MoW, drawing on a rich background in investment banking and private equity. Part of a growth equity fund, where he has participated in diligence and execution for multiple platform investments and exits, as well as serving as a Board Observer for portfolio companies such as SpinSci, OnePlan, and Compliancy Group. Vedant has managed deal processes across stages, including valuation, financial modeling, contract review, and operational planning, with transaction exposure exceeding $150 million.</p>
        
        <p>Previously, Vedant worked at TresVista Financial Services with the investment team, supporting LP-led and GP-led secondaries sales for an NYSE-listed investment bank, with a combined closing volume of $10 billion. His experience spans market research, fund modeling, and advisory support across diverse sectors.</p>
        
        <p>Vedant holds a Bachelor of Science with Honors in Mathematics from the University of Delhi, graduating with distinction, and also completed higher secondary studies at Global Indian International School in Singapore as a Global Citizen Scholar. Known for analytical rigor and hands-on deal management, Vedant brings a detail-oriented approach to every client engagement.</p>`
    },
    4: {
        name: 'Naman J.',
        role: 'Senior Associate',
        icon: 'fa-user',
        bio: `<p>Naman brings over 4.5 years of experience in the finance industry, with a career spanning key roles across financial analysis and investment banking. He began at a leading knowledge process outsourcing firm, where he developed strong middle-office expertise before moving into financial planning and analysis as Finance Manager at a manufacturing company. There, he partnered closely with senior leadership on budgeting, and financial reporting, gaining first-hand insight into operational strategy and business performance.</p>
        
        <p>Naman then advanced to a boutique investment bank, where he contributed to the execution of 40+ transactions in sectors such as healthcare, QSR, and infrastructure. His responsibilities included preparing marketing materials, building pitch decks, supporting investor discussions, and conducting valuation analyses, equipping him with a holistic view of the transaction lifecycle.</p>
        
        <p>Naman is recognized for his analytical rigour and ability to deliver value throughout the deal process, from initial strategy to successful close.</p>`
    },
    // Advisory Board Member
    advisor1: {
        name: 'Akhil Jain',
        role: 'Advisory Board Member',
        icon: 'fa-user-tie',
        bio: `<p>Akhil Jain is a Chartered Accountant and Hansraj College, Delhi University alumnus, with more than 25 years of leadership in corporate finance, capital markets, and strategic advisory. Akhil currently serves as Chief Investment Officer at SKN Haryana City Gas Distribution, where he directs fundraising and investment strategies across multiple business lines, including emerging and green energy sectors.</p>
        
        <p>Previously, Akhil was Senior Partner at AARC Partners and President at Findoc Financial Services Group, spearheading investment banking, trade finance, and strategic fund-raising for a diverse clientele. He also held the role of Global Head – Strategy & Finance at Jaguar Steel and Coal, Singapore, managing global investment and acquisition strategies. His tenure as Director at Amicorp Advisory Services and Shabro Metals further honed his expertise in cross-border transactions, restructuring, and compliance.</p>
        
        <p>With a proven track record of raising over $500M, driving IPOs, and structuring complex capital solutions, Akhil's experience spans marquee names such as Fortis, Temasek, JP Morgan, and GIC. He is recognized for his depth in regulatory matters, international finance, and his advisory role with boards, investors, and leading financial institutions.</p>`
    }
};

// Open modal when clicking a team card
teamCards.forEach(card => {
    card.addEventListener('click', () => {
        const teamId = card.getAttribute('data-team');
        const member = teamData[teamId];
        
        if (member) {
            // Update modal content
            document.getElementById('teamModalName').textContent = member.name;
            document.getElementById('teamModalRole').textContent = member.role;
            document.getElementById('teamModalBio').innerHTML = member.bio;
            document.getElementById('teamModalIcon').innerHTML = `<i class="fas ${member.icon}"></i>`;
            
            // Show modal
            teamModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

// Open modal when clicking an advisory card
advisoryCards.forEach(card => {
    card.addEventListener('click', () => {
        const advisorId = 'advisor' + card.getAttribute('data-advisor');
        const member = teamData[advisorId];
        
        if (member) {
            // Update modal content
            document.getElementById('teamModalName').textContent = member.name;
            document.getElementById('teamModalRole').textContent = member.role;
            document.getElementById('teamModalBio').innerHTML = member.bio;
            document.getElementById('teamModalIcon').innerHTML = `<i class="fas ${member.icon}"></i>`;
            
            // Show modal
            teamModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

// Close modal when clicking close button
if (closeTeamModalBtn) {
    closeTeamModalBtn.addEventListener('click', () => {
        teamModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
}

// Close modal when clicking outside the modal content
teamModal.addEventListener('click', (e) => {
    if (e.target === teamModal) {
        teamModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Close team modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && teamModal.classList.contains('active')) {
        teamModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});
