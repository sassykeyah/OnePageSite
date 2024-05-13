

/* 
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n)
}

function currentSlide(n) {
  showSlides(slideIndex = n)
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
</script> */
// Assuming you have an array of items to search through
const items = ["Apple", "Banana", "Cherry", "Orange", "Pear"];

function searchItems(query) {
    const filteredItems = items.filter(item =>
        item.toLowerCase().includes(query.toLowerCase())
    );
    // Display or manipulate the filtered items as needed
    console.log(filteredItems);
}

const searchInput = document.querySelector(".search-bar"); // Updated selector
searchInput.addEventListener("input", () => {
    const query = searchInput.value;
    searchItems(query);
});