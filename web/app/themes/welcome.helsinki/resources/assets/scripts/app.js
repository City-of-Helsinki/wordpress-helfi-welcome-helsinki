import debounce from 'lodash-es/debounce';

import { menu } from './components/dropdown';
import { toggle, toggler } from './components/toggler';

document.querySelectorAll('.content-toggle').forEach(toggler);

const submenuTriggers = document.querySelectorAll('.site-navigation__submenu-trigger');
for (let i = 0; i < submenuTriggers.length; i++) {
  const trigger = submenuTriggers[i];
  trigger.addEventListener('click', (e) => {
    const item = e.target.closest('[aria-haspopup]');
    toggle(item);
    e.preventDefault();
  })
}

toggler(document.querySelector('.site-hamburger-button'));

if (matchMedia('(min-width: 1024px)').matches) {
  if (document.querySelector('.site-navigation')) {
    menu(document.querySelector('.site-navigation'));
  }
}

const appHeight = () => {
  const doc = document.documentElement
  doc.style.setProperty('--app-height', `${window.innerHeight}px`)
};
window.addEventListener('resize', debounce(appHeight, 150));
appHeight();

if (document.querySelector('a[href="#top"]')) {
  document.querySelector('a[href="#top"]').addEventListener('click', () => {
    document.getElementById('skip-to-content').focus();
  });
}
