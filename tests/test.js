let currentIndex = 1;

function openCarousel(index) {
    currentIndex = index;
    document.getElementById('imageCarousel').style.display = 'block';
    showSlide(currentIndex);
}

function closeCarousel() {
    document.getElementById('imageCarousel').style.display = 'none';
}

function changeSlide(n) {
    showSlide(currentIndex += n);
}

function showSlide(n) {
    const slides = document.getElementsByClassName('carousel-slide');
    if (n > slides.length) { currentIndex = 1; }
    if (n < 1) { currentIndex = slides.length; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[currentIndex - 1].style.display = 'block';
}

// Close the carousel when the user clicks outside of it
window.onclick = function (event) {
    const carousel = document.getElementById('imageCarousel');
    if (event.target == carousel) {
        carousel.style.display = 'none';
    }
}
