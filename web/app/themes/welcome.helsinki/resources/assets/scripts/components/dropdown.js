const KEY_UP = 38;
const KEY_DOWN = 40;
const KEY_LEFT = 37;
const KEY_RIGHT = 39;

function keydownListener(e) {
  const currentLink = e.target
  const currentItem = currentLink.parentElement
  const nextItem = currentItem.nextElementSibling
  const prevItem = currentItem.previousElementSibling
  const nextLink = nextItem ? nextItem.querySelector('a') : undefined
  const prevLink = prevItem ? prevItem.querySelector('a') : undefined
  const submenu = currentItem.querySelector('[role="menu"]')
  const isInSubmenu = currentItem.parentElement.getAttribute('role') === 'menu'
  const parentItem = isInSubmenu ? currentItem.parentElement.parentElement : undefined
  const parentLink = parentItem ? parentItem.querySelector('a') : undefined

  switch(e.keyCode) {
    case KEY_LEFT:
      if (isInSubmenu) {
        closeItem(parentItem)
        parentLink && parentLink.focus()
      } else {
        prevLink && prevLink.focus()
      }
      e.preventDefault()
      break
    case KEY_RIGHT:
      if (isInSubmenu) {
        closeItem(parentItem)
        parentLink && parentLink.focus()
      } else {
        nextLink && nextLink.focus()
      }
      e.preventDefault()
      break
    case KEY_DOWN:
      if (isInSubmenu) {
        nextLink && nextLink.focus()
      } else {
        openItem(currentItem)
        submenu && submenu.querySelector('a').focus()
      }
      e.preventDefault()
      break
    case KEY_UP:
      if (isInSubmenu) {
        if (prevLink) {
          prevLink.focus()
        } else {
          closeItem(parentItem)
          parentLink && parentLink.focus()
        }
      }
      e.preventDefault()
      break
  }
}

function openItem (itemEl) {
  if (!itemEl) return
  const controlEl = itemEl.querySelector('[aria-haspopup="true"]')
  const controlsEl = controlEl && controlEl.getAttribute('aria-controls')
    ? document.getElementById(controlEl.getAttribute('aria-controls'))
    : undefined
  if (controlEl) {
    controlEl.setAttribute('aria-expanded', true);
  }
  if (controlsEl) {
    controlsEl.classList.add('is-active')
  }
}

function closeItem (itemEl) {
  if (!itemEl) return
  const controlEl = itemEl.querySelector('[aria-haspopup="true"]')
  const controlsEl = controlEl && controlEl.getAttribute('aria-controls')
    ? document.getElementById(controlEl.getAttribute('aria-controls'))
    : undefined
  if (controlEl) {
    controlEl.setAttribute('aria-expanded', false);
  }
  if (controlsEl) {
    controlsEl.classList.remove('is-active')
  }
}

export function menu(menu) {
  const itemsWithSubmenu = menu.querySelectorAll('.has-children')

  for (let i = 0; i < itemsWithSubmenu.length; i++) {
    const itemWithSubmenu = itemsWithSubmenu[i]

    itemWithSubmenu.addEventListener('mouseover', () => requestAnimationFrame(() => {
      // Close other submenus
      Array.from(itemsWithSubmenu).forEach(closeItem)
      openItem(itemWithSubmenu)
    }))

    itemWithSubmenu.addEventListener('mouseout', () => requestAnimationFrame(() => {
      closeItem(itemWithSubmenu)
    }))
  }

  menu.addEventListener('keydown', keydownListener);
}
