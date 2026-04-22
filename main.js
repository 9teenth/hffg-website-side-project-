// Hamburger menu toggle
const btn = document.getElementById('hamburgerBtn');
const nav = document.getElementById('mainNav');

if (btn && nav) {
  btn.addEventListener('click', function () {
    nav.classList.toggle('open');
    btn.classList.toggle('open');
  });
}

// Close nav when a link is clicked (mobile)
document.querySelectorAll('.nav__link').forEach(function (link) {
  link.addEventListener('click', function () {
    nav.classList.remove('open');
    btn.classList.remove('open');
  });
});
