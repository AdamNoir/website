const headings = document.querySelectorAll('h2, h3'); // ajusta si usas otros
  const tocLinks = document.querySelectorAll('.toc a');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;

          tocLinks.forEach((link) => {
            link.classList.remove('active');
          });

          const activeLink = document.querySelector(`.toc a[href="#${id}"]`);

          activeLink?.classList.add('active');
        }
      });
    },
    {
      rootMargin: '-40% 0px -50% 0px',
      threshold: 0,
    },
  );

  headings.forEach((heading) => {
    if (heading.id) observer.observe(heading);
  });

  tocLinks.forEach((link) => {
    link.addEventListener('click', () => {
      tocLinks.forEach((l) => l.classList.remove('active'));
      link.classList.add('active');
    });
  });