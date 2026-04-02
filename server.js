const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static('public'));

const keysFile = path.join(__dirname, 'keys.json');
const usersFile = path.join(__dirname, 'users.json');

if (!fs.existsSync(keysFile)) fs.writeFileSync(keysFile, JSON.stringify([]));
if (!fs.existsSync(usersFile)) fs.writeFileSync(usersFile, JSON.stringify([]));

function loadKeys() {
  try {
    return JSON.parse(fs.readFileSync(keysFile, 'utf8'));
  } catch (e) {
    return [];
  }
}

function saveKeys(data) {
  fs.writeFileSync(keysFile, JSON.stringify(data, null, 2));
}

function loadUsers() {
  try {
    return JSON.parse(fs.readFileSync(usersFile, 'utf8'));
  } catch (e) {
    return [];
  }
}

function saveUsers(data) {
  fs.writeFileSync(usersFile, JSON.stringify(data, null, 2));
}

app.post('/register', (req, res) => {
  const { username, password, key } = req.body;
  if (!username || !password || !key) {
    return res.json({ success: false, message: "All fields required" });
  }
  let keys = loadKeys();
  let keyObj = keys.find(k => k.code === key);
  if (!keyObj || keyObj.used) {
    return res.json({ success: false, message: "Invalid key" });
  }
  keyObj.used = true;
  saveKeys(keys);
  let users = loadUsers();
  if (users.find(u => u.username === username)) {
    return res.json({ success: false, message: "User exists" });
  }
  users.push({ username, password });
  saveUsers(users);
  res.json({ success: true });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.json({ success: false, message: "Required fields missing" });
  }
  const users = loadUsers();
  const user = users.find(u => u.username === username && u.password === password);
  res.json({ success: !!user });
});

app.get('/admin/keys', (req, res) => {
  res.json(loadKeys());
});

app.post('/admin/keys/add', (req, res) => {
  const { code } = req.body;
  if (!code) return res.json({ success: false, message: "Code required" });
  let keys = loadKeys();
  if (keys.find(k => k.code === code)) {
    return res.json({ success: false, message: "Key exists" });
  }
  keys.push({ code, used: false });
  saveKeys(keys);
  res.json({ success: true });
});

app.post('/admin/keys/delete', (req, res) => {
  const { code } = req.body;
  let keys = loadKeys();
  const orig = keys.length;
  keys = keys.filter(k => k.code !== code);
  if (keys.length === orig) {
    return res.json({ success: false, message: "Not found" });
  }
  saveKeys(keys);
  res.json({ success: true });
});

app.post('/admin/keys/reset', (req, res) => {
  const { code } = req.body;
  let keys = loadKeys();
  const k = keys.find(k => k.code === code);
  if (!k) return res.json({ success: false, message: "Not found" });
  k.used = false;
  saveKeys(keys);
  res.json({ success: true });
});

// Save quiz score for user
app.post('/save-score', (req, res) => {
  const { username, topic, quiz, score, total } = req.body;
  if (!username || !topic || !quiz) {
    return res.json({ success: false });
  }
  
  const scoresFile = path.join(__dirname, 'scores.json');
  let scores = [];
  
  try {
    scores = JSON.parse(fs.readFileSync(scoresFile, 'utf8'));
  } catch (e) {
    scores = [];
  }
  
  const timestamp = new Date().toISOString();
  scores.push({ username, topic, quiz, score, total, timestamp });
  fs.writeFileSync(scoresFile, JSON.stringify(scores, null, 2));
  
  res.json({ success: true });
});

// Get user scores
app.get('/get-scores/:username', (req, res) => {
  const username = req.params.username;
  const scoresFile = path.join(__dirname, 'scores.json');
  
  try {
    const allScores = JSON.parse(fs.readFileSync(scoresFile, 'utf8'));
    const userScores = allScores.filter(s => s.username === username);
    res.json(userScores);
  } catch (e) {
    res.json([]);
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'UP',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

app.get('/', (req, res) => {
  const loginPath = path.join(__dirname, 'public', 'login.html');
  console.log('Attempting to serve:', loginPath);
  console.log('File exists:', fs.existsSync(loginPath));
  
  if (!fs.existsSync(loginPath)) {
    console.error('login.html not found at:', loginPath);
    return res.status(404).send('login.html not found');
  }
  
  res.sendFile(loginPath, (err) => {
    if (err) {
      console.error('sendFile error:', err);
      res.status(500).send('Error loading page');
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server on port ${PORT}`));