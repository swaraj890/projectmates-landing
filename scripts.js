document.addEventListener("DOMContentLoaded", () => {
    const heroTitle = document.querySelector('.hero-title');
    const ctaButton = document.querySelector('.cta-button');
    
    heroTitle.style.opacity = 0;
    ctaButton.style.opacity = 0;

    setTimeout(() => {
        heroTitle.style.transition = 'opacity 1s ease-in';
        heroTitle.style.opacity = 1;
    }, 500);

    setTimeout(() => {
        ctaButton.style.transition = 'opacity 1s ease-in';
        ctaButton.style.opacity = 1;
    }, 1500);
});
