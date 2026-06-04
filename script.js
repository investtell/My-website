// Shared UI utilities for non-module pages.

const translations = {
  en: {
    home: "Home",
    courses: "Courses",
    trending: "Trending",
    download: "Download",
    premium: "Premium",
    profile: "Profile",
    searchBtn: "Search",
    searchPlaceholder: "Search courses...",
    heroTitle: "Learn Economics & Finance the smart way",
    heroSub: "Where Elite Code Meets Global Markets.",
    economics: "Economics",
    finance: "Finance",
    projects: "Projects",
    footerText: "© 2026 InvestTell. All rights reserved",
    login: "Sign In",
    signup: "Sign Up",
    forgotPassword: "Reset Your Password",
    sendResetLink: "Send Reset Link",
    aboutUs: "About Us",
    privacyPolicy: "Privacy Policy",
    contactUs: "Contact Us"
  },
  es: {
    home: "Inicio",
    courses: "Cursos",
    trending: "Tendencias",
    download: "Descargar",
    premium: "Premium",
    profile: "Perfil",
    searchBtn: "Buscar",
    searchPlaceholder: "Buscar cursos...",
    heroTitle: "Aprende economia y finanzas de forma inteligente",
    heroSub: "Donde el codigo de elite se encuentra con los mercados globales.",
    economics: "Economia",
    finance: "Finanzas",
    projects: "Proyectos",
    footerText: "© 2026 InvestTell. Todos los derechos reservados",
    login: "Iniciar sesion",
    signup: "Registrarse",
    forgotPassword: "Restablece tu contrasena",
    sendResetLink: "Enviar enlace de restablecimiento",
    aboutUs: "Sobre nosotros",
    privacyPolicy: "Politica de privacidad",
    contactUs: "Contactanos"
  },
  fr: {
    home: "Accueil",
    courses: "Cours",
    trending: "Tendances",
    download: "Telecharger",
    premium: "Premium",
    profile: "Profil",
    searchBtn: "Rechercher",
    searchPlaceholder: "Rechercher des cours...",
    heroTitle: "Apprenez l'economie et la finance intelligemment",
    heroSub: "La ou le code d'elite rencontre les marches mondiaux.",
    economics: "Economie",
    finance: "Finance",
    projects: "Projets",
    footerText: "© 2026 InvestTell. Tous droits reserves",
    login: "Connexion",
    signup: "S'inscrire",
    forgotPassword: "Reinitialisez votre mot de passe",
    sendResetLink: "Envoyer le lien de reinitialisation",
    aboutUs: "A propos de nous",
    privacyPolicy: "Politique de confidentialite",
    contactUs: "Contactez-nous"
  },
  de: {
    home: "Startseite",
    courses: "Kurse",
    trending: "Trends",
    download: "Download",
    premium: "Premium",
    profile: "Profil",
    searchBtn: "Suchen",
    searchPlaceholder: "Kurse suchen...",
    heroTitle: "Lerne Wirtschaft und Finanzen auf smarte Weise",
    heroSub: "Wo Elite-Code auf globale Markte trifft.",
    economics: "Wirtschaft",
    finance: "Finanzen",
    projects: "Projekte",
    footerText: "© 2026 InvestTell. Alle Rechte vorbehalten",
    login: "Anmelden",
    signup: "Registrieren",
    forgotPassword: "Passwort zurucksetzen",
    sendResetLink: "Zurucksetzen-Link senden",
    aboutUs: "Uber uns",
    privacyPolicy: "Datenschutzrichtlinie",
    contactUs: "Kontakt"
  },
  pt: {
    home: "Inicio",
    courses: "Cursos",
    trending: "Tendencias",
    download: "Download",
    premium: "Premium",
    profile: "Perfil",
    searchBtn: "Pesquisar",
    searchPlaceholder: "Pesquisar cursos...",
    heroTitle: "Aprenda economia e financas de forma inteligente",
    heroSub: "Onde codigo de elite encontra os mercados globais.",
    economics: "Economia",
    finance: "Financas",
    projects: "Projetos",
    footerText: "© 2026 InvestTell. Todos os direitos reservados",
    login: "Entrar",
    signup: "Criar conta",
    forgotPassword: "Redefina sua senha",
    sendResetLink: "Enviar link de redefinicao",
    aboutUs: "Sobre nos",
    privacyPolicy: "Politica de privacidade",
    contactUs: "Fale conosco"
  }
};

function applyTranslations(langCode) {
  const selected = translations[langCode] ? langCode : "en";
  const dictionary = translations[selected];

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (key && dictionary[key]) {
      node.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const key = node.getAttribute("data-i18n-placeholder");
    if (key && dictionary[key]) {
      node.setAttribute("placeholder", dictionary[key]);
    }
  });

  document.documentElement.setAttribute("lang", selected);
}

window.goToLogin = function () {
  window.location.href = "login.html";
};

window.goToSignup = function () {
  window.location.href = "signup.html";
};

window.comingSoon = function (event) {
  if (event && typeof event.preventDefault === "function") {
    event.preventDefault();
  }
  alert("Coming Soon! We're Working On It 🚧.");
};

window.searchCards = function () {
  const searchInput = document.querySelector(".search-bar input");
  const cards = document.querySelectorAll(".cards .card");
  if (!searchInput || cards.length === 0) {
    return;
  }

  const term = searchInput.value.trim().toLowerCase();
  cards.forEach((card) => {
    const title = card.querySelector("h3");
    const text = title ? title.textContent.toLowerCase() : "";
    card.style.display = text.includes(term) ? "" : "none";
  });
};

window.toggleLangMenu = function () {
  const menu = document.getElementById("lang-menu");
  if (!menu) {
    return;
  }
  menu.classList.toggle("show");
};

window.changeLanguage = function (langCode) {
  const selected = translations[langCode] ? langCode : "en";
  localStorage.setItem("selectedLanguage", selected);

  applyTranslations(selected);

  const langBtn = document.getElementById("lang-btn");
  if (langBtn) {
    langBtn.textContent = `🌐 ${selected.toUpperCase()}`;
  }

  const menu = document.getElementById("lang-menu");
  if (menu) {
    menu.classList.remove("show");
  }
};

window.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("selectedLanguage") || "en";
  applyTranslations(savedLanguage);

  const langBtn = document.getElementById("lang-btn");
  if (langBtn) {
    langBtn.textContent = `🌐 ${savedLanguage.toUpperCase()}`;
  }
});
