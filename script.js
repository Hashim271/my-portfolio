// JavaScript to toggle the dropdown content when the button is clicked
const buttons = document.querySelectorAll('.grid-button');

buttons.forEach(button => {
    button.addEventListener('click', function () {
        // The corresponding dropdown content
        const dropdownContent = this.nextElementSibling;
        
        // Toggle visibility of the dropdown content
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none'; // Hide the content if it's already visible
            this.textContent = "Show More ⮛"; // Change button text to "Show More"
        } else {
            dropdownContent.style.display = 'block'; // Show the content if it's hidden
            this.textContent = "Hide ⮘"; // Change button text to "Hide"
        }
    });
});
