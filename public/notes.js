const topics = {
  "Core 1 → 220-1201": [
    "Hardware",
    "Networking",
    "Mobile Devices",
    "Troubleshooting",
    "Virtualization and Cloud Computing"
  ],
  "Core 2 → 220-1202": [
    "Operating Systems",
    "Security",
    "Software Troubleshooting",
    "Operational Procedures"
  ]
};

// Exam objectives percentages
const examObjectives = {
  "Hardware": "25%",
  "Networking": "23%",
  "Mobile Devices": "13%",
  "Troubleshooting": "28%",
  "Virtualization and Cloud Computing": "11%",
  "Operating Systems": "28%",
  "Security": "28%",
  "Software Troubleshooting": "23%",
  "Operational Procedures": "21%"
};

const topicDiv = document.getElementById('topics');
const chapterDiv = document.getElementById('chapters');

let selectedTopic = "";

// Show topics
Object.keys(topics).forEach(topic => {
  const btn = document.createElement('button');
  btn.textContent = topic;
  btn.className = "w-full bg-gray-800 hover:bg-gray-700 text-white py-2 rounded mb-2";
  btn.onclick = () => showChapters(topic);
  topicDiv.appendChild(btn);
});

// Show chapters
function showChapters(topic) {
  selectedTopic = topic;
  document.getElementById('topic-selection').classList.add('hidden');
  document.getElementById('chapter-selection').classList.remove('hidden');

  chapterDiv.innerHTML = '';

  topics[topic].forEach(chapter => {
    const btn = document.createElement('button');
    const objective = examObjectives[chapter] || "N/A";
    btn.innerHTML = `<div class="flex justify-between items-center w-full"><span>${chapter}</span><span class="text-yellow-400 font-bold">${objective}</span></div>`;
    btn.className = "w-full bg-gray-800 hover:bg-gray-700 text-white py-2 px-3 rounded mb-2 text-left";
    btn.onclick = () => openNotes(chapter);
    chapterDiv.appendChild(btn);
  });
}

// Open notes page
function openNotes(chapter) {
  // Save selection
  localStorage.setItem('selectedTopic', selectedTopic);
  localStorage.setItem('selectedChapter', chapter);

  // Go to content page
  window.location.href = "note-view.html";
}

// Back to topics
function goBackTopics() {
  document.getElementById('chapter-selection').classList.add('hidden');
  document.getElementById('topic-selection').classList.remove('hidden');
}
