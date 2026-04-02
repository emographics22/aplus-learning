// =======================
// QUESTION BANK
// =======================

const questionBank = {
  core1: [
    {
      image: "images/rj45.jpg",
      question: "A technician needs to create a Cat6 network cable with this connector. What is the maximum distance this cable can transmit data without degradation?",
      answers: ["100 meters", "100m", "328 feet"]
    },
    {
      image: "images/hdmi.jpg",
      question: "A user has an older monitor that only supports this audio/video standard, but needs 4K resolution. What is the limitation of this connection type?",
      answers: ["hdmi 1.4", "can't support 4k", "not enough bandwidth"]
    },
    {
      image: "images/vga.jpg",
      question: "A company still uses this legacy connector on their 15-year-old CRT monitors. Why should this be replaced for a modern workstation?",
      answers: ["analog signal", "not digital", "outdated", "no longer supported"]
    },
    {
      image: "images/ram.jpg",
      question: "A computer system with 16 GB of this component is running slowly. Which troubleshooting step should be performed first in Windows?",
      answers: ["check memory usage", "task manager", "resource monitor"]
    },
    {
      image: "images/psu.jpg",
      question: "An IT manager must replace this 550W unit in a server. The new high-end GPU requires 750W. What will happen if they use an undersized replacement?",
      answers: ["system shutdown", "power failure", "restart", "instability"]
    },
    {
      image: "images/printer.jpg",
      question: "Multiple users cannot print to this device via network. The device shows offline. Which OSI layer should you troubleshoot first?",
      answers: ["layer 3", "network layer", "ip", "tcp/ip"]
    },
    {
      image: "images/motherboard.jpg",
      question: "A system exhibits random crashes. POST completes successfully but issues occur under load. Which component on this board likely needs replacement?",
      answers: ["capacitors", "vrm", "power delivery", "vreg"]
    },
    {
      image: "images/ssd.jpg",
      question: "This storage device shows degraded performance after heavy use over 2 years. What maintenance technique can restore performance?",
      answers: ["trim", "garbage collection", "wear leveling"]
    },
    {
      image: "images/usb.jpg",
      question: "A conference room has devices requiring both USB 3.0 and USB 2.0 connectivity simultaneously. Which port type supports backward compatibility?",
      answers: ["usb 3.0", "usb 3", "type a", "type-a"]
    },
    {
      image: "images/crimper.jpg",
      question: "A technician needs to create 50 network cables. What is the correct pin order standard for this tool when making Cat6 cables?",
      answers: ["568b", "568a", "either 568a or 568b"]
    }
  ],

  core2: [
    {
      image: "images/antivirus.jpg",
      question: "An employee's system has this protection enabled with real-time scanning. The system slows to a crawl during scanning. What configuration change is appropriate?",
      answers: ["schedule scans", "off-peak hours", "disable full scan"]
    },
    {
      image: "images/firewall.jpg",
      question: "The corporate this security tool is blocking legitimate business traffic on port 3389. Which profile should be modified to allow this remote access?",
      answers: ["inbound", "inbound rules", "allow inbound"]
    },
    {
      image: "images/windows.jpg",
      question: "An organization runs this OS but needs POSIX compliance for critical applications. How should they implement this compatibility?",
      answers: ["wsl", "windows subsystem for linux", "linux subsystem"]
    },
    {
      image: "images/linux.jpg",
      question: "This OS-based server requires a security update. What command views the current kernel version and determines if reboot is needed?",
      answers: ["uname", "uname -r", "kernel version"]
    },
    {
      image: "images/taskmanager.jpg",
      question: "An application consumes 95% CPU and hangs the system. Besides terminating it, what determines if the process can be restarted safely?",
      answers: ["startup type", "service dependencies", "restart recovery"]
    },
    {
      image: "images/cmd.jpg",
      question: "A system administrator must disable DHCP and set static IP from this interface. Which command applies TCP/IP settings permanently?",
      answers: ["ipconfig /setclassid", "netsh", "network settings"]
    },
    {
      image: "images/malware.jpg",
      question: "A system exhibits unexplained network activity and popup ads despite having protection active. What type of sophisticated threat is likely present?",
      answers: ["rootkit", "trojan", "spyware", "adware"]
    },
    {
      image: "images/backup.jpg",
      question: "A company performs daily incremental backups but loses 5 days of data in a ransomware attack. Why is backup strategy insufficient?",
      answers: ["offline copy", "immutable", "air-gapped", "no versioning"]
    },
    {
      image: "images/password.jpg",
      question: "NIST guidelines recommend this security control for sensitive systems. Which implementation adds a second verification factor beyond typed credentials?",
      answers: ["mfa", "multi-factor authentication", "2fa"]
    },
    {
      image: "images/update.jpg",
      question: "An enterprise delays this critical monthly process due to system stability concerns. What is the actual security risk of this delay?",
      answers: ["zero-day exploit", "vulnerability", "unpatched systems"]
    },
    {
      image: "images/remote.jpg",
      question: "A technician requires this access to fix a user's computer remotely. What security control should be enabled to prevent credential theft?",
      answers: ["network encryption", "tls", "ssl", "vpn"]
    },
    {
      image: "images/encryption.jpg",
      question: "Full disk this security measure protects data at rest, but system still performs slowly. What additional configuration is needed to prevent performance impact?",
      answers: ["hardware acceleration", "tpm", "aes-ni"]
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
