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
    afterEnter(data) {
        if (data.current.url.href != data.next.url.href) {
            // do stuff when navigating to this view
            var swiper = new Swiper('.swiper-container', {
                loop: true,
                speed: 900,
                spaceBetween: 100,
                fadeEffect: {
                crossFade: true
                },

                navigation: {
                 nextEl: '.swiper-button-next',
                 prevEl: '.swiper-button-prev',
              },
            });
        } else {
            // do stuff when directly accessed
        }
    },
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
  }
]
});

barba.hooks.afterEnter( ( data ) => {
  // JS functions here
  var swiper = new Swiper('.swiper-container', {
      loop: true,
      speed: 900,
      spaceBetween: 100,
      fadeEffect: {
      crossFade: true
      },

      navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
    },
  });

} );


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
