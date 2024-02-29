function showMessage(event) {
    // Get the clicked element
    const clickedElement = event.target;

    // Get the index of the clicked element
    const stars = document.querySelectorAll('.rating > span');
    const selectedIndex = Array.from(stars).indexOf(clickedElement);

    // Display an alert message
    alert('thank you for rating');
}