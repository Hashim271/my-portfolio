document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.grid-button').forEach(button => {
        button.addEventListener('click', function () {
            const dropdown = this.nextElementSibling;
            const isOpen = dropdown.classList.contains('open');

            // Close all other dropdowns
            document.querySelectorAll('.dropdown').forEach(d => {
                if (d !== dropdown) { // Prevent closing the current dropdown
                    d.classList.remove('open');
                    if (d.previousElementSibling && d.previousElementSibling.classList.contains('grid-button')) {
                        d.previousElementSibling.textContent = 'Show More';
                    }
                }
            });

            if (!isOpen) {
                dropdown.classList.add('open');
                this.textContent = 'Hide';
            } else {
                dropdown.classList.remove('open');
                this.textContent = 'Show More';
            }
        });
    });

    // Name input validation - no numbers allowed
    const nameInput = document.getElementById('name');
    if (nameInput) {
        nameInput.addEventListener('input', e => {
            const val = e.target.value;
            if (/\d/.test(val)) {
                alert('Numbers are not allowed in the name field! Please enter a valid name.');
                e.target.value = val.replace(/\d/g, '');
            }
        });
    }

    // Email validation regex
    const emailInput = document.getElementById('email');
    const form = document.getElementById('form');

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validateMinLength(value, minLength) {
        return value.trim().length >= minLength;
    }

    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();

            let valid = true;
            const emailVal = emailInput.value.trim();
            const subjectVal = document.getElementById('subject').value.trim();
            const commentVal = document.getElementById('comment').value.trim();

            if (!validateEmail(emailVal)) {
                alert('Please enter a valid email address!');
                valid = false;
            }

            if (!validateMinLength(subjectVal, 3)) {
                alert('Subject needs to be at least 3 characters long to avoid spam!');
                valid = false;
            }

            if (!validateMinLength(commentVal, 5)) {
                alert('Comment needs to be at least 5 characters long to avoid spam!');
                valid = false;
            }

            if (valid) {
                alert('Form Submitted!');
                // Optionally clear the form fields here
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('subject').value = '';
                document.getElementById('comment').value = '';
            }
        });
    }

    // Project Filtering
    const filterButtons = document.querySelectorAll('.filter-button');
    const gridItems = document.querySelectorAll('.grid-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const category = this.dataset.category;

            // Update active button state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            gridItems.forEach(item => {
                const categories = item.dataset.categories || '';
                if (category === 'all' || categories.includes(category)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});
