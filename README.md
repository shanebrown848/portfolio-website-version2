# Dark Portfolio Website

A modern, dark-themed portfolio website built with React, Vite, GSAP, Three.js, and Tailwind CSS. Features smooth animations, interactive 3D backgrounds, and a minimal, clean design.

## 🚀 Features

- **Dark Theme**: Deep blacks with subtle accent colors
- **Smooth Animations**: GSAP-powered scroll animations and transitions
- **3D Background**: Interactive particle/neural network background using Three.js
- **Custom Cursor**: Interactive cursor effects that respond to hover states
- **Responsive Design**: Fully responsive across all device sizes
- **Performance Optimized**: Lazy loading, 60fps animations, fast initial load

## 📦 Tech Stack

- **Vite**: Fast build tool with hot module replacement
- **React**: Component-based UI library
- **GSAP**: Professional animation library for scroll triggers and animations
- **Three.js**: 3D graphics library for background effects
- **Tailwind CSS**: Utility-first CSS framework

## 🛠️ Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── components/
│   │   ├── AnimatedBackground.jsx  # Three.js particle background
│   │   └── CustomCursor.jsx         # Custom cursor component
│   ├── sections/
│   │   ├── Hero.jsx                # Landing section
│   │   ├── About.jsx                # About section
│   │   ├── Projects.jsx             # Projects gallery
│   │   ├── Skills.jsx               # Skills section
│   │   └── Contact.jsx             # Contact form
│   ├── App.jsx                      # Main app component
│   ├── main.jsx                     # Entry point
│   └── index.css                    # Global styles
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  dark: {
    bg: '#0a0a0a',        // Main background
    surface: '#111111',   // Card/surface background
    accent: '#1a1a1a',    // Border accents
  },
  accent: {
    primary: '#00ff88',   // Primary accent (green)
    secondary: '#7c3aed', // Secondary accent (purple)
    tertiary: '#06b6d4',  // Tertiary accent (cyan)
  }
}
```

### Projects

Update the projects array in `src/sections/Projects.jsx` with your own projects:

```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project',
    description: 'Project description',
    tags: ['React', 'Node.js'],
    image: 'your-image-url.jpg',
  },
  // ... more projects
]
```

### Skills

Modify the skills data in `src/sections/Skills.jsx`:

```javascript
const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 90 },
      // ... more skills
    ],
  },
]
```

### Contact Form

The contact form currently logs to console. To connect it to a backend:

1. Update the `handleSubmit` function in `src/sections/Contact.jsx`
2. Replace the simulated API call with your actual endpoint
3. Add environment variables for API URLs if needed

## 🎯 Key Components Explained

### AnimatedBackground.jsx

Creates an interactive 3D particle system:
- Uses Three.js WebGL renderer for hardware acceleration
- Particles respond to mouse movement
- Optimized for 60fps performance
- Configurable particle count (currently 150)

### CustomCursor.jsx

Custom cursor with smooth following animation:
- Hides default cursor
- Smooth interpolation using requestAnimationFrame
- Scales up on hover over interactive elements
- Gradient ring effect

### Hero.jsx

Landing section with staggered text animations:
- Character-by-character reveal for title
- GSAP timeline for coordinated animations
- Gradient text effects
- Scroll indicator

### Projects.jsx

Project gallery with hover effects:
- Grid layout with responsive columns
- Lazy-loaded images for performance
- GSAP hover animations
- Tag system for technologies

### Skills.jsx

Skills section with animated progress bars:
- Progress bars animate on scroll
- Staggered card animations
- Visual proficiency indicators

### Contact.jsx

Contact form with validation:
- Real-time validation
- Error messages
- Success/error states
- Accessible form inputs

## 🎬 Animation Features

- **Scroll Triggers**: Sections fade in as you scroll
- **Parallax Effects**: Background elements move at different speeds
- **Stagger Animations**: Elements animate in sequence
- **Hover Effects**: Interactive elements respond to mouse
- **Smooth Scrolling**: GSAP-powered smooth scroll to sections

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ⚡ Performance Tips

1. **Image Optimization**: Use optimized images (WebP format recommended)
2. **Lazy Loading**: Images are lazy-loaded by default
3. **Animation Performance**: Animations use `will-change` and `transform` for GPU acceleration
4. **Three.js Optimization**: Particle count is limited for performance

## 🔧 Troubleshooting

**Three.js not rendering:**
- Check browser WebGL support
- Reduce particle count in `AnimatedBackground.jsx` if performance is poor

**GSAP animations not working:**
- Ensure ScrollTrigger plugin is properly registered
- Check browser console for errors

**Custom cursor not appearing:**
- Check if pointer-events are disabled on the cursor elements
- Verify z-index values

## 📄 License

This project is open source and available for personal use.

## 🙏 Credits

Built with:
- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [GSAP](https://greensock.com/gsap/)
- [Three.js](https://threejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

---

**Note**: Remember to update the contact form endpoint, add your actual project data, and customize the content to match your personal brand!
