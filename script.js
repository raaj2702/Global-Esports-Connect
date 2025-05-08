let slideIndex = {};

function plusSlides(n, slider) {
    let slides = slider.querySelectorAll('.photo');
    let sliderId = slider.id; // Get the ID of the current slider

    // Initialize the slide index for this slider if it doesn't exist
    slideIndex[sliderId] = slideIndex[sliderId] || 0;

    // Update the slide index and loop through the slides
    slideIndex[sliderId] = (slideIndex[sliderId] + n) % slides.length;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex[sliderId]].style.display = "block";
}