// DARK MODE TOGGLE WITH ICON SWITCH
const toggleBtn = document.querySelector('.toggle-mode');

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');

  // Switch emoji icon
  if (document.body.classList.contains('dark-mode')) {
    toggleBtn.textContent = '☀️';
  } else {
    toggleBtn.textContent = '🌙';
  }
}

// SCROLL REVEAL ANIMATIONS
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll('.section').forEach((section) => {
  section.classList.add('hidden');
  observer.observe(section);
});