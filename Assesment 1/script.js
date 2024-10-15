document.getElementById('contact-form').addEventListener('submit', function (event) {
    var name = document.getElementById('name').value;
    var mobile = document.getElementById('mobile').value;

    // Ensure form fields are not empty
    if (!name || !mobile) {
        alert('Name and Mobile are required!');
        event.preventDefault();
    }

    // Validate name field
    var namePattern = /^[a-zA-Z\s]{3,30}$/;
    if (!namePattern.test(name)) {
        alert('Name must be alphabetic and between 3 to 30 characters!');
        event.preventDefault();
    }

    // Validate mobile field
    var mobilePattern = /^[0-9]{10,}$/;
    if (!mobilePattern.test(mobile)) {
        alert('Mobile must be numeric and have at least 10 digits!');
        event.preventDefault();
    }
});
