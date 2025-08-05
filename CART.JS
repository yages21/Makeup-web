document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".add-to-wishlist");
  const toast = document.getElementById("toast");

  buttons.forEach(button => {
    button.addEventListener("click", function () {
      const productName = button.getAttribute("data-product");
      toast.textContent = `${productName} was successfully added to wishlist!`;
      toast.classList.add("show");

      // Hide after 5 seconds
      setTimeout(() => {
        toast.classList.remove("show");
      }, 3000);
    });
  });
});document.querySelectorAll('.add-to-wishlist').forEach(button => {
  button.addEventListener('click', () => {
    const name = button.getAttribute('data-product');
    const image = button.getAttribute('data-image');
    const price = button.getAttribute('data-price');

    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    if (!wishlist.some(item => item.name === name)) {
      wishlist.push({ name, image, price });
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }

    alert(`${name} added to wishlist!`);
  });
});