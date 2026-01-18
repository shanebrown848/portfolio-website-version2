# Quick Setup Guide

## Step-by-Step Setup

### 1. Install Dependencies

```bash
npm install
```

This installs:
- **React & React DOM**: UI framework
- **GSAP**: Animation library (includes ScrollTrigger and ScrollToPlugin)
- **Three.js**: 3D graphics library
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Styling framework

### 2. Start Development Server

```bash
npm run dev
```

The site will open at `http://localhost:3000`

### 3. Customize Your Content

#### Update Hero Section (`src/sections/Hero.jsx`)
- Change the title text
- Update the description
- Modify the CTA button text/link

#### Add Your Projects (`src/sections/Projects.jsx`)
Replace the sample projects array with your own:
```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Your project description',
    tags: ['React', 'Node.js'],
    image: 'path-to-your-image.jpg',
  },
]
```

#### Update Skills (`src/sections/Skills.jsx`)
Modify the skill categories and proficiency levels:
```javascript
{
  category: 'Frontend',
  skills: [
    { name: 'React', level: 90 }, // Level is 0-100
  ],
}
```

#### Connect Contact Form (`src/sections/Contact.jsx`)
In the `handleSubmit` function, replace the simulated API call:
```javascript
// Replace this:
await new Promise((resolve) => setTimeout(resolve, 1500))

// With your actual API call:
const response = await fetch('YOUR_API_ENDPOINT', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
})
```

#### Update About Section (`src/sections/About.jsx`)
- Replace the placeholder text with your own story
- Update the stats (projects count, years of experience)
- Add your own image or visual element

### 4. Customize Colors

Edit `tailwind.config.js` to change the color scheme:
- `dark-bg`: Main background color
- `accent-primary`: Primary accent (currently green)
- `accent-secondary`: Secondary accent (currently purple)

### 5. Build for Production

```bash
npm run build
```

Output will be in the `dist` folder, ready to deploy!

## Code Structure Explanation

### `src/App.jsx`
- Main application component
- Sets up GSAP ScrollTrigger for global animations
- Handles smooth scrolling to sections
- Renders all sections and components

### `src/components/AnimatedBackground.jsx`
- Creates the 3D particle background
- Uses Three.js WebGL renderer
- Particles respond to mouse movement
- Optimized for 60fps performance

**Key Concepts:**
- `THREE.Scene`: Container for 3D objects
- `THREE.PerspectiveCamera`: Viewpoint for the scene
- `THREE.WebGLRenderer`: Renders the 3D scene to canvas
- `THREE.Points`: Particle system
- `requestAnimationFrame`: Smooth animation loop

### `src/components/CustomCursor.jsx`
- Custom cursor that follows mouse
- Smooth interpolation using requestAnimationFrame
- Scales up on hover over interactive elements
- Hidden on mobile/touch devices

**Key Concepts:**
- `requestAnimationFrame`: Smooth animation loop
- Interpolation: Smooth movement between positions
- Event listeners: Track mouse movement and hover states

### `src/sections/Hero.jsx`
- Landing section with animated text
- Character-by-character reveal using GSAP
- Timeline animations for coordinated effects

**Key Concepts:**
- `gsap.timeline()`: Sequence multiple animations
- `stagger`: Animate elements in sequence
- `fromTo`: Animate from one state to another

### `src/sections/About.jsx`
- Personal information section
- Scroll-triggered reveal animations
- Parallax effect on visual elements

**Key Concepts:**
- `ScrollTrigger`: Trigger animations on scroll
- Parallax: Elements move at different speeds

### `src/sections/Projects.jsx`
- Project gallery with hover effects
- Lazy-loaded images
- GSAP hover animations

**Key Concepts:**
- Lazy loading: Load images only when needed
- Event listeners: Handle hover interactions
- CSS transforms: GPU-accelerated animations

### `src/sections/Skills.jsx`
- Skills with animated progress bars
- Scroll-triggered animations
- Visual proficiency indicators

**Key Concepts:**
- `data-*` attributes: Store animation data
- Progress bars: Animate width on scroll

### `src/sections/Contact.jsx`
- Contact form with validation
- Real-time error messages
- Success/error states

**Key Concepts:**
- Form validation: Check input before submission
- Controlled inputs: React state management
- Error handling: User feedback

## Performance Tips

1. **Images**: Use optimized images (WebP format, proper sizing)
2. **Animations**: Already optimized with `will-change` and `transform`
3. **Three.js**: Particle count automatically reduces on mobile
4. **Lazy Loading**: Images load only when needed

## Troubleshooting

**Port already in use?**
Change the port in `vite.config.js`:
```javascript
server: {
  port: 3001, // Change to any available port
}
```

**Animations not working?**
- Check browser console for errors
- Ensure GSAP plugins are registered
- Verify ScrollTrigger is working

**Three.js not rendering?**
- Check browser WebGL support
- Reduce particle count if performance is poor
- Check console for WebGL errors

## Next Steps

1. Add your own content and images
2. Connect the contact form to your backend
3. Deploy to Vercel, Netlify, or your preferred hosting
4. Add Google Analytics or other tracking (optional)
5. Customize colors and styling to match your brand

Happy coding! 🚀
