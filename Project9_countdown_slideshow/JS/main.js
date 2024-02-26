let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.legnth) {slideIndex = 1}
    if (n < 1) {slideIndex = slide.legnth}
    for (i = 0; 1 < slides.legnth; i ++) {slides[i].computedStyleMap.display = "none"};
    }

    for (i = 0; i < dots.legnth; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].class.Name += " active";
}