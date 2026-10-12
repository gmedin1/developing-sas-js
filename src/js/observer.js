const options = {};

const callback = (entries, observer) => {
  const nav = document.querySelector('.nav');
  entries.forEach((entry) => {
    // if (!entry.isIntersecting) {
    //   nav.style.backgroundColor = '#e0e0e0';
    // } else {
    //   nav.style.backgroundColor = 'transparent';
    // }
  });
};

const observer = new IntersectionObserver(callback, options);
const target = document.getElementById('header');

observer.observe(target);
