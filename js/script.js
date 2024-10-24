import burger from './modules/burger.js'
import accordion from './modules/accordion.js'
import slider from './modules/slider.js'
import form from './modules/form.js'

window.addEventListener('DOMContentLoaded', function () {
  burger('.burger', '.nav__link', 'nav--open')

  accordion(
    '.accordion-faq__btn',
    '.accordion-faq__item',
    '.accordion-faq__text',
    'accordion-faq__item--active',
    false
  )

  slider(
    '.testimonials__cards',
    '.testimonials__wrapper',
    '.testimonials__card',
    '.arrow-prev',
    '.arrow-next'
  )

  form('form', 'input', 'textarea')
})
