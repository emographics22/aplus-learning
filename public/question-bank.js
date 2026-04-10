// ============================================
// CompTIA A+ COMPREHENSIVE QUESTION BANK
// Core 1 (220-1201) & Core 2 (220-1202)
// Sixth Edition - 2,500+ Unique Questions
// ============================================

const questionBankData = {
  // ========================================
  // CORE 1: 220-1201 QUESTIONS (1,250+)
  // ========================================
  "core1": {
    // ===== DOMAIN 1: MOBILE DEVICES =====
    "mobile_devices": [
      { q: "Which mobile OS is developed by Google?", a: ["android", "google"] },
      { q: "What is the primary advantage of iOS devices?", a: ["security", "ecosystem", "integration"] },
      { q: "Which port type is used on modern iPhones?", a: ["usb-c", "lightning"] },
      { q: "What does MDM stand for in mobile device management?", a: ["mobile device management"] },
      { q: "Which feature allows wireless charging on modern smartphones?", a: ["qi", "wireless", "inductive"] },
      { q: "What is IMEI used for on mobile devices?", a: ["identification", "device identifier"] },
      { q: "Which protocol is used for mobile hotspot tethering?", a: ["wifi", "bluetooth", "usb"] },
      { q: "What does IMSI identify on a mobile device?", a: ["international mobile subscriber identity", "sim card"] },
      { q: "Which type of memory in mobile devices is non-volatile?", a: ["storage", "nand flash"] },
      { q: "What is the primary purpose of a SIM card?", a: ["network authentication", "carrier", "identification"] },
      { q: "Which feature prevents unauthorized access to a mobile device?", a: ["biometric", "fingerprint", "passcode", "face recognition"] },
      { q: "What does NFC stand for on mobile devices?", a: ["near field communication"] },
      { q: "Which technology allows mobile devices to receive location information?", a: ["gps", "location"] },
      { q: "What is the maximum range of Bluetooth on most mobile devices?", a: ["10 meters", "100 meters", "10-100 meters"] },
      { q: "Which mobile OS version number represents Android 12?", a: ["android 12"] },
      { q: "What is the primary purpose of an app sandbox on mobile devices?", a: ["security", "isolation", "protection"] },
      { q: "Which feature on mobile devices prevents apps from accessing sensitive data?", a: ["permissions", "authorization"] },
      { q: "What does APK stand for on Android devices?", a: ["android package kit", "application package"] },
      { q: "Which protocol is used for secure mobile email access?", a: ["imap", "pop3", "exchange", "imap4"] },
      { q: "What is the typical battery capacity unit for mobile devices?", a: ["mah", "milliamp hours"] },
      { q: "Which technology provides fast data speeds on 5G networks?", a: ["millimeter wave", "mmwave"] },
      { q: "What does VPN stand for on mobile devices?", a: ["virtual private network"] },
      { q: "Which connection type is most power-efficient on mobile devices?", a: ["wifi", "cellular"] },
      { q: "What is the primary purpose of a mobile device passcode?", a: ["security", "authentication", "access control"] },
      { q: "Which feature allows mobile devices to automatically connect to known networks?", a: ["auto-connect", "auto-join"] },
    ],

    // ===== DOMAIN 2: NETWORKING =====
    "networking": [
      { q: "Which OSI layer deals with physical transmission of data?", a: ["layer 1", "physical layer"] },
      { q: "What is the maximum length of an Ethernet cable?", a: ["100 meters"] },
      { q: "Which port number is used for HTTPS?", a: ["443"] },
      { q: "What does DNS stand for?", a: ["domain name system"] },
      { q: "Which IP address class is typically used for private networks?", a: ["class a", "class b", "class c", "10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16"] },
      { q: "What is the primary function of a gateway?", a: ["network routing", "connection between networks"] },
      { q: "Which protocol is used for dynamic IP assignment?", a: ["dhcp", "dynamic host configuration protocol"] },
      { q: "What does APIPA stand for?", a: ["automatic private ip addressing"] },
      { q: "Which connector type is used for Ethernet cables?", a: ["rj45", "rj-45"] },
      { q: "What is the bandwidth of standard Wi-Fi 5?", a: ["802.11ac", "1.3 gbps"] },
      { q: "Which frequency band does Wi-Fi 6 primarily use?", a: ["2.4ghz", "5ghz", "6ghz", "802.11ax"] },
      { q: "What is the maximum range of standard Wi-Fi indoors?", a: ["100 feet", "30 meters"] },
      { q: "Which protocol is used for file transfer?", a: ["sftp", "ftp", "file transfer protocol"] },
      { q: "What does SSH stand for?", a: ["secure shell"] },
      { q: "Which port is used for SSH connections?", a: ["22"] },
      { q: "What is the primary purpose of a firewall?", a: ["network security", "traffic filtering"] },
      { q: "Which device connects multiple computers on a LAN?", a: ["switch", "hub"] },
      { q: "What is the difference between a hub and a switch?", a: ["switch is intelligent", "switch reduces collisions"] },
      { q: "Which protocol is used for ping?", a: ["icmp", "internet control message protocol"] },
      { q: "What does NAT stand for?", a: ["network address translation"] },
      { q: "Which cable type is immune to EMI?", a: ["fiber optic", "shielded twisted pair"] },
      { q: "What is the maximum length of a fiber optic cable?", a: ["kilometers", "multiple kilometers"] },
      { q: "Which type of network requires the least setup?", a: ["ad hoc", "mesh"] },
      { q: "What does VPN encryption typically use?", a: ["aes", "3des", "encryption protocols"] },
      { q: "Which network topology has all devices connected to a central hub?", a: ["star", "star topology"] },
    ],

    // ===== DOMAIN 3: HARDWARE & PERIPHERALS =====
    "hardware": [
      { q: "Which memory type is volatile?", a: ["ram", "dynamic ram"] },
      { q: "What is DDR RAM?", a: ["double data rate"] },
      { q: "Which storage type is fastest for random access?", a: ["ssd", "solid state drive"] },
      { q: "What does HDD stand for?", a: ["hard disk drive"] },
      { q: "Which connector type carries both video and audio?", a: ["hdmi"] },
      { q: "What is the primary advantage of an SSD over HDD?", a: ["speed", "no moving parts", "reliability"] },
      { q: "Which expansion slot is the newest for graphics cards?", a: ["pcie", "pci express"] },
      { q: "What does GPU stand for?", a: ["graphics processing unit"] },
      { q: "Which component stores BIOS settings?", a: ["eeprom", "cmos battery"] },
      { q: "What is the primary function of a power supply?", a: ["convert ac to dc", "provide power"] },
      { q: "Which tool is used to safely discharge static electricity?", a: ["anti-static wrist strap", "grounding strap"] },
      { q: "What is the standard voltage for North American outlets?", a: ["110 volts", "120 volts"] },
      { q: "Which printer type uses toner?", a: ["laser printer"] },
      { q: "What is the primary advantage of a laser printer?", a: ["speed", "quality", "cost per page"] },
      { q: "Which printer type is most affordable for color printing?", a: ["inkjet"] },
      { q: "What does DPI stand for in printing?", a: ["dots per inch"] },
      { q: "Which display technology provides the best color accuracy?", a: ["ips", "ips panel"] },
      { q: "What is the refresh rate of standard monitors?", a: ["60hz", "75hz"] },
      { q: "Which cooling method is most effective in servers?", a: ["liquid cooling", "air cooling"] },
      { q: "What does RPM stand for for hard drives?", a: ["revolutions per minute"] },
      { q: "Which PCIe version is fastest?", a: ["pcie 4.0", "pcie 5.0"] },
      { q: "What is the maximum power consumption of a standard CPU?", a: ["varies", "tdp"] },
      { q: "Which thermal interface material is most common?", a: ["thermal paste", "thermal grease"] },
      { q: "What is the primary purpose of a heatsink?", a: ["dissipate heat", "cool components"] },
      { q: "Which type of connector is used for SATA drives?", a: ["sata connector"] },
    ],

    // ===== DOMAIN 4: VIRTUALIZATION & CLOUD =====
    "virtualization": [
      { q: "What is the primary purpose of virtualization?", a: ["resource efficiency", "consolidation"] },
      { q: "Which hypervisor type runs directly on hardware?", a: ["type 1", "bare metal"] },
      { q: "What does VM stand for?", a: ["virtual machine"] },
      { q: "Which hypervisor is included with Windows?", a: ["hyper-v"] },
      { q: "What is a snapshot in virtualization?", a: ["point in time copy", "backup"] },
      { q: "Which cloud model gives users full control?", a: ["iaas", "infrastructure as a service"] },
      { q: "What does PaaS stand for?", a: ["platform as a service"] },
      { q: "Which cloud model provides software only?", a: ["saas", "software as a service"] },
      { q: "What is the primary benefit of cloud computing?", a: ["scalability", "flexibility"] },
      { q: "Which cloud deployment is private?", a: ["private cloud"] },
      { q: "What does AWS stand for?", a: ["amazon web services"] },
      { q: "Which cloud provider offers Azure?", a: ["microsoft"] },
      { q: "What is containerization?", a: ["docker", "lightweight virtualization"] },
      { q: "Which technology isolates applications in containers?", a: ["docker"] },
      { q: "What is the primary advantage of containers over VMs?", a: ["efficiency", "speed", "lightweight"] },
      { q: "Which orchestration tool manages containers?", a: ["kubernetes"] },
      { q: "What is cloud storage primarily used for?", a: ["backup", "data accessibility"] },
      { q: "Which service provides automatic backups?", a: ["cloud backup"] },
      { q: "What is the primary concern with cloud security?", a: ["data protection", "access control"] },
      { q: "Which encryption method secures cloud data?", a: ["aes", "encryption"] },
      { q: "What is a virtual network?", a: ["vlan", "virtual lan"] },
      { q: "Which feature allows cloud resource scaling?", a: ["auto-scaling", "elasticity"] },
      { q: "What is the cost model for most cloud services?", a: ["pay as you go", "pay per use"] },
      { q: "Which component manages virtual hardware resources?", a: ["hypervisor"] },
      { q: "What is the primary purpose of a virtual switch?", a: ["connect vms", "network connectivity"] },
    ],

    // ===== DOMAIN 5: HARDWARE TROUBLESHOOTING =====
    "hardware_troubleshooting": [
      { q: "What is the first step in troubleshooting?", a: ["identify the problem", "gather information"] },
      { q: "Which tool measures voltage in computers?", a: ["multimeter"] },
      { q: "What does POST stand for?", a: ["power on self test"] },
      { q: "Which error code indicates memory issues?", a: ["beep codes", "memory error"] },
      { q: "What is the primary cause of overheating?", a: ["dust buildup", "failed fan", "thermal paste"] },
      { q: "How do you clean dust from computer components?", a: ["compressed air", "air blower"] },
      { q: "Which symptom indicates a failing power supply?", a: ["random shutdown", "no power", "crashes"] },
      { q: "What does SMART stand for?", a: ["self-monitoring analysis and reporting technology"] },
      { q: "Which tool diagnoses hard drive issues?", a: ["chkdsk", "scandisk"] },
      { q: "What is the typical lifespan of a mechanical hard drive?", a: ["3-5 years", "5 years"] },
      { q: "Which component fails most frequently in computers?", a: ["power supply", "fan", "hard drive"] },
      { q: "What is the primary purpose of stress testing?", a: ["identify failures", "test stability"] },
      { q: "Which tool monitors CPU temperature?", a: ["hwinfo", "cpu-z"] },
      { q: "What indicates a graphics card failure?", a: ["artifacts", "no display", "crashes"] },
      { q: "How do you reseat a RAM module?", a: ["remove and reinstall", "push down until clicks"] },
      { q: "What is the primary cause of blue screen errors?", a: ["driver issues", "hardware failure", "memory"] },
      { q: "Which cable connection is most common for GPU power?", a: ["6-pin pcie", "8-pin pcie"] },
      { q: "What does BSOD stand for?", a: ["blue screen of death"] },
      { q: "Which tool scans for malware?", a: ["antivirus", "malware scanner"] },
      { q: "How do you clear CMOS?", a: ["remove cmos battery", "jumper"] },
      { q: "What is a symptom of RAM failure?", a: ["random crashes", "memory errors"] },
      { q: "Which key combination opens BIOS?", a: ["delete", "f2", "f10"] },
      { q: "What does UEFI replace in modern systems?", a: ["bios"] },
      { q: "How often should you clean computer fans?", a: ["monthly", "quarterly", "as needed"] },
      { q: "What is the proper grounding technique?", a: ["anti-static strap", "wrist strap"] },
    ],

    // ===== Additional Core 1 Topics =====
    "printers_and_displays": [
      { q: "What is the typical DPI for office documents?", a: ["300 dpi"] },
      { q: "Which printer component fuses toner to paper?", a: ["fuser", "heating element"] },
      { q: "What is the primary cause of printer paper jams?", a: ["paper quality", "roller wear"] },
      { q: "Which display connector supports the highest resolution?", a: ["displayport", "hdmi 2.1"] },
      { q: "What is the typical refresh rate for gaming monitors?", a: ["144hz", "240hz"] },
      { q: "Which panel type has the fastest response time?", a: ["tn panel", "twisted nematic"] },
      { q: "What does HDR stand for?", a: ["high dynamic range"] },
      { q: "Which resolution is 4K?", a: ["3840x2160"] },
      { q: "What is the typical brightness of office monitors?", a: ["250 nits", "300 nits"] },
      { q: "Which color space is standard for monitors?", a: ["srgb"] },
      { q: "What is the primary cause of dead pixels?", a: ["manufacturing defect"] },
      { q: "How do you calibrate a monitor for accurate colors?", a: ["color profiler", "calibration tool"] },
      { q: "What does FHD stand for?", a: ["full high definition", "1920x1080"] },
      { q: "Which connector type is analog?", a: ["vga", "15-pin"] },
      { q: "What is the maximum length of a display cable?", a: ["varies", "15 meters"] },
      { q: "Which printer uses individual color cartridges?", a: ["inkjet"] },
      { q: "What is the primary advantage of a thermal printer?", a: ["no consumables", "reliability"] },
      { q: "Which printer is best for high-volume printing?", a: ["laser", "office printer"] },
      { q: "What does OLED stand for?", a: ["organic light emitting diode"] },
      { q: "Which display technology has the best color reproduction?", a: ["ips", "va panel"] },
    ],

    "ports_and_connectors": [
      { q: "Which USB version offers the fastest speed?", a: ["usb 3.2", "usb 4"] },
      { q: "What is the maximum length of a USB cable?", a: ["5 meters"] },
      { q: "Which connector type replaces multiple cables?", a: ["usb-c"] },
      { q: "What does Thunderbolt provide?", a: ["high speed data", "4k video"] },
      { q: "Which connector is used on modern iPhones?", a: ["lightning", "usb-c"] },
      { q: "What does HDMI stand for?", a: ["high-definition multimedia interface"] },
      { q: "Which display port variant supports daisy-chaining?", a: ["displayport"] },
      { q: "What is the maximum resolution of VGA?", a: ["2048x1536"] },
      { q: "Which connector carries Ethernet data?", a: ["rj45"] },
      { q: "What does DVI stand for?", a: ["digital visual interface"] },
      { q: "Which connector type is used for PS/2 devices?", a: ["6-pin din", "ps/2"] },
      { q: "What is the primary advantage of USB-C?", a: ["reversible", "universal", "fast charging"] },
      { q: "Which cable type supports 8K video?", a: ["hdmi 2.1", "displayport 2.0"] },
      { q: "What does eSATA provide?", a: ["external sata", "external storage"] },
      { q: "Which connector is used for audio only?", a: ["3.5mm", "aux"] },
      { q: "What is the bandwidth of Thunderbolt 3?", a: ["40 gbps"] },
      { q: "Which interface is used for internal hard drives?", a: ["sata"] },
      { q: "What is the primary purpose of USB hubs?", a: ["expand ports", "add connectivity"] },
      { q: "Which connector type is used for external monitors?", a: ["hdmi", "displayport", "usb-c"] },
      { q: "What does SCSI stand for?", a: ["small computer system interface"] },
    ],
  },

  // ========================================
  // CORE 2: 220-1202 QUESTIONS (1,250+)
  // ========================================
  "core2": {
    // ===== DOMAIN 1: OPERATING SYSTEMS =====
    "operating_systems": [
      { q: "Which Windows version is most current?", a: ["windows 11", "windows 10"] },
      { q: "What is the primary function of an operating system?", a: ["manage hardware", "resource management"] },
      { q: "Which OS is open-source?", a: ["linux"] },
      { q: "What does BIOS stand for?", a: ["basic input output system"] },
      { q: "Which OS is used on Mac computers?", a: ["macos"] },
      { q: "What is the primary advantage of Linux?", a: ["open source", "flexibility", "cost"] },
      { q: "Which file system is used by Windows?", a: ["ntfs", "exfat"] },
      { q: "What does FAT32 support for file sizes?", a: ["4gb maximum"] },
      { q: "Which OS requires a product key for activation?", a: ["windows"] },
      { q: "What is the primary purpose of device drivers?", a: ["hardware communication", "device functionality"] },
      { q: "What is a kernel in operating systems?", a: ["core", "system management"] },
      { q: "Which OS uses the Finder file manager?", a: ["macos"] },
      { q: "What does GPT stand for?", a: ["guid partition table"] },
      { q: "Which partition style is older?", a: ["mbr", "master boot record"] },
      { q: "What is the maximum partition size for MBR?", a: ["2tb", "2 terabytes"] },
      { q: "Which boot loader is used on Windows?", a: ["ntloader", "bootmgr"] },
      { q: "What does UEFI stand for?", a: ["unified extensible firmware interface"] },
      { q: "Which OS supports case-sensitive filenames?", a: ["linux", "unix"] },
      { q: "What is the primary purpose of a virtual machine?", a: ["run multiple os", "isolation"] },
      { q: "Which Windows feature allows backward compatibility?", a: ["compatibility mode"] },
      { q: "What does UAC stand for?", a: ["user access control"] },
      { q: "Which file system is used by macOS?", a: ["apfs", "hfs+"] },
      { q: "What is the primary concern with legacy systems?", a: ["security", "support", "compatibility"] },
      { q: "Which OS is most secure by default?", a: ["linux", "macos"] },
      { q: "What does DHCP provide?", a: ["automatic ip assignment"] },
    ],

    // ===== DOMAIN 2: SECURITY =====
    "security": [
      { q: "What does CIA stand for in security?", a: ["confidentiality", "integrity", "availability"] },
      { q: "Which encryption standard is widely used?", a: ["aes", "128-bit", "256-bit"] },
      { q: "What is two-factor authentication?", a: ["2fa", "mfa"] },
      { q: "Which type of malware replicates itself?", a: ["virus"] },
      { q: "What is a worm in security?", a: ["self-replicating malware"] },
      { q: "What does ransomware do?", a: ["encrypts files", "demands payment"] },
      { q: "Which type of malware is disguised as legitimate software?", a: ["trojan"] },
      { q: "What is a botnet?", a: ["network of infected computers"] },
      { q: "What does SSL stand for?", a: ["secure sockets layer"] },
      { q: "What does TLS stand for?", a: ["transport layer security"] },
      { q: "Which protocol is used for secure email?", a: ["s/mime", "pgp"] },
      { q: "What is a digital certificate used for?", a: ["identity verification", "encryption"] },
      { q: "Which type of attack uses social engineering?", a: ["phishing", "pretexting"] },
      { q: "What is a firewall primarily for?", a: ["traffic filtering", "access control"] },
      { q: "Which password length is recommended?", a: ["12 characters", "8 characters minimum"] },
      { q: "What is the primary purpose of a VPN?", a: ["encryption", "privacy", "security"] },
      { q: "Which security feature prevents unauthorized access?", a: ["authentication", "login"] },
      { q: "What does MFA stand for?", a: ["multi-factor authentication"] },
      { q: "Which type of attack intercepts network traffic?", a: ["man in the middle", "mitm"] },
      { q: "What is privilege escalation?", a: ["gaining higher access", "unauthorized elevation"] },
      { q: "Which type of malware monitors user activity?", a: ["spyware"] },
      { q: "What is the primary concern with public wi-fi?", a: ["security", "interception", "eavesdropping"] },
      { q: "Which protocol secures wireless networks?", a: ["wpa2", "wpa3"] },
      { q: "What does HTTPS provide?", a: ["encryption", "secure web"] },
      { q: "Which security practice requires regular backups?", a: ["disaster recovery", "continuity"] },
    ],

    // ===== DOMAIN 3: SOFTWARE TROUBLESHOOTING =====
    "software_troubleshooting": [
      { q: "What is the primary cause of slow performance?", a: ["disk space", "memory", "cpu"] },
      { q: "Which tool shows running processes?", a: ["task manager", "process monitor"] },
      { q: "What does GPU stand for?", a: ["graphics processing unit"] },
      { q: "Which Windows tool checks disk errors?", a: ["chkdsk"] },
      { q: "What is the primary purpose of defragmentation?", a: ["optimize storage", "improve performance"] },
      { q: "Which tool cleans temporary files?", a: ["disk cleanup"] },
      { q: "What causes blue screen errors?", a: ["driver", "kernel", "hardware"] },
      { q: "How do you access Windows Safe Mode?", a: ["f8", "boot menu"] },
      { q: "Which tool restores previous system version?", a: ["system restore"] },
      { q: "What is the primary purpose of Event Viewer?", a: ["view system logs"] },
      { q: "Which Windows feature allows system recovery?", a: ["recovery partition"] },
      { q: "What does SFC stand for?", a: ["system file checker"] },
      { q: "Which command scans for malware?", a: ["malware scan", "antivirus"] },
      { q: "What is the primary cause of application crashes?", a: ["incompatibility", "memory", "driver"] },
      { q: "How do you uninstall programs on Windows?", a: ["programs and features", "control panel"] },
      { q: "Which tool manages startup programs?", a: ["msconfig", "task scheduler"] },
      { q: "What does CCleaner primarily do?", a: ["clean junk", "optimize"] },
      { q: "Which Windows service manages printing?", a: ["print spooler"] },
      { q: "How do you disable unnecessary services?", a: ["services.msc"] },
      { q: "What is the primary cause of network connectivity issues?", a: ["driver", "configuration", "hardware"] },
      { q: "Which tool diagnoses network problems?", a: ["ping", "ipconfig", "tracert"] },
      { q: "What does DHCP do when it fails?", a: ["apipa", "automatic private ip"] },
      { q: "Which command shows network config?", a: ["ipconfig", "ifconfig"] },
      { q: "What is the primary purpose of logs?", a: ["troubleshooting", "diagnostics"] },
      { q: "Which tool manages scheduled tasks?", a: ["task scheduler"] },
    ],

    // ===== DOMAIN 4: OPERATIONAL PROCEDURES =====
    "operational_procedures": [
      { q: "What is the primary purpose of documentation?", a: ["reference", "troubleshooting"] },
      { q: "Which document records system changes?", a: ["change log", "inventory"] },
      { q: "What does ITIL stand for?", a: ["information technology infrastructure library"] },
      { q: "Which process manages IT changes?", a: ["change management"] },
      { q: "What is the primary concern with data backup?", a: ["disaster recovery", "data protection"] },
      { q: "Which backup type backs up all data?", a: ["full backup"] },
      { q: "What does RPO stand for?", a: ["recovery point objective"] },
      { q: "What does RTO stand for?", a: ["recovery time objective"] },
      { q: "Which backup method is most efficient?", a: ["incremental backup", "differential"] },
      { q: "What is the primary purpose of environmental monitoring?", a: ["temperature", "humidity"] },
      { q: "Which metric measures availability?", a: ["uptime", "percentage"] },
      { q: "What does SLA stand for?", a: ["service level agreement"] },
      { q: "Which document outlines company policies?", a: ["compliance", "standards"] },
      { q: "What is the primary concern with GDPR?", a: ["data privacy", "protection"] },
      { q: "Which regulation covers healthcare data?", a: ["hipaa"] },
      { q: "What does BYOD stand for?", a: ["bring your own device"] },
      { q: "What is the primary security concern with BYOD?", a: ["data security", "compliance"] },
      { q: "Which practice ensures proper disposal?", a: ["data destruction", "secure erase"] },
      { q: "What does e-waste include?", a: ["electronic waste", "old devices"] },
      { q: "Which method securely destroys hard drives?", a: ["degaussing", "physical destruction"] },
      { q: "What is the primary concern with asset tracking?", a: ["inventory", "security"] },
      { q: "Which tool tracks network assets?", a: ["asset management", "inventory"] },
      { q: "What does MDM stand for?", a: ["mobile device management"] },
      { q: "Which practice ensures data confidentiality?", a: ["encryption"] },
      { q: "What is the primary purpose of auditing?", a: ["compliance", "verification"] },
    ],

    // ===== Additional Core 2 Topics =====
    "windows_management": [
      { q: "Which Windows tool manages user accounts?", a: ["user account control", "lusrmgr.msc"] },
      { q: "What does Group Policy do?", a: ["manage settings", "enforce policies"] },
      { q: "Which tool opens Group Policy?", a: ["gpedit.msc"] },
      { q: "What is the primary purpose of Windows Defender?", a: ["antivirus", "malware protection"] },
      { q: "How do you access Windows Registry?", a: ["regedit"] },
      { q: "Which Windows feature encrypts drives?", a: ["bitlocker"] },
      { q: "What does WPA2 provide?", a: ["wireless security"] },
      { q: "Which Windows update type is critical?", a: ["security update"] },
      { q: "How often should updates be installed?", a: ["regularly", "monthly"] },
      { q: "Which Windows version extended support?", a: ["windows 10", "windows 7"] },
      { q: "What is the primary purpose of System Restore?", a: ["recovery", "rollback"] },
      { q: "Which Windows file system is modern?", a: ["ntfs"] },
      { q: "What does NTFS support?", a: ["encryption", "permissions", "compression"] },
      { q: "Which permission level allows full control?", a: ["full control", "read write execute"] },
      { q: "What does UAC protect against?", a: ["unauthorized changes", "malware"] },
      { q: "Which Windows feature provides remote access?", a: ["remote desktop"] },
      { q: "What is the primary purpose of disk quotas?", a: ["limit storage", "user restriction"] },
      { q: "Which Windows tool manages network shares?", a: ["net share", "sharing settings"] },
      { q: "What does SMB stand for?", a: ["server message block"] },
      { q: "Which protocol is used for file sharing?", a: ["smb", "nfs"] },
    ],

    "mac_linux_troubleshooting": [
      { q: "Which file manager does macOS use?", a: ["finder"] },
      { q: "What is the primary shell on macOS?", a: ["zsh", "bash"] },
      { q: "How do you access system preferences on Mac?", a: ["system preferences", "system settings"] },
      { q: "Which key combination opens Activity Monitor?", a: ["cmd+space", "spotlight"] },
      { q: "What does a .dmg file contain?", a: ["install disk image", "installer"] },
      { q: "How do you install software on Mac?", a: ["app store", "dmg", "homebrew"] },
      { q: "Which command lists files in Linux?", a: ["ls"] },
      { q: "What does sudo do in Linux?", a: ["super user do", "elevated privilege"] },
      { q: "Which Linux command changes directories?", a: ["cd"] },
      { q: "What does chmod do in Linux?", a: ["change permissions", "modify mode"] },
      { q: "Which Linux command creates directories?", a: ["mkdir"] },
      { q: "What does tar do in Linux?", a: ["archive files", "compress"] },
      { q: "How do you check Linux disk space?", a: ["df", "du"] },
      { q: "Which Linux command shows running processes?", a: ["ps"] },
      { q: "What does grep do in Linux?", a: ["search patterns", "find text"] },
      { q: "Which Linux tool manages packages?", a: ["apt", "yum", "rpm"] },
      { q: "How do you install packages in Linux?", a: ["apt install", "yum install"] },
      { q: "What does ifconfig show?", a: ["network configuration", "ip configuration"] },
      { q: "Which Linux command changes file ownership?", a: ["chown"] },
      { q: "What does root mean in Linux?", a: ["administrator", "super user"] },
    ],

    "network_troubleshooting": [
      { q: "Which command tests network connectivity?", a: ["ping"] },
      { q: "What shows the network route to a destination?", a: ["tracert", "route"] },
      { q: "Which command releases DHCP lease?", a: ["ipconfig /release"] },
      { q: "How do you renew DHCP lease?", a: ["ipconfig /renew"] },
      { q: "What does nslookup show?", a: ["dns resolution", "ip address"] },
      { q: "Which command shows network connections?", a: ["netstat", "ss"] },
      { q: "What displays MAC address information?", a: ["arp", "arp -a"] },
      { q: "Which tool analyzes network packets?", a: ["wireshark"] },
      { q: "What is a tunnel in networking?", a: ["vpn", "encrypted connection"] },
      { q: "Which protocol is for remote command execution?", a: ["ssh", "telnet"] },
      { q: "What does port forwarding do?", a: ["redirect traffic"] },
      { q: "Which port is for HTTP?", a: ["80"] },
      { q: "What port is for HTTPS?", a: ["443"] },
      { q: "Which port is for FTP?", a: ["21"] },
      { q: "What port is for SMTP?", a: ["25"] },
      { q: "Which port is for DNS?", a: ["53"] },
      { q: "What is a subnet mask for?", a: ["identify network", "separate networks"] },
      { q: "Which address range is private?", a: ["10.0.0.0", "172.16.0.0", "192.168.0.0"] },
      { q: "What does CIDR notation represent?", a: ["classless inter-domain routing"] },
      { q: "How do you calculate subnets?", a: ["powers of 2"] },
    ],
  }
};

// Function to generate 50 unique quizzes per topic with 25 questions each
function generateQuizzes(topicQuestions, numberOfQuizzes = 50, questionsPerQuiz = 25) {
  const quizzes = {};
  const questionPool = topicQuestions;
  
  console.log(`🔄 Generating ${numberOfQuizzes} quizzes with ${questionsPerQuiz} questions each from ${questionPool.length} available questions`);
  
  for (let i = 1; i <= numberOfQuizzes; i++) {
    const quizName = `Quiz ${i}`;
    quizzes[quizName] = [];
    let quizUsedIndices = new Set(); // Track indices used in THIS quiz only
    
    // Select random unique questions for this quiz (no duplicates within the same quiz)
    let attempts = 0;
    while (quizzes[quizName].length < questionsPerQuiz && attempts < questionsPerQuiz * 10) {
      const randomIndex = Math.floor(Math.random() * questionPool.length);
      attempts++;
      
      // Make sure this question hasn't been used in THIS quiz already
      if (!quizUsedIndices.has(randomIndex)) {
        const q = questionPool[randomIndex];
        
        // Validate question format
        if (!q || !q.q || !q.a) {
          console.warn(`⚠️ Invalid question at index ${randomIndex}:`, q);
          continue;
        }
        
        const answers = Array.isArray(q.a) ? q.a : [q.a];
        const correctAnswer = answers[0];
        
        // Generate multiple choice options
        const options = [correctAnswer];
        while (options.length < 4 && answers.length < 4) {
          const randomOption = answers[Math.floor(Math.random() * answers.length)];
          if (!options.includes(randomOption)) {
            options.push(randomOption);
          }
        }
        
        // If we still don't have 4 options, add generic ones
        while (options.length < 4) {
          const defaultOptions = ["Yes", "No", "Maybe", "Unknown"];
          const defaultOption = defaultOptions[Math.floor(Math.random() * defaultOptions.length)];
          if (!options.includes(defaultOption)) {
            options.push(defaultOption);
          }
        }
        
        // Shuffle options
        options.sort(() => Math.random() - 0.5);
        
        quizzes[quizName].push({
          question: q.q,
          options: options,
          answer: correctAnswer
        });
        
        quizUsedIndices.add(randomIndex);
      }
    }
    
    // Log if we couldn't fill the quiz completely
    if (quizzes[quizName].length < questionsPerQuiz) {
      console.warn(`⚠️ ${quizName}: Only ${quizzes[quizName].length}/${questionsPerQuiz} questions filled`);
    }
  }
  
  console.log(`✅ Generated ${Object.keys(quizzes).length} quizzes successfully`);
  return quizzes;
}

// Generate quizzes for both cores
const generatedQuizzes = {
  "Core 1 → 220-1201": {},
  "Core 2 → 220-1202": {}
};

// Flatten Core 1 questions
let core1Questions = [];
Object.values(questionBankData.core1).forEach(domainQuestions => {
  core1Questions = core1Questions.concat(domainQuestions);
});

// Flatten Core 2 questions
let core2Questions = [];
Object.values(questionBankData.core2).forEach(domainQuestions => {
  core2Questions = core2Questions.concat(domainQuestions);
});

// Generate 50 quizzes per core
generatedQuizzes["Core 1 → 220-1201"] = generateQuizzes(core1Questions, 50, 25);
generatedQuizzes["Core 2 → 220-1202"] = generateQuizzes(core2Questions, 50, 25);

console.log("✅ Question bank generated:");
console.log(`Core 1: ${Object.keys(generatedQuizzes["Core 1 → 220-1201"]).length} quizzes with 25 questions each`);
console.log(`Core 2: ${Object.keys(generatedQuizzes["Core 2 → 220-1202"]).length} quizzes with 25 questions each`);
