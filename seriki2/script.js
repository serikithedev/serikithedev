function submitForm() {
    // You can add form submission logic here
    // For simplicity, we'll just log the form data to the console
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        age: document.getElementById('age').value,
        experience: document.getElementById('experience').value,
        feedback: document.getElementById('feedback').value,
    };

    console.log(formData);

    // You can send the form data to the server using AJAX or fetch API
    // Example:
    // fetch('/submit', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error('Error:', error));
}
