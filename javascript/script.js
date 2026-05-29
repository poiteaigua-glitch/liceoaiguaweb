let fuentesIndex = 0;
const fuentes = ['Arial', 	'Copperplate', 'Lucida Handwriting'];


function intercalarFuente() {
    const fuenteActual = document.body.style.fontFamily;
    if (fuentesIndex === 0) {
        cambiarFuente(fuentes[1]);
        fuentesIndex=1;
    } else if (fuentesIndex === 1) {
        cambiarFuente(fuentes[2]);
        fuentesIndex=2;
    } else {
        cambiarFuente(fuentes[0]);  
        fuentesIndex=0;            
    }
}
function cambiarFuente(nombreFuente) {
  document.body.style.fontFamily = nombreFuente;
}


// ============ HAMBURGER MENU TOGGLE ============
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// ============ CLOSE MENU ON LINK CLICK ============
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ============ SMOOTH SCROLL ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============ NAVBAR SHADOW ON SCROLL ============
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// ============ SCROLL ANIMATION FOR ELEMENTS ============
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all feature cards, program cards, and info items
document.querySelectorAll('.feature-card, .program-card, .info-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ============ BUTTON INTERACTIONS ============
const primaryBtn = document.querySelector('.btn-primary');

if (primaryBtn) {
    primaryBtn.addEventListener('click', () => {
        const aboutSection = document.querySelector('#about');
        if (aboutSection) {
            aboutSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}

// ============ PREVENT MENU CLOSE ON OUTSIDE CLICK IN DESKTOP ============
document.addEventListener('click', (e) => {
    if (window.innerWidth > 768) return;
    
    if (!e.target.closest('.nav-container')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

