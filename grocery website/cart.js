// cart.js

// Example product data (you might fetch this data from an API or localStorage)
const product = {
    name: "watermelon",
    price: "$3.99",
    quantity: 1,
    image: "images/cart-img-1.png" // Assuming you have an image in your assets
};

// Function to load product into the cart container
function loadCart() {
    const cartContainer = document.getElementById("cart-container");

    // Create product elements
    const productElement = document.createElement("div");
    productElement.className = "product";

    const productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.alt = product.name;

    const productName = document.createElement("h2");
    productName.textContent = product.name;

    const productPrice = document.createElement("p");
    productPrice.textContent = `Price: ${product.price}`;

    const productQuantity = document.createElement("p");
    productQuantity.textContent = `Quantity: ${product.quantity}`;

    // Append elements to the product container
    productElement.appendChild(productImage);
    productElement.appendChild(productName);
    productElement.appendChild(productPrice);
    productElement.appendChild(productQuantity);

    // Append product to the cart container
    cartContainer.appendChild(productElement);
}

// Call the function to load the product into the cart
loadCart();
