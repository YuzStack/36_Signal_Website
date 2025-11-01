'use strict';

const bars = document.querySelector('.menu-reveal-btn');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-btn');
const menu = document.querySelector('.menu');

const allSections = document.querySelectorAll('.section');

// Menu toggle ‼️
bars.addEventListener('click', function () {
  overlay.classList.remove('hidden');
  menu.classList.remove('-translate-x-full');
});

const closeMenu = function () {
  overlay.classList.add('hidden');
  menu.classList.add('-translate-x-full');
};
closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

// Revealing Sections on Scroll ‼️
const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('translate-y-32', 'opacity-0');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
});

allSections.forEach(function (section) {
  section.classList.add('translate-y-32', 'opacity-0');
  sectionObserver.observe(section);
});
