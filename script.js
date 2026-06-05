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
    cardMarketAnalysis: "Market Analysis",
    cardMarketAnalysisBody: "Clear market insights and trend analysis to help you stay ahead.",
    cardPremiumContent: "Premium Education",
    cardPremiumContentBody: "Practical trading knowledge, strategies, and market lessons.",
    cardMemberSupport: "Community Support",
    cardMemberSupportBody: "Learn, discuss, and grow with a community of dedicated traders.",
    cardInsights: "Expert Insights",
    cardInsightsBody: "Professional perspectives and market updates that matter.",
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
    cardMarketAnalysis: "Analisis de Mercado",
    cardMarketAnalysisBody: "Perspectivas claras del mercado y analisis de tendencias para mantenerte a la vanguardia.",
    cardPremiumContent: "Educacion Premium",
    cardPremiumContentBody: "Conocimiento practico de trading, estrategias y lecciones de mercado.",
    cardMemberSupport: "Apoyo Comunitario",
    cardMemberSupportBody: "Aprende, debate y crece con una comunidad de traders dedicados.",
    cardInsights: "Perspectivas de Expertos",
    cardInsightsBody: "Perspectivas profesionales y actualizaciones de mercado que importan.",
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
    cardMarketAnalysis: "Analyse de Marche",
    cardMarketAnalysisBody: "Des perspectives claires et une analyse des tendances pour garder une longueur d'avance.",
    cardPremiumContent: "Formation Premium",
    cardPremiumContentBody: "Connaissances pratiques de trading, strategies et lecons de marche.",
    cardMemberSupport: "Support Communautaire",
    cardMemberSupportBody: "Apprenez, echangez et progressez avec une communaute de traders passionnes.",
    cardInsights: "Insights d'Experts",
    cardInsightsBody: "Perspectives professionnelles et mises a jour du marche qui comptent.",
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
    cardMarketAnalysis: "Marktanalyse",
    cardMarketAnalysisBody: "Klare Markteinblicke und Trendanalyse, damit Sie immer einen Schritt voraus sind.",
    cardPremiumContent: "Premium-Bildung",
    cardPremiumContentBody: "Praktisches Trading-Wissen, Strategien und Marktlektionen.",
    cardMemberSupport: "Community-Support",
    cardMemberSupportBody: "Lernen, diskutieren und wachsen Sie mit einer Community engagierter Trader.",
    cardInsights: "Experten-Insights",
    cardInsightsBody: "Professionelle Perspektiven und relevante Markt-Updates.",
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
    cardMarketAnalysis: "Analise de Mercado",
    cardMarketAnalysisBody: "Insights claros de mercado e analise de tendencias para voce se manter a frente.",
    cardPremiumContent: "Educacao Premium",
    cardPremiumContentBody: "Conhecimento pratico de trading, estrategias e licoes de mercado.",
    cardMemberSupport: "Suporte da Comunidade",
    cardMemberSupportBody: "Aprenda, discuta e cresca com uma comunidade de traders dedicados.",
    cardInsights: "Insights de Especialistas",
    cardInsightsBody: "Perspectivas profissionais e atualizacoes de mercado que importam.",
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
    const body = card.querySelector("p");
    const text = [
      title ? title.textContent : "",
      body ? body.textContent : ""
    ].join(" ").toLowerCase();
    card.style.display = !term || text.includes(term) ? "" : "none";
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
