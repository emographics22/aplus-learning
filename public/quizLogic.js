// quizLogic.js
const topicContainer = document.getElementById('topics');
const quizList = document.getElementById('quiz-list');
const quizzesDiv = document.getElementById('quizzes');
const quizContainer = document.getElementById('quiz-container');
const nextBtn = document.getElementById('next-btn');
const scoreText = document.getElementById('score-text');

let selectedTopic;
let selectedQuiz;
let currentQuestion = 0;
let score = 0;

// Show topics
Object.keys(quizzes).forEach(topic => {
  const btn = document.createElement('button');
  btn.textContent = topic;
  btn.className = "w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 rounded mb-2 transition duration-200";
  btn.onclick = () => {
    selectedTopic = topic;
    showQuizList(topic);
  };
  topicContainer.appendChild(btn);
});

// Show quizzes for selected topic
function showQuizList(topic) {
  document.getElementById('topic-selection').classList.add('hidden');
  quizList.classList.remove('hidden');
  quizzesDiv.innerHTML = '';
  Object.keys(quizzes[topic]).forEach(qName => {
    const btn = document.createElement('button');
    btn.textContent = qName;
    btn.className = "w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 rounded mb-2 transition duration-200";
    btn.onclick = () => startQuiz(qName);
    quizzesDiv.appendChild(btn);
  });
}

// Start selected quiz
function startQuiz(qName) {
  selectedQuiz = qName;
  quizList.classList.add('hidden');
  quizContainer.classList.remove('hidden');
  nextBtn.classList.add('hidden'); // hide Next until selection
  currentQuestion = 0;
  score = 0;
  showQuestion();
}

// Show question
function showQuestion() {
  const qArray = quizzes[selectedTopic][selectedQuiz];
  const q = qArray[currentQuestion];
  
  quizContainer.innerHTML = `
    <h2 class="text-xl text-yellow-400 font-bold mb-4">${q.question}</h2>
    <div class="grid grid-cols-1 gap-3" id="options-container">
      ${q.options.map(opt => `
        <button class="option w-full p-3 rounded bg-gray-800 hover:bg-gray-700 text-white text-left text-lg font-semibold transition duration-200">${opt}</button>`).join('')}
    </div>
  `;

  const optionButtons = document.querySelectorAll(".option");

  optionButtons.forEach(btn => {
    btn.onclick = () => {
      // Disable all buttons
      optionButtons.forEach(b => b.disabled = true);

      // Highlight selected answer
      btn.classList.add("ring-4", "ring-yellow-400");

      // Highlight correct/incorrect answers
      optionButtons.forEach(b => {
        if(b.textContent === q.answer) {
          b.classList.add("bg-green-500", "text-black");
        } else if(b !== btn) {
          b.classList.add("bg-red-500", "text-black");
        }
      });

      // Increment score if correct
      if(btn.textContent === q.answer) score++;

      // Show Next button
      nextBtn.classList.remove('hidden');
    };
  });
}

// Next button click
nextBtn.onclick = () => {
  const qArray = quizzes[selectedTopic][selectedQuiz];
  currentQuestion++;
  nextBtn.classList.add('hidden'); // hide Next until next selection

  if(currentQuestion < qArray.length) {
    showQuestion();
    scoreText.textContent = "";
  } else {
    quizContainer.innerHTML = `
      <div class="text-center">
        <h2 class="text-2xl text-yellow-400 font-bold mb-4">Quiz Finished!</h2>
        <p class="text-white text-lg mb-4">Your score: <span class="font-bold">${score}</span> / ${qArray.length}</p>
        <button id="backBtn" class="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded transition duration-200">
          Back to Dashboard
        </button>
      </div>
    `;
    
    scoreText.textContent = "";

    // Save score in localStorage
    let userScores = JSON.parse(localStorage.getItem('quizScores') || "{}");
    if(!userScores[selectedTopic]) userScores[selectedTopic] = {};
    userScores[selectedTopic][selectedQuiz] = score;
    localStorage.setItem('quizScores', JSON.stringify(userScores));

    // Back to Dashboard button
    document.getElementById('backBtn').onclick = () => {
      window.location.href = 'dashboard.html';
    };
  }
};
