const products = [
    { id: 1, name: 'Organic Watermelon', price: 79, image: 'images/cart-img-1.png', quantity: 1 },
    { id: 2, name: 'Organic Mango', price: 140, image: 'images/product-15.jpg', quantity: 1 }
];

const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const product = products[index];
        const existingProductIndex = cart.findIndex(item => item.id === product.id);

        if (existingProductIndex >= 0) {
            cart[existingProductIndex].quantity += 1;
        } else {
            cart.push(product);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${product.name} has been added to your cart!`);
    });
});
