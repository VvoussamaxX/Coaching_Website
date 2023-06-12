  let totalPrice = 0;
  let cartItems = [];
  
  function addToCart(itemName, price) {
    cartItems.push({ name: itemName, price: price });
    totalPrice += price;
    document.getElementById('total').textContent = totalPrice;
    updateReceipt();
  }
  
  function cancelItem(index) {
    const canceledItem = cartItems.splice(index, 1)[0];
    totalPrice -= canceledItem.price;
    document.getElementById('total').textContent = totalPrice;
    updateReceipt();
  }
  
  function updateReceipt() {
    const receiptElement = document.getElementById('receipt');
    receiptElement.innerHTML = '';
  
    cartItems.forEach((item, index) => {
      const itemElement = document.createElement('div');
      itemElement.className = 'receipt-item';
  
      const textElement = document.createElement('p');
      textElement.textContent = `${item.name} ${item.price}$`;
  
      const cancelBtn = document.createElement('button');
      cancelBtn.textContent = 'Cancel';
      cancelBtn.className = 'btn btn-outline-dark';
      cancelBtn.style.marginLeft = '10px'; 
  
      cancelBtn.addEventListener('click', function () {
        cancelItem(index);
      });
  
      itemElement.appendChild(textElement);
      itemElement.appendChild(cancelBtn);
      receiptElement.appendChild(itemElement);
    });
  
    const cartMessage = document.getElementById('cart-message');
    if (cartItems.length > 0) {
      cartMessage.style.display = 'none';
    } else {
      cartMessage.style.display = 'block';
    }
  }
  
  
  
  
  
  
  function addToCartAndShowConfirmation() {
    const username = document.getElementById("theusername").value;
    const coach = document.getElementById("coach").value;
    const day = document.getElementById("day").value;
    const time = document.getElementById("time").value;
    const session = document.getElementById("session").value;
    const sessionPrice = 15; 
  
    if (!username) {
      const alertContainer = document.createElement("div");
      alertContainer.className = "alert alert-secondary";
      alertContainer.textContent = "Please enter a username.";
  
      const bookingSection = document.getElementById("booking");
      bookingSection.insertBefore(alertContainer, bookingSection.firstChild);
  
      setTimeout(() => {
        alertContainer.style.display = "none";
      }, 5000);
  
      return;
    }
  
    const confirmationMessage = `${username}, your session with Coach ${coach} is now booked for ${day} at ${time} for ${session}.`;
  
    document.getElementById("confirmation-message").textContent = confirmationMessage;
  
    document.getElementById("confirmation-section").style.display = "block";
  
    document.getElementById("booking").style.display = "none";
  
    addToCart(session, sessionPrice);
  }
  
  
  function addToCartProgram(program, price) {
    addToCart(program, price);
  }
  
  function goToBooking() {
    window.location.href = "#booking";
    document.getElementById("confirmation-section").style.display = "none";
    document.getElementById("booking").style.display = "block";
  }
  
  function goToCart() {
    window.location.href = "#PayNow";
    document.getElementById("confirmation-section").style.display = "none";
    document.getElementById("PayNow").style.display = "block";
    document.getElementById("booking").style.display = "block";
  }



  
