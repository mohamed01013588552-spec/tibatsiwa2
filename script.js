// بيانات منتجات طيبات سيوة (يمكنك تعديل الأسعار أو الصور بسهولة من هنا)
const productsData = [
  {
    id: 1,
    name: "زيت زيتون سوبر اكسترا صفيح بكر ممتاز (عصرة أولى)",
    category: "olive-oil",
    categoryLabel: "زيت الزيتون البكر",
    desc: "معصور على البارد من أجود ثمار الزيتون السيوي، حموضة منخفضة ونكهة غنية.تتراوح نسبة الحموضة فيه بين أقل من 0.5% إلى 0.8%، وهي تعتبر أعلى درجات الجودة والنقاء.",
    image: "صور/OIL.jpg",
    options: [
      { weight: "500 مل", price: 350 },
      { weight: "1 لتر", price: 675 }
    ]
  },
    {
    id: 2,
    name: "زيت زيتون زجاج داكن بكر ممتاز (عصرة أولى)",
    category: "olive-oil",
    categoryLabel: "زيت الزيتون البكر",
    desc: "معصور على البارد من أجود ثمار الزيتون السيوي، حموضة منخفضة ونكهة غنية.تتراوح نسبة الحموضة فيه بين أقل من 0.8% إلى 1%، وهي تعتبر أعلى درجات الجودة والنقاء.",
    image: "صور/crstal.jpeg",
    options: [
      { weight: "500 مل", price: 300 },
      { weight: "1 لتر", price: 575 }
    ]
  },
     {
    id: 3,
    name: "زيت زيتون جركن بكر  (عصرة ثانيه)",
    category: "olive-oil",
    categoryLabel: "زيت الزيتون البكر",
    desc: "معصور على البارد من أجود ثمار الزيتون السيوي، حموضة منخفضة ونكهة غنية.",
    image: "صور/oil 2 .jpeg",
    options: [
      { weight: "250 مل", price: 135 },
      { weight: "500 مل", price: 275 },
      { weight: "1 لتر", price: 500 }
    ]
  },
  {
    id: 4,
    name: "تمر مجدول سيوي ملكي (جامبو)",
    category: "dates",
    categoryLabel: "تمور سيوة الفاخرة",
    desc: "استمتع بطعم تمر المجدول السيوي سوبر جامبو، بحبات كبيرة الحجم وقوام طري وطعم حلو غني يميّزه عن الأنواع العادية",
  image: "صور/datemgdol.jpeg",
    options: [
      { weight: " جرام 500", price: 250 },
      { weight: " كيلو", price: 500 },
      { weight: "كرتونة 5 كيلو", price: 2300 }
    ]
  },
  {
    id: 5,
    name: "تمر صعيدي سيوي فاخر",
    category: "dates",
    categoryLabel: "تمور سيوة الفاخرة",
    desc: "التمور السيوية الأشهر، غنية بالطاقة والألياف ومناسبة للاستهلاك اليومي.",
    image: "صور/TAMR.jpeg",
    options: [
      { weight: "1 كيلو", price: 95 },
      { weight: "3 كيلو", price: 270 },
      { weight: "كرتونة 5 كيلو", price: 430 }
    ]
  },
  {
    id: 6,
    name: "تمر جامبو سيوي (بشائر)",
    category: "dates",
    categoryLabel: "تمور سيوة الفاخرة",
    desc: "تمر سيوي أصيل بمذاق متوازن السكر وقوام مثالي لمحبي التمور النصف جافة.",
    image: "صور/bshir.jpeg",
    options: [
      { weight: "1 كيلو", price: 110 },
      { weight: "2 كيلو", price: 215 }
    ]
  },
  {
    id: 7,
    name: "زيتون أخضر تفاحي سيوي مخلل ",
    category: "Xenon",
    categoryLabel: "زيتون سيوه المخلل",
    desc: "زيتون تفاحي وعزيزي سيوي مُعد بالطريقة التقليدية مع زيت الزيتون والليمون.",
    image: "صور/تفاحي سيوي مغلف.jpeg",
    options: [
      { weight: "برطمان 750 جم", price: 110 },
      { weight: "برطمان 1.5 كجم", price: 160 }
    ]
  },
  {
    id: 8,
    name: "زيتون كلامتا سيوي مخلل ",
    category: "olive",
    categoryLabel: "منتجات طبيعية",
    desc: "كلامتا سيوي مغلف  مُعد بالطريقة التقليدية مع زيت الزيتون والليمون",
    image: "صور/كلامتا سيوي مغلف.jpeg",
    options: [
     { weight: "برطمان 750 جم", price: 110 },
      { weight: "برطمان 1.5 كجم", price: 160 }
    ]
  },
    {
    id: 9,
    name: "مجموعة أرجان أويل الأصلية",
    category: "Skin and Hair Care",
    categoryLabel: "منتجات العناية بالبشرة والشعر",
    desc: "تركيبة فاخرة غنية بزيت الأرجان النقي، المعروف بخصائصه الفائقة في الترطيب، التنعيم، وحماية الشعر من العوامل الضارة. ",
    image: "صور/images.jpg",
    options: [
     { weight: "مجموعة", price: 750 },
    
    ]
  }
];

let cart = [];
let currentFilter = "all";
const WHATSAPP_NUMBER = "201505808824";

// عناصر DOM
const productsGrid = document.getElementById("productsGrid");
const filterTabs = document.getElementById("filterTabs");
const cartCount = document.getElementById("cartCount");
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");
const cartItemsContainer = document.getElementById("cartItemsContainer");
const cartTotal = document.getElementById("cartTotal");
const toast = document.getElementById("toast");

// عرض المنتجات في الشبكة
function renderProducts(filter = "all") {
  productsGrid.innerHTML = "";
  const filtered = filter === "all"
    ? productsData
    : productsData.filter(p => p.category === filter);

  filtered.forEach(product => {
    const card = document.createElement("article");
    card.className = "product-card reveal visible";
    card.dataset.selectedIndex = 0;

    const optionsHtml = product.options.map((opt, idx) => `
      <button type="button" class="weight-btn ${idx === 0 ? "active" : ""}" data-idx="${idx}">
        ${opt.weight}
      </button>
    `).join("");

    card.innerHTML = `
      <div class="card-img-wrap" data-img="${product.image}" data-title="${product.name}">
        <span class="category-pill">${product.categoryLabel}</span>
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
        <span class="zoom-hint"><i class="fa-solid fa-magnifying-glass-plus"></i></span>
      </div>
      <div class="card-body">
        <h3>${product.name}</h3>
        <p class="card-desc">${product.desc}</p>
        <div class="weight-selector">${optionsHtml}</div>
        <div class="card-footer">
          <span class="price-tag">${product.options[0].price} ج.م</span>
          <button type="button" class="add-btn">
            <i class="fa-solid fa-cart-plus"></i>
            <span>أضف للسلة</span>
          </button>
        </div>
      </div>
    `;

    // تبديل الوزن وتحديث السعر
    const weightBtns = card.querySelectorAll(".weight-btn");
    const priceTag = card.querySelector(".price-tag");
    weightBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        weightBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const idx = Number(btn.dataset.idx);
        card.dataset.selectedIndex = idx;
        priceTag.textContent = `${product.options[idx].price} ج.م`;
      });
    });

    // إضافة للسلة
    card.querySelector(".add-btn").addEventListener("click", () => {
      const idx = Number(card.dataset.selectedIndex);
      const selectedOption = product.options[idx];
      addToCart(product, selectedOption);
    });

    // تكبير الصورة (Lightbox)
    card.querySelector(".card-img-wrap").addEventListener("click", () => {
      openLightbox(product.image, product.name);
    });

    // تأثير 3D Tilt عند حركة الماوس
    card.addEventListener("mousemove", e => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(900px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg) translateY(-4px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(900px) rotateY(0) rotateX(0) translateY(0)";
    });

    productsGrid.appendChild(card);
  });
}

// فلترة الأقسام
filterTabs.addEventListener("click", e => {
  if (!e.target.classList.contains("tab-btn")) return;
  document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
  e.target.classList.add("active");
  currentFilter = e.target.dataset.filter;
  renderProducts(currentFilter);
});

// إدارة السلة
function addToCart(product, option) {
  const key = `${product.id}-${option.weight}`;
  const existing = cart.find(item => item.key === key);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      key,
      name: product.name,
      weight: option.weight,
      price: option.price,
      qty: 1
    });
  }
  updateCartUI();
  showToast(`تمت إضافة "${product.name} (${option.weight})" للسلة`);
}

function updateCartUI() {
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  cartCount.textContent = totalQty;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `<div class="empty-cart">السلة فارغة حالياً.. اختر منتجاتك من المنيو!</div>`;
    cartTotal.textContent = "0 ج.م";
    return;
  }

  let totalAmount = 0;
  cartItemsContainer.innerHTML = cart.map((item, index) => {
    totalAmount += item.price * item.qty;
    return `
      <div class="cart-item">
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <span>${item.weight} × ${item.price} ج.م</span>
        </div>
        <div class="qty-controls">
          <button class="qty-btn" onclick="changeQty(${index}, -1)">-</button>
          <strong>${item.qty}</strong>
          <button class="qty-btn" onclick="changeQty(${index}, 1)">+</button>
        </div>
      </div>
    `;
  }).join("");

  cartTotal.textContent = `${totalAmount} ج.م`;
}

window.changeQty = function(index, delta) {
  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  updateCartUI();
};

// فتح وإغلاق السلة
document.getElementById("openCartBtn").addEventListener("click", () => {
  cartDrawer.classList.add("open");
  cartOverlay.classList.add("open");
});

function closeCart() {
  cartDrawer.classList.remove("open");
  cartOverlay.classList.remove("open");
}

document.getElementById("closeCartBtn").addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

// إرسال الطلب عبر واتساب
document.getElementById("checkoutBtn").addEventListener("click", () => {
  if (cart.length === 0) {
    showToast("يرجى إضافة منتجات إلى السلة أولاً!");
    return;
  }

  const name = document.getElementById("customerName").value.trim();
  const address = document.getElementById("customerAddress").value.trim();
  const notes = document.getElementById("customerNotes").value.trim();

  if (!name || !address) {
    showToast("يرجى إدخال الاسم والعنوان لإتمام الطلب.");
    return;
  }

  let total = 0;
  const itemsLines = cart.map((item, i) => {
    const sub = item.price * item.qty;
    total += sub;
    return `${i + 1}. *${item.name}* (${item.weight}) — الكمية: ${item.qty} = ${sub} ج.م`;
  }).join("\n");

  const message =
    `السلام عليكم، طلب جديد من موقع *طيبات سيوة* 🌿:\n\n` +
    `👤 *الاسم:* ${name}\n` +
    `📍 *العنوان:* ${address}\n` +
    (notes ? `📝 *ملاحظات:* ${notes}\n` : "") +
    `\n🛒 *تفاصيل الطلب:*\n${itemsLines}\n\n` +
    `💰 *الإجمالي:* ${total} ج.م`;

  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, "_blank", "noopener,noreferrer");
});

// Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");

function openLightbox(src, title) {
  lightboxImg.src = src;
  lightboxCaption.textContent = title;
  lightbox.classList.add("open");
}

document.getElementById("lightboxClose").addEventListener("click", () => lightbox.classList.remove("open"));
lightbox.addEventListener("click", e => {
  if (e.target === lightbox) lightbox.classList.remove("open");
});

// زر التواصل العائم (FAB)
const fabContainer = document.getElementById("fabContainer");
document.getElementById("fabToggle").addEventListener("click", () => {
  fabContainer.classList.toggle("open");
});

// إشعار Toast
function showToast(text) {
  toast.textContent = text;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2600);
}

// أنيميشن الظهور عند التمرير (IntersectionObserver)
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

// تغيير شكل الهيدر عند التمرير
window.addEventListener("scroll", () => {
  document.getElementById("navbar").classList.toggle("scrolled", window.scrollY > 40);
});

// تشغيل العرض المبدئي
renderProducts();