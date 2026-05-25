const products = [
    // --- SACRED IDOLS (NEEM WOOD) ---
    { 
        id: "1", 
        name: {en: "Neem Wood Jagannath", or: "ନିମ୍ବ କାଠ ଜଗନ୍ନାଥ"}, 
        description: {en: "Hand-carved from sacred Neem wood (6 inch).", or: "ପବିତ୍ର ନିମ୍ବ କାଠରୁ ଖୋଦିତ (୬ ଇଞ୍ଚ) |"}, 
        price: 4500, 
        img: "https://placehold.co/400x400/8B4513/ffffff?text=Jagannath" 
    },
    { 
        id: "2", 
        name: {en: "Lord Balabhadra Idol", or: "ବଳଭଦ୍ର ମୂର୍ତ୍ତି"}, 
        description: {en: "Hand-carved Neem wood idol.", or: "ହାତ ତିଆରି ନିମ୍ବ କାଠ ମୂର୍ତ୍ତି |"}, 
        price: 4200, 
        img: "https://placehold.co/400x400/white/black?text=Balabhadra" 
    },
    { 
        id: "3", 
        name: {en: "Maa Subhadra Idol", or: "ମା ସୁଭଦ୍ରା ମୂର୍ତ୍ତି"}, 
        description: {en: "Sacred Neem wood carving.", or: "ପବିତ୍ର ନିମ୍ବ କାଠର ମୂର୍ତ୍ତି |"}, 
        price: 3800, 
        img: "https://placehold.co/400x400/yellow/black?text=Subhadra" 
    },
    { 
        id: "4", 
        name: {en: "Lord Sudarshan", or: "ପ୍ରଭୁ ସୁଦର୍ଶନ"}, 
        description: {en: "The divine pillar weapon.", or: "ପବିତ୍ର ସୁଦର୍ଶନ କାଠ ମୂର୍ତ୍ତି |"}, 
        price: 1500, 
        img: "https://placehold.co/400x400/red/white?text=Sudarshan" 
    },
    { 
        id: "5", 
        name: {en: "Chaturdha Murti Set", or: "ଚତୁର୍ଦ୍ଧା ମୂର୍ତ୍ତି ସେଟ୍"}, 
        description: {en: "Complete set of 4 deities (12 inch).", or: "ଚାରି ଠାକୁରଙ୍କ ସମ୍ପୂର୍ଣ୍ଣ ସେଟ୍ (୧୨ ଇଞ୍ଚ) |"}, 
        price: 15000, 
        img: "https://placehold.co/400x400/3e2723/ffffff?text=Full+Set" 
    },

    // --- RATH YATRA SPECIALS ---
    { 
        id: "6", 
        name: {en: "Rath Wheel Replica", or: "ରଥ ଚକ ପ୍ରତିକୃତି"}, 
        description: {en: "Miniature Nandighosa Rath wheel.", or: "ନନ୍ଦିଘୋଷ ରଥ ଚକର କ୍ଷୁଦ୍ର ପ୍ରତିକୃତି |"}, 
        price: 2200, 
        img: "https://placehold.co/400x400/5d4037/ffffff?text=Rath+Wheel" 
    },
    { 
        id: "7", 
        name: {en: "Miniature Nandighosa Rath", or: "ନନ୍ଦିଘୋଷ ରଥ (କ୍ଷୁଦ୍ର)"}, 
        description: {en: "Detailed wooden model of Jagannath's chariot.", or: "ମହାପ୍ରଭୁଙ୍କ ରଥର କାଠ ପ୍ରତିକୃତି |"}, 
        price: 8500, 
        img: "https://placehold.co/400x400/d32f2f/white?text=Jagannath+Rath" 
    },
    { 
        id: "8", 
        name: {en: "Taladhwaja Rath", or: "ତାଳଧ୍ୱଜ ରଥ"}, 
        description: {en: "Wooden model of Lord Balabhadra's chariot.", or: "ବଳଭଦ୍ରଙ୍କ ରଥର ପ୍ରତିକୃତି |"}, 
        price: 8200, 
        img: "https://placehold.co/400x400/388e3c/white?text=Taladhwaja" 
    },
    { 
        id: "9", 
        name: {en: "Darpadalana Rath", or: "ଦର୍ପଦଳନ ରଥ"}, 
        description: {en: "Wooden model of Maa Subhadra's chariot.", or: "ମା ସୁଭଦ୍ରାଙ୍କ ରଥର ପ୍ରତିକୃତି |"}, 
        price: 8000, 
        img: "https://placehold.co/400x400/000000/white?text=Darpadalana" 
    },

    // --- TEMPLE & SPIRITUAL ---
    { 
        id: "10", 
        name: {en: "Wooden Singhasan", or: "କାଠ ସିଂହାସନ"}, 
        description: {en: "Carved throne for home deities.", or: "ଠାକୁରଙ୍କ ପାଇଁ କାରୁକାର୍ଯ୍ୟ ସିଂହାସନ |"}, 
        price: 3500, 
        img: "https://placehold.co/400x400/ffd700/black?text=Singhasan" 
    },
    { 
        id: "11", 
        name: {en: "Wooden Temple (Mandir)", or: "କାଠ ମନ୍ଦିର"}, 
        description: {en: "Small handcrafted temple for home.", or: "ଘର ପାଇଁ ଛୋଟ କାଠ ମନ୍ଦିର |"}, 
        price: 6500, 
        img: "https://placehold.co/400x400/8d6e63/white?text=Temple" 
    },
    { 
        id: "12", 
        name: {en: "Holy Book Stand (Rehal)", or: "ଗ୍ରନ୍ଥ ଷ୍ଟାଣ୍ଡ (ରେହଲ)"}, 
        description: {en: "Foldable wooden stand for Gita/Bhagavat.", or: "ଗୀତା/ଭାଗବତ ପଢିବା ପାଇଁ ଷ୍ଟାଣ୍ଡ |"}, 
        price: 850, 
        img: "https://placehold.co/400x400/a1887f/black?text=Book+Stand" 
    },
    { 
        id: "13", 
        name: {en: "Wooden Khadu (Paduka)", or: "କାଠ ଖଡୁ"}, 
        description: {en: "Traditional wooden slippers for saints.", or: "ସାଧୁ ସନ୍ଥଙ୍କ ପାଇଁ କାଠ ଚପଲ |"}, 
        price: 600, 
        img: "https://placehold.co/400x400/6d4c41/white?text=Paduka" 
    },
        // --- WALL DECOR & ART ---
    { 
        id: "14", 
        name: {en: "Carved Door Panel", or: "କାଠ ଖୋଦେଇ କବାଟ"}, 
        description: {en: "Floral motifs inspired by Temple.", or: "ମନ୍ଦିର କାରୁକାର୍ଯ୍ୟ କବାଟ |"}, 
        price: 8000, 
        img: "https://placehold.co/400x400/F2CC8F/3D405B?text=Door+Panel" 
    },
    { 
        id: "15", 
        name: {en: "Dasavatar Wall Panel", or: "ଦଶାବତାର ପ୍ୟାନେଲ୍"}, 
        description: {en: "Ten incarnations of Vishnu carved in wood.", or: "କାଠରେ ଖୋଦିତ ଦଶାବତାର |"}, 
        price: 12000, 
        img: "https://placehold.co/400x400/5d4037/white?text=Dasavatar" 
    },
    { 
        id: "16", 
        name: {en: "Hanuman Mask", or: "ହନୁମାନ ମୁଖା"}, 
        description: {en: "Vibrant painted wooden mask.", or: "ରଙ୍ଗୀନ କାଠ ମୁଖା |"}, 
        price: 1500, 
        img: "https://placehold.co/400x400/ff5722/white?text=Hanuman+Mask" 
    },
    { 
        id: "17", 
        name: {en: "Konark Wheel (Wooden)", or: "କାଠ କୋଣାର୍କ ଚକ"}, 
        description: {en: "Intricate wooden carving of Sun Temple wheel.", or: "କାଠରେ ତିଆରି କୋଣାର୍କ ଚକ |"}, 
        price: 4800, 
        img: "https://placehold.co/400x400/4e342e/white?text=Konark+Wheel" 
    },

    // --- TRADITIONAL TOYS & UTILITY ---
    { 
        id: "18", 
        name: {en: "Painted Elephant Pair", or: "ରଙ୍ଗୀନ ହାତୀ ଯୋଡା"}, 
        description: {en: "Set of 2 decorated wooden elephants.", or: "ଦୁଇଟି ସଜ୍ଜିତ କାଠ ହାତୀ |"}, 
        price: 1200, 
        img: "https://placehold.co/400x400/e65100/white?text=Elephants" 
    },
    { 
        id: "19", 
        name: {en: "Traditional Horse Toy", or: "କାଠ ଘୋଡା"}, 
        description: {en: "Hand-painted folk toy.", or: "ହାତ ତିଆରି କାଠ ଘୋଡା ଖେଳନା |"}, 
        price: 900, 
        img: "https://placehold.co/400x400/1a237e/white?text=Horse+Toy" 
    },
    { 
        id: "20", 
        name: {en: "Pattachitra Jewellery Box", or: "ଅଳଙ୍କାର ବାକ୍ସ"}, 
        description: {en: "Wooden box with traditional art.", or: "ପଟ୍ଟଚିତ୍ର କାମ ଥିବା କାଠ ବାକ୍ସ |"}, 
        price: 1200, 
        img: "https://placehold.co/400x400/c62828/white?text=Jewellery+Box" 
    },
    { 
        id: "21", 
        name: {en: "Wooden Coaster Set", or: "କାଠ କୋଷ୍ଟର ସେଟ୍"}, 
        description: {en: "Set of 6 painted tea coasters.", or: "୬ଟି ରଙ୍ଗୀନ ଚା କୋଷ୍ଟର |"}, 
        price: 550, 
        img: "https://placehold.co/400x400/795548/white?text=Coasters" 
    },
    { 
        id: "22", 
        name: {en: "Decorative Tray", or: "ସାଜସଜ୍ଜା ଟ୍ରେ"}, 
        description: {en: "Hand-painted wooden serving tray.", or: "ହାତ ତିଆରି କାଠ ଟ୍ରେ |"}, 
        price: 1100, 
        img: "https://placehold.co/400x400/4a148c/white?text=Tray" 
    },
    { 
        id: "23", 
        name: {en: "Wooden Pen Stand", or: "କଲମ ଷ୍ଟାଣ୍ଡ"}, 
        description: {en: "Office desk organizer with art.", or: "କାର୍ଯ୍ୟାଳୟ ପାଇଁ କଲମ ଦାନୀ |"}, 
        price: 450, 
        img: "https://placehold.co/400x400/004d40/white?text=Pen+Stand" 
    },
    { 
        id: "24", 
        name: {en: "Key Holder (Wall)", or: "ଚାବି ଷ୍ଟାଣ୍ଡ"}, 
        description: {en: "Wall-mounted wooden key hanger.", or: "କାନ୍ଥରେ ଟଙ୍ଗାଯିବା ଚାବି ଷ୍ଟାଣ୍ଡ |"}, 
        price: 650, 
        img: "https://placehold.co/400x400/3e2723/white?text=Key+Holder" 
    },
    { 
        id: "25", 
        name: {en: "Wooden Tissue Box", or: "ଟିସୁ ବାକ୍ସ"}, 
        description: {en: "Carved wooden tissue dispenser.", or: "କାରୁକାର୍ଯ୍ୟ ଥିବା ଟିସୁ ବାକ୍ସ |"}, 
        price: 950, 
        img: "https://placehold.co/400x400/5d4037/white?text=Tissue+Box" 
    }
];

const staticContent = { /* same as original */ };

let cart = [];
let currentLang = 'en';
let itemsToShow = 8;

function renderProducts() {
    const container = document.getElementById('product-container');
    const loadMoreContainer = document.getElementById('load-more-container') || document.createElement('div');
    loadMoreContainer.id = 'load-more-container';
    loadMoreContainer.className = 'load-more-container';

    const visibleProducts = products.slice(0, itemsToShow);

    container.innerHTML = visibleProducts.map(p => `
        <div class="product-card">
            <img src="${p.img}" class="product-img">
            <div class="product-info">
                <h3 class="${currentLang==='or'?'odia-text':''}">${p.name[currentLang]}</h3>
                <p class="p-desc ${currentLang==='or'?'odia-text':''}">${p.description[currentLang]}</p>
                <div class="price-row">
                    <span class="price">₹${p.price}</span>
                    <button class="btn-sm" onclick="addToCart('${p.id}')">${currentLang==='en'?'Add to Cart':'କିଣନ୍ତୁ'}</button>
                </div>
            </div>
        </div>
    `).join('');

    if (itemsToShow < products.length) {
        loadMoreContainer.innerHTML = `
            <button class="btn-more" onclick="showMore()">
                ${currentLang === 'en' ? 'Show More' : 'ଅଧିକ ଦେଖନ୍ତୁ'}
            </button>
        `;
        container.after(loadMoreContainer);
    } else {
        loadMoreContainer.remove();
    }
}

function showMore() {
    itemsToShow += 4;
    renderProducts();
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCartUI();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function updateCartUI() {
    document.getElementById('cartCount').innerText = cart.length;
    const container = document.getElementById('cartItemsContainer');
    const totalEl = document.getElementById('cartTotal');

    let total = 0;

    if(cart.length === 0) {
        container.innerHTML = '<p style="text-align:center; color:#888; margin-top:20px;">' + 
            (currentLang==='en' ? 'Cart is empty' : 'ଝୁଡି ଖାଲି ଅଛି') + '</p>';
    } else {
        container.innerHTML = cart.map((item, index) => {
            total += item.price;
            return `
            <div class="cart-item">
                <img src="${item.img}" alt="item">
                <div class="item-details" style="flex-grow:1;">
                    <h4 class="${currentLang==='or'?'odia-text':''}">${item.name[currentLang]}</h4>
                    <p>₹${item.price}</p>
                </div>
                <button onclick="removeFromCart(${index})" style="background:none; border:none; color:red; cursor:pointer;">🗑️</button>
            </div>`;
        }).join('');
    }

    totalEl.innerText = '₹' + total;
}

function openCart() {
    document.getElementById('cartModal').style.display = 'flex';
}

function closeCart() {
    document.getElementById('cartModal').style.display = 'none';
}

function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('active');
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'or' : 'en';
    const data = staticContent[currentLang];
    const body = document.body;

    if (currentLang === 'or') body.classList.add('odia-text');
    else body.classList.remove('odia-text');

    const setText = (id, text) => {
        const el = document.getElementById(id);
        if(el) el.innerText = text;
    };

    setText('nav-about', data.navAbout);
    setText('nav-shop', data.navShop);
    setText('nav-track', data.navTrack);
    setText('nav-help', data.navHelp);
    setText('nav-contact', data.navContact);

    setText('hero-title', data.heroTitle);
    setText('hero-subtitle', data.heroSubtitle);
    setText('hero-btn', data.heroBtn);
    setText('about-title', data.aboutTitle);
    setText('about-text-1', data.aboutText1);
    setText('about-text-2', data.aboutText2);
    setText('shop-title', data.shopTitle);
    setText('footer-desc', data.footerDesc);
    setText('footer-links', data.footerLinks);
    setText('footer-contact', data.footerContact);

    renderProducts();
    updateCartUI();
}

function proceedToCheckout() {
    if (cart.length === 0) {
        alert("Cart is empty!");
        return;
    }

    localStorage.setItem('moharanaCart', JSON.stringify(cart));
    localStorage.setItem('moharanaLang', currentLang);
    window.location.href = 'checkout.html';
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});