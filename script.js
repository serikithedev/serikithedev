// JavaScript code can be added here to make the website interactive.
// For example, you can handle form submissions, create dynamic content, or implement donation functionality.
// Here's a simple example:

document.getElementById('donateButton').addEventListener('click', function() {
    alert('Thank you for your donation!');
});



// JavaScript for Responsive Navigation

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// JavaScript for Resizing Images

function adjustImages() {
  const images = document.querySelectorAll('img');

  images.forEach((img) => {
    if (img.naturalWidth > window.innerWidth) {
      img.style.width = '100%';
      img.style.height = 'auto';
    }
  });
}

// Run adjustImages when the page loads and when it's resized
window.addEventListener('load', adjustImages);
window.addEventListener('resize', adjustImages);

// JavaScript for Additional Responsiveness (Add as needed)

// Example: Show/hide elements based on screen size
function showHideElementBasedOnScreenSize() {
  const elementToHide = document.querySelector('.hide-on-small-screens');
  if (window.innerWidth < 768) {
    elementToHide.style.display = 'none';
  } else {
    elementToHide.style.display = 'block';
  }
}

// Run the function on page load and when the window is resized
window.addEventListener('load', showHideElementBasedOnScreenSize);
window.addEventListener('resize', showHideElementBasedOnScreenSize);
