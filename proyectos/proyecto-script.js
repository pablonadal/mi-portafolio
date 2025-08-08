// Funcionalidades específicas para páginas de proyectos

document.addEventListener('DOMContentLoaded', function() {
    
    // Lightbox functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.querySelector('.lightbox-image');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    
    function openLightbox(button) {
        const galleryItem = button.closest('.gallery-item');
        const image = galleryItem.querySelector('img');
        const overlayContent = galleryItem.querySelector('.overlay-content');
        
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;
        
        if (overlayContent) {
            const title = overlayContent.querySelector('h4');
            const description = overlayContent.querySelector('p');
            lightboxCaption.textContent = title ? title.textContent : image.alt;
        } else {
            lightboxCaption.textContent = image.alt;
        }
        
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Cerrar lightbox con ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
    
    // Cerrar lightbox haciendo clic fuera
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Hacer global las funciones
    window.openLightbox = openLightbox;
    window.closeLightbox = closeLightbox;
    
    // Animaciones de scroll para secciones de galería
    const gallerySections = document.querySelectorAll('.gallery-section');
    
    const galleryObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
            }
        });
    }, { threshold: 0.3 });
    
    gallerySections.forEach(section => {
        galleryObserver.observe(section);
    });
    
    // Efecto parallax para el hero del proyecto
    const projectHero = document.querySelector('.project-hero');
    const projectPreview = document.querySelector('.project-preview');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3;
        
        if (projectPreview) {
            projectPreview.style.transform = `translateY(${rate}px)`;
        }
    });
    
    // Animación de entrada para elementos del hero
    const heroElements = document.querySelectorAll('.project-badge, .project-title, .project-subtitle, .project-meta');
    
    heroElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200);
    });
    
    // Efecto hover mejorado para tech items
    const techItems = document.querySelectorAll('.tech-item');
    
    techItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Efecto de typing para el título del proyecto
    const projectTitle = document.querySelector('.project-title');
    if (projectTitle) {
        const text = projectTitle.textContent;
        projectTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                projectTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        setTimeout(typeWriter, 500);
    }
    
    // Animación de contador para meta items
    const metaItems = document.querySelectorAll('.meta-item span');
    
    metaItems.forEach(item => {
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.5 });
        
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
    
    // Efecto de hover para feature items
    const featureItems = document.querySelectorAll('.feature-item');
    
    featureItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // Efecto de zoom suave para imágenes de galería
    const galleryImages = document.querySelectorAll('.gallery-image img');
    
    galleryImages.forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.08)';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Navegación suave para enlaces internos
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 100;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Efecto de scroll reveal para tech stack
    const techStack = document.querySelector('.tech-stack');
    
    const techObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.3 });
    
    if (techStack) {
        techStack.style.opacity = '0';
        techStack.style.transform = 'translateY(30px)';
        techStack.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        techObserver.observe(techStack);
    }
    
    // Efecto de cursor personalizado para elementos interactivos
    const interactiveElements = document.querySelectorAll('.gallery-item, .tech-item, .feature-item, .view-btn');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', function() {
            this.style.cursor = 'pointer';
        });
    });
    
    // Animación de carga para imágenes
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
            this.style.transform = 'scale(1)';
        });
        
        img.style.opacity = '0';
        img.style.transform = 'scale(0.95)';
        img.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Efecto de vibración para botones
    const buttons = document.querySelectorAll('.view-btn, .footer-link');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.animation = 'vibrate 0.3s ease-in-out';
        });
        
        button.addEventListener('animationend', function() {
            this.style.animation = '';
        });
    });
    
    // Agregar animación de vibración al CSS si no existe
    if (!document.querySelector('#vibrate-animation')) {
        const style = document.createElement('style');
        style.id = 'vibrate-animation';
        style.textContent = `
            @keyframes vibrate {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-2px); }
                75% { transform: translateX(2px); }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Efecto de scroll progress
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
        z-index: 10001;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
        const scrolled = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrolled + '%';
    });
    
    // Efecto de hover para el preview del proyecto
    const projectPreview = document.querySelector('.project-preview');
    
    if (projectPreview) {
        projectPreview.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        projectPreview.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    }
    
    // Animación de entrada para tech items
    const techItemsAnimated = document.querySelectorAll('.tech-item');
    
    techItemsAnimated.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    console.log('🚀 Página de proyecto cargada exitosamente!');
});
