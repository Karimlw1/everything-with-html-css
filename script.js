/* SCROLL REVEAL */
const reveals = document.querySelectorAll('.reveal, .card, .images2 img, .NosFleurs div, .info-section, .discounts');

const revealOnScroll = () => {
  const trigger = window.innerHeight * 0.82;
  reveals.forEach(el => {
    const pos = el.getBoundingClientRect().top;
    if (pos < trigger) el.classList.add('active');
  });
};
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

/* PARALLAX HERO */
window.addEventListener('mousemove', e => {
  const x = (e.clientX / window.innerWidth - .5) * 8;
  const y = (e.clientY / window.innerHeight - .5) * 8;
  document.querySelector('.hero-content').style.transform = `translate(${x}px, ${y}px)`;
});

/* CTA CLICK FEEDBACK */
document.querySelector('.cta')?.addEventListener('mousedown', (e) => {
  e.target.style.transform = 'scale(.94)';
});
document.querySelector('.cta')?.addEventListener('mouseup', (e) => {
  e.target.style.transform = 'scale(1)';
});
