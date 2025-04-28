// Initialize particles.js
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('Particles.js config loaded');
  });
  
  // Typed.js effect
  var typed = new Typed("#typed", {
    strings: ["Web Developer", "ML Enthusiast", "Tech Explorer"],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true
  });
  
  // AOS animation
  AOS.init();
  