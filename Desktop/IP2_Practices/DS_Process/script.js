// script.js
document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from reloading the page

    // Get form data
    const name = document.getElementById('name').value;
    const location = document.getElementById('location').value;
    const farmType = document.getElementById('farmType').value;

    // Store the profile data (can be sent to a backend or saved in localStorage)
    const profileData = {
        name: name,
        location: location,
        farmType: farmType
    };

    // Simulate saving the profile (e.g., saving to localStorage or sending to an API)
    localStorage.setItem('farmerProfile', JSON.stringify(profileData));

    // Show success message
    document.getElementById('successMessage').classList.remove('hidden');

    // Clear form fields
    document.getElementById('profileForm').reset();
});
