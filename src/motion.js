// Content stays visible without JavaScript or animation support.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const animations = new Set();

if ('IntersectionObserver' in window && 'animate' in Element.prototype) {
  const observer = new IntersectionObserver((entries) => {
    let stagger = 0;
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      observer.unobserve(entry.target);
      if (reducedMotion.matches) continue;
      entry.target.style.setProperty('--entrance-delay', `${Math.min(stagger++ * 70, 210)}ms`);
      entry.target.classList.add('enters-view');
      const animation = entry.target.getAnimations()[0];
      if (!animation) continue;
      animations.add(animation);
      animation.finished.then(
        () => animations.delete(animation),
        () => animations.delete(animation),
      );
    }
  }, { threshold: 0, rootMargin: '0px 0px -32px 0px' });

  document.querySelectorAll([
    '.section-heading > *', '.work-image', '.work-caption', '.work-description',
    '.personal-photo', '.personal-copy > *', '.story-copy > *', '.childhood-photo',
    '.journey-heading', '.journey-place', '.values-grid > div',
    '.approach-section h2', '.approach-list article > *', '.contact-title', '.contact-bottom > *', '.case-story-grid',
    '.case-decision-grid article', '.case-close-grid',
  ].join(',')).forEach((element) => observer.observe(element));

  reducedMotion.addEventListener('change', () => {
    if (reducedMotion.matches) {
      animations.forEach((animation) => animation.cancel());
      animations.clear();
    }
  });
  // Back/forward restoration should show the saved page immediately.
  window.addEventListener('pageshow', (event) => {
    if (event.persisted) animations.forEach((animation) => animation.cancel());
  });
}
