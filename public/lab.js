// =======================
// QUESTION BANK
// =======================

const questionBank = {
  core1: [
    {
      image: "images/rj45.jpg",
      question: "Which connector is shown? Used for Ethernet networking.",
      answers: ["rj45", "rj-45", "ethernet connector"]
    },
    {
      image: "images/hdmi.jpg",
      question: "What type of cable is this? Used for audio and video transmission.",
      answers: ["hdmi", "high-definition multimedia interface"]
    },
    {
      image: "images/vga.jpg",
      question: "Identify this legacy video port. What is the connector type?",
      answers: ["vga", "video graphics array"]
    },
    {
      image: "images/ram.jpg",
      question: "Which component is shown? This is volatile memory installed on the motherboard.",
      answers: ["ram", "memory", "dram"]
    },
    {
      image: "images/psu.jpg",
      question: "What is this device? It converts AC power from wall outlet to DC power for components.",
      answers: ["power supply", "psu", "power supply unit"]
    },
    {
      image: "images/printer.jpg",
      question: "A user reports they cannot print documents. Identify the device shown.",
      answers: ["printer"]
    },
    {
      image: "images/motherboard.jpg",
      question: "Identify this main circuit board. All components connect to this.",
      answers: ["motherboard", "mainboard"]
    },
    {
      image: "images/ssd.jpg",
      question: "What is the primary function of this storage device? It's faster than HDD.",
      answers: ["ssd", "solid state drive", "storage"]
    },
    {
      image: "images/usb.jpg",
      question: "Identify this universal port used for data and power transfer.",
      answers: ["usb", "universal serial bus"]
    },
    {
      image: "images/crimper.jpg",
      question: "What is the purpose of this networking tool? Used to attach connectors to cables.",
      answers: ["crimper", "cable crimper", "rj45 crimper"]
    }
  ],

  core2: [
    {
      image: "images/antivirus.jpg",
      question: "What is the primary purpose of this software? Protects against malicious code.",
      answers: ["antivirus", "anti-virus", "virus protection"]
    },
    {
      image: "images/firewall.jpg",
      question: "Identify this security tool. Blocks unauthorized network access.",
      answers: ["firewall"]
    },
    {
      image: "images/windows.jpg",
      question: "Which operating system is shown? Developed by Microsoft.",
      answers: ["windows"]
    },
    {
      image: "images/linux.jpg",
      question: "Which operating system is this? Open-source alternative to Windows.",
      answers: ["linux"]
    },
    {
      image: "images/taskmanager.jpg",
      question: "What is this Windows utility used for? Manages running processes and applications.",
      answers: ["task manager", "taskmanager"]
    },
    {
      image: "images/cmd.jpg",
      question: "Identify this command-line interface. Used to execute system commands.",
      answers: ["command prompt", "cmd", "command line"]
    },
    {
      image: "images/malware.jpg",
      question: "What type of threat is shown? Malicious software that damages systems.",
      answers: ["malware", "virus", "spyware"]
    },
    {
      image: "images/backup.jpg",
      question: "What is the purpose of this process? Creates copies of important data.",
      answers: ["backup", "data backup"]
    },
    {
      image: "images/password.jpg",
      question: "What security measure is shown? Required for user authentication and access control.",
      answers: ["password", "authentication"]
    },
    {
      image: "images/update.jpg",
      question: "Why is this important for system security? Patches vulnerabilities and fixes bugs.",
      answers: ["update", "patch", "security update"]
    },
    {
      image: "images/remote.jpg",
      question: "What technology allows access to another computer over network connection?",
      answers: ["remote access", "remote desktop", "rdp"]
    },
    {
      image: "images/encryption.jpg",
      question: "What does this process do? Converts data into secure code to protect privacy.",
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
