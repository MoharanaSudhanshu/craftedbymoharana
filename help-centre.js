const faqs = [
    {
        q: "How long does delivery take?",
        a: "Usually 5–10 business days across India."
    },
    {
        q: "Do you accept returns?",
        a: "Yes, within 7 days if damaged during shipping."
    },
    {
        q: "Can I order a custom idol?",
        a: "Yes, custom handcrafted orders are accepted."
    },
    {
        q: "Do you ship internationally?",
        a: "Yes, international shipping is available on request."
    }
];

const faqBox = document.getElementById("faqBox");

faqs.forEach(faq => {
    const div = document.createElement("div");
    div.className = "faq-card";

    div.innerHTML = `
        <h4>${faq.q}</h4>
        <p>${faq.a}</p>
    `;

    div.onclick = () => {
        div.classList.toggle("active");
    };

    faqBox.appendChild(div);
});

let currentLang = "en";

const textData = {
    en: {
        title: "Help Centre",
        c1: "📦 Orders & Shipping",
        c2: "💳 Payments",
        c3: "🔁 Returns & Refunds",
        c4: "🛠 Custom Orders"
    },
    or: {
        title: "ସାହାଯ୍ୟ କେନ୍ଦ୍ର",
        c1: "📦 ଅର୍ଡର ଏବଂ ପଠାନ୍ତୁ",
        c2: "💳 ଦେୟ ପ୍ରଣାଳୀ",
        c3: "🔁 ଫେରତ ଏବଂ ଟଙ୍କା ଫେରତ",
        c4: "🛠 ବିଶେଷ ଅର୍ଡର"
    }
};

function toggleLang() {
    currentLang = currentLang === "en" ? "or" : "en";
    const t = textData[currentLang];

    document.getElementById("title").innerText = t.title;
    document.getElementById("c1").innerText = t.c1;
    document.getElementById("c2").innerText = t.c2;
    document.getElementById("c3").innerText = t.c3;
    document.getElementById("c4").innerText = t.c4;

    document.body.classList.toggle("odia", currentLang === "or");
}

function submitTicket() {
    const name = document.getElementById("tName").value;
    const email = document.getElementById("tEmail").value;
    const msg = document.getElementById("tMsg").value;

    if (!name || !email || !msg) {
        alert("Please fill all fields");
        return;
    }

    alert("Support Ticket Submitted!\nWe will contact you soon.");

    document.getElementById("tName").value = "";
    document.getElementById("tEmail").value = "";
    document.getElementById("tMsg").value = "";
}