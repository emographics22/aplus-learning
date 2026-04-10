// auth.js - Authentication Utility for Guest Mode

/**
 * Check if user is logged in
 * Returns username if logged in, null if guest
 */
function isLoggedIn() {
  return localStorage.getItem('username');
}

/**
 * Get current user (logged in or 'Guest')
 */
function getCurrentUser() {
  return isLoggedIn() || 'Guest';
}

/**
 * Show registration prompt modal
 */
function showRegisterPrompt() {
  const modal = document.createElement('div');
  modal.id = 'register-prompt-modal';
  modal.className = 'fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4';
  modal.innerHTML = `
    <div class="bg-gray-900 rounded-3xl shadow-2xl p-6 sm:p-8 max-w-sm border-2 border-yellow-400">
      <h2 class="text-2xl sm:text-3xl text-yellow-400 font-bold mb-4 text-center">Unlock Full Access</h2>
      <p class="text-gray-300 text-center mb-6">
        Register an account to submit quizzes, save your progress, and track your performance!
      </p>
      
      <div class="flex flex-col gap-3">
        <a href="register.html" class="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded text-center transition">
          Register Now
        </a>
        <a href="login.html" class="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 rounded text-center transition">
          Already have an account? Login
        </a>
        <button onclick="closeRegisterPrompt()" class="text-gray-400 hover:text-gray-300 py-2 transition">
          Continue as Guest
        </button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  modal.addEventListener('click', function(e) {
    if (e.target === modal) closeRegisterPrompt();
  });
}

/**
 * Close the registration prompt
 */
function closeRegisterPrompt() {
  const modal = document.getElementById('register-prompt-modal');
  if (modal) modal.remove();
}

/**
 * Prevent action and show prompt if guest
 */
function requireLogin(actionName = 'This action') {
  if (!isLoggedIn()) {
    showRegisterPrompt();
    return false;
  }
  return true;
}
