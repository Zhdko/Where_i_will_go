const scroll = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('scroll')
    }
  });
});
scroll.observe(document.querySelector('.direction'));
