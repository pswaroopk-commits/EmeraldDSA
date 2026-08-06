const SITE_CONFIG = {
  businessName: "Emerald DSA",
  tagline: "Your Trusted Loan Partner",
  ownerDisplayName: "Mr. Ganesh Kumar",
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
    ["Home Loan", "Guidance for home-purchase loan enquiries and lender documentation.", "home-loan"],
    ["Car Loan", "Support for new and used vehicle loan options and documentation.", "car-loan"],
    ["Mortgage Loan", "Coordination support for mortgage-backed loan enquiries.", "mortgage-loan"],
    ["Business Loan", "Assistance for business finance enquiries and lender coordination.", "business-loan"],
    ["Personal Loan", "Guidance for personal loan enquiries based on lender policies.", "personal-loan"],
    ["Mudra Loan", "Support for Mudra loan information and documentation requirements.", "mudra-loan"],
    ["Top-Up Loan", "Guidance for top-up options subject to lender eligibility checks.", "top-up-loan"],
    ["Construction Loan", "Guidance for construction-related loan documentation and next steps.", "construction-loan"],
    ["Home Loan Takeover", "Assistance reviewing transfer options for an existing home loan.", "home-loan"],
    ["Home Loan Top-Up", "Support for enquiries about additional funding on an eligible home loan.", "home-loan"],
    ["Loan Against Property", "Assistance for property-backed funding enquiries.", "mortgage-loan"],
    ["New Car Loan", "Support for new vehicle loan options and documentation.", "car-loan"],
    ["Used Car Loan", "Guidance for pre-owned vehicle loan enquiries.", "car-loan"],
    ["MSME Loan", "Assistance for MSME finance enquiries and lender process coordination.", "business-loan"]
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
      note: "Mr. Ganesh Kumar",
      image: "assets/images/ganesh-kumar.webp",
      alt: "Mr. Ganesh Kumar, Emerald DSA proprietor"
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
        <img src="assets/images/services/${imageName}.webp" alt="${name} visual" width="520" height="320" loading="lazy">
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
          ? `<img class="team-photo" src="${image}" alt="${alt}" width="760" height="950" loading="lazy">`
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
