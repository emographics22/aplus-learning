// =======================
// QUESTION BANK
// =======================

const questionBank = {
  core1: [
    {
      image: "images/rj45.jpg",
      question: "What is the name of this network connector commonly used for Ethernet cables?",
      answers: ["rj45", "rj-45", "ethernet connector"]
    },
    {
      image: "images/hdmi.jpg",
      question: "This cable is used to connect to modern displays and TVs. What is it called?",
      answers: ["hdmi", "high-definition multimedia interface"]
    },
    {
      image: "images/vga.jpg",
      question: "This video connector is older and found on legacy monitors. What standard is this?",
      answers: ["vga", "video graphics array"]
    },
    {
      image: "images/ram.jpg",
      question: "This component is installed directly on the motherboard and stores temporary data while the computer runs. What is it?",
      answers: ["ram", "memory", "dram"]
    },
    {
      image: "images/psu.jpg",
      question: "This device supplies power to all components inside the computer. What is this called?",
      answers: ["power supply", "psu", "power supply unit"]
    },
    {
      image: "images/printer.jpg",
      question: "A user cannot print their documents. Which output device shown is likely having the problem?",
      answers: ["printer"]
    },
    {
      image: "images/motherboard.jpg",
      question: "This is the main circuit board where all computer components connect. What is it called?",
      answers: ["motherboard", "mainboard"]
    },
    {
      image: "images/ssd.jpg",
      question: "This storage device stores files and data. It has no moving parts and is faster than older drives. What type is it?",
      answers: ["ssd", "solid state drive"]
    },
    {
      image: "images/usb.jpg",
      question: "This is a common port used to connect keyboards, mice, and removable storage. What standard is this?",
      answers: ["usb", "universal serial bus"]
    },
    {
      image: "images/crimper.jpg",
      question: "This tool is used by network technicians to attach connectors to the ends of network cables. What is it called?",
      answers: ["crimper", "cable crimper"]
    }
  ],

  core2: [
    {
      image: "images/antivirus.jpg",
      question: "This security software scans files and programs to detect and remove viruses. What is it called?",
      answers: ["antivirus", "anti-virus", "virus protection"]
    },
    {
      image: "images/firewall.jpg",
      question: "This security tool monitors and controls incoming and outgoing network traffic on a computer. What is it?",
      answers: ["firewall"]
    },
    {
      image: "images/windows.jpg",
      question: "This operating system is created by Microsoft and used on most office computers. What is it?",
      answers: ["windows"]
    },
    {
      image: "images/linux.jpg",
      question: "This is a free, open-source operating system popular on servers and developer machines. What is it?",
      answers: ["linux"]
    },
    {
      image: "images/taskmanager.jpg",
      question: "In Windows, this tool shows running programs and how much memory and CPU each one is using. What is it?",
      answers: ["task manager", "taskmanager"]
    },
    {
      image: "images/cmd.jpg",
      question: "This is a text-based interface where IT professionals type commands to control the computer. What is it called?",
      answers: ["command prompt", "cmd", "command line"]
    },
    {
      image: "images/malware.jpg",
      question: "This is harmful software designed to damage or compromise a computer system. What term describes it?",
      answers: ["malware", "virus", "spyware"]
    },
    {
      image: "images/backup.jpg",
      question: "Creating this protects against data loss by storing copies of important files. What is the process called?",
      answers: ["backup", "data backup"]
    },
    {
      image: "images/password.jpg",
      question: "This secret code is required to log into computer accounts and protect from unauthorized access. What is it?",
      answers: ["password", "authentication"]
    },
    {
      image: "images/update.jpg",
      question: "The system regularly installs these to fix bugs and security vulnerabilities. What are they called?",
      answers: ["update", "patch", "security update"]
    },
    {
      image: "images/remote.jpg",
      question: "This technology allows a technician to access and control a computer from another location. What is it called?",
      answers: ["remote access", "remote desktop", "rdp"]
    },
    {
      image: "images/encryption.jpg",
      question: "This process converts data into a code so only authorized people with the key can read it. What is it called?",
      answers: ["encryption", "encrypt"]
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
let totalTime = 0;
let userAnswers = [];

// Guest mode detection
let isGuest = !localStorage.getItem('username');

// Display username
document.getElementById('userDisplay').textContent = localStorage.getItem('username') || 'Guest';

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
      </div>
    `;
  });
}

// =======================
// TIMER (30 sec per question - TOTAL TIME FOR ALL QUESTIONS)
// =======================

function startTimer() {
  // Calculate total time: 30 seconds per question
  totalTime = selectedQuestions.length * 30;
  timeLeft = totalTime;

  if (timer) clearInterval(timer);

  timer = setInterval(() => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    document.getElementById('timer').textContent =
      `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    // Change color when time is low (under 1 minute)
    let timerBox = document.querySelector('.timer-box');
    if (timeLeft <= 60) {
      timerBox.classList.add('timer-warning');
    }

    timeLeft--;

    // When time is up
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

  // Check if guest before showing results
  if (isGuest) {
    showRegisterPrompt();
    // Go back to selection for guest to try again
    setTimeout(() => {
      backToSelection();
    }, 1500);
    return;
  }

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
  // Don't save guest scores
  if (isGuest) {
    console.log('Guest mode - lab score not saved');
    return;
  }

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
