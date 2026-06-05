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
    heroTitle: "Learn Economics & Finance the Smart Way",
    heroSub: "Where Elite Code Meets Global Markets.",
    cardMarketAnalysis: "Market Analysis",
    cardMarketAnalysisBody: "Clear market insights and trend analysis to help you stay ahead.",
    cardPremiumEducation: "Premium Education",
    cardPremiumEducationBody: "Practical trading knowledge, strategies, and market lessons.",
    cardCommunitySupport: "Community Support",
    cardCommunitySupportBody: "Learn, discuss, and grow with a community of dedicated traders.",
    cardInsights: "Expert Insights",
    cardInsightsBody: "Professional perspectives and market updates that matter.",
    footerText: "© 2026 InvestTell. All rights reserved.",
    login: "Sign In",
    loginTitle: "Welcome Back",
    signup: "Sign Up",
    signupTitle: "Create Account",
    forgotPassword: "Reset Your Password",
    forgotPasswordLink: "Forgot Password?",
    forgotPasswordHint: "Enter your email and we'll send you a reset link.",
    rememberPassword: "Remember your password?",
    backToSignIn: "Back to Sign In",
    noAccount: "Don't have an account?",
    hasAccount: "Already have an account?",
    sendResetLink: "Send Reset Link",
    aboutUs: "About Us",
    privacyPolicy: "Privacy Policy",
    contactUs: "Contact Us",
    logout: "Logout",
    comingSoon: "Coming Soon! We're working on it."
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
    heroTitle: "Aprende economía y finanzas de forma inteligente",
    heroSub: "Donde el código de élite se encuentra con los mercados globales.",
    cardMarketAnalysis: "Análisis de Mercado",
    cardMarketAnalysisBody: "Perspectivas claras del mercado y análisis de tendencias para mantenerte a la vanguardia.",
    cardPremiumEducation: "Educación Premium",
    cardPremiumEducationBody: "Conocimiento práctico de trading, estrategias y lecciones de mercado.",
    cardCommunitySupport: "Apoyo Comunitario",
    cardCommunitySupportBody: "Aprende, debate y crece con una comunidad de traders dedicados.",
    cardInsights: "Perspectivas de Expertos",
    cardInsightsBody: "Perspectivas profesionales y actualizaciones de mercado que importan.",
    footerText: "© 2026 InvestTell. Todos los derechos reservados.",
    login: "Iniciar sesión",
    loginTitle: "Bienvenido de nuevo",
    signup: "Registrarse",
    signupTitle: "Crear cuenta",
    forgotPassword: "Restablece tu contraseña",
    forgotPasswordLink: "¿Olvidaste tu contraseña?",
    forgotPasswordHint: "Introduce tu correo y te enviaremos un enlace de restablecimiento.",
    rememberPassword: "¿Recuerdas tu contraseña?",
    backToSignIn: "Volver a iniciar sesión",
    noAccount: "¿No tienes una cuenta?",
    hasAccount: "¿Ya tienes una cuenta?",
    sendResetLink: "Enviar enlace de restablecimiento",
    aboutUs: "Sobre nosotros",
    privacyPolicy: "Política de privacidad",
    contactUs: "Contáctanos",
    logout: "Cerrar sesión",
    comingSoon: "¡Próximamente! Estamos trabajando en ello."
  },
  fr: {
    home: "Accueil",
    courses: "Cours",
    trending: "Tendances",
    download: "Télécharger",
    premium: "Premium",
    profile: "Profil",
    searchBtn: "Rechercher",
    searchPlaceholder: "Rechercher des cours...",
    heroTitle: "Apprenez l'économie et la finance intelligemment",
    heroSub: "Là où le code d'élite rencontre les marchés mondiaux.",
    cardMarketAnalysis: "Analyse de Marché",
    cardMarketAnalysisBody: "Des perspectives claires et une analyse des tendances pour garder une longueur d'avance.",
    cardPremiumEducation: "Formation Premium",
    cardPremiumEducationBody: "Connaissances pratiques de trading, stratégies et leçons de marché.",
    cardCommunitySupport: "Support Communautaire",
    cardCommunitySupportBody: "Apprenez, échangez et progressez avec une communauté de traders passionnés.",
    cardInsights: "Conseils d'Experts",
    cardInsightsBody: "Perspectives professionnelles et mises à jour du marché qui comptent.",
    footerText: "© 2026 InvestTell. Tous droits réservés.",
    login: "Connexion",
    loginTitle: "Bon retour",
    signup: "S'inscrire",
    signupTitle: "Créer un compte",
    forgotPassword: "Réinitialisez votre mot de passe",
    forgotPasswordLink: "Mot de passe oublié ?",
    forgotPasswordHint: "Entrez votre e-mail et nous vous enverrons un lien de réinitialisation.",
    rememberPassword: "Vous vous souvenez de votre mot de passe ?",
    backToSignIn: "Retour à la connexion",
    noAccount: "Vous n'avez pas de compte ?",
    hasAccount: "Vous avez déjà un compte ?",
    sendResetLink: "Envoyer le lien de réinitialisation",
    aboutUs: "À propos de nous",
    privacyPolicy: "Politique de confidentialité",
    contactUs: "Contactez-nous",
    logout: "Déconnexion",
    comingSoon: "Bientôt disponible ! Nous y travaillons."
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
    heroSub: "Wo Elite-Code auf globale Märkte trifft.",
    cardMarketAnalysis: "Marktanalyse",
    cardMarketAnalysisBody: "Klare Markteinblicke und Trendanalyse, damit Sie immer einen Schritt voraus sind.",
    cardPremiumEducation: "Premium-Bildung",
    cardPremiumEducationBody: "Praktisches Trading-Wissen, Strategien und Marktlektionen.",
    cardCommunitySupport: "Community-Support",
    cardCommunitySupportBody: "Lernen, diskutieren und wachsen – mit einer Community engagierter Trader.",
    cardInsights: "Experten-Insights",
    cardInsightsBody: "Professionelle Perspektiven und relevante Markt-Updates.",
    footerText: "© 2026 InvestTell. Alle Rechte vorbehalten.",
    login: "Anmelden",
    loginTitle: "Willkommen zurück",
    signup: "Registrieren",
    signupTitle: "Konto erstellen",
    forgotPassword: "Passwort zurücksetzen",
    forgotPasswordLink: "Passwort vergessen?",
    forgotPasswordHint: "Geben Sie Ihre E-Mail ein und wir senden Ihnen einen Link zum Zurücksetzen.",
    rememberPassword: "Passwort wieder eingefallen?",
    backToSignIn: "Zurück zur Anmeldung",
    noAccount: "Noch kein Konto?",
    hasAccount: "Bereits ein Konto?",
    sendResetLink: "Link zum Zurücksetzen senden",
    aboutUs: "Über uns",
    privacyPolicy: "Datenschutzrichtlinie",
    contactUs: "Kontakt",
    logout: "Abmelden",
    comingSoon: "Demnächst verfügbar! Wir arbeiten daran."
  },
  pt: {
    home: "Início",
    courses: "Cursos",
    trending: "Tendências",
    download: "Download",
    premium: "Premium",
    profile: "Perfil",
    searchBtn: "Pesquisar",
    searchPlaceholder: "Pesquisar cursos...",
    heroTitle: "Aprenda economia e finanças de forma inteligente",
    heroSub: "Onde código de elite encontra os mercados globais.",
    cardMarketAnalysis: "Análise de Mercado",
    cardMarketAnalysisBody: "Insights claros de mercado e análise de tendências para você se manter à frente.",
    cardPremiumEducation: "Educação Premium",
    cardPremiumEducationBody: "Conhecimento prático de trading, estratégias e lições de mercado.",
    cardCommunitySupport: "Suporte da Comunidade",
    cardCommunitySupportBody: "Aprenda, discuta e cresça com uma comunidade de traders dedicados.",
    cardInsights: "Insights de Especialistas",
    cardInsightsBody: "Perspectivas profissionais e atualizações de mercado que importam.",
    footerText: "© 2026 InvestTell. Todos os direitos reservados.",
    login: "Entrar",
    loginTitle: "Bem-vindo de volta",
    signup: "Criar conta",
    signupTitle: "Crie a sua conta",
    forgotPassword: "Redefina sua senha",
    forgotPasswordLink: "Esqueceu a senha?",
    forgotPasswordHint: "Digite seu e-mail e enviaremos um link de redefinição.",
    rememberPassword: "Lembrou sua senha?",
    backToSignIn: "Voltar para entrar",
    noAccount: "Não tem uma conta?",
    hasAccount: "Já tem uma conta?",
    sendResetLink: "Enviar link de redefinição",
    aboutUs: "Sobre nós",
    privacyPolicy: "Política de privacidade",
    contactUs: "Fale conosco",
    logout: "Sair",
    comingSoon: "Em breve! Estamos trabalhando nisso."
  }
};

function refreshDynamicTranslations() {
  const selected = localStorage.getItem("selectedLanguage") || "en";
  applyTranslations(selected);
}

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
  const lang = localStorage.getItem("selectedLanguage") || "en";
  const dictionary = translations[lang] || translations.en;
  alert(dictionary.comingSoon || translations.en.comingSoon);
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

window.refreshDynamicTranslations = refreshDynamicTranslations;

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
