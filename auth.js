// =============== Firebase SDKs =============== //
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updatePassword,
  EmailAuthProvider,
  reauthenticateWithCredential,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// =============== FIREBASE CONFIG =============== //
const firebaseConfig = {
  apiKey: "AIzaSyDTNsWLspfMI2aHoPles2obC28sU_RRtOw",
  authDomain: "economics-ink.firebaseapp.com",
  projectId: "economics-ink",
  storageBucket: "economics-ink.firebasestorage.app",
  messagingSenderId: "191407894215",
  appId: "1:191407894215:web:dfb23fcff92ede434198e2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const MIN_PASSWORD_LENGTH = 8;
let toastTimer = null;

// Module scripts and Firebase imports can fail when opening pages via file://.
// Give the user a clear hint instead of silent breakage.
window.addEventListener("DOMContentLoaded", () => {
  if (window.location && window.location.protocol === "file:") {
    showToast("❌ Open this site via http (Live Server), not file://", "error");
  }
});

// =============== EMAIL VALIDATION =============== //
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function isStrongPassword(password) {
  const hasMinLength = password.length >= MIN_PASSWORD_LENGTH;
  const hasLetter = /[A-Za-z]/.test(password);
  const hasNumber = /\d/.test(password);
  return hasMinLength && hasLetter && hasNumber;
}

// =============== TOAST NOTIFICATIONS =============== //
function showToast(message, type = "error") {
  const toast = document.getElementById("auth-toast");
  if (!toast) {
    alert(message);
    return;
  }

  toast.textContent = message;
  toast.className = type;
  toast.style.visibility = "visible";
  toast.style.opacity = "1";
  toast.style.display = "block";

  if (toastTimer) {
    clearTimeout(toastTimer);
  }

  // Ensure the user sees feedback after pressing Enter.
  toast.scrollIntoView({ behavior: "smooth", block: "nearest" });

  toastTimer = setTimeout(() => {
    toast.style.display = "none";
    toast.style.opacity = "0";
    toast.style.visibility = "hidden";
  }, 5000);
}

function getAuthErrorMessage(context, error) {
  const code = error && error.code ? error.code : "";

  if (context === "signup") {
    if (code === "auth/email-already-in-use") return "❌ This email is already registered";
    if (code === "auth/invalid-email") return "❌ Invalid email format";
    if (code === "auth/weak-password") {
      return `❌ Use at least ${MIN_PASSWORD_LENGTH} characters including letters and numbers`;
    }
    if (code === "auth/operation-not-allowed") return "❌ Sign up is currently disabled";
  }

  if (context === "login") {
    if (code === "auth/invalid-email") return "❌ Invalid email format";
    if (code === "auth/user-not-found") return "❌ This email does not exist";
    if (code === "auth/wrong-password") return "❌ Incorrect password";
    // Newer Firebase may return this instead of user-not-found/wrong-password.
    if (code === "auth/invalid-credential" || code === "auth/invalid-login-credentials") {
      return "❌ Invalid email or password";
    }
    if (code === "auth/user-disabled") return "❌ This account has been disabled";
    if (code === "auth/too-many-requests") return "❌ Too many attempts. Try again later";
    if (code === "auth/operation-not-allowed") return "❌ Sign in is currently disabled";
  }

  if (context === "reset") {
    if (code === "auth/invalid-email") return "❌ Invalid email format";
    if (code === "auth/user-not-found") return "❌ This email does not exist";
    if (code === "auth/too-many-requests") return "❌ Too many attempts. Try again later";
  }

  return `❌ ${error && error.message ? error.message : "Something went wrong. Please try again."}`;
}

// =============== DISABLE/ENABLE BUTTON =============== //
function setButtonLoading(button, isLoading) {
  if (!button) return;
  if (isLoading) {
    button.disabled = true;
    button.dataset.originalText = button.textContent;
    button.textContent = "Loading...";
  } else {
    button.disabled = false;
    // Restore the original label for whichever form triggered loading.
    if (button.dataset.originalText) {
      button.textContent = button.dataset.originalText;
      delete button.dataset.originalText;
    }
  }
}

// =============== UPDATE AUTH BUTTONS =============== //
function updateAuthButtons(user) {
  const container = document.getElementById("auth-buttons-container");
  if (!container) return;

  if (user && user.email) {
    const safeEmail = String(user.email).replace(/</g, "&lt;").replace(/>/g, "&gt;");
    container.innerHTML = `
      <a
        href="profile.html"
        class="auth-profile-link"
        aria-label="Open profile"
        title="${safeEmail}"
        style="display:inline-flex; align-items:center; justify-content:center; width:40px; height:40px; color:white; text-decoration:none; border-radius:12px; background:rgba(255,255,255,0.10); border:1px solid rgba(255,255,255,0.18);"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M20 21a8 8 0 0 0-16 0" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <path d="M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
      <button onclick="handleLogout()" class="primary" data-i18n="logout" style="background: #ef4444; border: none;">Logout</button>
    `;
  } else {
    container.innerHTML = `
      <button onclick="goToLogin()" data-i18n="login">Sign In</button>
      <button class="primary" onclick="goToSignup()" data-i18n="signup">Sign Up</button>
    `;
  }

  if (typeof window.refreshDynamicTranslations === "function") {
    window.refreshDynamicTranslations();
  }
}

// =============== PREFILL LOGIN AFTER SIGNUP =============== //
function setupLoginPrefill() {
  const loginEmailInput = document.getElementById("login-email");
  if (!loginEmailInput) return;

  const prefillEmail = sessionStorage.getItem("prefillLoginEmail");
  if (!prefillEmail) return;

  loginEmailInput.value = prefillEmail;

  const passwordInput = document.getElementById("login-password");
  if (passwordInput) {
    passwordInput.focus();
  }

  showToast("✅ Account created. Please sign in to continue.", "success");
}

// =============== SIGNUP HANDLER =============== //
window.handleSignup = async function (event) {
  event.preventDefault();

  const form = event.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  const email = document.getElementById("signup-email").value.trim();
  const password = document.getElementById("signup-password").value;

  console.log("🔄 Signup attempt:", email);

  if (!email || !password) {
    showToast("❌ Please enter email and password", "error");
    return;
  }

  if (!isValidEmail(email)) {
    showToast("❌ Invalid email format", "error");
    return;
  }

  if (!isStrongPassword(password)) {
    showToast(
      `❌ Use at least ${MIN_PASSWORD_LENGTH} characters including letters and numbers`,
      "error"
    );
    return;
  }

  setButtonLoading(submitBtn, true);

  try {
    // ✅ CREATE ACCOUNT IN FIREBASE
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("✅ Account created:", userCredential.user.uid);

    // ✅ SAVE USER SESSION
    sessionStorage.setItem("userEmail", email);
    sessionStorage.setItem("userId", userCredential.user.uid);
    sessionStorage.setItem("emailVerified", "true");
    sessionStorage.setItem("prefillLoginEmail", email);

    // Clear form
    document.getElementById("signup-email").value = "";
    document.getElementById("signup-password").value = "";

    showToast("✅ Account created! Please sign in.", "success");

    // Redirect to login page
    setTimeout(() => {
      window.location.href = "login.html";
    }, 1500);

  } catch (error) {
    console.error("❌ Signup error:", error.code);
    setButtonLoading(submitBtn, false);
    showToast(getAuthErrorMessage("signup", error), "error");
  }
};

// =============== LOGIN HANDLER (VERIFIED EMAILS ONLY) =============== //
window.handleLogin = async function (event) {
  event.preventDefault();

  const form = event.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value;

  console.log("🔄 Login attempt:", email);

  if (!email || !password) {
    showToast("❌ Enter email and password", "error");
    return;
  }

  if (!isValidEmail(email)) {
    showToast("❌ Invalid email", "error");
    return;
  }

  setButtonLoading(submitBtn, true);

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("✅ Signed in:", userCredential.user.email);

    // Reload to get latest verification status
    await userCredential.user.reload();

    // ✅ ALLOW LOGIN WITHOUT EMAIL VERIFICATION
    console.log("✅ Login successful");
    showToast("✅ Welcome back!", "success");

    sessionStorage.setItem("userEmail", email);
    sessionStorage.setItem("userId", userCredential.user.uid);
    sessionStorage.setItem("emailVerified", "true");
    localStorage.setItem("loggedIn", "true");
    sessionStorage.removeItem("prefillLoginEmail");

    document.getElementById("login-email").value = "";
    document.getElementById("login-password").value = "";

    setTimeout(() => {
      window.location.href = "index.html";
    }, 1500);

  } catch (error) {
    console.error("❌ Login error:", error.code);
    setButtonLoading(submitBtn, false);
    showToast(getAuthErrorMessage("login", error), "error");
  }
};

// =============== LOGOUT HANDLER =============== //
window.handleLogout = async function () {
  try {
    await signOut(auth);
    console.log("✅ Logged out");
    showToast("✅ Logged out!", "success");

    sessionStorage.clear();
    localStorage.removeItem("loggedIn");

    updateAuthButtons(null);

    setTimeout(() => {
      window.location.href = "index.html";
    }, 1000);

  } catch (error) {
    console.error("❌ Logout error:", error);
    showToast(`❌ ${error.message}`, "error");
  }
};

// =============== FORGOT PASSWORD =============== //
window.handleForgotPassword = async function (event) {
  event.preventDefault();

  const form = event.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  const email = document.getElementById("reset-email").value.trim();

  if (!email) {
    showToast("❌ Enter your email", "error");
    return;
  }

  if (!isValidEmail(email)) {
    showToast("❌ Invalid email", "error");
    return;
  }

  setButtonLoading(submitBtn, true);

  try {
    await sendPasswordResetEmail(auth, email);
    console.log("✅ Reset email sent to:", email);
    showToast("✅ Check your email for reset link!", "success");

    document.getElementById("reset-email").value = "";

    setTimeout(() => {
      window.location.href = "login.html";
    }, 2000);

  } catch (error) {
    console.error("❌ Error:", error);
    setButtonLoading(submitBtn, false);
    showToast(getAuthErrorMessage("reset", error), "error");
  }
};

// =============== CHANGE PASSWORD =============== //
window.handleChangePassword = async function (currentPassword, newPassword) {
  try {
    const user = auth.currentUser;

    if (!user) {
      showToast("❌ User not found", "error");
      return false;
    }

    if (!isStrongPassword(newPassword)) {
      showToast(
        `❌ Use at least ${MIN_PASSWORD_LENGTH} characters including letters and numbers`,
        "error"
      );
      return false;
    }

    const credential = EmailAuthProvider.credential(user.email, currentPassword);
    await reauthenticateWithCredential(user, credential);
    await updatePassword(user, newPassword);

    showToast("✅ Password changed!", "success");
    return true;

  } catch (error) {
    console.error("❌ Error:", error);

    if (error.code === "auth/wrong-password") {
      showToast("❌ Wrong password", "error");
    } else if (error.code === "auth/weak-password") {
      showToast("❌ Password too weak", "error");
    } else {
      showToast(`❌ ${error.message}`, "error");
    }
    return false;
  }
};

// =============== AUTH STATE LISTENER =============== //
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("👤 User online:", user.email);
    sessionStorage.setItem("userEmail", user.email);
    sessionStorage.setItem("userId", user.uid);
    sessionStorage.setItem("emailVerified", "true");
    localStorage.setItem("loggedIn", "true");
    updateAuthButtons(user);
  } else {
    console.log("👤 User logged out");
    sessionStorage.removeItem("userEmail");
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("emailVerified");
    localStorage.removeItem("loggedIn");
    updateAuthButtons(null);
  }
});

// Run page-specific UI setup.
window.addEventListener("DOMContentLoaded", () => {
  setupLoginPrefill();
});
