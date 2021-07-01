const counters = document.querySelectorAll('.counter');

function counting(counters) {
  counters.forEach((counter) => {
    const updateCounter = () => {
      const target = Number(counter.getAttribute('data-target'));
      const count = Number(counter.innerText);
      const increment = 1;

      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCounter, 10);
      } else {
        count.innerText = target;
      }
    };
    updateCounter();
  });
}

counting(counters);
