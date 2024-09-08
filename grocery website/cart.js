// Sample products added to cart for demonstration purposes
const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

function loadCart() {
    const cartContainer = document.getElementById('cart-container');
    const cartTotal = document.getElementById('cart-total');
    let total = 0;
    
    cartContainer.innerHTML = '';
    if (cartItems.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cartItems.forEach((item, index) => {
            total += item.price * item.quantity;
            cartContainer.innerHTML += `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}">
                    <h3>${item.name}</h3>
                    <p>${item.quantity} x $${item.price}</p>
                </div>
            `;
        });
    }
    cartTotal.textContent = total.toFixed(2);
}

// Event listener for checkout button
document.getElementById('checkout-btn').addEventListener('click', () => {
    window.location.href = 'checkout.html';
});

loadCart();
