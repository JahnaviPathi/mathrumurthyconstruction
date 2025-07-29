document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");

  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    let count = 0;
    const increment = Math.ceil(target / 100); // smooth steps
    const delay = 20; // ms between updates

    const updateCounter = () => {
      count += increment;
      if (count >= target) {
        counter.innerText = target;
      } else {
        counter.innerText = count;
        setTimeout(updateCounter, delay);
      }
    };

    updateCounter();
  });
});
