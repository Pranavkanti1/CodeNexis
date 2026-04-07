// Configuration
const CONFIG = {
  countdownTimeSeconds: 2 * 3600 + 47 * 60 + 33,
  enrollmentDelay: 1200
};

// DOM Elements
const timerEl = document.getElementById('timer');
const enrollBtn = document.getElementById('enrollBtn');

/**
 * Formats seconds into HH:MM:SS string
 * @param {number} s - Total seconds
 * @returns {string}
 */
function formatTime(s) {
  const h = String(Math.floor(s / 3600)).padStart(2, '0');
  const m = String(Math.floor((s % 3600) / 60)).padStart(2, '0');
  const sec = String(s % 60).padStart(2, '0');
  return `${h}:${m}:${sec}`;
}

// Timer Logic
let totalSeconds = CONFIG.countdownTimeSeconds;

const countdownInterval = setInterval(() => {
  if (totalSeconds > 0) {
    totalSeconds--;
    timerEl.textContent = formatTime(totalSeconds);
  } else {
    timerEl.textContent = 'Expired';
    clearInterval(countdownInterval);
  }
}, 1000);

// Enrollment Logic
function handleEnroll() {
  enrollBtn.textContent = 'Processing...';
  enrollBtn.disabled = true;
  enrollBtn.style.opacity = '0.8';

  setTimeout(() => {
    enrollBtn.textContent = '✓ Successfully Enrolled!';
    enrollBtn.classList.add('success');
    enrollBtn.style.opacity = '1';
  }, CONFIG.enrollmentDelay);
}

// Attach event listener
if (enrollBtn) {
  enrollBtn.addEventListener('click', handleEnroll);
}