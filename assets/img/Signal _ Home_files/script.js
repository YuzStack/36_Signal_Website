'use strict';

const bars = document.querySelector('.menu-reveal-btn');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-btn');
const menu = document.querySelector('.menu');

// Menu toggle ‼️
bars.addEventListener('click', function () {
  overlay.classList.remove('hidden');
  menu.classList.remove('translate-x-full');
});

const closeMenu = function () {
  overlay.classList.add('hidden');
  menu.classList.add('translate-x-full');
};
closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
