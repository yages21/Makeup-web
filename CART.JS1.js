// Render wishlist items
window.addEventListener('DOMContentLoaded', () => {
  const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  const container = document.getElementById('wishlist-container');

  if (wishlist.length === 0) {
    container.innerHTML = '<p>Your wishlist is empty.</p>';
  } else {
    wishlist.forEach((item, index) => {
      const card = document.createElement('div');
      card.className = 'wishlist-card';

      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>${item.price}</p>
        <button onclick="moveToCart(${index})">Move to Cart</button>
      `;

      container.appendChild(card);
    });
  }
});

// Move item to cart
function moveToCart(index) {
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Add to cart
  cart.push(wishlist[index]);
  localStorage.setItem('cart', JSON.stringify(cart));

  // Remove from wishlist
  wishlist.splice(index, 1);
  localStorage.setItem('wishlist', JSON.stringify(wishlist));

  location.reload(); // Refresh to update view
}