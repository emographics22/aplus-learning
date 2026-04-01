// noteContent.js

const topic = localStorage.getItem('selectedTopic');
const chapter = localStorage.getItem('selectedChapter');

document.getElementById('title').textContent = `${topic} - ${chapter}`;

const notes = {

  // ================= CORE 1 =================

  "Hardware": `
    <h2 class="text-yellow-400 font-bold mb-2">Hardware (25% - CompTIA A+ 220-1201)</h2>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">1. Motherboards & Components:</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>CPU Sockets:</strong> LGA1151, AM4, Type-C</li>
      <li><strong>RAM Slots:</strong> DIMM (desktop), SODIMM (laptop)</li>
      <li><strong>BIOS/UEFI:</strong> Firmware for hardware initialization</li>
      <li><strong>Chipset:</strong> Manages communication between components</li>
      <li><strong>Power Connectors:</strong> 4-pin, 8-pin, 24-pin</li>
    </ul>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">2. Processors (CPU):</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>Multi-core Processing:</strong> Dual-core, Quad-core, etc.</li>
      <li><strong>Clock Speed:</strong> GHz measurement</li>
      <li><strong>Cache Memory:</strong> L1, L2, L3 cache levels</li>
      <li><strong>Intel Processors:</strong> Core i3, i5, i7, i9</li>
      <li><strong>AMD Processors:</strong> Ryzen series</li>
    </ul>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">3. Memory (RAM):</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>DDR4/DDR5:</strong> DRAM technology generations</li>
      <li><strong>Capacity:</strong> 4GB, 8GB, 16GB, 32GB+</li>
      <li><strong>Speed:</strong> MHz/GHz ratings</li>
      <li><strong>Parity & ECC:</strong> Error checking features</li>
      <li><strong>Voltage:</strong> Standard specifications vary by type</li>
    </ul>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">4. Storage Devices:</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>HDD:</strong> Magnetic spinning platters, 5400/7200 RPM</li>
      <li><strong>SSD:</strong> SATA & NVMe, no moving parts, faster</li>
      <li><strong>M.2 Slots:</strong> Modern high-speed storage interface</li>
      <li><strong>RAID:</strong> RAID 0, 1, 5, 10 configurations</li>
      <li><strong>iSCSI:</strong> Internet SCSI for network storage</li>
    </ul>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">5. Video Cards & Displays:</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>VRAM:</strong> 2GB, 4GB, 8GB, 12GB dedicated memory</li>
      <li><strong>Connectors:</strong> HDMI, DisplayPort, VGA, DVI</li>
      <li><strong>Display Technologies:</strong> LCD, LED, OLED, IPS</li>
      <li><strong>Resolution:</strong> 1080p, 1440p, 4K standards</li>
      <li><strong>Refresh Rates:</strong> 60Hz, 144Hz, 240Hz</li>
    </ul>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">6. Power Supply:</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>PSU Ratings:</strong> 500W, 650W, 750W, 1000W+</li>
      <li><strong>Efficiency:</strong> 80+, 80+ Gold, Platinum, Titanium</li>
      <li><strong>Connectors:</strong> Molex, SATA power, PCIe 6-pin/8-pin</li>
      <li><strong>Active PFC:</strong> Power Factor Correction</li>
      <li><strong>Modular vs Non-modular:</strong> Cable management</li>
    </ul>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">7. Expansion Cards:</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>PCIe Slots:</strong> x1, x4, x8, x16 configurations</li>
      <li><strong>NIC (Network Card):</strong> Ethernet connectivity</li>
      <li><strong>Sound Card:</strong> Audio processing</li>
      <li><strong>Capture Cards:</strong> Video recording devices</li>
      <li><strong>I/O Controller:</strong> Additional ports (SATA, USB)</li>
    </ul>

    <div class="mt-4 flex gap-2">
      <a href="pdfs/Hardware.pdf" target="_blank"
         class="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded">
         📖 View PDF
      </a>
      <a href="pdfs/Hardware.pdf" download
         class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
         ⬇ Download
      </a>
    </div>
  `,

  "Networking": `
    <h2 class="text-yellow-400 font-bold mb-2">Networking (23% - CompTIA A+ 220-1201)</h2>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">1. Network Models & Protocols:</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>TCP/IP:</strong> Connection-oriented, reliable</li>
      <li><strong>UDP:</strong> Connectionless, faster, no guarantee</li>
      <li><strong>DNS:</strong> Domain Name System (port 53)</li>
      <li><strong>DHCP:</strong> Dynamic Host Configuration Protocol</li>
      <li><strong>HTTP/HTTPS:</strong> Web protocols (ports 80/443)</li>
      <li><strong>FTP/SFTP:</strong> File transfer (ports 21/22)</li>
      <li><strong>SSH:</strong> Secure Shell (port 22)</li>
      <li><strong>SMTP/POP3/IMAP:</strong> Email protocols</li>
    </ul>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">2. IP Addressing:</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>IPv4:</strong> 32-bit addresses (255.255.255.255)</li>
      <li><strong>IPv6:</strong> 128-bit addresses (improved routing)</li>
      <li><strong>Subnetting:</strong> Network masks (/24, /16, /8)</li>
      <li><strong>APIPA:</strong> Automatic Private IP Addressing</li>
      <li><strong>Private vs Public:</strong> RFC 1918 ranges</li>
      <li><strong>CIDR Notation:</strong> 192.168.1.0/24</li>
    </ul>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">3. Network Devices:</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>Router:</strong> Routes traffic between networks (Layer 3)</li>
      <li><strong>Switch:</strong> Connects devices in LAN (Layer 2)</li>
      <li><strong>Hub:</strong> Older broadcast device (not recommended)</li>
      <li><strong>Access Point:</strong> Wireless connectivity</li>
      <li><strong>Repeater:</strong> Extends wireless signal</li>
      <li><strong>Modem:</strong> Converts signals (cable/fiber)</li>
      <li><strong>Firewall:</strong> Network security device</li>
      <li><strong>Proxy Server:</strong> Intermediary for requests</li>
    </ul>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">4. Wireless Networking:</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>802.11a/b/g/n/ac/ax:</strong> Wi-Fi standards</li>
      <li><strong>Frequency Bands:</strong> 2.4GHz (802.11b/g/n), 5GHz (802.11a/n/ac/ax)</li>
      <li><strong>Security:</strong> WEP, WPA, WPA2, WPA3</li>
      <li><strong>SSID:</strong> Service Set Identifier (network name)</li>
      <li><strong>Channel Selection:</strong> Avoiding interference</li>
      <li><strong>Bluetooth:</strong> Short-range wireless (2.4GHz)</li>
      <li><strong>NFC:</strong> Near Field Communication</li>
    </ul>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">5. Network Cabling:</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>Cat5/Cat5e:</strong> Up to 100Mbps and 1Gbps</li>
      <li><strong>Cat6/Cat6a:</strong> Up to 1Gbps and 10Gbps</li>
      <li><strong>Cat7/Cat8:</strong> Higher speeds, shielded</li>
      <li><strong>UTP (Unshielded):</strong> Standard LAN cable</li>
      <li><strong>STP (Shielded):</strong> Reduces EMI interference</li>
      <li><strong>Fiber Optic:</strong> Long distance, immune to EMI</li>
      <li><strong>RJ45/RJ11:</strong> Connector types</li>
    </ul>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">6. Network Topologies:</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>Star:</strong> Central hub/switch (most common)</li>
      <li><strong>Bus:</strong> All devices on single line</li>
      <li><strong>Ring:</strong> Devices in loop (token passing)</li>
      <li><strong>Mesh:</strong> Multiple paths between devices</li>
      <li><strong>Hybrid:</strong> Combination of topologies</li>
    </ul>

    <div class="mt-4 flex gap-2">
      <a href="pdfs/Networking.pdf" target="_blank"
         class="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded">
         📖 View PDF
      </a>
      <a href="pdfs/Networking.pdf" download
         class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
         ⬇ Download
      </a>
    </div>
  `,

  "Mobile Devices": `
    <h2 class="text-yellow-400 font-bold mb-2">Mobile Devices (13% - CompTIA A+ 220-1201)</h2>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">1. Mobile Device Hardware:</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>Processors:</strong> ARM-based (Apple, Qualcomm)</li>
      <li><strong>Display Types:</strong> AMOLED, IPS, Retina</li>
      <li><strong>Touch Input:</strong> Capacitive vs Resistive</li>
      <li><strong>Batteries:</strong> Li-ion, Li-Po (rechargeable)</li>
      <li><strong>Memory:</strong> LPDDR (low-power DRAM)</li>
      <li><strong>Storage:</strong> Internal flash storage (no microSD on modern iOS)</li>
    </ul>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">2. Mobile Operating Systems:</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>iOS:</strong> Apple (iPhone, iPad) - closed ecosystem</li>
      <li><strong>Android:</strong> Google (open-source) - customizable</li>
      <li><strong>Permissions:</strong> App access controls</li>
      <li><strong>App Store vs Play Store:</strong> Distribution platforms</li>
      <li><strong>Version Updates:</strong> OTA (Over-the-Air) updates</li>
    </ul>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">3. Mobile Connectivity:</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>Wi-Fi 5GHz/2.4GHz:</strong> Wireless connectivity</li>
      <li><strong>Bluetooth:</strong> Short-range pairing (headphones, watches)</li>
      <li><strong>NFC:</strong> Contactless payments (Apple Pay, Google Pay)</li>
      <li><strong>Cellular Networks:</strong> 3G, 4G LTE, 5G</li>
      <li><strong>GPS:</strong> Location services</li>
      <li><strong>Mobile Hotspot:</strong> Sharing cellular connection</li>
    </ul>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">4. Mobile Device Ports & Connectors:</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>USB-C:</strong> Modern standard (Android, newer iPhones)</li>
      <li><strong>Lightning:</strong> Apple proprietary connector</li>
      <li><strong>Micro USB:</strong> Legacy Android devices</li>
      <li><strong>3.5mm Jack:</strong> Headphone jack (declining)</li>
      <li><strong>SIM Card Slot:</strong> Mobile network identification</li>
      <li><strong>MicroSD Card:</strong> Expandable storage (Android only)</li>
    </ul>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">5. Mobile Security:</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>Biometric Authentication:</strong> Fingerprint, Face ID</li>
      <li><strong>PIN/Passcode:</strong> Password protection</li>
      <li><strong>Full Device Encryption:</strong> Protects data at rest</li>
      <li><strong>MDM (Mobile Device Management):</strong> Corporate control</li>
      <li><strong>Find My Device:</strong> Remote tracking & wiping</li>
      <li><strong>App Permissions:</strong> Granular access control</li>
    </ul>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">6. Troubleshooting Mobile Devices:</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>Battery Issues:</strong> Degradation, replacement</li>
      <li><strong>Charging Problems:</strong> Cable/port damage</li>
      <li><strong>Software Issues:</strong> Force restart, safe mode</li>
      <li><strong>Display Issues:</strong> Touch sensitivity, cracked screen</li>
      <li><strong>Water Damage:</strong> IP rating considerations</li>
      <li><strong>Network Issues:</strong> Airplane mode, Wi-Fi reconnection</li>
    </ul>

    <div class="mt-4 flex gap-2">
      <a href="pdfs/Mobile Devices.pdf" target="_blank"
         class="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded">
         📖 View PDF
      </a>
      <a href="pdfs/Mobile Devices.pdf" download
         class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
         ⬇ Download
      </a>
    </div>
  `,

  "Troubleshooting": `
    <h2 class="text-yellow-400 font-bold mb-2">Hardware & Network Troubleshooting (28% - CompTIA A+ 220-1201)</h2>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">1. Troubleshooting Methodology:</h3>
    <ol class="list-decimal ml-5 mb-3">
      <li><strong>Identify the problem:</strong> Interview user, document symptoms</li>
      <li><strong>Establish a theory of probable cause:</strong> List possible issues</li>
      <li><strong>Test the theory:</strong> Perform diagnostics</li>
      <li><strong>Establish a plan of action:</strong> Determine solution</li>
      <li><strong>Implement the solution:</strong> Apply fix</li>
      <li><strong>Verify full system functionality:</strong> Test resolution</li>
      <li><strong>Document findings & solutions:</strong> Record for future reference</li>
    </ol>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">2. Hardware Troubleshooting Tools:</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>Multimeter:</strong> Measures voltage, current, resistance</li>
      <li><strong>Cable Tester:</strong> Checks network & power cable continuity</li>
      <li><strong>Crimper:</strong> Creates network cable connections</li>
      <li><strong>Power Supply Tester:</strong> Verifies PSU output</li>
      <li><strong>Loopback Adapters:</strong> Tests network ports</li>
      <li><strong>POST (Power-On Self Test):</strong> Initial hardware check</li>
      <li><strong>Beep Codes:</strong> BIOS error indicators</li>
    </ul>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">3. Common Hardware Issues & Solutions:</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>No Power:</strong> Check PSU, cables, wall outlet</li>
      <li><strong>No Display:</strong> Reseat RAM, check video card, monitor</li>
      <li><strong>Overheating:</strong> Clean fans, replace thermal paste, improve airflow</li>
      <li><strong>Disk Errors:</strong> chkdsk (Windows) or fsck (Linux)</li>
      <li><strong>Hard Drive Failure:</strong> Listen for clicking, use diagnostic tools</li>
      <li><strong>RAM Issues:</strong> Single stick testing, reseat modules</li>
      <li><strong>BIOS Errors:</strong> Reset CMOS battery, update BIOS</li>
    </ul>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">4. Network Troubleshooting Commands (Windows):</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>ipconfig:</strong> Display network adapter configuration</li>
      <li><strong>ipconfig /all:</strong> Detailed network information</li>
      <li><strong>ipconfig /release:</strong> Release DHCP lease</li>
      <li><strong>ipconfig /renew:</strong> Obtain new DHCP address</li>
      <li><strong>ping:</strong> Test connectivity to host (ICMP)</li>
      <li><strong>ping -t:</strong> Continuous ping</li>
      <li><strong>tracert:</strong> Trace route to destination</li>
      <li><strong>pathping:</strong> Combines ping and tracert</li>
      <li><strong>netstat:</strong> Show active connections & listening ports</li>
      <li><strong>nslookup:</strong> Query DNS records</li>
      <li><strong>nbtstat:</strong> NetBIOS over TCP/IP statistics</li>
    </ul>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">5. Network Troubleshooting Commands (Linux):</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>ifconfig / ip addr:</strong> Display IP configuration</li>
      <li><strong>ping:</strong> Test connectivity</li>
      <li><strong>traceroute:</strong> Trace route to host</li>
      <li><strong>netstat / ss:</strong> Network statistics</li>
      <li><strong>nslookup / dig:</strong> DNS queries</li>
      <li><strong>route:</strong> Display routing table</li>
      <li><strong>arp:</strong> Address Resolution Protocol cache</li>
    </ul>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">6. Network Connectivity Issues:</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>No Internet:</strong> Check cable, restart router, verify DHCP</li>
      <li><strong>Intermittent Connection:</strong> Check interference, cable damage</li>
      <li><strong>Slow Speed:</strong> Bandwidth throttling, check router position</li>
      <li><strong>Cannot Reach Server:</strong> Verify IP, DNS, firewall rules</li>
      <li><strong>DNS Issues:</strong> Change DNS servers, flush cache (ipconfig /flushdns)</li>
      <li><strong>Wi-Fi Connection:</strong> Check password, SSID visibility, driver updates</li>
    </ul>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">7. Common Network Issues & OSI Layer:</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>Layer 1 (Physical):</strong> Cable damage, port issues</li>
      <li><strong>Layer 2 (Data Link):</strong> MAC address conflicts, switch problems</li>
      <li><strong>Layer 3 (Network):</strong> IP configuration, routing issues</li>
      <li><strong>Layer 4 (Transport):</strong> Port blocking, firewall rules</li>
      <li><strong>Layer 7 (Application):</strong> DNS, DHCP, HTTP errors</li>
    </ul>

    <div class="mt-4 flex gap-2">
      <a href="pdfs/Hardware & Network Troubleshooting.pdf" target="_blank"
         class="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded">
         📖 View PDF
      </a>
      <a href="pdfs/Hardware & Network Troubleshooting.pdf" download
         class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
         ⬇ Download
      </a>
    </div>
  `,

  "Virtualization and Cloud Computing": `
    <h2 class="text-yellow-400 font-bold mb-2">Virtualization & Cloud Computing (11% - CompTIA A+ 220-1201)</h2>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">1. Virtualization Concepts:</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>Virtual Machines (VM):</strong> Emulated computer within a computer</li>
      <li><strong>Hypervisor (Type 1):</strong> Bare metal (ESXi, Hyper-V Server)</li>
      <li><strong>Hypervisor (Type 2):</strong> Hosted (VirtualBox, VMware Workstation)</li>
      <li><strong>Resource Allocation:</strong> CPU cores, RAM, storage assigned to VMs</li>
      <li><strong>Snapshots:</strong> Point-in-time VM state capture</li>
      <li><strong>Live Migration:</strong> Moving VMs between hosts</li>
      <li><strong>Benefits:</strong> Resource efficiency, isolation, testing</li>
    </ul>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">2. Cloud Computing Service Models:</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>IaaS (Infrastructure as a Service):</strong> AWS, Azure, GCP - compute, storage, networking</li>
      <li><strong>PaaS (Platform as a Service):</strong> Heroku, Google App Engine - development & deployment</li>
      <li><strong>SaaS (Software as a Service):</strong> Office 365, Salesforce, Gmail - applications in cloud</li>
      <li><strong>DaaS (Desktop as a Service):</strong> Virtual desktop infrastructure</li>
    </ul>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">3. Cloud Deployment Models:</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>Public Cloud:</strong> AWS, Azure, Google Cloud - shared resources, cost-effective</li>
      <li><strong>Private Cloud:</strong> On-premises or dedicated - high control, expensive</li>
      <li><strong>Hybrid Cloud:</strong> Mix of public & private - flexibility</li>
      <li><strong>Community Cloud:</strong> Shared by specific industry/group</li>
    </ul>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">4. Cloud Storage & Backup:</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>Object Storage:</strong> S3, Blob Storage (unstructured data)</li>
      <li><strong>File Storage:</strong> Shared network folders in cloud</li>
      <li><strong>Block Storage:</strong> Virtual hard drives for VMs</li>
      <li><strong>Backup Solutions:</strong> Automated cloud backup services</li>
      <li><strong>Redundancy:</strong> Data replicated across regions</li>
    </ul>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">5. Containerization:</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>Docker:</strong> Lightweight container technology</li>
      <li><strong>Container vs VM:</strong> Faster startup, less overhead</li>
      <li><strong>Kubernetes:</strong> Container orchestration platform</li>
      <li><strong>Use Cases:</strong> Microservices, scalability</li>
    </ul>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">6. Cloud Security & Compliance:</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>Encryption in Transit:</strong> TLS/SSL</li>
      <li><strong>Encryption at Rest:</strong> Server-side encryption</li>
      <li><strong>Identity & Access Management (IAM):</strong> User permissions</li>
      <li><strong>Compliance:</strong> GDPR, HIPAA, SOC 2 certifications</li>
      <li><strong>Shared Responsibility:</strong> Provider vs customer security</li>
    </ul>

    <div class="mt-4 flex gap-2">
      <a href="pdfs/Virtualization and Cloud Computing.pdf" target="_blank"
         class="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded">
         📖 View PDF
      </a>
      <a href="pdfs/Virtualization and Cloud Computing.pdf" download
         class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
         ⬇ Download
      </a>
    </div>
  `,

  // ================= CORE 2 =================

  "Operating Systems": `
    <h2 class="text-yellow-400 font-bold mb-2">Operating Systems (28% - CompTIA A+ 220-1202)</h2>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">1. Windows Operating Systems:</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>Editions:</strong> Home, Pro, Enterprise, Education (Windows 10/11)</li>
      <li><strong>Installation Methods:</strong> In-place upgrade, clean install, USB media</li>
      <li><strong>File Systems:</strong> NTFS, FAT32, exFAT</li>
      <li><strong>User Accounts:</strong> Standard, Administrator, System</li>
      <li><strong>Permissions:</strong> NTFS permissions, UAC (User Account Control)</li>
      <li><strong>Task Manager:</strong> Process management, performance monitoring</li>
      <li><strong>Services:</strong> Running programs in background</li>
      <li><strong>Registry:</strong> System database, configuration storage</li>
    </ul>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">2. Linux Operating Systems:</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>Distributions:</strong> Ubuntu, CentOS, Fedora, Debian</li>
      <li><strong>Desktop Environments:</strong> GNOME, KDE, Xfce</li>
      <li><strong>File System:</strong> ext4, ext3, XFS</li>
      <li><strong>Directory Structure:</strong> /, /home, /usr, /var, /etc</li>
      <li><strong>User Permissions:</strong> rwx (read, write, execute)</li>
      <li><strong>Package Managers:</strong> apt, yum, dnf</li>
      <li><strong>Command Line:</strong> bash, terminal emulator</li>
      <li><strong>Remote Access:</strong> SSH for secure shell access</li>
    </ul>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">3. macOS Operating System:</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>Versions:</strong> Big Sur, Monterey, Ventura, Sonoma</li>
      <li><strong>File System:</strong> APFS (Apple File System)</li>
      <li><strong>Security:</strong> Gatekeeper, System Integrity Protection (SIP)</li>
      <li><strong>Package Management:</strong> DMG files, App Store</li>
      <li><strong>Terminal:</strong> Zsh shell (default in modern versions)</li>
      <li><strong>Finder:</strong> File management interface</li>
      <li><strong>Time Machine:</strong> Backup utility</li>
    </ul>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">4. OS Installation & Booting:</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>Boot Process:</strong> BIOS/UEFI → Bootloader → Kernel → OS</li>
      <li><strong>Bootable Media:</strong> USB drives, DVDs, network boot (PXE)</li>
      <li><strong>Partitioning:</strong> MBR (Master Boot Record), GPT (GUID Partition Table)</li>
      <li><strong>Dual Boot:</strong> Multiple OS on same system</li>
      <li><strong>Recovery:</strong> Safe Mode, Recovery Mode, System Restore</li>
      <li><strong>BIOS/UEFI Settings:</strong> Boot order, Secure Boot</li>
    </ul>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">5. File Systems & Storage:</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>Disk Partitioning:</strong> Creating logical drives</li>
      <li><strong>Volume Management:</strong> Logical volumes, storage pools</li>
      <li><strong>Disk Quotas:</strong> Limiting user storage</li>
      <li><strong>Compression:</strong> NTFS compression, file archiving</li>
      <li><strong>File Encryption:</strong> EFS (Encrypting File System), BitLocker</li>
    </ul>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">6. OS Updates & Patches:</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>Windows Update:</strong> Automatic security patches</li>
      <li><strong>Linux Package Updates:</strong> apt update && apt upgrade</li>
      <li><strong>macOS Software Update:</strong> System preferences updates</li>
      <li><strong>Driver Updates:</strong> Chipset, GPU, network drivers</li>
    <div class="mt-4 flex gap-2">
      <a href="pdfs/Operating Systems.pdf" target="_blank"
         class="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded">
         📖 View PDF
      </a>
      <a href="pdfs/Operating Systems.pdf" download
         class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
         ⬇ Download
      </a>
    </div>
  `,

  "Security": `
    <h2 class="text-yellow-400 font-bold mb-2">Security (28% - CompTIA A+ 220-1202)</h2>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">1. Malware & Threats:</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>Virus:</strong> Self-replicating, requires host program</li>
      <li><strong>Worm:</strong> Self-replicating, spreads via network</li>
      <li><strong>Trojan:</strong> Disguises as legitimate software</li>
      <li><strong>Rootkit:</strong> Hides presence, lowest-level access</li>
      <li><strong>Ransomware:</strong> Encrypts files, demands payment</li>
      <li><strong>Spyware:</strong> Steals information secretly</li>
      <li><strong>Adware:</strong> Displays unwanted advertisements</li>
      <li><strong>Keylogger:</strong> Records keyboard input</li>
      <li><strong>Botnet:</strong> Network of compromised computers</li>
    </ul>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">2. Authentication & Access Control:</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>Passwords:</strong> Strong requirements (length, complexity)</li>
      <li><strong>Two-Factor Authentication (2FA):</strong> Password + verification method</li>
      <li><strong>Multi-Factor Authentication (MFA):</strong> 3+ authentication factors</li>
      <li><strong>Biometric:</strong> Fingerprints, facial recognition</li>
      <li><strong>RBAC (Role-Based Access Control):</strong> Permissions by role</li>
      <li><strong>Single Sign-On (SSO):</strong> One login for multiple systems</li>
      <li><strong>Account Lockout:</strong> Temporary suspension after failed attempts</li>
    </ul>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">3. Firewalls & Network Security:</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>Hardware Firewall:</strong> Network-level protection</li>
      <li><strong>Software Firewall:</strong> Windows Defender Firewall, UFW (Linux)</li>
      <li><strong>Inbound Rules:</strong> Block incoming connections</li>
      <li><strong>Outbound Rules:</strong> Control outgoing traffic</li>
      <li><strong>Port Filtering:</strong> Allow/deny specific ports</li>
      <li><strong>Stateful Inspection:</strong> Tracking connection states</li>
      <li><strong>VPN (Virtual Private Network):</strong> Encrypted tunnel</li>
      <li><strong>Proxy Server:</strong> Intermediary for requests</li>
    </ul>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">4. Antivirus & Anti-Malware:</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>Windows Defender:</strong> Built-in Windows protection</li>
      <li><strong>Third-party Solutions:</strong> Norton, McAfee, Bitdefender</li>
      <li><strong>Signature-based Detection:</strong> Known malware patterns</li>
      <li><strong>Heuristic Detection:</strong> Behavioral analysis</li>
      <li><strong>Real-time Scanning:</strong> Active threat monitoring</li>
      <li><strong>Quarantine:</strong> Isolate suspicious files</li>
      <li><strong>Definition Updates:</strong> Regular malware database updates</li>
      <li><strong>Full System Scan:</strong> Comprehensive malware check</li>
    </ul>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">5. Data Security & Encryption:</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>NTFS Encryption (EFS):</strong> File-level encryption</li>
      <li><strong>BitLocker:</strong> Full-disk encryption (Windows Pro+)</li>
      <li><strong>FileVault:</strong> Full-disk encryption (macOS)</li>
      <li><strong>LUKS:</strong> Linux Unified Key Setup encryption</li>
      <li><strong>AES Encryption:</strong> Advanced Encryption Standard</li>
      <li><strong>SSL/TLS:</strong> Encryption for web traffic</li>
      <li><strong>Data Destruction:</strong> Secure deletion methods</li>
    </ul>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">6. Social Engineering & User Security:</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>Phishing:</strong> Fake emails to steal credentials</li>
      <li><strong>Spear Phishing:</strong> Targeted phishing attacks</li>
      <li><strong>Pretexting:</strong> Creating false scenarios</li>
      <li><strong>Shoulder Surfing:</strong> Observing passwords/sensitive info</li>
      <li><strong>Tailgating:</strong> Following someone through secure door</li>
      <li><strong>Dumpster Diving:</strong> Searching trash for information</li>
      <li><strong>Security Awareness Training:</strong> User education</li>
      <li><strong>Password Manager:</strong> Secure credential storage</li>
    </ul>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">7. Web Browser Security:</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>Cookies:</strong> Session tracking, privacy concerns</li>
      <li><strong>Cache:</strong> Temporary file storage</li>
      <li><strong>Browsing History:</strong> Cleared for privacy</li>
      <li><strong>Extensions:</strong> Add-on security risks</li>
      <li><strong>Plugins:</strong> Flash, Java security issues</li>
      <li><strong>Pop-ups/Pop-unders:</strong> Unwanted advertisements</li>
      <li><strong>Secure Connections (HTTPS):</strong> Encrypted web traffic</li>
    </ul>

    <div class="mt-4 flex gap-2">
      <a href="pdfs/Security.pdf" target="_blank"
         class="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded">
         📖 View PDF
      </a>
      <a href="pdfs/Security.pdf" download
         class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
         ⬇ Download
      </a>
    </div>
  `,

  "Software Troubleshooting": `
    <h2 class="text-yellow-400 font-bold mb-2">Software Troubleshooting (23% - CompTIA A+ 220-1202)</h2>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">1. Application Issues:</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>Application Won't Start:</strong> Check dependencies, reinstall, update</li>
      <li><strong>Crashes/Freezes:</strong> Event Viewer logs, task manager termination</li>
      <li><strong>Slow Performance:</strong> Memory leaks, background processes</li>
      <li><strong>Compatibility Issues:</strong> Compatibility mode, OS requirements</li>
      <li><strong>Missing Files:</strong> DLL errors, library dependencies</li>
      <li><strong>Permission Errors:</strong> Run as administrator</li>
      <li><strong>License Errors:</strong> Licensing issues, activation</li>
    </ul>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">2. Windows-Specific Troubleshooting:</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>Safe Mode:</strong> Minimal drivers & services</li>
      <li><strong>System File Checker (SFC):</strong> sfc /scannow command</li>
      <li><strong>DISM Tool:</strong> Deploy Image Servicing & Management</li>
      <li><strong>Event Viewer:</strong> System and application logs</li>
      <li><strong>Device Manager:</strong> Hardware driver issues</li>
      <li><strong>Services (services.msc):</strong> Manage background services</li>
      <li><strong>Task Scheduler:</strong> Scheduled tasks management</li>
      <li><strong>Disk Cleanup:</strong> Remove temporary files</li>
      <li><strong>Windows Update issues:</strong> Update troubleshooter</li>
    </ul>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">3. Linux Software Troubleshooting:</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>Package Manager Issues:</strong> apt troubleshoot, dependency conflicts</li>
      <li><strong>Library Dependencies:</strong> Missing .so files</li>
      <li><strong>Permission Errors:</strong> chmod, chown commands</li>
      <li><strong>Log Files:</strong> /var/log for error information</li>
      <li><strong>System Logs:</strong> journalctl for systemd logs</li>
      <li><strong>Process Management:</strong> ps, kill, systemctl commands</li>
      <li><strong>Runlevels/Targets:</strong> Service initialization levels</li>
    </ul>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">4. macOS Software Troubleshooting:</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>Force Quit:</strong> Command+Option+Esc for frozen apps</li>
      <li>Console:</strong> System logs and errors</li>
      <li><strong>Activity Monitor:</strong> Process management and CPU usage</li>
      <li><strong>Repair Permissions:</strong> Disk Utility for file system checks</li>
      <li><strong>System Preferences Issues:</strong> Reset SMC/NVRAM</li>
      <li><strong>Launchpad/Launch Services:</strong> Remove cached preferences</li>
      <li><strong>Gatekeeper Warnings:</strong> Security and privacy controls</li>
    </ul>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">5. Restart & Recovery Methods:</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>Soft Restart:</strong> Normal graceful shutdown</li>
      <li><strong>Hard Restart:</strong> Force power off</li>
      <li><strong>Safe Boot:</strong> Limited driver/service startup</li>
      <li><strong>Recovery Mode:</strong> Native OS recovery tools</li>
      <li><strong>Bootable Recovery Media:</strong> USB/DVD rescue tools</li>
      <li><strong>System Restore Point:</strong> Previous system configuration</li>
      <li><strong>Factory Reset:</strong> Complete system wipe and reinstall</li>
    </ul>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">6. User Account Issues:</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>Locked/Disabled Accounts:</strong> Administrator unlock</li>
      <li><strong>Lost Passwords:</strong> Password reset tools</li>
      <li><strong>Permission Issues:</strong> NTFS permissions, POSIX permissions</li>
      <li><strong>Profile Corruption:</strong> User profile rebuild</li>
      <li><strong>Group Policy Issues:</strong> gpedit.msc for policy management</li>
    </ul>

    <div class="mt-4 flex gap-2">
      <a href="pdfs/Software Troubleshooting.pdf" target="_blank"
         class="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded">
         📖 View PDF
      </a>
      <a href="pdfs/Software Troubleshooting.pdf" download
         class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
         ⬇ Download
      </a>
    </div>
  `,

  "Operational Procedures": `
    <h2 class="text-yellow-400 font-bold mb-2">Operational Procedures (21% - CompTIA A+ 220-1202)</h2>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">1. Safety Procedures:</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>ESD (Electrostatic Discharge):</strong> Use wrist straps, anti-static mats</li>
      <li><strong>Grounding:</strong> Discharge static before handling components</li>
      <li><strong>AC Power Safety:</strong> Proper grounding, avoid water</li>
      <li><strong>Physical Hazards:</strong> Sharp edges, pinch points</li>
      <li><strong>Laser Safety:</strong> Avoid direct exposure (CD/DVD drives)</li>
      <li><strong>FireSafety:</strong> Extinguisher locations, emergency procedures</li>
      <li><strong>Personal Protective Equipment (PPE):</strong> Gloves, eye protection</li>
      <li><strong>Heavy Lifting:</strong> Proper technique to prevent injury</li>
    </ul>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">2. Documentation & Asset Management:</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>Work Orders:</strong> Detailed task documentation</li>
      <li><strong>Incident Reports:</strong> Record problems and solutions</li>
      <li><strong>Inventory Management:</strong> Track hardware and software</li>
      <li><strong>Asset Tags:</strong> Unique identifiers for equipment</li>
      <li><strong>Service Tickets:</strong> Support request tracking</li>
      <li><strong>Change Log:</strong> System modifications history</li>
      <li><strong>Configuration Documentation:</strong> Network diagrams, device settings</li>
      <li><strong>License Tracking:</strong> Software license compliance</li>
    </ul>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">3. Environmental Considerations:</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>Temperature Control:</strong> Optimal 68-72°F for equipment</li>
      <li><strong>Humidity Control:</strong> 30-50% relative humidity</li>
      <li><strong>Ventilation:</strong> Proper airflow in server rooms</li>
      <li><strong>Power Conditioning:</strong> UPS and surge protectors</li>
      <li><strong>Cable Management:</strong> Organized, safe routing</li>
      <li><strong>Equipment Disposal:</strong> Proper recycling and e-waste handling</li>
      <li><strong>Environmental Protection:</strong> Sustainable practices</li>
    </ul>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">4. Backup & Recovery Procedures:</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>Backup Types:</strong> Full, incremental, differential</li>
      <li><strong>Backup Schedules:</strong> Daily, weekly, monthly frequency</li>
      <li><strong>Off-site Backups:</strong> Cloud storage, separate location</li>
      <li><strong>Recovery Time Objective (RTO):</strong> Maximum acceptable downtime</li>
      <li><strong>Recovery Point Objective (RPO):</strong> Maximum data loss acceptable</li>
      <li><strong>Test Restores:</strong> Verify backup integrity regularly</li>
      <li><strong>Redundancy:</strong> RAID configurations, duplicate systems</li>
      <li><strong>Disaster Recovery Plan:</strong> Business continuity procedures</li>
    </ul>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">5. Professional Standards & Ethics:</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>Confidentiality:</strong> Protect sensitive information</li>
      <li><strong>Professionalism:</strong> Respectful communication and behavior</li>
      <li><strong>Code of Ethics:</strong> Honest, transparent dealings</li>
      <li><strong>Conflict of Interest:</strong> Avoid improper situations</li>
      <li><strong>Accountability:</strong> Take responsibility for actions</li>
      <li><strong>Compliance:</strong> Follow company policies and laws</li>
      <li><strong>Continuing Education:</strong> Stay current with technology</li>
    </ul>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">6. Communication & Customer Service:</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>Clear Communication:</strong> Explain technical concepts simply</li>
      <li><strong>Active Listening:</strong> Understand user concerns</li>
      <li><strong>Time Management:</strong> Prioritize issues efficiently</li>
      <li><strong>Customer Satisfaction:</strong> Follow up after resolution</li>
      <li><strong>Remote Support Tools:</strong> TeamViewer, RDP for assistance</li>
      <li><strong>Escalation Procedures:</strong> When to involve management</li>
    </ul>

    <h3 class="text-blue-300 font-bold mt-3 mb-2">7. Compliance & Regulations:</h3>
    <ul class="list-disc ml-5 mb-3">
      <li><strong>Data Protection (GDPR):</strong> EU data privacy regulation</li>
      <li><strong>HIPAA:</strong> Healthcare information protection</li>
      <li><strong>FERPA:</strong> Educational records privacy</li>
      <li><strong>PCI DSS:</strong> Payment card industry data security</li>
      <li><strong>Software Licensing:</strong> Compliance with license agreements</li>
      <li><strong>Acceptable Use Policy:</strong> Company IT usage guidelines</li>
      <li><strong>Chain of Custody:</strong> Evidence preservation for legal matters</li>
    </ul>

    <div class="mt-4 flex gap-2">
      <a href="pdfs/Operational Procedures.pdf" target="_blank"
         class="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded">
         📖 View PDF
      </a>
      <a href="pdfs/Operational Procedures.pdf" download
         class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
         ⬇ Download
      </a>
    </div>
  `
};

// Render content
document.getElementById('content').innerHTML =
  notes[chapter] || "<p>No notes available yet.</p>";

// Back button
function goBack() {
  window.location.href = "notes.html";
}
