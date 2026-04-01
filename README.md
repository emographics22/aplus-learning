# A+ Learning Platform

Aplus Learning is a modern online platform designed to help students master CompTIA A+ IT certification through interactive quizzes, study notes, and progress tracking.

## 🚀 Live Demo

**Access the platform here:** https://aplus-learning.onrender.com

## Features

✅ **User Authentication** - Secure registration and login system
✅ **Interactive Quizzes** - CompTIA A+ practice tests with immediate feedback
✅ **Study Materials** - 9 comprehensive PDF guides covering all A+ domains
✅ **Progress Dashboard** - Track quiz scores and exam readiness
✅ **Responsive Design** - Works on desktop, tablet, and mobile devices

## Quick Start (Local Setup)

### Prerequisites
- Node.js (v14+)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/emographics22/aplus-learning.git
cd aplus-learning

# Install dependencies
npm install

# Start the server
npm start
```

Server runs on `http://localhost:3000`

## Screenshots

- **Login Page** - Secure student authentication
- **Dashboard** - Overview of quizzes and progress
- **Quiz Interface** - Interactive question formats
- **Progress Tracker** - Performance analytics

## Study Topics Covered

- Operating Systems (Windows, Linux, macOS)
- Hardware & Network Troubleshooting
- Security & Malware
- Virtualization & Cloud Computing
- Mobile Devices
- Networking Fundamentals
- Software Troubleshooting
- Operational Procedures
- And more...

## Deployment

**For educators:** See [DEPLOYMENT.md](DEPLOYMENT.md) for step-by-step instructions to deploy this app for your class.

- Deploy to Render (free)
- Deploy to Railway
- Deploy to Heroku
- Deploy to any Node.js hosting

## Technology Stack

- **Backend:** Express.js (Node.js)
- **Frontend:** HTML5, CSS3, JavaScript
- **Storage:** JSON (can be upgraded to PostgreSQL)
- **Hosting:** Render.com

## User Roles

### Students
- Register and create accounts
- Take unlimited practice quizzes
- Track progress over time
- Access study materials

### Educators
- Monitor student progress
- Manage quiz content
- Generate reports (future feature)

## Project Structure

```
aplus-learning/
├── server.js              # Main Express server
├── package.json           # Dependencies
├── public/                # Frontend files
│   ├── index.html         # Home page
│   ├── login.html         # Login page
│   ├── register.html      # Registration page
│   ├── quiz.html          # Quiz interface
│   ├── progress.html      # Progress dashboard
│   ├── notes.html         # Study notes
│   └── pdfs/              # Study material PDFs
├── users.json             # User data
├── keys.json              # Quiz answer keys
└── DEPLOYMENT.md          # Deployment guide
```

## Contributing

To contribute:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Push to your fork
5. Submit a pull request

## License

ISC License - See LICENSE file for details

## Support

For issues or questions:
- Open an issue on GitHub
- Check the DEPLOYMENT.md for common problems

---

**Ready to get started?** Visit https://aplus-learning.onrender.com

