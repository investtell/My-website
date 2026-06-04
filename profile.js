// =============== PROFILE PAGE FUNCTIONS =============== //
const MIN_PASSWORD_LENGTH = 8;

function isStrongPassword(password) {
  const hasMinLength = password.length >= MIN_PASSWORD_LENGTH;
  const hasLetter = /[A-Za-z]/.test(password);
  const hasNumber = /\d/.test(password);
  return hasMinLength && hasLetter && hasNumber;
}

// Show section
function showSection(sectionId, event) {
  // Hide all sections
  document.querySelectorAll('.profile-section').forEach(section => {
    section.classList.remove('active');
  });

  // Remove active from all menu items
  document.querySelectorAll('.menu-item').forEach(item => {
    item.classList.remove('active');
  });

  // Show selected section
  const section = document.getElementById(sectionId);
  if (!section) {
    console.warn(`Missing profile section: ${sectionId}`);
    return;
  }
  section.classList.add('active');

  // Mark menu item as active
  if (event && event.target) {
    event.target.classList.add('active');
  } else {
    const activeButton = document.querySelector(`.menu-item[onclick*="${sectionId}"]`);
    if (activeButton) {
      activeButton.classList.add('active');
    }
  }
}

// Load profile data on page load
window.addEventListener('DOMContentLoaded', () => {
  // CHECK IF USER IS LOGGED IN - REDIRECT IF NOT
  const userEmail = sessionStorage.getItem("userEmail");
  if (!userEmail) {
    console.log("User not logged in - redirecting to login");
    window.location.href = "login.html";
    return;
  }
  
  loadProfileData();
});

window.tryLogout = function () {
  if (typeof window.handleLogout === "function") {
    window.handleLogout();
    return;
  }

  showToastMessage(
    "❌ Auth script did not load. Open this site via http (Live Server), not file://",
    "error"
  );
};

function loadProfileData() {
  const userEmail = sessionStorage.getItem("userEmail") || "Guest";
  const fullName = localStorage.getItem("userFullName") || "User";
  const phone = localStorage.getItem("userPhone") || "";
  const country = localStorage.getItem("userCountry") || "";
  const joinDate = localStorage.getItem("userJoinDate") || new Date().getFullYear();
  const enrolledCourses = JSON.parse(localStorage.getItem("enrolledCourses")) || [];
  const totalSpent = localStorage.getItem("userTotalSpent") || "$0";
  const premiumStatus = localStorage.getItem("userPremium") === "true" ? "Premium" : "Free";

  // Avatar: show initials (no emojis).
  const avatar = document.querySelector('.profile-avatar');
  if (avatar) {
    const source = (fullName && fullName !== "User") ? fullName : userEmail;
    const initials = (source || "")
      .split(/[\s@._-]+/)
      .filter(Boolean)
      .slice(0, 2)
      .map(part => part[0].toUpperCase())
      .join("") || "U";
    avatar.textContent = initials;
  }

  // Update profile card
  const profileEmail = document.getElementById('profile-email');
  const profileJoinDate = document.getElementById('profile-join-date');
  if (profileEmail) profileEmail.textContent = userEmail;
  if (profileJoinDate) profileJoinDate.textContent = `Member since ${joinDate}`;

  // Update settings form
  const settingsEmail = document.getElementById('settings-email');
  const settingsFullname = document.getElementById('settings-fullname');
  const settingsPhone = document.getElementById('settings-phone');
  const settingsCountry = document.getElementById('settings-country');
  if (settingsEmail) settingsEmail.value = userEmail;
  if (settingsFullname) settingsFullname.value = fullName;
  if (settingsPhone) settingsPhone.value = phone;
  if (settingsCountry) settingsCountry.value = country;

  // Update stats
  const enrolledCount = document.getElementById('enrolled-count');
  const completedCount = document.getElementById('completed-count');
  const premiumStatusNode = document.getElementById('premium-status');
  const totalSpentNode = document.getElementById('total-spent');
  if (enrolledCount) enrolledCount.textContent = `${enrolledCourses.length}`;
  if (completedCount) completedCount.textContent = `${enrolledCourses.filter(c => c.completed).length}`;
  if (premiumStatusNode) premiumStatusNode.textContent = premiumStatus;
  if (totalSpentNode) totalSpentNode.textContent = totalSpent;

  // Load enrolled courses
  loadEnrolledCourses(enrolledCourses);

  // Load payment history
  loadPaymentHistory();
}

function loadEnrolledCourses(courses) {
  const coursesList = document.getElementById('enrolled-courses-list');
  if (!coursesList) return;
  
  if (courses.length === 0) {
    coursesList.innerHTML = `
      <div class="empty-state">
        <p>No courses enrolled yet</p>
        <button onclick="window.location.href='index.html'" class="action-btn">Browse Courses</button>
      </div>
    `;
    return;
  }

  coursesList.innerHTML = courses.map(course => `
    <div class="course-card">
      <div class="course-icon" aria-hidden="true"></div>
      <h3>${course.name}</h3>
      <p style="font-size: 12px; color: #64748b;">${course.category}</p>
      <div class="course-progress">
        <div class="course-progress-bar" style="width: ${course.progress || 0}%"></div>
      </div>
      <small>${course.progress || 0}% Complete</small>
      <button class="action-btn" style="width: 100%; margin-top: 10px; background: #0f172a;">Continue</button>
    </div>
  `).join('');
}

function loadPaymentHistory() {
  const payments = JSON.parse(localStorage.getItem("paymentHistory")) || [];
  const tbody = document.getElementById('payments-tbody');
  if (!tbody) return;

  if (payments.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4" style="text-align: center;">No payment history</td></tr>`;
    return;
  }

  tbody.innerHTML = payments.map(payment => `
    <tr>
      <td>${payment.date}</td>
      <td>${payment.description}</td>
      <td>${payment.amount}</td>
      <td><span class="status-${payment.status.toLowerCase()}">${payment.status}</span></td>
    </tr>
  `).join('');
}

// =============== UPDATE PROFILE SETTINGS =============== //
function updateProfile(event) {
  event.preventDefault();

  const fullNameNode = document.getElementById('settings-fullname');
  const phoneNode = document.getElementById('settings-phone');
  const countryNode = document.getElementById('settings-country');
  const submitBtn = event && event.target ? event.target.querySelector('button[type="submit"]') : null;

  if (!fullNameNode || !phoneNode || !countryNode || !submitBtn) {
    console.warn("Profile settings form is missing required fields.");
    return;
  }

  const fullName = fullNameNode.value.trim();
  const phone = phoneNode.value.trim();
  const country = countryNode.value.trim();

  // Validation
  if (!fullName) {
    showToastMessage("❌ Full name is required", "error");
    return;
  }

  // Show loading state
  submitBtn.disabled = true;
  submitBtn.textContent = "Saving...";

  // Simulate save delay
  setTimeout(() => {
    // Save to localStorage
    localStorage.setItem("userFullName", fullName);
    localStorage.setItem("userPhone", phone);
    localStorage.setItem("userCountry", country);

    showToastMessage("✅ Profile updated successfully!", "success");
    
    // Reset button
    submitBtn.disabled = false;
    submitBtn.textContent = "Save Changes";
  }, 500);
}

// =============== CHANGE PASSWORD =============== //
async function changePassword(event) {
  event.preventDefault();

  const currentPasswordNode = document.getElementById('current-password');
  const newPasswordNode = document.getElementById('new-password');
  const confirmPasswordNode = document.getElementById('confirm-password');
  const submitBtn = event && event.target ? event.target.querySelector('button[type="submit"]') : null;

  if (!currentPasswordNode || !newPasswordNode || !confirmPasswordNode || !submitBtn) {
    console.warn("Change password form is missing required fields.");
    return;
  }

  if (typeof window.handleChangePassword !== "function") {
    showToastMessage(
      "❌ Auth script did not load. Open this site via http (Live Server), not file://",
      "error"
    );
    return;
  }

  const currentPassword = currentPasswordNode.value;
  const newPassword = newPasswordNode.value;
  const confirmPassword = confirmPasswordNode.value;

  // Validation
  if (!currentPassword || !newPassword || !confirmPassword) {
    showToastMessage("❌ All fields are required", "error");
    return;
  }

  if (newPassword !== confirmPassword) {
    showToastMessage("❌ Passwords do not match", "error");
    return;
  }

  if (!isStrongPassword(newPassword)) {
    showToastMessage(
      `❌ Use at least ${MIN_PASSWORD_LENGTH} characters including letters and numbers`,
      "error"
    );
    return;
  }

  if (currentPassword === newPassword) {
    showToastMessage("❌ New password must be different from current password", "error");
    return;
  }

  // Show loading state
  submitBtn.disabled = true;
  submitBtn.textContent = "Updating...";

  try {
    // Call the function from auth.js
    const success = await window.handleChangePassword(currentPassword, newPassword);

    if (success) {
      // Clear form
      currentPasswordNode.value = "";
      newPasswordNode.value = "";
      confirmPasswordNode.value = "";
    }

    submitBtn.disabled = false;
    submitBtn.textContent = "Update Password";

  } catch (error) {
    console.error("Password change error:", error);
    showToastMessage(`❌ Error: ${error.message}`, "error");
    submitBtn.disabled = false;
    submitBtn.textContent = "Update Password";
  }
}

// =============== SHOW TOAST MESSAGE =============== //
function showToastMessage(message, type) {
  const toast = document.getElementById('auth-toast');
  if (!toast) {
    alert(message);
    return;
  }

  toast.textContent = message;
  toast.className = type;
  toast.style.display = "block";

  setTimeout(() => {
    toast.style.display = "none";
  }, 3000);
}

// =============== END PROFILE PAGE FUNCTIONS =============== //
