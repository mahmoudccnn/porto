const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.navbar ul li');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
});




var testimonialCarousel = new bootstrap.Carousel(document.getElementById('testimonial-carousel'), {
  interval: 3000, // set the interval between slides to 5 seconds
  pause: 'hover' // pause the slideshow when the user hovers over it
})