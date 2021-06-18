document.querySelector('.bubble').addEventListener('click', () => {
  console.log('Ok!');

  document.querySelectorAll('.service__item').forEach((e) => {
    e.style.display = 'block';
  });
});
