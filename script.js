

// Scroll event javascript - JQuery attached function to make header dissapear on scroll event 
$(function () {

  var lastScrollTop = 0; // montior scroll position 
  var delta = 15; // height of scroll before header collapses 

  $(window).scroll(function (event) {

    //position of scroll top
    var st = $(this).scrollTop();

    //equation for loacting scroll top 
    if (Math.abs(lastScrollTop - st) <= delta)
      return;

    if ((st > lastScrollTop) && (lastScrollTop > 0)) {
      // downscroll code makes header disappear 
      $("header").css("top", "-80px");

    } else {
      // upscroll code makes header makes header appear
      $("header").css("top", "0px");
    }

    lastScrollTop = st;
  });
});

//Slideshow javascript

const slideIndexes = [1, 1, 1];

showSlides('slideDeck1', slideIndexes[0]); // set up slideshow one
showSlides('slideDeck2', slideIndexes[1]); // set up slideshow two
showSlides('slideDeck3', slideIndexes[2]); // set up slideshow three

// Rotates Image Number (< and >)
function plusSlides(slideShowClassName, n) {
  let slideShowIndex = slideShowClassName.charAt(9); // locate which slideshow used
  let slideIndex = slideIndexes[slideShowIndex - 1]; // locate which image within slideshow

  slideIndexes[slideShowIndex - 1] += n; // calc and save image number

  showSlides(slideShowClassName, slideIndexes[slideShowIndex - 1]); // change image
}

// Sets Image Number (dots)
function currentSlide(slideShowClassName, n) {
  let slideShowIndex = slideShowClassName.charAt(9); // locate which slideshow used
  let slideIndex = slideIndexes[slideShowIndex - 1]; // locate which image within slideshow

  slideIndexes[slideShowIndex - 1] = n;

  showSlides(slideShowClassName, slideIndexes[slideShowIndex - 1]);
}

// Changes visability of images and dots in slideshow 
function showSlides(slideShowClassName, n) {  //slideShowClassName defines slideshows to make three, instead of one 

  let i;

  let slideShowIndex = slideShowClassName.charAt(9); // locate which slideshow used
  let slideIndex = slideIndexes[slideShowIndex - 1]; // locate which image within slideshow

  // Sourcing my images for slideshow nb and dots
  let slides = document.getElementsByClassName(slideShowClassName);
  let dots = document.getElementsByClassName("slideDeckDot" + slideShowIndex);

  // If slideshow finishes, repeat from start slide
  if (n > slides.length) {
    slideIndex = 1;
  }
  else if (n < 1) {
    slideIndex = slides.length;
  }
  slideIndexes[slideShowIndex - 1] = slideIndex; // save slide number if it changed

  // Hide all slides
  for (i = 0; i < slides.length; i++) { // hide all slides
    slides[i].style.display = "none";
  }
  // Set all dots inactive
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block"; // show specific slide
  dots[slideIndex - 1].className += " active"; // set correlating dot active
}
