# Image Import Guide

## Quick Reference: How to Import Images in React

### Step 1: Add Your Images
Place your images in the appropriate folders:
- `src/assets/profile/` - Profile pictures, headshots
- `src/assets/projects/` - Project screenshots, mockups
- `src/assets/logos/` - Company logos, brand assets

### Step 2: Import in Component
At the top of your component file, import the image:

```javascript
import profileImage from '../assets/profile/shane-brown.jpg'
import projectImage from '../assets/projects/dine-college.jpg'
```

### Step 3: Use in JSX
```javascript
<img 
  src={profileImage} 
  alt="Shane Brown - Web Developer" 
  className="w-full h-auto rounded-lg"
/>
```

## Complete Examples by Section

### Hero Section (`src/sections/Hero.jsx`)
Currently uses text only. To add a background image:

```javascript
import heroBackground from '../assets/profile/hero-bg.jpg'

// Then in JSX:
<section 
  className="min-h-screen flex items-center justify-center section-padding relative"
  style={{ backgroundImage: `url(${heroBackground})` }}
>
```

### About Section (`src/sections/About.jsx`)
Already set up for profile image. Just uncomment and add your image:

```javascript
// 1. Import at top of file:
import profileImage from '../assets/profile/shane-brown.jpg'

// 2. Replace the placeholder div with:
<img 
  src={profileImage} 
  alt="Shane Brown - Web Developer & Cybersecurity Specialist" 
  className="w-full h-full object-cover"
/>
```

### Projects Section (`src/sections/Projects.jsx`)
Update the projects array with imported images:

```javascript
// Import all project images at top:
import dineCollegeImage from '../assets/projects/dine-college.jpg'
import campusMapImage from '../assets/projects/campus-map.jpg'
import sentinelImage from '../assets/projects/sentinel-ai.jpg'
import echoedMelodiesImage from '../assets/projects/echoed-melodies.jpg'
import clientSitesImage from '../assets/projects/client-sites.jpg'

// Then in projects array, replace image URLs:
const projects = [
  {
    id: 1,
    title: 'Diné College Website',
    image: dineCollegeImage, // Use imported image instead of URL
    // ... rest of project data
  },
  // ... more projects
]
```

## Image Optimization Tips

1. **File Formats:**
   - Use JPG for photos (smaller file size)
   - Use PNG for graphics with transparency
   - Use WebP for best compression (modern browsers)

2. **File Sizes:**
   - Profile images: 800x800px max
   - Project images: 1200x800px max
   - Compress before adding (use tools like TinyPNG)

3. **Naming Convention:**
   - Use lowercase with hyphens: `dine-college-website.jpg`
   - Be descriptive: `shane-brown-profile.jpg` not `img1.jpg`

## Current Image Placeholders

The site currently uses:
- Unsplash placeholder URLs for projects (replace these)
- Emoji placeholder in About section (add your profile image)
- No images in Hero section (optional to add)

## Where Content is Stored

### Text Content:
- **Hero**: `src/sections/Hero.jsx` - Lines 67-90
- **About**: `src/sections/About.jsx` - Lines 87-112
- **Projects**: `src/sections/Projects.jsx` - Lines 20-58 (projects array)
- **Skills**: `src/sections/Skills.jsx` - Lines 19-50 (skillCategories array)
- **Contact**: `src/sections/Contact.jsx` - Lines 129-267

### Image Assets:
- Profile images: `src/assets/profile/`
- Project images: `src/assets/projects/`
- Logos: `src/assets/logos/`

## Next Steps

1. Add your profile image to `src/assets/profile/`
2. Add project screenshots to `src/assets/projects/`
3. Update imports in each component file
4. Replace placeholder URLs with imported images
5. Test that all images load correctly
