document.addEventListener('DOMContentLoaded', () => {
  const experienceEl = document.getElementById('experience-counter');
  if (!experienceEl) return; // safety check

  let current = 0;
  const target = 14;
  const duration = 2000; // total animation time in ms
  const steps = 70;
  const increment = target / steps;
  const intervalTime = duration / steps;

  const animateExperience = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(animateExperience);
    }
    experienceEl.textContent = Math.floor(current);
  }, intervalTime);
});

document.addEventListener('DOMContentLoaded', () => {
  const experienceEl = document.getElementById('experience-counter1');
  if (!experienceEl) return; // safety check

  let current = 0;
  const target = 23;
  const duration = 2000; // total animation time in ms
  const steps = 70;
  const increment = target / steps;
  const intervalTime = duration / steps;

  const animateExperience = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(animateExperience);
    }
    experienceEl.textContent = Math.floor(current);
  }, intervalTime);
});


document.addEventListener('DOMContentLoaded', () => {
  const clientEl = document.getElementById('experience-counter2');
  if (!clientEl) return; // safety check

  let current = 0;
  const target = 23;
  const duration = 2000; // total animation time in ms
  const steps = 70;
  const increment = target / steps;
  const intervalTime = duration / steps;

  const animateClients = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(animateClients);
    }
    clientEl.textContent = Math.floor(current);
  }, intervalTime);
});


// js/counter.js
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  const speed = 200;

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
});
