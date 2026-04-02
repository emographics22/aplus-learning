# Lab Images Directory

## Instructions

Add lab images to this folder for the lab system to display them.

## Required Images for Core 1 (Hardware)

Place these image files in this directory:

```
images/
├── cpu.jpg              (Processor)
├── ram.jpg              (RAM module)
├── motherboard.jpg      (Motherboard)
├── 24pin.jpg           (24-pin power connector)
├── bios.jpg            (BIOS setup screen)
├── pcie.jpg            (PCIe expansion slot)
├── heatsink.jpg        (CPU cooler/heatsink)
├── psu.jpg             (Power supply unit)
├── sata.jpg            (SATA cable)
└── case.jpg            (Computer case)
```

## Required Images for Core 2 (Security/Software)

```
images/
├── antivirus.jpg       (Antivirus software)
├── defender.jpg        (Windows Defender)
├── https.jpg           (HTTPS/SSL indicator)
└── phishing.jpg        (Phishing example)
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

### Alternative: Use Screenshots
Take screenshots of:
- BIOS screens
- Windows Defender
- Task Manager
- Control Panel settings

## How to Add Images

1. Find or create the image files
2. Save them with the exact filenames listed above
3. Place them in `public/images/` folder
4. Restart the server
5. Images will automatically appear in labs

## Example Image Search Terms

**Core 1:**
- "Intel CPU processor chip"
- "RAM memory stick DDR4"
- "Computer motherboard ATX"
- "24 pin power connector"
- "BIOS setup screen"
- "PCIe slot expansion"
- "CPU heatsink cooler"
- "Power supply unit PSU"
- "SATA cable"
- "Computer case tower"

**Core 2:**
- "Antivirus software icon"
- "Windows Defender logo"
- "HTTPS padlock SSL"
- "Phishing email example"

## Testing

Once images are added:
1. Visit `http://localhost:3000/labs.html`
2. Start a lab (Core 1 or Core 2)
3. Images should appear below the question number
4. If image fails to load, check:
   - Filename spelling
   - Path is correct
   - File exists in images folder
