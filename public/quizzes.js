// quizzes.js - Uses generated question bank with 50 quizzes x 2 cores = 2,500 questions

// Initialize immediately with retry mechanism
let quizzes = {};
let quizzesReady = false;
let initAttempts = 0;

function initializeQuizzes() {
  initAttempts++;
  
  if (typeof generatedQuizzes !== 'undefined' && generatedQuizzes) {
    const core1QuizCount = Object.keys(generatedQuizzes["Core 1 → 220-1201"] || {}).length;
    const core2QuizCount = Object.keys(generatedQuizzes["Core 2 → 220-1202"] || {}).length;
    
    if (core1QuizCount > 0 && core2QuizCount > 0) {
      quizzes = generatedQuizzes;
      quizzesReady = true;
      console.log("🎉🎉🎉 QUIZZES READY!");
      console.log(`✅ Core 1: ${core1QuizCount} quizzes`);
      console.log(`✅ Core 2: ${core2QuizCount} quizzes`);
      shuffleQuizzesData();
      return;
    }
  }
  
  // Retry with exponential backoff
  const delay = Math.min(50 * initAttempts, 500);
  console.log(`⏳ Quiz init attempt ${initAttempts} - retrying in ${delay}ms...`);
  setTimeout(initializeQuizzes, delay);
}

function shuffleQuizzesData() {
  if (!quizzes || Object.keys(quizzes).length === 0) return;
  quizzes = shuffleQuizzes(quizzes);
  console.log("✅ Quiz options shuffled");
}

// ⚡ START INITIALIZATION IMMEDIATELY ⚡
initializeQuizzes();

// Function to shuffle array
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Function to shuffle quiz options
function shuffleQuizzes(quizzesObj) {
  const shuffled = {};
  
  for (const coreName in quizzesObj) {
    shuffled[coreName] = {};
    
    for (const quizName in quizzesObj[coreName]) {
      if (Array.isArray(quizzesObj[coreName][quizName])) {
        shuffled[coreName][quizName] = quizzesObj[coreName][quizName].map(q => {
          if (q && q.options && Array.isArray(q.options)) {
            const shuffledOptions = shuffleArray(q.options);
            return {
              ...q,
              options: shuffledOptions
            };
          }
          return q;
        });
      } else {
        shuffled[coreName][quizName] = quizzesObj[coreName][quizName];
      }
    }
  }
  
  return shuffled;
}

// Initialize quizzes immediately
initializeQuizzes();
