document.addEventListener("DOMContentLoaded", () => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Hero Section Initial Animation
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1.2 } });

    // Stagger in all hero elements
    tl.fromTo(".gsap-hero-stagger", 
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.15, delay: 0.2 }
    );

    // Dynamic Text Rotation
    const dynamicTexts = gsap.utils.toArray('.dynamic-text');
    if (dynamicTexts.length > 0) {
        const textTl = gsap.timeline({ repeat: -1 });
        
        dynamicTexts.forEach((text, i) => {
            textTl.fromTo(text, 
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
            )
            .to(text, {
                opacity: 0, y: -20, duration: 0.6, ease: "power2.in", delay: 1.5
            });
        });
    }

    // Reveal elements on scroll
    const revealElements = document.querySelectorAll(".gsap-reveal");
    
    revealElements.forEach((elem) => {
        gsap.to(elem, {
            scrollTrigger: {
                trigger: elem,
                start: "top 85%", // Trigger when element's top hits 85% of viewport height
                toggleActions: "play none none reverse"
            },
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out"
        });
    });

    // Timeline items staggered animation
    const timelineItems = document.querySelectorAll(".timeline-item");
    
    timelineItems.forEach((item, i) => {
        gsap.fromTo(item, 
            { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });

    // Architecture diagram staggered animation
    const archNodes = document.querySelectorAll(".arch-node");
    if (archNodes.length > 0) {
        gsap.fromTo(archNodes, 
            { opacity: 0, scale: 0.8, y: 20 },
            {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: ".arch-diagram",
                    start: "top 75%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    }

    // Smooth scroll for nav links
    document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60, // Adjust for fixed nav
                    behavior: 'smooth'
                });
            }
        });
    });
});
