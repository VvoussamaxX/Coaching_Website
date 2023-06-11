/*let totalPrice = 0;
let cartItems = [];

function addToCart(itemName, price) {
  cartItems.push({ name: itemName, price: price });
  totalPrice += price;
  document.getElementById('total').textContent = totalPrice;
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

  const cartMessage = document.getElementById('cart-message');
  if (cartItems.length > 0) {
    cartMessage.style.display = 'none';
  } else {
    cartMessage.style.display = 'block';
  }
}

function buyProgram(itemName, price) {
  addToCart(itemName, price);
}
*/

