let slideIndex = 1;
showSlides(slideIndex);

function plusSlide(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName("image");
  let dots = document.getElementsByClassName("demo");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
document.querySelector(".prev").addEventListener("click", function () {
  plusSlide(-1);
});

document.querySelector(".next").addEventListener("click", function () {
  plusSlide(1);
});

let gallery = document.querySelectorAll(".demo");
gallery.forEach((img, index) => {
  img.addEventListener("click", function () {
    currentSlide(index + 1);
  });
});
