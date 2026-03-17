const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  const header = card.querySelector('.card-header');
  header.addEventListener('click', () => {
    const isActive = card.classList.contains('active');

    cards.forEach((item) => item.classList.remove('active'));
    if (!isActive) {
      card.classList.add('active');
    }
  });
});
