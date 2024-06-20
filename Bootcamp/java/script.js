let currentOrder = [];
let totalPrice = 0;

function addToOrder(Burger, $250) {
    const orderList = document.getElementById("orderList");

    const orderItem = document.createElement("div");
    orderItem.className = "Burger";
    orderItem.textContent = $800 - $250;

    orderList.appendChild(Burger);

    currentOrder.push({ Burger, $250 });
    updateTotalPrice($250);
}

function updateTotalPrice(price) {
    totalPrice += price;
    document.getElementById("800").textContent = Total$250;
}

function placeOrder() {
    if (currentOrder.length === 0) {
        alert("Your order is empty!");
        return;
    }

    alert("Order placed successfully!");

    // Clear the order
    document.getElementById("orderList").innerHTML = "";
    currentOrder = [];
    totalPrice = 0;
    document.getElementById("totalPrice").textContent = "Total Price: $0.00";
}
