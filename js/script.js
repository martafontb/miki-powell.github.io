
//Barba transitions
const photoPage = document.querySelector('section.photo')
const contactPage = document.querySelector('section.contact')


barba.use(barbaCss)

barba.init({
  debug: true,
  transitions: [
    {
      name: "fade",
      once() {},
      beforeEnter({ current, next, trigger }) {
        const href = next.url.path
        const headerLinks = document.querySelectorAll("header a")

        headerLinks.forEach(tag => {
          if (tag.getAttribute("href") === href) {
            tag.classList.add("selected")
          } else {
            tag.classList.remove("selected")
          }
        }),

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        })
      }
    }
  ],

  views: [{
    namespace: 'photo',
    beforeEnter() {
      photoPage.classList.add("photo")
    },
    beforeLeave(){
      photoPage.classList.remove("photo")
    }
  }, {
    namespace: 'contact',
    beforeEnter() {
      contactPage.classList.add("contact")
    },
    beforeLeave(){
      contactPage.classList.remove("contact")
    }
  }]
});


const mqDark = window.matchMedia("(prefers-color-scheme: dark)")

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
