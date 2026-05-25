const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyS-cXesrNfYK2GkmxH1iBclmQdfcUUCAVaN60Hn2K7fjvcpnPXSAAt91kxCVmMfcC-/exec";

// Translation Data
const translations = {
    en: {
        title: "Track Your Order",
        desc: "Enter your Order ID to check the current shipping status.",
        placeholder: "Enter Order ID",
        btn: "Track Order",
        statusTitle: "Order Status for: ",
        notFound: "Order ID not found. Please check and try again.",
        error: "Connection failed. Please try again.",
        steps: [
            "Order Confirmed",
            "Crafting in Progress",
            "Shipped",
            "Out for Delivery",
            "Delivered"
        ],
        footer: "© 2026 CraftedByMoharana · Handcrafted with Devotion"
    },

    or: {
        title: "ଅର୍ଡର ଟ୍ରାକ୍ କରନ୍ତୁ",
        desc: "ଆପଣଙ୍କ ଅର୍ଡରର ସ୍ଥିତି ଜାଣିବା ପାଇଁ ଅର୍ଡର ID ଦିଅନ୍ତୁ |",
        placeholder: "ଅର୍ଡର ID ଲେଖନ୍ତୁ",
        btn: "ଟ୍ରାକ୍ କରନ୍ତୁ",
        statusTitle: "ଅର୍ଡର ସ୍ଥିତି: ",
        notFound: "ଅର୍ଡର ID ମିଳିଲା ନାହିଁ | ଦୟାକରି ଯାଞ୍ଚ କରନ୍ତୁ |",
        error: "ସଂଯୋଗ ବିଫଳ ହେଲା | ଦୟାକରି ପୁନର୍ବାର ଚେଷ୍ଟା କରନ୍ତୁ |",
        steps: [
            "ଅର୍ଡର ନିଶ୍ଚିତ ହେଲା",
            "ନିର୍ମାଣ ଚାଲିଛି",
            "ପଠାଗଲା (Shipped)",
            "ବିତରଣ ପାଇଁ ବାହାରିଛି",
            "ହସ୍ତାନ୍ତର ହେଲା (Delivered)"
        ],
        footer: "© 2026 CraftedByMoharana · ଭକ୍ତିର ସହ ହସ୍ତନିର୍ମିତ"
    }
};

let currentLang = 'en';

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'or' : 'en';
    const data = translations[currentLang];

    // Helper to set text
    const setText = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.innerText = text;
    };

    // Add/Remove Odia Font Class
    if (currentLang === 'or')
        document.body.classList.add('odia-text');
    else
        document.body.classList.remove('odia-text');

    // Apply Translations
    setText('hero-title', data.title);
    setText('track-desc', data.desc);
    setText('track-btn', data.btn);
    setText('status-title', data.statusTitle);
    setText('footer-text', data.footer);

    document.getElementById('orderId').placeholder = data.placeholder;

    // Update step labels
    for (let i = 0; i < 5; i++) {
        setText('step-' + (i + 1), data.steps[i]);
    }
}

function trackOrder() {
    const id = document.getElementById('orderId').value.trim();
    const data = translations[currentLang];
    const btn = document.getElementById('track-btn');
    const statusBox = document.getElementById('statusBox');

    if (!id) {
        alert(
            currentLang === 'en'
                ? 'Please enter a valid Order ID'
                : 'ଦୟାକରି ଏକ ସଠିକ୍ ଅର୍ଡର ID ଦିଅନ୍ତୁ'
        );
        return;
    }

    // UI: Show loading
    btn.innerText = "Checking...";
    btn.disabled = true;

    // FETCH DATA FROM GOOGLE SHEET
    fetch(SCRIPT_URL + "?orderId=" + encodeURIComponent(id))
        .then(response => response.json())
        .then(result => {
            // Reset button
            btn.innerText = data.btn;
            btn.disabled = false;

            if (result.status === "found") {
                statusBox.style.display = 'block';

                // Show Customer Name
                document.getElementById('status-title').innerText =
                    data.statusTitle + result.customerName;

                // Update Progress Bar visuals
                updateProgressBar(result.currentStage);
            } else {
                statusBox.style.display = 'none';
                alert(data.notFound);
            }
        })
        .catch(error => {
            console.error('Error:', error);

            btn.innerText = data.btn;
            btn.disabled = false;

            alert(data.error);
        });
}

function updateProgressBar(statusFromSheet) {
    // Map Google Sheet status to step number
    const statusMap = {
        "pending": 0,
        "confirmed": 0,
        "crafting": 1,
        "shipped": 2,
        "out for delivery": 3,
        "delivered": 4
    };

    let statusKey = (statusFromSheet || "").toLowerCase();
    let activeIndex =
        statusMap[statusKey] !== undefined ? statusMap[statusKey] : 0;

    const steps = document.querySelectorAll('.status-step');

    steps.forEach((step, index) => {
        // Reset classes
        step.classList.remove('active', 'completed');

        if (index < activeIndex) {
            // Completed steps
            step.classList.add('completed');
        } else if (index === activeIndex) {
            // Current step
            step.classList.add('active');
        }
        // Future steps remain grey
    });
}