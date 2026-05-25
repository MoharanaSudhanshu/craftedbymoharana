// 1. Get the language preference
const lang = localStorage.getItem('moharanaLang') || 'en';

// 2. Get the Order ID we just saved (or use a default if missing)
const orderId = localStorage.getItem('lastOrderId') || "#CBM-ERROR";

// 3. Show the correct language section
if (lang === 'or') {
    document.getElementById('content-en').style.display = 'none';
    document.getElementById('content-or').style.display = 'block';
}

// 4. Inject the Real Order ID into the spans
// This finds all elements with class "order-id" and updates their text
document.querySelectorAll('.order-id').forEach(span => {
    span.innerText = orderId;
});