// function showForm(vendorName) {
//     // Hide all form containers
//     var formContainers = document.querySelectorAll('.form-container');
//     formContainers.forEach(function(container) {
//         container.style.display = 'none';
//     });

//     // Show form container corresponding to the clicked vendor
//     var formContainer = document.getElementById(vendorName + 'Form');
//     if (formContainer) {
//         formContainer.style.display = 'block';
//     } else {
//         // If form container doesn't exist, create it
//         createForm(vendorName);
//     }
// }

// function createForm(vendorName) {
//     var formsDiv = document.getElementById('vendorForms');
//     var formDiv = document.createElement('div');
//     formDiv.id = vendorName + 'Form';
//     formDiv.classList.add('form-container');
//     formDiv.innerHTML = `
//         <h2>Form for ${vendorName}</h2>
//         <label for="${vendorName}Budget">Budget Spent:</label>
//         <input type="number" id="${vendorName}Budget" name="${vendorName}Budget" placeholder="Enter budget spent">
//         <!-- Add more fields as needed -->
//     `;
//     formsDiv.appendChild(formDiv);
// }


function showForm(vendorName) {
    // Hide all form containers
    var formContainers = document.querySelectorAll('.form-container');
    formContainers.forEach(function(container) {
        container.style.display = 'none';
    });

    // Show form container corresponding to the clicked vendor
    var formContainer = document.getElementById(vendorName + 'Form');
    if (formContainer) {
        formContainer.style.display = 'block';
    }
}
