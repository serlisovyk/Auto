export default function slider(
  wrapperSelector,
  fieldSelector,
  slidesSelector,
  prevBtnSelector,
  nextBtnSelector
) {
  const slidesWrapper = document.querySelector(wrapperSelector)
  const slidesField = document.querySelector(fieldSelector)
  const slides = document.querySelectorAll(slidesSelector)
  const nextBtn = document.querySelector(nextBtnSelector)
  const prevBtn = document.querySelector(prevBtnSelector)

  let offset = 0

  function updateSlideWidths() {
    const width = window.getComputedStyle(slidesWrapper).width

    const slideWidth =
      window.innerWidth >= 768 ? parseFloat(width) / 2 : parseFloat(width)

    slidesField.style.width = `${
      window.innerWidth >= 768 ? 50 * slides.length : 100 * slides.length
    }%`

    slides.forEach(slide => (slide.style.width = `${slideWidth}px`))

    return slideWidth
  }

  let slideWidth = updateSlideWidths() // Set initial width

  function moveSlide(direction) {
    if (direction === 'next') {
      offset >= slideWidth * (slides.length - 2)
        ? (offset = 0)
        : (offset += slideWidth)
    } else {
      offset === 0
        ? (offset = slideWidth * (slides.length - 2))
        : (offset -= slideWidth)
    }
    slidesField.style.transform = `translateX(-${offset}px)`
  }

  nextBtn.addEventListener('click', () => moveSlide('next'))
  prevBtn.addEventListener('click', () => moveSlide('prev'))

  window.addEventListener('resize', () => {
    slideWidth = updateSlideWidths()
    offset = 0
    slidesField.style.transform = `translateX(0px)`
  })
}
