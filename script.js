// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Function to set up the animation
function setupAnimation() {
    let images = document.querySelector('.images');
    const numImages = images.children.length;
    const imageWidth = images.children[0].offsetWidth;
    const totalWidth = imageWidth * numImages;

    // Set the width of the images container to totalWidth
    images.style.width = `${totalWidth}px`;

    // Calculate the maximum x position for the images container
    const maxX = totalWidth - window.innerWidth;

    // GSAP animation for horizontal scrolling
    gsap.to(images, {
        x: -maxX,
        ease: 'none',
        scrollTrigger: {
            trigger: '.imagesSection',
            start: 'top top',
            end: () => `+=${totalWidth}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
        }
    });
}

// Initial setup
setupAnimation();

// Update the animation on window resize
window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
    setupAnimation();
});


document.addEventListener('DOMContentLoaded', () => {
    let images = document.querySelectorAll('.images img');
  
    images.forEach(img => {
      img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.2)'; // Scale up the image
        img.style.transition = 'transform 0.3s ease'; // Smooth transition
        img.style.zIndex = '1'; // Bring image to foreground
      });
  
      img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)'; // Reset scale
        img.style.transition = 'transform 0.3s ease'; // Smooth transition back
        img.style.zIndex = '0'; // Reset z-index
      });
    });
  });
  

  document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = document.querySelector('.menu-icon');

    menuToggle.addEventListener('change', function () {
        if (menuToggle.checked) {
            navLinks.classList.add('show');
            menuIcon.classList.add('open');
        } else {
            navLinks.classList.remove('show');
            menuIcon.classList.remove('open');
        }
    });
});

