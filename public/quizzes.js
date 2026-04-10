// quizzes.js - Pre-generated 50 quizzes per core, 30 questions each, INSTANT LOAD

// Question pool for each core
const answerOptions = {
  core1: [
    {q: "What does CPU stand for?", a: "Central Processing Unit", opts: ["Central Processing Unit", "Computer Personal Unit", "Central Program Unit", "Control Processor Unit"]},
    {q: "Which type of RAM is most commonly used today?", a: "DDR4", opts: ["DDR4", "DDR2", "DDR3", "SDRAM"]},
    {q: "What is the primary function of a motherboard?", a: "Connect all components", opts: ["Connect all components", "Store data", "Process data", "Generate power"]},
    {q: "What does PSU stand for?", a: "Power Supply Unit", opts: ["Power Supply Unit", "Processor Speed Unit", "Power System Unit", "Primary Setup Unit"]},
    {q: "Which connector type is used for modern SSDs?", a: "M.2", opts: ["M.2", "IDE", "SATA", "Parallel"]},
    {q: "What does BIOS stand for?", a: "Basic Input Output System", opts: ["Basic Input Output System", "Better Input Output System", "Booting Input Output System", "Basic Inter-Operating System"]},
    {q: "What is the maximum length of an Ethernet cable?", a: "100 meters", opts: ["100 meters", "50 meters", "200 meters", "500 meters"]},
    {q: "Which port is used for HDMI connections?", a: "Video/Audio", opts: ["Video/Audio", "Data only", "Power only", "Serial"]},
    {q: "What does GPU stand for?", a: "Graphics Processing Unit", opts: ["Graphics Processing Unit", "General Purpose Unit", "Gaming Process Unit", "Graphics Progressive Unit"]},
    {q: "What is the refresh rate of standard monitors?", a: "60Hz", opts: ["60Hz", "30Hz", "120Hz", "240Hz"]},
    {q: "Which OS is developed by Microsoft?", a: "Windows", opts: ["Windows", "Linux", "macOS", "Android"]},
    {q: "What does DHCP stand for?", a: "Dynamic Host Configuration Protocol", opts: ["Dynamic Host Configuration Protocol", "Distributed Host Control Protocol", "Direct Host Configuration Protocol", "Dynamic Hardware Control Protocol"]},
    {q: "What is the primary purpose of a firewall?", a: "Filter network traffic", opts: ["Filter network traffic", "Encrypt data", "Store files", "Display images"]},
    {q: "Which protocol is used for secure web connections?", a: "HTTPS", opts: ["HTTPS", "HTTP", "FTP", "SMTP"]},
    {q: "What does VPN stand for?", a: "Virtual Private Network", opts: ["Virtual Private Network", "Very Personal Network", "Virtual Public Network", "Verified Private Network"]},
    {q: "What is the maximum file size for FAT32?", a: "4GB", opts: ["4GB", "8GB", "16GB", "2GB"]},
    {q: "What does NTFS stand for?", a: "New Technology File System", opts: ["New Technology File System", "Network Transferable File System", "Network Technology File Storage", "New Transfer File System"]},
    {q: "Which encryption standard is widely used?", a: "AES", opts: ["AES", "DES", "RC4", "MD5"]},
    {q: "What does DPI stand for?", a: "Dots Per Inch", opts: ["Dots Per Inch", "Data Processing Interface", "Digital Print Interface", "Display Point Index"]},
    {q: "What is the primary function of a cooling system?", a: "Remove heat from components", opts: ["Remove heat from components", "Add power", "Store data", "Display output"]},
    {q: "Which connector type carries both video and audio?", a: "HDMI", opts: ["HDMI", "VGA", "DVI", "DisplayPort"]},
    {q: "What does DDR stand for in RAM?", a: "Double Data Rate", opts: ["Double Data Rate", "Dynamic Data Rate", "Dual Data Rate", "Direct Data Rate"]},
    {q: "Which storage device is fastest?", a: "SSD", opts: ["SSD", "HDD", "SD Card", "USB Drive"]},
    {q: "What does HDD stand for?", a: "Hard Disk Drive", opts: ["Hard Disk Drive", "High Data Drive", "Hard Digital Data", "Hardware Disk Drive"]},
    {q: "What is the primary advantage of an SSD?", a: "Speed and reliability", opts: ["Speed and reliability", "Low cost", "Large capacity", "Easy replacement"]},
    {q: "What does TCP/IP stand for?", a: "Transmission Control Protocol/Internet Protocol", opts: ["Transmission Control Protocol/Internet Protocol", "Transfer Control Protocol/Internet Program", "Transmission Compute Protocol/Internet Protocol", "Transfer Communication Protocol/Internet Program"]},
    {q: "Which device connects multiple computers?", a: "Switch", opts: ["Switch", "Router", "Modem", "Hub"]},
    {q: "What does DNS stand for?", a: "Domain Name System", opts: ["Domain Name System", "Direct Network Service", "Digital Network Service", "Domain Network Standard"]},
    {q: "What is the standard voltage in North America?", a: "120V", opts: ["120V", "220V", "110V", "100V"]},
    {q: "Which type of printer uses toner?", a: "Laser", opts: ["Laser", "Inkjet", "Dot Matrix", "Thermal"]},
  ],
  core2: [
    {q: "What does OS stand for?", a: "Operating System", opts: ["Operating System", "Office Software", "Open Source", "Operational Service"]},
    {q: "Which Windows version is most current?", a: "Windows 11", opts: ["Windows 11", "Windows 10", "Windows 7", "Windows 8"]},
    {q: "What does UAC stand for?", a: "User Access Control", opts: ["User Access Control", "Unified Accounting Control", "User Account Code", "Universal Access Control"]},
    {q: "Which OS is open-source?", a: "Linux", opts: ["Linux", "Windows", "macOS", "iOS"]},
    {q: "What does GPT stand for?", a: "GUID Partition Table", opts: ["GUID Partition Table", "General Purpose Table", "Global Partition Table", "Graphics Partition Table"]},
    {q: "Which file system is used by Windows?", a: "NTFS", opts: ["NTFS", "ext4", "APFS", "FAT32"]},
    {q: "What does UEFI stand for?", a: "Unified Extensible Firmware Interface", opts: ["Unified Extensible Firmware Interface", "Universal Equipment Firmware Interface", "Unified Executive Firmware Integration", "Universal Equipment Function Interface"]},
    {q: "What is the primary purpose of a device driver?", a: "Enable hardware communication", opts: ["Enable hardware communication", "Store files", "Display images", "Encrypt data"]},
    {q: "Which encryption standard is widely used?", a: "AES", opts: ["AES", "DES", "RC4", "MD5"]},
    {q: "What does 2FA stand for?", a: "Two-Factor Authentication", opts: ["Two-Factor Authentication", "Dual-Function Authorization", "Two-File Authentication", "Dual-Factor Authorization"]},
    {q: "What is a virus in computing?", a: "Malicious code that replicates", opts: ["Malicious code that replicates", "Slow internet connection", "Hardware failure", "Software bug"]},
    {q: "What does SSL stand for?", a: "Secure Sockets Layer", opts: ["Secure Sockets Layer", "Secure System Link", "Server Support Layer", "Secured Service Link"]},
    {q: "What does TLS stand for?", a: "Transport Layer Security", opts: ["Transport Layer Security", "Transfer Level System", "Transmission Layer Security", "Transport Link Service"]},
    {q: "What does MFA stand for?", a: "Multi-Factor Authentication", opts: ["Multi-Factor Authentication", "Multiple File Authorization", "Multi-Function Access", "Multiple Factor Access"]},
    {q: "Which type of malware replicates itself?", a: "Virus", opts: ["Virus", "Spyware", "Ransomware", "Worm"]},
    {q: "What is ransomware?", a: "Malware that encrypts files", opts: ["Malware that encrypts files", "Malware that steals data", "Malware that displays ads", "Malware that slows systems"]},
    {q: "What does CIA stand for in security?", a: "Confidentiality, Integrity, Availability", opts: ["Confidentiality, Integrity, Availability", "Computer, Internet, Access", "Critical, Internal, Assessment", "Control, Internet, Authorization"]},
    {q: "Which type of attack uses social engineering?", a: "Phishing", opts: ["Phishing", "DDoS", "SQL Injection", "Brute Force"]},
    {q: "What is a botnet?", a: "Network of infected computers", opts: ["Network of infected computers", "Group of hackers", "Type of malware", "Network protocol"]},
    {q: "What does RDP stand for?", a: "Remote Desktop Protocol", opts: ["Remote Desktop Protocol", "Remote Data Protocol", "Remote Device Protocol", "Remote Delivery Protocol"]},
    {q: "What is the purpose of a backup?", a: "Protect data from loss", opts: ["Protect data from loss", "Increase speed", "Reduce costs", "Improve graphics"]},
    {q: "Which protocol is used for email?", a: "SMTP", opts: ["SMTP", "HTTP", "FTP", "SSH"]},
    {q: "What does FTP stand for?", a: "File Transfer Protocol", opts: ["File Transfer Protocol", "Fast Transfer Program", "File Transmission Protocol", "Fast Transmission Program"]},
    {q: "What does SFTP stand for?", a: "SSH File Transfer Protocol", opts: ["SSH File Transfer Protocol", "Secure File Transfer Protocol", "System File Transfer Program", "Secure Functional Transfer Protocol"]},
    {q: "What is the primary purpose of a VPN?", a: "Secure internet connection", opts: ["Secure internet connection", "Speed up downloads", "Block ads", "Store files"]},
    {q: "Which encryption method uses two keys?", a: "Public key cryptography", opts: ["Public key cryptography", "Symmetric encryption", "Hash function", "Caesar cipher"]},
    {q: "What does RSA stand for?", a: "Rivest-Shamir-Adleman", opts: ["Rivest-Shamir-Adleman", "Rapid Secure Algorithm", "Robust Security Architecture", "Remote Secure Access"]},
    {q: "What is authentication?", a: "Verifying user identity", opts: ["Verifying user identity", "Granting access", "Encrypting data", "Storing passwords"]},
    {q: "What does authorization mean?", a: "Granting access permissions", opts: ["Granting access permissions", "Verifying identity", "Encrypting data", "Sharing files"]},
    {q: "What is a digital certificate used for?", a: "Verify website identity", opts: ["Verify website identity", "Store passwords", "Encrypt files", "Block ads"]},
  ]
};

// Function to generate static quizzes
function generateStaticQuizzes(core) {
  const quizzes = {};
  const answers = answerOptions[core];
  
  // Generate 50 quizzes, each with 30 questions
  for (let q = 1; q <= 50; q++) {
    quizzes[`Quiz ${q}`] = [];
    const usedIndices = new Set();
    
    // Add 30 unique questions to this quiz
    for (let i = 0; i < 30; i++) {
      let randomIdx;
      do {
        randomIdx = Math.floor(Math.random() * answers.length);
      } while (usedIndices.has(randomIdx));
      
      usedIndices.add(randomIdx);
      
      const qData = answers[randomIdx];
      // Shuffle options
      const options = [...qData.opts].sort(() => Math.random() - 0.5);
      
      quizzes[`Quiz ${q}`].push({
        question: qData.q,
        options: options,
        answer: qData.a
      });
    }
  }
  
  return quizzes;
}

// ⚡ CREATE QUIZZES - Function is now defined, safe to call ⚡
const quizzes = {
  "Core 1 → 220-1201": generateStaticQuizzes("core1"),
  "Core 2 → 220-1202": generateStaticQuizzes("core2")
};

console.log("✅ QUIZZES READY INSTANTLY!");
console.log(`✅ Core 1: ${Object.keys(quizzes["Core 1 → 220-1201"]).length} quizzes`);
console.log(`✅ Core 2: ${Object.keys(quizzes["Core 2 → 220-1202"]).length} quizzes`);
