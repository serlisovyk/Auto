export default function accordion(
  btnsSelector,
  itemSelector,
  textSelector,
  activeSelector,
  openMoreThanOne = false
) {
  const accordionBtns = document.querySelectorAll(btnsSelector)

  accordionBtns.forEach(function (btn) {
    btn.addEventListener('click', handleBtnClick)
  })

  function handleBtnClick() {
    const item = this.closest(itemSelector)
    const text = item.querySelector(textSelector)
    const isActive = item.classList.contains(activeSelector)

    if (!isActive) {
      item.classList.add(activeSelector)
      text.style.maxHeight = text.scrollHeight + 'px'
    } else {
      item.classList.remove(activeSelector)
      text.style.maxHeight = '0'
    }

    if (!openMoreThanOne) {
      accordionBtns.forEach(function (otherBtn) {
        const otherItem = otherBtn.closest(itemSelector)
        const otherText = otherItem.querySelector(textSelector)

        if (otherItem !== item && otherItem.classList.contains(activeSelector)) {
          otherItem.classList.remove(activeSelector)
          otherText.style.maxHeight = '0'
        }
      })
    }
  }
}
