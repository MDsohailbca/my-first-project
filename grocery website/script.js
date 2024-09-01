let searchForm= document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>
{
    searchForm.classList.toggle('active');
}

let loginForm= document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>
{
    loginForm.classList.toggle('active');
}

// Array to hold cart items
let cart = [];

// Function to handle Add to Cart
function addToCart(productName, productPrice) {
    // Create a product object
    const product = {
        name: productName,
        price: productPrice,
        quantity: 1
    };

    // Check if product already exists in the cart
    const existingProduct = cart.find(item => item.name === productName);

    if (existingProduct) {
        // If the product already exists, increase the quantity
        existingProduct.quantity++;
    } else {
        // If not, add the new product to the cart
        cart.push(product);
    }

    // Save the cart to local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Redirect to the cart page
    window.location.href = 'cart.html';
}

// Event listener for the Add to Cart button
document.querySelector('button').addEventListener('click', function() {
    addToCart('Organic Watermelon', 1.99);
});


// Load the cart from local storage
let carts = JSON.parse(localStorage.getItem('cart')) || [];

// Function to display the cart contents
function displayCart() {
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = '';

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <p>${item.name} - $${item.price} x ${item.quantity}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartContainer.appendChild(cartItem);
    });

    // Display total price
    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const totalDisplay = document.createElement('p');
    totalDisplay.className = 'cart-total';
    totalDisplay.innerHTML = `Total: $${totalPrice.toFixed(2)}`;
    cartContainer.appendChild(totalDisplay);
}

// Function to remove an item from the cart
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
}

// Display the cart when the page loads
window.onload = displayCart;


