


//    <div class="cart-item">
//                 <img src="images/product1.jpg" alt="Product Image">
//                 <div class="item-details">
//                     <h3>Product Name</h3>
//                     <p>Price: $XX.XX</p>
//                     <p>Quantity: 1</p>
//                     <button class="remove-item">Remove</button>
//                 </div>
//             </div>

document.addEventListener("DOMContentLoaded", () => {
    const cartItemsContainer = document.querySelector(".cart-items");
    
    // Load cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    
    // Display cart items
    cartItems.forEach(item => {
        const cartItemElement = document.createElement("div");
        cartItemElement.className = "cart-item";
        
        const itemImage = document.createElement("img");
        itemImage.src = item.image;
        itemImage.alt = item.title;
        
        const itemDetails = document.createElement("div");
        itemDetails.className = "item-details";
        
        const itemTitle = document.createElement("h3");
        itemTitle.textContent = item.title;
        
        const itemPrice = document.createElement("p");
        itemPrice.textContent = `Price: $${item.price.toFixed(2)}`;

        const itemQuantity = document.createElement("p");
        itemQuantity.textContent = `Quantity: ${item.quantity}`;
        
        const removeButton = document.createElement("button");
        removeButton.className = "remove-item";
        removeButton.textContent = "Remove";
        
        removeButton.addEventListener("click", () => {
            removeCartItem(item.title);
            cartItemElement.remove();
        });
        
        itemDetails.appendChild(itemTitle);
        itemDetails.appendChild(itemPrice);
        itemDetails.appendChild(itemQuantity);
        itemDetails.appendChild(removeButton);
        
        cartItemElement.appendChild(itemImage);
        cartItemElement.appendChild(itemDetails);
        
        cartItemsContainer.appendChild(cartItemElement);
    });

    updateCartCount(); // Update cart count on page load
});





function removeCartItem(title) {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems = cartItems.filter(item => item.title !== title);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    updateCartCount();
}
function updateCartCount() {
   let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const cartCount = document.querySelector(".cart-count");
    cartCount.textContent = cartItems.length;
}
