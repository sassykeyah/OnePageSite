

// Scroll event javascript
$(function(){
    var lastScrollTop = 0, delta = 15;
    $(window).scroll(function(event){
       var st = $(this).scrollTop();
       
       if(Math.abs(lastScrollTop - st) <= delta)
          return;
if ((st > lastScrollTop) && (lastScrollTop>0)) {
       // downscroll code
      $("header").css("top","-80px");
  
   } else {
      // upscroll code
      $("header").css("top","0px");
   }
       lastScrollTop = st;
    });
});

//Slideshow javascript

const slideIndexes = [1, 1, 1];

showSlides('slideDeck1', slideIndexes[0]);
showSlides('slideDeck2', slideIndexes[1]);
showSlides('slideDeck3', slideIndexes[2]);

function plusSlides(slideShowClassName, n) {
  let slideShowIndex = slideShowClassName.charAt(9);
  let slideIndex = slideIndexes[slideShowIndex - 1];

  slideIndexes[slideShowIndex - 1] += n;
  
  showSlides(slideShowClassName, slideIndexes[slideShowIndex - 1]);
}

function currentSlide(slideShowClassName, n) {
  let slideShowIndex = slideShowClassName.charAt(9);
  let slideIndex = slideIndexes[slideShowIndex - 1];

  slideIndexes[slideShowIndex - 1] = n;
  
  showSlides(slideShowClassName, slideIndexes[slideShowIndex - 1]);
}

function showSlides(slideShowClassName, n) {
  //slideShowClassName defines slideshows to make three, instead of one 
  let i;
  
  let slideShowIndex = slideShowClassName.charAt(9);
  let slideIndex = slideIndexes[slideShowIndex - 1];

  let slides = document.getElementsByClassName(slideShowClassName);
  let dots = document.getElementsByClassName("slideDeckDot" + slideShowIndex);

  if (n > slides.length) {
    slideIndex = 1;
  }
  else if (n < 1) {
    slideIndex = slides.length;
  }  
  slideIndexes[slideShowIndex - 1] = slideIndex;

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
