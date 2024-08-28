document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.main-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetSection = document.querySelector(link.getAttribute('href'));
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Carousel functionality
    let slideIndex = 0;
    const slides = document.querySelectorAll('.carousel img');
    const text = document.querySelector('.carousel-text');
    const descriptions = [
        'Slide 1: Key Event or Promotion',
        'Slide 2: Another Important Highlight',
        'Slide 3: Don\'t Miss This Event'
    ];

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            slide.style.opacity = '0';
            if (i === index) {
                slide.classList.add('active');
                setTimeout(() => {
                    slide.style.opacity = '1';
                }, 50);
                text.textContent = descriptions[i];
            }
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        const prevButton = document.querySelector('.prev');
        const nextButton = document.querySelector('.next');
        
        if (prevButton) {
            prevButton.addEventListener('click', () => {
                slideIndex = (slideIndex > 0) ? slideIndex - 1 : slides.length - 1;
                showSlide(slideIndex);
            });
        }
    
        if (nextButton) {
            nextButton.addEventListener('click', () => {
                slideIndex = (slideIndex < slides.length - 1) ? slideIndex + 1 : 0;
                showSlide(slideIndex);
            });
        }
    });
    

    setInterval(() => {
        slideIndex = (slideIndex < slides.length - 1) ? slideIndex + 1 : 0;
        showSlide(slideIndex);
    }, 5000);

    // FAQ functionality
    document.querySelectorAll('.faq-item').forEach(item => {
        item.addEventListener('click', () => {
            const answer = item.querySelector('.faq-answer');
            const isVisible = answer.style.display === 'block';
            document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
            answer.style.display = isVisible ? 'none' : 'block';
        });
    });
});

// Menu 

document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', function() {
            const dropdownMenu = this.querySelector('.dropdown-menu');
            dropdownMenu.style.display = 'block';
            dropdownMenu.style.opacity = 0;
            setTimeout(() => {
                dropdownMenu.style.opacity = 1;
            }, 50);
        });

        dropdown.addEventListener('mouseleave', function() {
            const dropdownMenu = this.querySelector('.dropdown-menu');
            dropdownMenu.style.opacity = 0;
            setTimeout(() => {
                dropdownMenu.style.display = 'none';
            }, 300);
        });
    });
});

// STADINGS

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.filters button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            // Lógica para cambiar la tabla según el botón seleccionado
        });
    });
});

// preguntas

document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
});


// noticias

document.addEventListener('DOMContentLoaded', function() {
    const newsArticles = document.querySelectorAll('.news-article');

    newsArticles.forEach(article => {
        article.addEventListener('mouseover', () => {
            article.classList.add('hover');
        });

        article.addEventListener('mouseout', () => {
            article.classList.remove('hover');
        });
    });
});


// no modificado 




// Dropdown animation
document.querySelectorAll('.dropdown').forEach(drop => {
    drop.addEventListener('mouseover', () => {
        drop.querySelector('.dropdown-menu').classList.add('active');
    });

    drop.addEventListener('mouseout', () => {
        drop.querySelector('.dropdown-menu').classList.remove('active');
    });
});

// Countdown Timer
function countdown() {
    const countDate = new Date('Sep 9, 2024 12:10:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector('#days').innerText = textDay;
    document.querySelector('#hours').innerText = textHour;
    document.querySelector('#minutes').innerText = textMinute;
    document.querySelector('#seconds').innerText = textSecond;
}

setInterval(countdown, 1000);

// Scroll animations
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

