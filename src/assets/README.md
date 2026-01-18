# Image Assets Guide

## Folder Structure
- `profile/` - Profile pictures, headshots, personal images
- `projects/` - Project screenshots, mockups, preview images
- `logos/` - Company logos, brand assets, icons

## How to Import Images in React Components

### Method 1: Direct Import (Recommended)
```javascript
// At the top of your component file
import profileImage from '../assets/profile/your-image.jpg'
import projectImage from '../assets/projects/project-screenshot.png'
import logoImage from '../assets/logos/company-logo.svg'

// Then use in JSX
<img src={profileImage} alt="Description" />
```

### Method 2: Using require() (Alternative)
```javascript
// In JSX
<img src={require('../assets/profile/your-image.jpg')} alt="Description" />
```

### Method 3: Public Folder (For static assets)
If you put images in `public/` folder:
```javascript
// No import needed, use direct path
<img src="/images/your-image.jpg" alt="Description" />
```

## Best Practices
- Use descriptive filenames: `profile-shane-brown.jpg` not `img1.jpg`
- Optimize images before adding (compress, resize)
- Use appropriate formats: JPG for photos, PNG for graphics, SVG for logos
- Add alt text for accessibility

## Example Usage in Components
```javascript
import React from 'react'
import myImage from '../assets/profile/me.jpg'

function MyComponent() {
  return (
    <div>
      <img 
        src={myImage} 
        alt="Shane Brown - Web Developer" 
        className="w-full h-auto rounded-lg"
      />
    </div>
  )
}
```
