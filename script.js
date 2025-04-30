

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}
// Select the close icon element
const closeIcon = document.querySelector('.close-icon');

// Add a click event listener to the close icon
closeIcon.addEventListener('click', () => {
  // Perform the desired action, e.g., hide a modal or remove an element
  const targetElement = document.querySelector('.target-element');
  if (targetElement) {
    targetElement.style.display = 'none'; // Hides the element
  }
});





