// Fade-in effect on page load
window.onload = function() {
    const content = document.querySelector('.content');
    content.style.opacity = 0;
    content.style.transition = 'opacity 1s ease-in-out';
    setTimeout(() => {
        content.style.opacity = 1;
    }, 100);
};

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Only prevent default and do smooth scroll for same-page links
        if (href === '#') {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
        // Let other links navigate normally
    });
});

// Typing effect for introduction
const introText = "Hello World! I'm Kidus Mengistu.";
let index = 0;

function type() {
    if (index < introText.length) {
        document.querySelector('h1').innerHTML += introText.charAt(index);
        index++;
        setTimeout(type, 100);
    }
}

window.onload = function() {
    type();
};

// Scroll to Top Button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerText = '↑';
scrollToTopBtn.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// Simple image carousel for projects
let currentIndex = 0;
const images = document.querySelectorAll('.project-card img');
const totalImages = images.length;

function showImage(index) {
    images.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
}

setInterval(nextImage, 3000); // Change image every 3 seconds
showImage(currentIndex);

// Modal for project details
const modal = document.createElement('div');
modal.classList.add('modal');
modal.innerHTML = `
    <div class="modal-content">
        <span class="close">&times;</span>
        <h2>Project Details</h2>
        <p id="modal-description"></p>
    </div>
`;
document.body.appendChild(modal);

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const description = card.querySelector('p').innerText;
        document.getElementById('modal-description').innerText = description;
        modal.style.display = 'block';
    });
});

modal.querySelector('.close').addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Animated progress bars for skills
const skills = document.querySelectorAll('.skill-item');

skills.forEach(skill => {
    const progress = skill.dataset.progress; // Assuming you add data-progress attribute
    skill.style.width = '0';
    setTimeout(() => {
        skill.style.width = progress;
        skill.style.transition = 'width 2s ease';
    }, 100);
});