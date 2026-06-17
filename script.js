// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('visible');
            const fills = e.target.querySelectorAll('.skill-fill');
            fills.forEach(f => {
                const w = f.getAttribute('data-w');
                if (w) {
                    f.style.width = (parseFloat(w) * 80) + 'px';
                    setTimeout(() => f.classList.add('animate'), 100);
                }
            });
        }
    });
}, { threshold: 0.12 });

reveals.forEach(r => obs.observe(r));

const skillFills = document.querySelectorAll('.skill-fill');
skillFills.forEach(f => {
    const w = f.getAttribute('data-w');
    if (w) f.style.width = (parseFloat(w) * 80) + 'px';
});

const skillObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            const fills = e.target.querySelectorAll('.skill-fill');
            fills.forEach((f, i) => {
                setTimeout(() => f.classList.add('animate'), i * 80);
            });
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.skill-group').forEach(g => skillObs.observe(g));

// Active nav link
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 100) current = s.id;
    });
    navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + current
            ? 'var(--accent)'
            : '';
    });
});

// ═══ ANNÉE DYNAMIQUE DANS LE FOOTER ═══
document.querySelector('footer span').textContent = `© ${new Date().getFullYear()} — Walid Babouri`;