# 📚 Quiz Organization Structure

## Overview
All quiz files have been organized into a clean folder structure for better management and scalability.

## Folder Structure
```
public/
├── quizzes/
│   ├── core1/
│   │   ├── core1_quiz1.json
│   │   ├── core1_quiz2.json
│   │   ├── ...
│   │   └── core1_quiz50.json      (50 quizzes)
│   │
│   └── core2/
│       ├── core2_quiz1.json
│       ├── core2_quiz2.json
│       ├── ...
│       └── core2_quiz50.json      (50 quizzes)
│
├── quizzes.js                      (Loader - loads from organized folders)
├── quizLogic.js                    (Quiz logic and UI)
└── quiz.html                       (Quiz page)
```

## Details

### Core 1 (CompTIA A+ 220-1201)
- **Location:** `public/quizzes/core1/`
- **Files:** 50 JSON quiz files
- **File Naming:** `core1_quiz1.json` through `core1_quiz50.json`
- **Purpose:** Hardware & Networking fundamentals

### Core 2 (CompTIA A+ 220-1202)
- **Location:** `public/quizzes/core2/`
- **Files:** 50 JSON quiz files
- **File Naming:** `core2_quiz1.json` through `core2_quiz50.json`
- **Purpose:** OS, Security & Software fundamentals

## JSON File Structure

Each quiz file contains an array of questions:

```json
[
  {
    "question": "What is the purpose of component 1?",
    "options": [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    "answer": "Option C"
  },
  ...
]
```

## How It Works

1. **quizzes.js** loads quiz files dynamically from the organized folders
2. **quizLogic.js** handles quiz logic, timing, and scoring
3. **quiz.html** displays the quiz interface
4. Quizzes are loaded from:
   - `quizzes/core1/core1_quiz*.json` for Core 1
   - `quizzes/core2/core2_quiz*.json` for Core 2

## Benefits of This Organization

✅ **Scalability** - Easy to add more quizzes
✅ **Maintainability** - Grouped by exam core
✅ **Performance** - Lazy loading only needed quizzes
✅ **Organization** - Clear folder hierarchy
✅ **Version Control** - Easy to track changes per core

## Loading Process

When `quiz.html` loads:
1. `quizzes.js` is loaded
2. `loadQuizzesFromFiles()` is called
3. Fetches all 100 quiz JSON files (50 Core1 + 50 Core2)
4. Populates the global `quizzes` object
5. `quizzesReady` flag is set to `true`
6. `quizLogic.js` uses the loaded quizzes

## Status
✅ 50 Core 1 quizzes organized
✅ 50 Core 2 quizzes organized
✅ Total: 100 quizzes (1000+ questions)
