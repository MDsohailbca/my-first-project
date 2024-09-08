document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Payment successful!');
    localStorage.removeItem('cart'); // Clear the cart after payment
    window.location.href = 'index.html';
});
