let cartItems = [];
let total = 0;

function addToCart(itemName, price) {
    cartItems.push({ name: itemName, price: price });
    updateCart();
}

function updateCart() {
    let cartList = document.getElementById("cart-items");
    cartList.innerHTML = "";
    total = 0;

    cartItems.forEach(item => {
        let listItem = document.createElement("li");
        listItem.className = "list-group-item";
        listItem.innerText = `${item.name} - ₹${item.price}`;
        cartList.appendChild(listItem);
        total += item.price;
    });

    document.getElementById("cart-total").innerText = total;
}

function checkout() {
    alert(`Total Amount: ₹${total}`);
    cartItems = [];
    updateCart();
}