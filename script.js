document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 50, // віднімаємо висоту хедера (50px)
        behavior: "smooth"
      });
    }
  });
});


// Вибираємо всі елементи, які будемо анімувати
const items = document.querySelectorAll('.animate');

// Створюємо Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); // додаємо клас для анімації
      observer.unobserve(entry.target); // перестаємо спостерігати після появи
    }
  });
}, { threshold: 0.1 }); // елемент вважається видимим, якщо 20% його видно

// Спостерігаємо за кожним елементом
items.forEach(item => observer.observe(item));
