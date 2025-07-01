document.addEventListener("DOMContentLoaded", () => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const cartCount = document.getElementById("cartCount");
    cartCount.textContent = cartItems.length;
});