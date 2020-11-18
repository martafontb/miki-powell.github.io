// 1. when we click an image we want to show the lightbox
// 2. we want to grab the image that has just been clicked, and show it inside the modal
// 3. when we click the close button hide the modal
// 4. our link doesn't follow the default href

$('.photos a').on('click', function(){
 var currentImage = $(this).html()
  //here we grab the modal and set it to our current image
  //that we've just clicked on
  $('.modal-content').html(currentImage)
  $('.modal').fadeIn(500)
  //block default action of following the href attribute
  return false
})

$('.modal-close').on('click', function(){
    $('.modal').fadeOut(500)
  //block default action of following the href attribute
  return false
  })



  const slides = document.getElementsByClassName('carousel-item');
  let slidePosition = 0;
  const totalSlides = slides.length;

  document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide);
  document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide);

  function moveToNextSlide() {
      if (slidePosition === totalSlides - 1) {
          slidePosition = 0;
      } else {
          slidePosition++;
      }

      slides[slidePosition].classList.add("carousel-item-visible");
  }

  function moveToPrevSlide() {

  }






// have the content for these pages
const images = document.querySelectorAll(".photos a")
let pageNumber = 0
const totalPages = pageNumber.length;

//pick the relevant tags
const nextTag = document.querySelector(".next").addEventListener('click', next);
const previousTag = document.querySelector(".prev").addEventListener('click', previous);
const outputTag = document.querySelector(".modal-content")


// function for next + updates section:
// make a next function to increase the pageNumber
const next = function(){
  pageNumber = pageNumber + 1

  if(pageNumber > images.length -1 ){
      pageNumber = 0
      }

  updateSection()
}

// make a previous function to decrease the pageNumber
const previous = function(){
  pageNumber = pageNumber - 1

    if(pageNumber < 0){
      pageNumber = pages.length -1
      }
  updateSection()
}

const updateSection = function(){
  outputTag.innerHTML = images[pageNumber]
}


// nextTag.addEventListener("click", function() {
// next()
//
// })
//
// previousTag.addEventListener("click", function() {
//   previous()
// })

// when the user presses the key, check for arrow left or right
// and do next or prev acordingly
document.addEventListener("keyup", function(event){
  //I want to do a check
  //if the key being pressed is ArrowRight
  if(event.key == "ArrowRight"){
     next()
     }
  //if the key being pressed is ArrowLeft
   if(event.key == "ArrowLeft"){
     previous()
     }
})
