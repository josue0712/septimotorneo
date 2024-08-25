
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

// carrusel

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.carousel-indicator .indicator');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            indicators[i].classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
                indicators[i].classList.add('active');
            }
        });
        const offset = -index * 100;
        document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
    }

    document.querySelector('.next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    document.querySelector('.prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    });

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });

    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }, 5000);
});

// contador

const countdownDate = new Date("Sep 9, 2024 12:10:00").getTime();

const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown-timer").innerHTML = "¡Comienza el partido!";
    }
}, 1000);
