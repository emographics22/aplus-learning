// quizzes.js - Uses generated question bank with 50 quizzes x 2 cores = 2,500 questions

// Import generated quizzes from question-bank.js
// The generatedQuizzes object contains 50 quizzes per topic with 25 unique questions each
let quizzes = generatedQuizzes || {
  "Core 1 → 220-1201": {},
  "Core 2 → 220-1202": {}
};

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
      shuffled[coreName][quizName] = quizzesObj[coreName][quizName].map(q => {
        const shuffledOptions = shuffleArray(q.options);
        return {
          ...q,
          options: shuffledOptions
        };
      });
    }
  }
  
  return shuffled;
}

// Shuffle quizzes on load
quizzes = shuffleQuizzes(quizzes);

console.log(`✅ Quizzes loaded: ${Object.keys(quizzes).length} topics`);
