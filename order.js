function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Get the "Add to Basket" buttons
const addToBasketButtons = document.querySelectorAll('.add-to-basket');

// Get the item count element
const itemCountElement = document.getElementById('item-count');

// Initialize item count
let itemCount = 0;

// Add event listeners to each "Add to Basket" button
addToBasketButtons.forEach(button => {
    button.addEventListener('click', () => {
        itemCount++; // Increment item count
        itemCountElement.textContent = itemCount; // Update the displayed count
    });
});
