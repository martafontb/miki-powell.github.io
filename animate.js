
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0.10) {
      entry.target.classList.add("animate")
    } else {
      entry.target.classList.remove("animate")
    }
  })
}, {
  threshold: [0, 0.10, 0.9, 1]
})

const images = document.querySelectorAll('img');
images.forEach(image => {
  observer.observe(image)
})
