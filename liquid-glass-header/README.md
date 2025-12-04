# LiquidGL Header Component - Module Version

## 🚀 Super Easy Integration

### Installation

**Option 1: ES6 Module (Recommended)**
```javascript
import { LiquidGLHeader } from './liquidgl-header.module.js';
```

**Option 2: Script Tag**
```html
<script src="liquidgl-header.module.js"></script>
<!-- Access via window.LiquidGLHeader -->
```

---

## 📖 Basic Usage

### 1. Include Dependencies

```html
<!-- Add before closing </body> -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
<script src="path/to/liquidGL.js"></script>
<script src="path/to/html2canvas.min.js"></script>
```

### 2. Import and Render

**ES6 Module:**
```javascript
import { LiquidGLHeader } from './liquidgl-header.module.js';

const header = new LiquidGLHeader({
  brandName: 'My Brand',
  logo: './logo.svg',
  links: [
    { text: 'Home', href: '#' },
    { text: 'About', href: '#about' },
    { text: 'Contact', href: '#contact' }
  ]
});

header.render('body'); // or '#app' or any selector
```

**Script Tag (No bundler):**
```html
<script type="module">
  import { LiquidGLHeader } from './liquidgl-header.module.js';
  
  new LiquidGLHeader({
    brandName: 'My Brand',
    links: [{ text: 'Home', href: '#' }]
  }).render('body');
</script>
```

---

## 🎨 Props API

### Brand Props
```javascript
{
  logo: './assets/logo.svg',        // Logo image path
  logoAlt: 'Logo',                  // Alt text for logo
  brandName: 'LiquidGL',            // Brand name text
  brandHref: '#',                   // Brand link URL
}
```

### Navigation Props
```javascript
{
  links: [
    { text: 'Features', href: '#features' },
    { text: 'Docs', href: '#docs' },
    { text: 'Pricing', href: '#pricing' }
  ]
}
```

### Social Links Props
```javascript
{
  socials: [
    { icon: 'github', href: 'https://github.com/user', label: 'GitHub' },
    { icon: 'twitter', href: 'https://twitter.com/user', label: 'Twitter' },
    { icon: 'linkedin', href: 'https://linkedin.com/in/user' },
    { icon: 'youtube', href: 'https://youtube.com/c/channel' },
    { icon: 'instagram', href: 'https://instagram.com/user' }
  ]
}
```

### LiquidGL Effect Props
```javascript
{
  refraction: 0.026,      // Refraction intensity (0.01 - 0.05)
  frost: 0.712,           // Frost/blur amount (0 - 1)
  bevelDepth: 0.119,      // Bevel depth
  bevelWidth: 0.057,      // Bevel width
  magnify: 1.2,           // Magnification level (1.0 - 2.0)
  shadow: true,           // Enable shadow
  specular: true,         // Enable specular highlights
  resolution: 2           // Render resolution (1-4)
}
```

### Animation Props
```javascript
{
  animationDuration: 1.2,      // Duration in seconds
  animationDelay: 0.5,         // Delay before animation
  animationEase: 'expo.out'    // GSAP easing
}
```

### Custom Styles Props
```javascript
{
  customStyles: {
    css: `
      .liquidgl-header-container {
        height: 80px;
        border-radius: 20px;
      }
      .liquidgl-nav-link {
        font-size: 18px;
        text-transform: uppercase;
      }
    `
  }
}
```

### Callback Props
```javascript
{
  onInit: (intro) => {
    console.log('LiquidGL initialized', intro);
  },
  onReady: (glassEffect) => {
    console.log('Header ready', glassEffect);
  }
}
```

---

## 📋 Complete Example

```javascript
import { LiquidGLHeader } from './liquidgl-header.module.js';

const header = new LiquidGLHeader({
  // Brand
  logo: './assets/logo.svg',
  logoAlt: 'My Company',
  brandName: 'My Company',
  brandHref: '/',
  
  // Navigation
  links: [
    { text: 'Home', href: '/' },
    { text: 'Features', href: '#features' },
    { text: 'Pricing', href: '#pricing' },
    { text: 'About', href: '#about' },
    { text: 'Contact', href: '#contact' }
  ],
  
  // Social Links
  socials: [
    { icon: 'github', href: 'https://github.com/mycompany' },
    { icon: 'twitter', href: 'https://twitter.com/mycompany' },
    { icon: 'linkedin', href: 'https://linkedin.com/company/mycompany' }
  ],
  
  // Glass Effect
  refraction: 0.03,
  frost: 0.5,
  magnify: 1.1,
  shadow: true,
  specular: true,
  
  // Animation
  animationDuration: 1.5,
  animationDelay: 0.3,
  animationEase: 'power2.out',
  
  // Custom Styles
  customStyles: {
    css: `
      .liquidgl-brand-name {
        font-size: 20px;
        letter-spacing: 1px;
      }
      .liquidgl-nav-link:hover {
        opacity: 1;
        text-decoration: underline;
      }
    `
  },
  
  // Callbacks
  onInit: (intro) => console.log('Initialized!'),
  onReady: (effect) => console.log('Ready!', effect)
});

// Render the header
header.render('body');
```

---

## 🔧 API Methods

### `render(selector)`
Renders the header component to the specified selector.
```javascript
header.render('#app');
header.render('body');
header.render(document.querySelector('.container'));
```

### `update(newProps)`
Update props (note: requires re-render).
```javascript
header.update({ brandName: 'New Brand' });
```

### `destroy()`
Remove the header component and clean up.
```javascript
header.destroy();
```

---

## 🎯 Framework Examples

### React
```jsx
import { useEffect, useRef } from 'react';
import { LiquidGLHeader } from './liquidgl-header.module.js';

function App() {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const header = new LiquidGLHeader({
      brandName: 'React App',
      links: [{ text: 'Home', href: '/' }]
    });
    
    header.render(containerRef.current);
    
    return () => header.destroy();
  }, []);
  
  return <div ref={containerRef}></div>;
}
```

### Vue 3
```vue
<template>
  <div ref="headerContainer"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { LiquidGLHeader } from './liquidgl-header.module.js';

const headerContainer = ref(null);
let header;

onMounted(() => {
  header = new LiquidGLHeader({
    brandName: 'Vue App',
    links: [{ text: 'Home', href: '/' }]
  });
  header.render(headerContainer.value);
});

onUnmounted(() => {
  if (header) header.destroy();
});
</script>
```

### Vanilla JS
```html
<div id="header-container"></div>

<script type="module">
  import { LiquidGLHeader } from './liquidgl-header.module.js';
  
  new LiquidGLHeader({
    brandName: 'My Site',
    links: [{ text: 'Home', href: '/' }]
  }).render('#header-container');
</script>
```

---

## 🐛 Troubleshooting

**Module not loading?**
- Make sure your server supports ES6 modules
- Check the file path is correct
- Use `type="module"` in script tag

**Header not appearing?**
- Verify liquidGL.js is loaded before the module
- Check browser console for errors
- Ensure target selector exists in DOM

**No glass effect?**
- Page needs background content/images
- Try increasing `refraction` value
- Check WebGL is enabled in browser

---

## 📦 File Structure
```
your-project/
├── liquidgl-header.module.js   ← Import this
├── scripts/
│   ├── liquidGL.js
│   └── html2canvas.min.js
├── assets/
│   └── logo.svg
└── index.html
```

---

## ✨ That's it!
Three lines to add a beautiful glass header to any site:
```javascript
import { LiquidGLHeader } from './liquidgl-header.module.js';
new LiquidGLHeader({ brandName: 'My Site' }).render('body');
```
