// =======================
// QUESTION BANK
// =======================

const questionBank = {
  core1: [
    {
      image: "images/rj45.jpg",
      question: "Identify this connector",
      answers: ["rj45", "ethernet"]
    },
    {
      image: "images/hdmi.jpg",
      question: "What is the use of this port?",
      answers: ["video", "audio", "display"]
    },
    {
      image: "images/vga.jpg",
      question: "Identify this port",
      answers: ["vga"]
    },
    {
      image: "images/ram.jpg",
      question: "Where is this component found?",
      answers: ["motherboard", "computer"]
    },
    {
      image: "images/psu.jpg",
      question: "What is the function of this device?",
      answers: ["power supply", "convert power"]
    },
    {
      image: "images/router.jpg",
      question: "What is this device used for?",
      answers: ["network", "internet", "routing"]
    },
    {
      image: "images/switch.jpg",
      question: "Identify this networking device",
      answers: ["switch"]
    },
    {
      image: "images/crimper.jpg",
      question: "What is the use of this tool?",
      answers: ["crimp", "attach connector"]
    },
    {
      image: "images/printer.jpg",
      question: "User cannot print. Identify the device shown.",
      answers: ["printer"]
    },
    {
      image: "images/motherboard.jpg",
      question: "Where is this found?",
      answers: ["computer", "system unit"]
    },
    {
      image: "images/ssd.jpg",
      question: "What is the purpose of this device?",
      answers: ["storage", "data storage"]
    },
    {
      image: "images/usb.jpg",
      question: "Identify this port",
      answers: ["usb"]
    },
    {
      image: "images/fiber.jpg",
      question: "What type of cable is this?",
      answers: ["fiber", "fiber optic"]
    }
  ],

  core2: [
    {
      image: "images/antivirus.jpg",
      question: "What is the purpose of this tool?",
      answers: ["security", "virus protection", "antivirus"]
    },
    {
      image: "images/firewall.jpg",
      question: "Blocks unauthorized access. Identify it.",
      answers: ["firewall"]
    },
    {
      image: "images/windows.jpg",
      question: "Identify this operating system",
      answers: ["windows"]
    },
    {
      image: "images/linux.jpg",
      question: "Identify this operating system",
      answers: ["linux"]
    },
    {
      image: "images/taskmanager.jpg",
      question: "What is this tool used for?",
      answers: ["manage processes", "task manager"]
    },
    {
      image: "images/cmd.jpg",
      question: "Identify this tool",
      answers: ["command prompt", "cmd"]
    },
    {
      image: "images/malware.jpg",
      question: "This software harms your system. What is it?",
      answers: ["malware", "virus"]
    },
    {
      image: "images/backup.jpg",
      question: "What is the purpose of this process?",
      answers: ["backup", "data protection"]
    },
    {
      image: "images/password.jpg",
      question: "What is this used for?",
      answers: ["security", "authentication"]
    },
    {
      image: "images/update.jpg",
      question: "Why is this important?",
      answers: ["security", "updates", "fix bugs"]
    },
    {
      image: "images/remote.jpg",
      question: "User accesses another computer remotely. What is this?",
      answers: ["remote access", "remote desktop"]
    },
    {
      image: "images/encryption.jpg",
      question: "What does this process do?",
      answers: ["encrypt", "security", "protect data"]
    }
  ]
};

// =======================
// GLOBAL VARIABLES
// =======================

let selectedQuestions = [];
let selectedCore = null;
let timer = null;
let timeLeft = 0;
let userAnswers = [];

// Display username
document.getElementById('userDisplay').textContent = localStorage.getItem('username') || 'Student';

// =======================
// START LAB
// =======================

function startLab(core) {
  selectedCore = core;
  
  let questions = questionBank[core];

  if (!questions || questions.length === 0) {
    alert("No questions available for this core");
    return;
  }

  // RANDOM 10 QUESTIONS
  selectedQuestions = shuffleArray([...questions]).slice(0, 10);
  userAnswers = new Array(selectedQuestions.length).fill('');

  // Show quiz screen
  document.getElementById('lab-selection').classList.add('hidden');
  document.getElementById('lab-quiz').classList.remove('hidden');

  displayQuestions();
  startTimer();
}

// =======================
// DISPLAY QUESTIONS
// =======================

function displayQuestions() {
  let quizDiv = document.getElementById('quiz');
  quizDiv.innerHTML = '';

  selectedQuestions.forEach((q, index) => {
    let imageHtml = q.image ? `<img src="${q.image}" alt="Question ${index + 1}" class="w-32 h-32 mx-auto mb-4 rounded-lg bg-gray-700 object-cover">` : '';
    
    quizDiv.innerHTML += `
      <div class="question mb-8 pb-8 border-b border-gray-700">
        <p class="text-gray-400 text-sm mb-2">Question ${index + 1} of ${selectedQuestions.length}</p>
        ${imageHtml}
        <p class="text-xl text-yellow-300 font-semibold mb-4">${q.question}</p>
        <input 
          type="text" 
          id="q${index}" 
          placeholder="Type your answer here..." 
          class="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-yellow-400 focus:outline-none"
          onkeyup="userAnswers[${index}] = this.value"
        >
        <p class="text-gray-500 text-xs mt-2">Type: ${q.type.toUpperCase()}</p>
      </div>
    `;
  });
}

// =======================
// TIMER (30 sec per question)
// =======================

function startTimer() {
  timeLeft = selectedQuestions.length * 30;

  timer = setInterval(() => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    document.getElementById('timer').textContent =
      `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    // Change color when time is low
    let timerBox = document.querySelector('.timer-box');
    if (timeLeft <= 60) {
      timerBox.classList.add('timer-warning');
    }

    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(timer);
      submitLab();
    }
  }, 1000);
}

// =======================
// SUBMIT + AUTO-MARKING
// =======================

function submitLab() {
  clearInterval(timer);

  let score = 0;
  let answers = [];

  selectedQuestions.forEach((q, index) => {
    let userAnswer = document.getElementById(`q${index}`).value.toLowerCase().trim();

    let correct = q.answers.some(ans =>
      userAnswer.includes(ans.toLowerCase())
    );

    answers.push({
      question: q.question,
      userAnswer: userAnswer || '(No answer)',
      correct: correct,
      acceptedAnswers: q.answers.join(', ')
    });

    if (correct) score++;
  });

  // Show results
  showResults(score, answers);
}

// =======================
// SHOW RESULTS
// =======================

function showResults(score, answers) {
  document.getElementById('lab-quiz').classList.add('hidden');
  document.getElementById('results-container').classList.remove('hidden');

  const totalQuestions = selectedQuestions.length;
  const percentage = Math.round((score / totalQuestions) * 100);
  const isPassed = percentage >= 70;

  // Score display
  document.getElementById('finalScore').textContent = `${score}/${totalQuestions}`;

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

  // Answer review
  let reviewHtml = '';
  answers.forEach((ans, index) => {
    let statusClass = ans.correct ? 'text-green-400' : 'text-red-400';
    let statusIcon = ans.correct ? '✓' : '✗';
    reviewHtml += `
      <div class="bg-gray-700 p-4 rounded-lg">
        <p class="font-semibold mb-2"><span class="${statusClass}">${statusIcon}</span> Q${index + 1}: ${ans.question}</p>
        <p class="text-gray-300 text-sm mb-2">Your answer: <span class="text-yellow-400">${ans.userAnswer}</span></p>
        <p class="text-gray-400 text-sm">Accepted: ${ans.acceptedAnswers}</p>
      </div>
    `;
  });
  document.getElementById('answerReview').innerHTML = reviewHtml;

  // Save lab score
  saveLabScore(score, totalQuestions);
}

// =======================
// SAVE LAB SCORE
// =======================

function saveLabScore(score, total) {
  const username = localStorage.getItem('username') || 'unknown';
  const scoreData = {
    username: username,
    type: 'lab',
    core: selectedCore,
    score: score,
    total: total,
    timestamp: new Date().toISOString()
  };

  fetch('/save-score', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(scoreData)
  }).catch(err => console.log('Error saving lab score:', err));
}

// =======================
// RETAKE LAB
// =======================

function retakeLab() {
  document.getElementById('results-container').classList.add('hidden');
  document.getElementById('lab-quiz').classList.remove('hidden');

  displayQuestions();
  startTimer();
}

// =======================
// BACK TO SELECTION
// =======================

function backToSelection() {
  clearInterval(timer);
  
  document.getElementById('lab-selection').classList.remove('hidden');
  document.getElementById('lab-quiz').classList.add('hidden');
  document.getElementById('results-container').classList.add('hidden');

  selectedQuestions = [];
  selectedCore = null;
  userAnswers = [];
}

// =======================
// SHUFFLE ARRAY
// =======================

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
