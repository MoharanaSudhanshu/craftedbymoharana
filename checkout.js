// ⚠️ MAKE SURE THIS IS YOUR LATEST GOOGLE SCRIPT URL
const scriptURL = 'https://script.google.com/macros/s/AKfycbyS-cXesrNfYK2GkmxH1iBclmQdfcUUCAVaN60Hn2K7fjvcpnPXSAAt91kxCVmMfcC-/exec';

const cart = JSON.parse(localStorage.getItem('moharanaCart')) || [];
const lang = localStorage.getItem('moharanaLang') || 'en';
const orderContainer = document.getElementById('orderItems');
let total = 0;

// Display cart items
if (cart.length === 0) {
    orderContainer.innerHTML = "<p>Your cart is empty.</p>";
} else {
    cart.forEach(item => {
        total += item.price;

        const name = item.name[lang] || item.name['en'];

        const div = document.createElement('div');
        div.className = 'order-item';
        div.innerHTML = `<span>${name}</span><span>₹${item.price}</span>`;

        orderContainer.appendChild(div);
    });

    document.getElementById('grandTotal').innerText = '₹' + total;
}

function handleOrder(e) {
    e.preventDefault();

    const submitBtn = document.querySelector('.place-order-btn');

    if (cart.length === 0) {
        alert("Cart is empty");
        return;
    }

    if (confirm("Confirm your order for ₹" + total + "?")) {

        submitBtn.innerText = "Processing...";
        submitBtn.disabled = true;

        const orderData = {
            'Date': new Date().toString(),
            'Order ID': 'ORD-' + Math.floor(Math.random() * 10000),
            'Customer Name': document.getElementById('custName').value,
            'Phone': document.getElementById('custPhone').value,
            'Address': document.getElementById('custAddress').value,
            'Total Amount': total,
            'items': cart.map(item => ({
                name: item.name['en'],
                price: item.price
            }))
        };

        fetch(scriptURL, {
            method: 'POST',
            body: JSON.stringify(orderData),
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(() => {
            // 1. Save the generated Order ID
            localStorage.setItem('lastOrderId', orderData['Order ID']);

            // 2. Clear the cart
            localStorage.removeItem('moharanaCart');

            // 3. Go to Thank You page
            window.location.href = 'thankyou.html';
        })
        .catch(error => {
            console.error('Error!', error.message);

            alert("Error! Please try again.");

            submitBtn.innerText = "Confirm Order (COD)";
            submitBtn.disabled = false;
        });
    }
}