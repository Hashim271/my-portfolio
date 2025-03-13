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

//Make sure the name input only accepts letters and no numbers
const nameInput = document.getElementById('name');

nameInput.addEventListener('input', function (e) {
    const inputValue = e.target.value;

    if (/\d/.test(inputValue)) {
        alert('Numbers are not allowed in the name field! Please enter a valid name.');

        e.target.value = inputValue.replace(/\d/g, '');

        e.preventDefault();
        return;
    }
});

//Make sure the email input is valid
const emailInput = document.getElementById('email');
const form = document.getElementById('form');

function validateEmail(email) {
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailValid.test(email);
}

//Make sure that the subject input and the comment section is of minimum 5 char to avoid spam.
function validateMinLength(value, minLength) {
    return value.trim().length >= minLength;
}

//Make sure all input are good before submitting
form.addEventListener('submit', function (e) {

    e.preventDefault();

    const emailValue = emailInput.value;
    const subjectInput = document.getElementById('subject');
    const commentInput = document.getElementById('comment');
    let isValid = true;

    if (!validateEmail(emailValue)) {
        alert('Please enter a valid email address!');
        isValid = false;
    }

    if (!validateMinLength(subjectInput.value, 3)) {
        alert('Subject needs to be at least 3 characters long to avoid spam!');
        isValid = false;
    }

    if (!validateMinLength(commentInput.value, 5)) {
        alert('Comment needs to be at least 5 characters long to avoid spam!');
        isValid = false;
    }

    if (isValid) {
        alert('Form Submitted!');
        this.submit();
    }
});