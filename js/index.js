//CAROUSEL INICIO
document.addEventListener('DOMContentLoaded', function() {
    const carouselElement = document.querySelector('#testimonialCarousel');
    new bootstrap.Carousel(carouselElement, {
        interval: 5000, // Transición de 5 segundos
        ride: 'carousel'
    });
});