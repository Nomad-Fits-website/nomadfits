document.addEventListener('DOMContentLoaded', () => {
    const productContent = document.getElementById('productContent');
    const productLoader = document.getElementById('productLoader');
    const mainProductImage = document.getElementById('mainProductImage');
    const productTitle = document.getElementById('productTitle');
    const productPrice = document.getElementById('productPrice');
    const productDescription = document.getElementById('productDescription');
    const productMaterial = document.getElementById('productMaterial');


    // Get the product ID from localStorage
    const selectedProductId = localStorage.getItem('selectedProductId');

    if (!selectedProductId) {
       
        productContent.innerHTML = '<p class="empty-cart-message">No product selected. Please go back to the products page.</p>';
        productLoader.style.display = 'none';
        productContent.style.display = 'block';
        return;
    }

    const API_PRODUCT_URL = `https://fakestoreapi.com/products//${selectedProductId}`;

 
    async function fetchProductDetails() {
        productLoader.style.display = 'block'; // Show loader
        productContent.style.display = 'none'; // Hide content

        try {
            const response = await axios.get(API_PRODUCT_URL);
            if (!response.data) {
                throw new Error('Product not found.');
            }
            displayProductDetails(response.data);
        } catch (error) {
            console.error('Error fetching product details:', error);
            productContent.innerHTML = '<p class="empty-cart-message">Failed to load product details. Please try again later.</p>';
            productContent.style.display = 'block';
        } finally {
            productLoader.style.display = 'none'; // Hide loader
        }
    }

    // Function to display product details
    function displayProductDetails(product) {
        productTitle.textContent = product.title;
        productPrice.textContent = `$${product.price.toFixed(2)}`;
        productDescription.textContent = product.description;
        mainProductImage.src = product.image || 'https://via.placeholder.com/600x600?text=Product+Image';
        productContent.style.display = 'flex'; 
    }

   
  function updateCartCount() {
   let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const cartCount = document.querySelector(".cart-count");
    cartCount.textContent = cartItems.length;
}


    fetchProductDetails();
    updateCartCount(); 
});



