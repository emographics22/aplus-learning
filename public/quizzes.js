// quizzes.js - Uses generated question bank with 50 quizzes x 2 cores = 2,500 questions

// Wait for generatedQuizzes to be ready
let quizzes = {};
let quizzesReady = false;

function initializeQuizzes() {
  console.log("🔄 Initializing quizzes...");
  console.log("generatedQuizzes available:", typeof generatedQuizzes !== 'undefined');
  
  if (typeof generatedQuizzes !== 'undefined' && generatedQuizzes) {
    // Check if quizzes actually have data (not just empty objects)
    const core1QuizCount = Object.keys(generatedQuizzes["Core 1 → 220-1201"] || {}).length;
    const core2QuizCount = Object.keys(generatedQuizzes["Core 2 → 220-1202"] || {}).length;
    
    console.log(`Core 1 quizzes: ${core1QuizCount}, Core 2 quizzes: ${core2QuizCount}`);
    
    if (core1QuizCount > 0 && core2QuizCount > 0) {
      quizzes = generatedQuizzes;
      console.log(`✅ ✅ ✅ Quizzes initialized with ${Object.keys(quizzes).length} topics`);
      console.log(`✅ Core 1: ${core1QuizCount} quizzes`);
      console.log(`✅ Core 2: ${core2QuizCount} quizzes`);
      
      // Shuffle quizzes on load
      quizzes = shuffleQuizzes(quizzes);
      quizzesReady = true;
    } else {
      console.error("❌ Quizzes not populated yet (still empty), retrying in 200ms...");
      setTimeout(initializeQuizzes, 200);
    }
  } else {
    console.error("❌ generatedQuizzes not available yet, retrying in 200ms...");
    setTimeout(initializeQuizzes, 200);
  }
}

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
