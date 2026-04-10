// quizLogic.js - Complete Quiz System

// Get elements
const topicContainer = document.getElementById('topics');
const quizList = document.getElementById('quiz-list');
const quizzesDiv = document.getElementById('quizzes');
const quizContainer = document.getElementById('quiz-container');
const resultsContainer = document.getElementById('results-container');
const nextBtn = document.getElementById('next-btn');
const userDisplay = document.getElementById('userDisplay');

// Progress tracking
let selectedTopic;
let selectedQuiz;
let currentQuestion = 0;
let score = 0;
let username = localStorage.getItem('username') || 'Guest';
let isGuest = !localStorage.getItem('username');
let currentQuizData = [];

// Timer tracking
let timePerQuestion = 30; // 30 seconds per question
let totalTime = 0;
let timeLeft = 0;
let timerInterval = null;
let timerElement = document.getElementById('timer');
let timerBox = document.querySelector('.timer-box');

// Display username and show guest mode banner
userDisplay.textContent = username;

// Show guest mode notice
if (isGuest) {
  const guestBanner = document.getElementById('guest-mode-banner');
  if (guestBanner) {
    guestBanner.classList.remove('hidden');
  }
}

// ==== SECTION 1: LOAD USER SCORES FROM SERVER ====
let userScores = [];

async function loadUserScores() {
  try {
    const response = await fetch(`/get-scores/${username}`);
    userScores = await response.json() || [];
  } catch (e) {
    userScores = [];
  }
}

loadUserScores();

// ==== TIMER FUNCTIONS ====
function startTimer() {
  // Stop any existing timer
  if (timerInterval) clearInterval(timerInterval);
  
  // Reset timer for new question
  timeLeft = timePerQuestion;
  updateTimerDisplay();
  
  // Remove warning class
  timerBox.classList.remove('timer-warning');
  
  // Start countdown
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    
    // Change color when 10 seconds left
    if (timeLeft <= 10 && timeLeft > 0) {
      timerBox.classList.add('timer-warning');
    }
    
    // When time is up for this question
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      // Auto-move to next question
      nextBtn.click();
    }
  }, 1000);
}

function updateTimerDisplay() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

// ==== SECTION 2: SHOW TOPICS WITH TAG ====
function loadTopics() {
  if (!quizzes || Object.keys(quizzes).length === 0) {
    console.error("❌ Quizzes not loaded yet. Retrying in 100ms...");
    setTimeout(loadTopics, 100);
    return;
  }
  
  console.log("✅ Loading topics from quizzes:", Object.keys(quizzes));
  
  Object.keys(quizzes).forEach(topic => {
    if (!topic || Object.keys(quizzes[topic]).length === 0) {
      console.warn("⚠️ Topic is empty:", topic);
      return;
    }
    
    const btn = document.createElement('button');
    btn.className = "w-full bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white font-bold py-4 rounded-lg transition duration-200 text-lg";
    btn.onclick = () => {
      selectedTopic = topic;
      showQuizList(topic);
    };
    
    // Count passed quizzes for this topic
    const topicScores = userScores.filter(s => s.topic === topic);
    const passedCount = topicScores.filter(s => (s.score / s.total * 100) >= 70).length;
    const totalCount = Object.keys(quizzes[topic]).length;
    
    const statusTag = passedCount > 0 ? `<span class="text-green-400 ml-2">✅ ${passedCount}/${totalCount} passed</span>` : '';
    btn.innerHTML = `${topic} <span class="text-gray-400 text-sm">(${totalCount} quizzes)${statusTag}`;
    
    topicContainer.appendChild(btn);
  });
}

// Load topics after a short delay to ensure quizzes are ready
setTimeout(loadTopics, 200);

// Additional safety check
window.addEventListener('load', () => {
  console.log("=== PAGE LOADED ===");
  console.log("Quizzes object:", quizzes);
  console.log("Available topics:", Object.keys(quizzes || {}));
  
  if (!quizzes || Object.keys(quizzes).length === 0) {
    console.error("❌ Quizzes object is empty or undefined");
    console.log("Checking generatedQuizzes:", typeof generatedQuizzes);
    
    setTimeout(() => {
      console.log("Second check - Quizzes:", quizzes);
      console.log("generatedQuizzes:", generatedQuizzes);
    }, 1000);
  } else {
    console.log(`✅ Found ${Object.keys(quizzes).length} topic(s)`);
    for (let topic in quizzes) {
      console.log(`   - ${topic}: ${Object.keys(quizzes[topic]).length} quizzes`);
    }
  }
});

// ==== SECTION 3: SHOW QUIZZES FOR SELECTED TOPIC ====
let currentTopic = null;
let quizzesShown = 0;

function showQuizList(topic) {
  document.getElementById('topic-selection').classList.add('hidden');
  quizList.classList.remove('hidden');
  quizzesDiv.innerHTML = '';
  
  currentTopic = topic;
  quizzesShown = 0;
  
  // Topic header
  document.getElementById('topicHeader').innerHTML = `
    <h2 class="text-2xl text-yellow-400 font-bold mb-4">${topic}</h2>
  `;
  
  // Get quizzes for this topic
  const allQuizzes = Object.keys(quizzes[topic]);
  console.log(`📚 Topic: ${topic}, Total quizzes available: ${allQuizzes.length}`);
  
  // Display first batch of quizzes
  displayQuizzBatch(topic, allQuizzes, 0, 5);
}

function displayQuizzBatch(topic, allQuizzes, startIndex, batchSize) {
  const container = document.getElementById('quizzes');
  const endIndex = Math.min(startIndex + batchSize, allQuizzes.length);
  
  // Determine how many to show for guests
  let maxToShow = endIndex;
  if (isGuest && endIndex > 2) {
    maxToShow = 2;
  }
  
  console.log(`🎯 Displaying quizzes ${startIndex + 1}-${maxToShow} of ${allQuizzes.length}`);
  
  // Display quizzes in this batch
  for (let i = startIndex; i < maxToShow; i++) {
    const qName = allQuizzes[i];
    
    const btn = document.createElement('button');
    btn.className = "relative bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white font-bold py-6 rounded-lg transition duration-200 text-center";
    
    // Find score for this quiz
    const scoreRecord = userScores.find(s => s.topic === topic && s.quiz === qName);
    const percentage = scoreRecord ? Math.round((scoreRecord.score / scoreRecord.total) * 100) : 0;
    const isPassed = percentage >= 70;
    
    let badge = '';
    if (scoreRecord) {
      badge = isPassed 
        ? `<div class="absolute top-2 right-2 bg-green-500 text-black text-xs font-bold px-2 py-1 rounded">✅ ${percentage}%</div>`
        : `<div class="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">❌ ${percentage}%</div>`;
    }
    
    const numQuestions = Array.isArray(quizzes[topic][qName]) ? quizzes[topic][qName].length : 0;
    btn.innerHTML = `${badge}<div class="text-lg">${qName}</div><div class="text-xs text-gray-400 mt-2">${numQuestions} Questions</div>`;
    btn.onclick = () => startQuiz(qName, topic);
    container.appendChild(btn);
  }
  
  quizzesShown = maxToShow;
  
  // Show guest notice if applicable
  if (isGuest && allQuizzes.length > 2) {
    const guestNotice = document.createElement('div');
    guestNotice.className = "col-span-full bg-yellow-500 bg-opacity-20 border-2 border-yellow-400 rounded-lg p-6 text-center";
    guestNotice.innerHTML = `
      <p class="text-yellow-300 font-bold mb-4">🔒 Guest Mode - Showing 2 of ${allQuizzes.length} quizzes</p>
      <a href="register.html" class="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded mr-2">📝 Register</a>
      <a href="login.html" class="inline-block bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">🔑 Login</a>
    `;
    container.appendChild(guestNotice);
  }
  
  // Show Load More button if there are more quizzes for members
  if (!isGuest && maxToShow < allQuizzes.length) {
    const loadMoreBtn = document.createElement('button');
    loadMoreBtn.className = "col-span-full bg-gradient-to-r from-green-700 to-green-600 hover:from-green-600 hover:to-green-500 text-white font-bold py-4 px-6 rounded-lg transition duration-200 text-lg mt-4";
    loadMoreBtn.textContent = `📚 Load More Quizzes (Showing ${maxToShow}/${allQuizzes.length})`;
    loadMoreBtn.onclick = () => {
      // Remove the Load More button
      loadMoreBtn.remove();
      // Load next batch
      displayQuizzBatch(topic, allQuizzes, maxToShow, 5);
    };
    container.appendChild(loadMoreBtn);
  }
}

function loadMoreQuizzes(topic, allQuizzes) {
  const container = document.getElementById('quizzes');
  
  // Remove the old Load More button
  const buttons = container.querySelectorAll('button');
  let loadMoreBtn = null;
  buttons.forEach(btn => {
    if (btn.textContent.includes('Load More')) {
      loadMoreBtn = btn;
    }
  });
  
  if (loadMoreBtn) {
    loadMoreBtn.remove();
  }
  
  quizzesShown += 5; // Load 5 more
  if (quizzesShown > allQuizzes.length) {
    quizzesShown = allQuizzes.length; // Cap at total quizzes
  }
  
  const displayedQuizzes = allQuizzes.slice(quizzesShown - 5, quizzesShown);
  
  displayedQuizzes.forEach(qName => {
    const btn = document.createElement('button');
    btn.className = "relative bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white font-bold py-6 rounded-lg transition duration-200 text-center";
    
    // Find score for this quiz
    const scoreRecord = userScores.find(s => s.topic === topic && s.quiz === qName);
    const percentage = scoreRecord ? Math.round((scoreRecord.score / scoreRecord.total) * 100) : 0;
    const isPassed = percentage >= 70;
    
    let badge = '';
    if (scoreRecord) {
      badge = isPassed 
        ? `<div class="absolute top-2 right-2 bg-green-500 text-black text-xs font-bold px-2 py-1 rounded">✅ ${percentage}%</div>`
        : `<div class="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">❌ ${percentage}%</div>`;
    }
    
    btn.innerHTML = `${badge}<div class="text-lg">${qName}</div><div class="text-xs text-gray-400 mt-2">${Object.keys(quizzes[topic][qName]).length} Questions</div>`;
    btn.onclick = () => startQuiz(qName, topic);
    container.appendChild(btn);
  });
  
  // Re-add Load More button if there are still more quizzes
  if (quizzesShown < allQuizzes.length) {
    const loadMoreBtn = document.createElement('button');
    loadMoreBtn.className = "col-span-full bg-gradient-to-r from-green-700 to-green-600 hover:from-green-600 hover:to-green-500 text-white font-bold py-4 rounded-lg transition duration-200 text-lg";
    loadMoreBtn.textContent = `📚 Load More Quizzes (${quizzesShown}/${allQuizzes.length})`;
    loadMoreBtn.onclick = () => loadMoreQuizzes(topic, allQuizzes);
    container.appendChild(loadMoreBtn);
  }
}

// Back to topics button
document.getElementById('backBtn').onclick = () => {
  stopTimer();
  quizList.classList.add('hidden');
  quizContainer.classList.add('hidden');
  resultsContainer.classList.add('hidden');
  document.getElementById('topic-selection').classList.remove('hidden');
  resetQuiz();
};

// ==== SECTION 4: START QUIZ ====
function startQuiz(qName, topic) {
  console.log(`🎯 Starting quiz: ${qName} from topic: ${topic}`);
  console.log(`Quizzes object:`, quizzes);
  console.log(`Topic data:`, quizzes[topic]);
  
  // Check if topic exists
  if (!quizzes[topic]) {
    console.error(`❌ Topic not found: ${topic}`);
    alert(`Error: Topic "${topic}" not found in quizzes`);
    return;
  }
  
  // Check if quiz exists
  if (!quizzes[topic][qName]) {
    console.error(`❌ Quiz not found: ${qName} in topic: ${topic}`);
    console.log(`Available quizzes in ${topic}:`, Object.keys(quizzes[topic]));
    alert(`Error: Quiz "${qName}" not found in topic "${topic}"`);
    return;
  }
  
  selectedQuiz = qName;
  selectedTopic = topic;
  quizList.classList.add('hidden');
  quizContainer.classList.remove('hidden');
  resultsContainer.classList.add('hidden');
  
  currentQuizData = quizzes[topic][qName];
  
  // Validate quiz data
  if (!Array.isArray(currentQuizData) || currentQuizData.length === 0) {
    console.error(`❌ Quiz data is invalid:`, currentQuizData);
    alert(`Error: Quiz data is invalid or empty`);
    return;
  }
  
  console.log(`✅ Quiz loaded with ${currentQuizData.length} questions`);
  
  currentQuestion = 0;
  score = 0;
  
  // Calculate total time for entire quiz
  totalTime = currentQuizData.length * timePerQuestion;
  timeLeft = totalTime;
  
  showQuestion();
}

// ==== SECTION 5: SHOW QUESTION WITH PROGRESS ====
function showQuestion() {
  // Validate current quiz data
  if (!currentQuizData || !Array.isArray(currentQuizData) || currentQuizData.length === 0) {
    console.error(`❌ Invalid currentQuizData:`, currentQuizData);
    alert("Error: Quiz data is not available");
    return;
  }
  
  // Validate current question index
  if (currentQuestion < 0 || currentQuestion >= currentQuizData.length) {
    console.error(`❌ Invalid question index: ${currentQuestion}, total questions: ${currentQuizData.length}`);
    return;
  }
  
  const q = currentQuizData[currentQuestion];
  
  // Validate question structure
  if (!q || !q.question || !Array.isArray(q.options) || !q.answer) {
    console.error(`❌ Invalid question structure:`, q);
    alert("Error: Question data is invalid");
    return;
  }
  
  const totalQuestions = currentQuizData.length;
  const progressPercent = Math.round(((currentQuestion) / totalQuestions) * 100);
  
  console.log(`📝 Question ${currentQuestion + 1}/${totalQuestions}: ${q.question.substring(0, 50)}...`);
  
  // Update progress bar
  document.getElementById('progressNum').textContent = currentQuestion + 1;
  document.getElementById('totalNum').textContent = totalQuestions;
  document.getElementById('progressPercent').textContent = progressPercent + '%';
  document.getElementById('progressBar').style.width = progressPercent + '%';
  
  document.getElementById('question').textContent = q.question;
  document.getElementById('options-container').innerHTML = '';
  
  const optionsContainer = document.getElementById('options-container');
  
  q.options.forEach((opt, index) => {
    if (!opt) {
      console.warn(`⚠️ Empty option at index ${index}`);
      return;
    }
    
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.className = "option w-full p-4 rounded-lg bg-gray-800 hover:bg-gray-700 text-white text-left font-semibold transition duration-200 border-2 border-transparent";
    
    btn.onclick = () => selectAnswer(btn, opt, q.answer, optionsContainer, totalQuestions);
    optionsContainer.appendChild(btn);
  });
  
  nextBtn.classList.add('hidden');
  
  // Start timer for this question
  startTimer();
}

// ==== SECTION 6: SELECT ANSWER ====
function selectAnswer(btn, selected, correctAnswer, container, totalQuestions) {
  const allButtons = document.querySelectorAll('.option');
  
  // Disable all buttons
  allButtons.forEach(b => b.disabled = true);
  
  // Mark selected answer
  if (selected === correctAnswer) {
    btn.classList.add('bg-green-600', 'border-green-400');
    score++;
  } else {
    btn.classList.add('bg-red-600', 'border-red-400');
  }
  
  // Highlight correct answer
  allButtons.forEach(b => {
    if (b.textContent === correctAnswer && b !== btn) {
      b.classList.add('bg-green-600', 'border-green-400');
    }
  });
  
  nextBtn.classList.remove('hidden');
}

// ==== SECTION 7: NEXT QUESTION ====
nextBtn.onclick = () => {
  stopTimer();
  const totalQuestions = currentQuizData.length;
  currentQuestion++;
  
  if (currentQuestion < totalQuestions) {
    showQuestion();
  } else {
    // Check if guest before showing results
    if (isGuest) {
      showRegisterPrompt();
      // Reset for another attempt without registration
      resultsContainer.classList.add('hidden');
      quizContainer.classList.remove('hidden');
      currentQuestion = 0;
      score = 0;
      showQuestion();
    } else {
      showResults();
    }
  }
};

// ==== SECTION 8: SHOW RESULTS ====
function showResults() {
  stopTimer();
  quizContainer.classList.add('hidden');
  resultsContainer.classList.remove('hidden');
  
  const totalQuestions = currentQuizData.length;
  const percentage = Math.round((score / totalQuestions) * 100);
  const isPassed = percentage >= 70;
  
  // Final score display
  document.getElementById('finalScore').textContent = score + '/' + totalQuestions;
  
  // Progress bar
  const progressWidth = (score / totalQuestions) * 100;
  document.getElementById('finalProgressBar').style.width = progressWidth + '%';
  document.getElementById('finalProgressBar').className = isPassed ? 'bg-green-500 h-4 rounded-full' : 'bg-red-500 h-4 rounded-full';
  
  // Status
  document.getElementById('resultStatus').textContent = isPassed ? '✅ PASSED' : '❌ FAILED';
  document.getElementById('resultStatus').className = isPassed ? 'text-green-400' : 'text-red-400';
  
  // Statistics
  document.getElementById('percentDisplay').textContent = percentage + '%';
  document.getElementById('passFailDisplay').textContent = isPassed ? 'PASSED' : 'FAILED';
  document.getElementById('passFailDisplay').className = isPassed ? 'text-green-400' : 'text-red-400';
  document.getElementById('correctDisplay').textContent = score;
  
  // Save score to server
  saveScoreToServer(score);
  
  // Retake quiz button
  document.getElementById('retakeBtn').onclick = () => {
    resultsContainer.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    currentQuestion = 0;
    score = 0;
    showQuestion();
  };
  
  // Back to quizzes button
  document.getElementById('backDashBtn').onclick = () => {
    resultsContainer.classList.add('hidden');
    quizList.classList.remove('hidden');
    showQuizList(selectedTopic);
    resetQuiz();
  };
}

// ==== SECTION 9: SAVE SCORE TO SERVER ====
function saveScoreToServer(finalScore) {
  // Don't save guest scores
  if (isGuest) {
    console.log('Guest mode - score not saved');
    return;
  }
  
  const scoreData = {
    username: username,
    topic: selectedTopic,
    quiz: selectedQuiz,
    score: finalScore,
    total: currentQuizData.length
  };
  
  fetch('/save-score', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(scoreData)
  }).then(() => {
    // Add to local cache
    userScores.push(scoreData);
  }).catch(err => console.log('Error saving score:', err));
}

// ==== SECTION 10: RESET QUIZ ====
function resetQuiz() {
  currentQuestion = 0;
  score = 0;
  selectedQuiz = null;
  selectedTopic = null;
  currentQuizData = [];
  nextBtn.classList.add('hidden');
  stopTimer();
}

// ==== SECTION 11: SUBMIT QUIZ (When time runs out) ====
function submitQuiz() {
  stopTimer();
  showResults();
}
