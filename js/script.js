const menuToggle = document.querySelector("a.menu-toggle")
// const menuToggleText = menuToggle.querySelector("span")

const bodyTag = document.querySelector("body")

menuToggle.addEventListener("click", function () {
  bodyTag.classList.toggle("nav-open")

  if (bodyTag.classList.contains("nav-open")) {
    gsap.to(".burger-top", { rotation: 45, transformOrigin: "50% 50%", y: 8 })
    gsap.to(".burger-bottom", { rotation: -45, transformOrigin: "50% 50%", y: -8 })
    gsap.to(".burger-mid", { width: 0 })
  } else {
    gsap.to(".burger-top", { rotation: 0, y: 0 })
    gsap.to(".burger-bottom", { rotation: 0, y: 0 })
    gsap.to(".burger-mid", { width: 28 })
  }
})
