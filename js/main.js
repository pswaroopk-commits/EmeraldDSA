const SITE_CONFIG = {
  businessName: "Emerald DSA",
  tagline: "Your Trusted Loan Partner",
  ownerDisplayName: "Mr. Kumar Ganesh",
  primaryPhone: "7989251135",
  secondaryPhone: "9848263494",
  whatsappPhone: "7989251135",
  whatsappMessage: "Hello Emerald DSA, I would like assistance regarding a loan. Please contact me.",
  address: "Complete address to be confirmed, MVP Colony, Visakhapatnam, Andhra Pradesh",
  businessHours: "To be confirmed before publication",
  mapsLink: "https://www.google.com/maps/search/?api=1&query=MVP%20Colony%2C%20Visakhapatnam%2C%20Andhra%20Pradesh",
  features: {
    partners: true,
    testimonials: false,
    team: true
  },
  services: [
    ["Home Loan", "Support for new purchase, takeover and top-up home loan enquiries.", "home-loan"],
    ["Car Loan", "Guidance for new and used vehicle loan options and documents.", "car-loan"],
    ["Mortgage Loan", "Assistance for property-backed loan enquiries and lender coordination.", "mortgage-loan"],
    ["Business Loan", "Support for working capital, expansion and business finance enquiries.", "business-loan"],
    ["Personal Loan", "Guidance for personal loan eligibility conversations and next steps.", "personal-loan"],
    ["Mudra Loan", "Help understanding Mudra loan information and documentation needs.", "mudra-loan"],
    ["Top-Up Loan", "Support for additional funding enquiries on eligible existing loans.", "top-up-loan"],
    ["Construction Loan", "Guidance for residential and commercial construction loan needs.", "construction-loan"],
    ["Loan Against Property", "Assistance for secured funding enquiries against property.", "loan-against-property"]
  ],
  partners: [
    ["HDFC Bank", "hdfc-bank"],
    ["LIC Housing Finance", "lic-hfl"],
    ["ICICI Bank", "icici-bank"],
    ["Indian Bank", "indian-bank"],
    ["State Bank of India", "sbi"],
    ["Axis Bank", "axis-bank"],
    ["Kotak Mahindra Bank", "kotak-bank"],
    ["Bank of Baroda", "bank-of-baroda"],
    ["Union Bank of India", "union-bank"],
    ["Canara Bank", "canara-bank"],
    ["New India Assurance", "new-india-assurance"]
  ],
  team: [
    {
      role: "Owner / Proprietor",
      note: "Mr. Kumar Ganesh",
      image: "assets/images/ganesh-kumar.webp",
      alt: "Mr. Kumar Ganesh, Emerald DSA proprietor"
    }
  ],
  testimonials: Array.from({ length: 5 }, (_, index) => [
    `Sample testimonial ${index + 1}`,
    "Sample testimonial - replace before publishing."
  ])
};

const formatIndianPhone = (number) => `+91${number}`;
const encodedWhatsAppText = encodeURIComponent(SITE_CONFIG.whatsappMessage);
const whatsappHref = `https://wa.me/91${SITE_CONFIG.whatsappPhone}?text=${encodedWhatsAppText}`;

document.querySelectorAll("[data-year]").forEach((item) => {
  item.textContent = new Date().getFullYear();
});

document.querySelectorAll("[data-owner-name]").forEach((item) => {
  item.textContent = SITE_CONFIG.ownerDisplayName;
});

document.querySelectorAll("[data-address]").forEach((item) => {
  item.textContent = SITE_CONFIG.address;
});

document.querySelectorAll("[data-business-hours]").forEach((item) => {
  item.textContent = SITE_CONFIG.businessHours;
});

document.querySelectorAll("[data-phone-link]").forEach((link) => {
  link.href = `tel:${formatIndianPhone(SITE_CONFIG.primaryPhone)}`;
});

document.querySelectorAll("[data-secondary-phone-link]").forEach((link) => {
  link.href = `tel:${formatIndianPhone(SITE_CONFIG.secondaryPhone)}`;
});

document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
  link.href = whatsappHref;
});

document.querySelectorAll("[data-map-link]").forEach((link) => {
  link.href = SITE_CONFIG.mapsLink;
});

const servicesRoot = document.querySelector("[data-services]");
if (servicesRoot) {
  servicesRoot.innerHTML = SITE_CONFIG.services
    .map(([name, description, imageName]) => `
      <article class="service-card">
        <img src="assets/images/services/${imageName}.webp" alt="${name} visual" width="520" height="320" loading="eager">
        <div class="service-card-body">
          <span class="service-icon" aria-hidden="true">${name.charAt(0)}</span>
          <h3>${name}</h3>
          <p>${description}</p>
          <a class="button" href="${whatsappHref}">WhatsApp Us</a>
        </div>
      </article>
    `)
    .join("");
}

const partnersRoot = document.querySelector("[data-partners]");
if (partnersRoot) {
  partnersRoot.innerHTML = SITE_CONFIG.partners
    .map(([name, logo]) => `
      <article class="partner-chip">
        <img src="assets/logos/partners/${logo}.webp" alt="" width="260" height="96" loading="eager">
        <span>${name}</span>
      </article>
    `)
    .join("");
}

const teamRoot = document.querySelector("[data-team]");
if (teamRoot) {
  teamRoot.innerHTML = SITE_CONFIG.team
    .map(({ role, note, image, alt }) => `
      <article class="team-card">
        ${image
          ? `<img class="team-photo" src="${image}" alt="${alt}" width="760" height="950" loading="eager">`
          : `<div class="team-photo-placeholder">Photo placeholder<br>${note}</div>`}
        <h3>${role}</h3>
        <p>${image ? note : "Replace this placeholder only with a genuine approved photograph."}</p>
      </article>
    `)
    .join("");
}

const testimonialsRoot = document.querySelector("[data-testimonials]");
if (testimonialsRoot) {
  testimonialsRoot.innerHTML = SITE_CONFIG.testimonials
    .map(([name, quote]) => `<article class="testimonial-card"><h3>${name}</h3><p>${quote}</p></article>`)
    .join("");
}

const leadForm = document.querySelector("[data-lead-form]");
if (leadForm) {
  leadForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(leadForm);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const loanType = String(formData.get("loanType") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const enquiry = [
      "Hello Emerald DSA, I want loan assistance.",
      name ? `Name: ${name}` : "",
      phone ? `Phone: ${phone}` : "",
      loanType ? `Loan Type: ${loanType}` : "",
      message ? `Message: ${message}` : ""
    ].filter(Boolean).join("\n");

    window.location.href = `https://wa.me/91${SITE_CONFIG.whatsappPhone}?text=${encodeURIComponent(enquiry)}`;
  });
}

document.querySelectorAll("[data-feature]").forEach((section) => {
  const key = section.dataset.feature;
  section.hidden = !SITE_CONFIG.features[key];
});

document.querySelectorAll("[data-nav-feature]").forEach((link) => {
  const key = link.dataset.navFeature;
  link.hidden = !SITE_CONFIG.features[key];
});

const navToggle = document.querySelector(".nav-toggle");
const header = document.querySelector("[data-header]");

if (navToggle && header) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    document.body.classList.toggle("nav-open", !expanded);
  });
}

document.querySelectorAll(".site-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});
