// Mapping out variables to elements in index.html

// This is mapped to the View Button on your first card
let viewButton = document.getElementById('3d_design_button');

// This is the div that contains the bootstrap carousel 
let modal = document.getElementById('modal');

// This is the close button inside the div that conatins the carousel. This allows users to get back to 
// your main page when they're done viewing the carousel
let closeButton = document.getElementById('close-button');


// Adding a listener to the view button so that when it is clicked the carousel is displayed 
viewButton.addEventListener('click', function() {
    modal.style.display = 'block';
});


// Adding a listener to the close button so that when it is clicked the carousel is closed
closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Adds a listener that closes the carousel if a user clicks outside of the carousel window 
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
