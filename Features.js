let totalPrice = 0;
let cartItems = [];

function addToCart(itemName, price) {
  totalPrice += price;
  document.getElementById('total').textContent = totalPrice;
  cartItems.push({ name: itemName, price: price });
  updateReceipt();
}

function updateReceipt() {
  const receiptElement = document.getElementById('receipt');
  receiptElement.innerHTML = '';
  cartItems.forEach((item) => {
    const itemElement = document.createElement('p');
    itemElement.textContent = `${item.name} ${item.price}$`;
    receiptElement.appendChild(itemElement);
  });
}
