function addNavEvents(navButton) {
  document.addEventListener('click', (e) => {
    const isNavButton = e.target.matches(`[${navButton}]`);

    if (isNavButton) {
      const currentNavItem = e.target;
      document.querySelectorAll(`[${navButton}]`).forEach((navItem) => {
        if (navItem !== currentNavItem) {
          navItem.classList.remove('active');
        }
      });
    }
  });
}

addNavEvents('data-nav-button');
