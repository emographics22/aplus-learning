// ====== Progress JS ======
const PASS_MARK = 70; // 70% passing
const topics = {
  "Core 1 → 220-1201": Array.from({length: 10}, (_, i) => `Quiz ${i + 1}`),
  "Core 2 → 220-1202": Array.from({length: 10}, (_, i) => `Quiz ${i + 1}`)
};

const topicDiv = document.getElementById('topics');
const quizDiv = document.getElementById('quizzes');
const resultDiv = document.getElementById('result');

let selectedTopic = "";
let username = localStorage.getItem('username') || 'Guest';
let isGuest = !localStorage.getItem('username');
let allUserScores = [];

// Show guest notice if needed
if (isGuest) {
  const guestNotice = document.createElement('div');
  guestNotice.className = 'bg-yellow-500 bg-opacity-20 border-2 border-yellow-400 rounded-lg p-4 mb-6 text-center';
  guestNotice.innerHTML = '<p class="text-yellow-300 font-bold">📊 Progress tracking is available after registration. Take quizzes now to start tracking!</p>';
  document.querySelector('.bg-gray-900').insertBefore(guestNotice, topicDiv.parentElement);
}

// Load user scores on page load
async function loadUserScores() {
  try {
    const response = await fetch(`/get-scores/${username}`);
    allUserScores = await response.json();
  } catch (e) {
    allUserScores = [];
  }
}

loadUserScores();

// ===== Show Topics =====
Object.keys(topics).forEach(topic => {
  const btn = document.createElement('button');
  btn.textContent = topic;
  btn.className = "w-full bg-gray-800 hover:bg-gray-700 text-white py-2 rounded mb-2";
  btn.onclick = () => selectTopic(topic);
  topicDiv.appendChild(btn);
});

// ===== Select Topic =====
function selectTopic(topic) {
  selectedTopic = topic;
  document.getElementById('topic-selection').classList.add('hidden');
  document.getElementById('quiz-selection').classList.remove('hidden');

  quizDiv.innerHTML = "";

  topics[topic].forEach(quiz => {
    const btn = document.createElement('button');
    btn.textContent = quiz;
    btn.className = "w-full bg-gray-800 hover:bg-gray-700 text-white py-2 rounded mb-2";
    btn.onclick = () => showProgress(quiz);
    quizDiv.appendChild(btn);
  });
}

// ===== Show Progress for selected quiz =====
function showProgress(quiz) {
  // Find score for this specific user, topic, and quiz
  const scoreRecord = allUserScores.find(s => s.topic === selectedTopic && s.quiz === quiz);
  
  if (!scoreRecord) {
    resultDiv.innerHTML = `
      <h2 class="text-yellow-400 font-bold mb-2 text-lg">${selectedTopic}</h2>
      <h3 class="text-white font-semibold mb-6 text-2xl">${quiz}</h3>
      <div class="bg-gray-800 p-6 rounded-lg text-center">
        <p class="text-gray-400 text-lg">No attempts yet. Take this quiz to see your progress!</p>
      </div>
      <button onclick="goBackQuizzes()" class="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded w-full font-bold">
        ← Back to Quizzes
      </button>
    `;
    document.getElementById('quiz-selection').classList.add('hidden');
    document.getElementById('result-section').classList.remove('hidden');
    return;
  }
  
  const rawScore = scoreRecord.score;
  const totalQuestions = scoreRecord.total;
  let percentage = Math.round((rawScore / totalQuestions) * 100);
  percentage = Math.max(0, Math.min(100, percentage));
  const remainingPercentage = 100 - percentage;
  const isPassed = percentage >= PASS_MARK;
  
  const barColor = isPassed ? "bg-green-500" : "bg-red-500";
  const statusText = isPassed ? "✅ PASSED" : "❌ FAILED";
  const statusColor = isPassed ? "text-green-400" : "text-red-400";

  resultDiv.innerHTML = `
    <h2 class="text-yellow-400 font-bold mb-2 text-lg">${selectedTopic}</h2>
    <h3 class="text-white font-semibold mb-6 text-2xl">${quiz}</h3>
    
    <!-- Main Score Display -->
    <div class="bg-gray-800 p-6 rounded-lg">
      
      <!-- Large Stacked Progress Bar -->
      <div class="mb-6">
        <div class="flex h-12 rounded-lg overflow-hidden bg-gray-700 shadow-lg">
          <div class="${barColor} h-full flex items-center justify-center text-white text-lg font-bold transition-all duration-300" style="width: ${percentage}%">
            ${percentage}%
          </div>
          <div class="bg-gray-600 h-full flex items-center justify-center text-gray-300 font-semibold" style="width: ${remainingPercentage}%">
            ${remainingPercentage}%
          </div>
        </div>
      </div>

      <!-- Pass Mark and Questions Info -->
      <div class="grid grid-cols-3 gap-3 mb-6">
        <div class="bg-gray-700 p-3 rounded text-center">
          <p class="text-gray-400 text-xs mb-1">PASS MARK</p>
          <p class="text-yellow-300 text-2xl font-bold">${PASS_MARK}%</p>
        </div>
        <div class="bg-gray-700 p-3 rounded text-center">
          <p class="text-gray-400 text-xs mb-1">YOUR SCORE</p>
          <p class="text-white text-2xl font-bold">${percentage}%</p>
        </div>
        <div class="bg-gray-700 p-3 rounded text-center">
          <p class="text-gray-400 text-xs mb-1">CORRECT ANSWERS</p>
          <p class="text-white text-2xl font-bold">${rawScore}/${totalQuestions}</p>
        </div>
      </div>

      <!-- Pass/Fail Status -->
      <div class="bg-gray-900 p-4 rounded-lg text-center">
        <p class="text-3xl font-bold ${statusColor}">${statusText}</p>
      </div>
    </div>
    
    <button onclick="goBackQuizzes()" class="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded w-full font-bold">
      ← Back to Quizzes
    </button>
  `;

  document.getElementById('quiz-selection').classList.add('hidden');
  document.getElementById('result-section').classList.remove('hidden');
}

// ===== Back to quiz selection =====
function goBackQuizzes() {
  document.getElementById('result-section').classList.add('hidden');
  document.getElementById('quiz-selection').classList.remove('hidden');
}

// ===== Back to topic selection =====
function goBackTopics() {
  document.getElementById('quiz-selection').classList.add('hidden');
  document.getElementById('topic-selection').classList.remove('hidden');
}
