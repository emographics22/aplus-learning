const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static('public'));

const keysFilePath = path.join(__dirname, 'keys.json');
const usersFilePath = path.join(__dirname, 'users.json');

// Initialize JSON files if they don't exist
function initializeFiles() {
  if (!fs.existsSync(keysFilePath)) {
    fs.writeFileSync(keysFilePath, JSON.stringify([], null, 2));
    console.log('✅ Created keys.json');
  }
  if (!fs.existsSync(usersFilePath)) {
    fs.writeFileSync(usersFilePath, JSON.stringify([], null, 2));
    console.log('✅ Created users.json');
  }
}

initializeFiles();

// Load keys from JSON file
function loadKeys() {
  try {
    const data = fs.readFileSync(keysFilePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error loading keys:', err);
    return [];
  }
}

// Save keys to JSON file
function saveKeys(keys) {
  try {
    fs.writeFileSync(keysFilePath, JSON.stringify(keys, null, 2), 'utf8');
  } catch (err) {
    console.error('Error saving keys:', err);
  }
}

// Load users from JSON file
function loadUsers() {
  try {
    const data = fs.readFileSync(usersFilePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error loading users:', err);
    return [];
  }
}

// Save users to JSON file
function saveUsers(users) {
  try {
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2), 'utf8');
  } catch (err) {
    console.error('Error saving users:', err);
  }
}

// REGISTER ROUTE
app.post('/register', (req, res) => {
  const { username, password, key } = req.body;
  
  if (!username || !password || !key) {
    return res.json({ success: false, message: "All fields are required!" });
  }
  
  let keys = loadKeys();
  const keyRecord = keys.find(k => k.code === key);

  // ❌ Check if key is valid and not used
  if (!keyRecord || keyRecord.used) {
    return res.json({ success: false, message: "Invalid or used redeem key!" });
  }

  // ✅ Mark key as used
  keyRecord.used = true;
  saveKeys(keys);

  // ✅ Save user to users.json
  let users = loadUsers();
  
  // Check if user already exists
  if (users.find(u => u.username === username)) {
    return res.json({ success: false, message: "Username already exists!" });
  }
  
  users.push({ username, password });
  saveUsers(users);

  console.log("User registered:", username);
  res.json({ success: true });
});

// LOGIN ROUTE
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.json({ success: false, message: "Username and password required!" });
  }

  const users = loadUsers();
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    console.log("User logged in:", username);
    res.json({ success: true });
  } else {
    res.json({ success: false, message: "Invalid username or password!" });
  }
});

// VIEW ALL KEYS (admin)
app.get('/admin/keys', (req, res) => {
  const keys = loadKeys();
  res.json(keys);
});

// ADD NEW KEY (admin)
app.post('/admin/keys/add', (req, res) => {
  const { code } = req.body;
  
  if (!code) {
    return res.json({ success: false, message: "Code is required" });
  }

  let keys = loadKeys();
  
  // Check if key already exists
  if (keys.find(k => k.code === code)) {
    return res.json({ success: false, message: "Key already exists" });
  }

  keys.push({ code, used: false });
  saveKeys(keys);

  console.log("New key added:", code);
  res.json({ success: true, message: "Key added successfully" });
});

// DELETE KEY (admin)
app.post('/admin/keys/delete', (req, res) => {
  const { code } = req.body;
  
  if (!code) {
    return res.json({ success: false, message: "Code is required" });
  }

  let keys = loadKeys();
  const initialLength = keys.length;
  keys = keys.filter(k => k.code !== code);

  if (keys.length === initialLength) {
    return res.json({ success: false, message: "Key not found" });
  }

  saveKeys(keys);
  console.log("Key deleted:", code);
  res.json({ success: true, message: "Key deleted successfully" });
});

// RESET KEY (mark as unused) (admin)
app.post('/admin/keys/reset', (req, res) => {
  const { code } = req.body;
  
  if (!code) {
    return res.json({ success: false, message: "Code is required" });
  }

  let keys = loadKeys();
  const keyRecord = keys.find(k => k.code === code);

  if (!keyRecord) {
    return res.json({ success: false, message: "Key not found" });
  }

  keyRecord.used = false;
  saveKeys(keys);

  console.log("Key reset:", code);
  res.json({ success: true, message: "Key reset successfully" });
});

// Root route - serve login.html
app.get('/', (req, res) => {
  const loginPath = path.join(__dirname, 'public', 'login.html');
  res.sendFile(loginPath, (err) => {
    if (err) {
      console.error('Error sending file:', err);
      res.status(500).send('Server error');
    }
  });
});

// 404 handler - serve login.html for undefined routes
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found. Use / for login.' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});