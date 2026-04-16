// quizzes.js - Load Pre-generated Quiz JSON Files from organized folders

// Initialize quizzes object
let quizzes = {};
let quizzesReady = false;

// Function to load quizzes from JSON files
async function loadQuizzesFromFiles() {
  try {
    console.log("📂 Loading quizzes from organized folders...");
    
    const core1Quizzes = {};
    const core2Quizzes = {};
    
    // Load Core 1 quizzes (50 files)
    for (let i = 1; i <= 50; i++) {
      const filename = `quizzes/core1/core1_quiz${i}.json`;
      try {
        const response = await fetch(filename);
        if (response.ok) {
          const data = await response.json();
          // data is already an array of questions
          core1Quizzes[`Quiz ${i}`] = data;
        } else {
          console.warn(`⚠️ Could not load ${filename}`);
        }
      } catch (e) {
        console.warn(`⚠️ Error loading ${filename}:`, e.message);
      }
    }
    
    // Load Core 2 quizzes (50 files)
    for (let i = 1; i <= 50; i++) {
      const filename = `quizzes/core2/core2_quiz${i}.json`;
      try {
        const response = await fetch(filename);
        if (response.ok) {
          const data = await response.json();
          // data is already an array of questions
          core2Quizzes[`Quiz ${i}`] = data;
        } else {
          console.warn(`⚠️ Could not load ${filename}`);
        }
      } catch (e) {
        console.warn(`⚠️ Error loading ${filename}:`, e.message);
      }
    }
    
    // Populate quizzes object
    quizzes = {
      "Core 1 → 220-1201": core1Quizzes,
      "Core 2 → 220-1202": core2Quizzes
    };
    
    quizzesReady = true;
    
    console.log("✅ QUIZZES LOADED FROM FILES!");
    console.log(`✅ Core 1: ${Object.keys(core1Quizzes).length} quizzes loaded`);
    console.log(`✅ Core 2: ${Object.keys(core2Quizzes).length} quizzes loaded`);
    
    return quizzes;
  } catch (error) {
    console.error("❌ Error loading quizzes from files:", error);
    return null;
  }
}

// Start loading quizzes immediately
loadQuizzesFromFiles();
