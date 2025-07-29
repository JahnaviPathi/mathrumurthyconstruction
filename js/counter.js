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
