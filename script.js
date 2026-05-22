// Optional: Play button click (you can add video modal later)
document.querySelector('.hero-play-icon')?.addEventListener('click', () => {
  const video = document.querySelector('.hero-video');
  if (video.paused) video.play();
  else video.pause();
});

// Smooth scroll for any future anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  });
});