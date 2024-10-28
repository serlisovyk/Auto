export default function burger(burgerSelector, navLinksSelector, activeSelector) {
  const burger = document.querySelector(burgerSelector)

  burger.addEventListener('click', () =>
    document.documentElement.classList.toggle(activeSelector)
  )

  const navLinks = document.querySelectorAll(navLinksSelector)

  navLinks.forEach(link =>
    link.addEventListener('click', () =>
      document.documentElement.classList.remove(activeSelector)
    )
  )
}
