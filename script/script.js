// Scroll suave ao clicar nos links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Função para animação de fade-in
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.5, // Quando 50% do item está visível
    rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});


const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', function(e) {
    let valid = true;
   
    if (nameInput.value.trim() === "") {
        alert("Por favor, preencha o nome.");
        valid = false;
    }

   
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        alert("Por favor, insira um email válido.");
        valid = false;
    }

    
    if (messageInput.value.trim() === "") {
        alert("Por favor, escreva sua mensagem.");
        valid = false;
    }

    if (!valid) {
        e.preventDefault();
    }
});
