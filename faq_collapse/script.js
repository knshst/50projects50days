const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    // use toggle method but not add & remove method
    toggle.parentNode.classList.toggle('active')
  })
})