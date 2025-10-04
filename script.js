// Плавний скрол без костилів
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute("href"));
    target?.scrollIntoView({ behavior: "smooth" });
  });
});

// Анімації з IntersectionObserver
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".animate").forEach(el => observer.observe(el));



const marqueeInner = document.querySelector('.marquee__inner');

// дублюємо контент для безшовної прокрутки
marqueeInner.innerHTML = marqueeInner.innerHTML.repeat(6);

let position = 0;
let speed = 0.4; 

function animate() {
  position -= speed;

  if (Math.abs(position) >= marqueeInner.scrollWidth / 2) {
    position = 0;
  }

  marqueeInner.style.transform = `translateX(${position}px)`;
  requestAnimationFrame(animate);
}

animate();
