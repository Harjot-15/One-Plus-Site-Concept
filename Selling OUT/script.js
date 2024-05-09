document.querySelector("nav").addEventListener("click", function(e) {
  if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith("#")) {
    e.preventDefault();
    let targetElement = document.querySelector(e.target.getAttribute('href'));
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
});

// Function to smoothly scroll to an element by its selector
function smoothScrollTo(selector) {
  let targetElement = document.querySelector(selector);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
}

// Event listener for smooth scrolling on same-page navigation links
document.querySelector("nav").addEventListener("click", function(e) {
  if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith("#")) {
    e.preventDefault();
    smoothScrollTo(e.target.getAttribute('href'));
  }
});

// Check if the page has loaded with a hash in the URL
window.addEventListener("DOMContentLoaded", (event) => {
  if (window.location.hash) {
    smoothScrollTo(window.location.hash);
  }
});

document.addEventListener("DOMContentLoaded", function() {
  let anchorLinks = document.querySelectorAll('a[href^="#"]');

  for (let link of anchorLinks) {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      let href = this.getAttribute('href').substring(1);
      let targetElement = document.getElementById(href);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  }
});

function addToCart() {
  let product = {
    title: document.querySelector('.product-title').innerText,
    price: document.querySelector('.product-price').innerText,
    image: document.querySelector('.product-photo img').src,
    description: document.querySelector('.product-description').innerText
  };

  localStorage.setItem('selectedProduct', JSON.stringify(product));
  window.location.href = 'cart.html';
}


document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission

  const formData = {
    name: event.target.name.value,
    email: event.target.email.value,
    message: event.target.message.value
  };

  // Store the form data in localStorage
  localStorage.setItem('formData', JSON.stringify(formData));

  // Redirect to the submission page
  window.location.href = 'submission.html';
});