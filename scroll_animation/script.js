const boxes = document.querySelectorAll('.box')

checkBoxes()

window.addEventListener('scroll', checkBoxes)

function checkBoxes() {
  // Retrieve the window height and make it into triger point
  const triggerBottom = window.innerHeight / 5 * 4

  boxes.forEach(box => {
    // DOMRect returns a DOMRect object where the view point is like x, y, width, height etc..
    const boxTop = box.getBoundingClientRect().top

    if (boxTop < triggerBottom) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}