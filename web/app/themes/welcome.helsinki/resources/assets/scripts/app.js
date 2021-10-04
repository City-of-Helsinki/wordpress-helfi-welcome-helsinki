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

const externalLinks = document.querySelectorAll(
  '.entry-content a[target="_blank"]:not(.is-external-link), .entry-content a[href$=".pdf"]'
);
for (let i = 0; i < externalLinks.length; i++) {
  const linkEl = externalLinks[i];
  const label = linkEl.href.endsWith('.pdf') ? 'Open PDF in new window' : 'Open in new window';

  const icon = document.createElement('i');
  icon.classList.add(
    'hds-icon', 'hds-icon--link-external', 'external-link-icon'
  );
  icon.setAttribute('aria-hidden', 'true');
  icon.setAttribute('title', label);

  const srLabel = document.createElement('span');
  srLabel.classList.add('sr-only');
  srLabel.textContent = `(${label})`;

  linkEl.appendChild(icon.cloneNode(true));
  linkEl.appendChild(srLabel.cloneNode(true));
  linkEl.classList.add('is-external-link');

  // Enforce that eg. PDFs open in a new tab.
  linkEl.setAttribute('target', '_blank');
}
