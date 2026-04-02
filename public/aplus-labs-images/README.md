# Lab Images Directory

## Instructions

Add lab images to this folder for the lab system to display them.

## Required Images for Core 1 (Hardware/Networking)

Place these image files in this directory:

```
aplus-labs-images/
├── rj45.jpg             (RJ45 Ethernet connector)
├── hdmi.jpg             (HDMI port)
├── vga.jpg              (VGA port)
├── ram.jpg              (RAM memory module)
├── psu.jpg              (Power supply unit)
├── router.jpg           (Network router)
├── switch.jpg           (Network switch)
├── crimper.jpg          (Cable crimper tool)
├── printer.jpg          (Printer device)
├── motherboard.jpg      (Motherboard)
├── ssd.jpg              (SSD storage)
├── usb.jpg              (USB port)
└── fiber.jpg            (Fiber optic cable)
```

## Required Images for Core 2 (Operating Systems/Security)

```
aplus-labs-images/
├── antivirus.jpg        (Antivirus software)
├── firewall.jpg         (Firewall)
├── windows.jpg          (Windows OS)
├── linux.jpg            (Linux OS)
├── taskmanager.jpg      (Task Manager)
├── cmd.jpg              (Command Prompt)
├── malware.jpg          (Malware/Virus)
├── backup.jpg           (Backup process)
├── password.jpg         (Password/Security)
├── update.jpg           (Software update)
├── remote.jpg           (Remote desktop/access)
└── encryption.jpg       (Encryption)
```

## Image Specifications

- **Format**: JPG or PNG
- **Size**: 150x150 pixels recommended (will be resized by CSS)
- **Quality**: Clear, professional images
- **Naming**: Use lowercase with no spaces

## Where to Get Images

### Free Image Sources:
- **Unsplash** (unsplash.com) - Free high-quality photos
- **Pexels** (pexels.com) - Free stock photos
- **Pixabay** (pixabay.com) - Free images
- **Google Images** - Search for each component
- **Screenshot Your Own** - Take screenshots of software

### Alternative: Use Screenshots
Take screenshots of:
- Command Prompt
- Task Manager
- Windows updates
- Linux desktop
- Antivirus software
- Firewall settings

## How to Add Images

1. Find or create the image files
2. Save them with the exact filenames listed above
3. Place them in `public/aplus-labs-images/` folder
4. Restart the server
5. Images will automatically appear in labs

## Example Image Search Terms

**Core 1:**
- "RJ45 connector ethernet"
- "HDMI port"
- "VGA port connector"
- "RAM memory DDR4"
- "Power supply unit PSU"
- "Network router WiFi"
- "Network switch managed"
- "Cable crimper crimping tool"
- "Printer office"
- "Motherboard ATX"
- "SSD solid state drive"
- "USB port connector"
- "Fiber optic cable"

**Core 2:**
- "Antivirus software icon"
- "Firewall icon"
- "Windows 10 screen"
- "Linux desktop"
- "Windows Task Manager"
- "Command Prompt CMD"
- "Malware virus threat"
- "Data backup"
- "Password strength"
- "Software update Windows"
- "Remote desktop connection"
- "Data encryption"

## Testing

Once images are added:
1. Visit `http://localhost:3000/labs.html`
2. Start a lab (Core 1 or Core 2)
3. Images should appear below the question number
4. If image fails to load, check:
   - Filename spelling matches exactly
   - Path is correct (aplus-labs-images/)
   - File exists in the folder
   - File format is JPG or PNG

## File Structure

```
public/
├── aplus-labs-images/
│   ├── rj45.jpg
│   ├── hdmi.jpg
│   ├── vga.jpg
│   ├── ram.jpg
│   ├── psu.jpg
│   ├── router.jpg
│   ├── switch.jpg
│   ├── crimper.jpg
│   ├── printer.jpg
│   ├── motherboard.jpg
│   ├── ssd.jpg
│   ├── usb.jpg
│   ├── fiber.jpg
│   ├── antivirus.jpg
│   ├── firewall.jpg
│   ├── windows.jpg
│   ├── linux.jpg
│   ├── taskmanager.jpg
│   ├── cmd.jpg
│   ├── malware.jpg
│   ├── backup.jpg
│   ├── password.jpg
│   ├── update.jpg
│   ├── remote.jpg
│   ├── encryption.jpg
│   └── README.md (this file)
├── lab.js (references aplus-labs-images/)
└── labs.html
```

## Total Images Needed

- **Core 1**: 13 images
- **Core 2**: 12 images
- **Total**: 25 images

