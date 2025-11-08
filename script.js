const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('mainNav');
if (hamburger) {
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        mainNav.classList.toggle('active');
    });
}

document.addEventListener('click', (e) => {
    if (!mainNav.contains(e.target) && !hamburger.contains(e.target)) {
        mainNav.classList.remove('show');
    }
});
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        mainNav.classList.remove('active');
    }
});

const resForm = document.getElementById('resForm');
if (resForm) {
    resForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = new FormData(resForm);
        const name = form.get('name');
        alert(`Merci ${name}, votre demande de réservation a été reçue (demo).`);
        resForm.reset();
    });
}

const yearElement = document.getElementById('year');

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}