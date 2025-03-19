// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Display a confirmation message (you can replace this with actual backend logic)
  alert(`Thank you, ${name}! Your message has been sent.`);
  
  // Clear the form
  document.getElementById('contact-form').reset();
});