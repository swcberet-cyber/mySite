'use strict';
const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
const mobile = window.matchMedia('(max-width: 760px)');
function setMenu(open) {
  toggle.setAttribute('aria-expanded', String(open));
  toggle.innerHTML = open ? '메뉴 닫기 <span aria-hidden="true">×</span>' : '메뉴 열기 <span aria-hidden="true">☰</span>';
  navigation.classList.toggle('is-collapsed', mobile.matches && !open);
}
function syncMenu() {
  toggle.hidden = !mobile.matches;
  setMenu(false);
}
toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
navigation.addEventListener('click', (event) => {
  if (event.target.closest('a') && mobile.matches) setMenu(false);
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && mobile.matches && toggle.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    toggle.focus();
  }
});
mobile.addEventListener('change', syncMenu);
syncMenu();
document.querySelector('#year').textContent = String(new Date().getFullYear());
