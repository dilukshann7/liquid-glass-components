# 🌊 LiquidGL Header Component

A beautiful, plug-and-play glassmorphism header component with WebGL effects. Import as an ES6 module and render with props!

## 📦 Package Contents

```
liquidgl-header-component/
├── liquidgl-header.module.js   ← Main component module
├── liquidGL.js                 ← Core LiquidGL library
├── html2canvas.min.js          ← Required dependency
├── demo.html                   ← Working demo
├── assets/
│   └── logo.svg                ← Sample logo
└── README.md                   ← This file
```

## 🚀 Quick Start

### 1. Include Dependencies

```html
<!-- Add before closing </body> tag -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
<script src="./html2canvas.min.js"></script>
<script src="./liquidGL.js"></script>
```

### 2. Import and Use

```html
<script type="module">
  import { LiquidGLHeader } from './liquidgl-header.module.js';

  new LiquidGLHeader({
    brandName: 'My Brand',
    logo: './assets/logo.svg',
    links: [
      { text: 'Home', href: '#' },
      { text: 'About', href: '#about' },
      { text: 'Contact', href: '#contact' }
    ]
  }).render('body');
</script>
```

## 🎨 Props API

### Brand Props
```javascript
{
  logo: './assets/logo.svg',    // Logo image path
  logoAlt: 'Logo',              // Alt text
  brandName: 'LiquidGL',        // Brand name text
  brandHref: '#'                // Brand link URL
}
```

### Navigation Props
```javascript
{
  links: [
    { text: 'Features', href: '#features' },
    { text: 'Docs', href: '#docs' },
    { text: 'Contact', href: '#contact' }
  ]
}
```

### Social Links Props
```javascript
{
  socials: [
    { icon: 'github', href: 'https://github.com/user' },
    { icon: 'twitter', href: 'https://twitter.com/user' },
    { icon: 'linkedin', href: 'https://linkedin.com/in/user' },
    { icon: 'youtube', href: 'https://youtube.com/c/user' },
    { icon: 'instagram', href: 'https://instagram.com/user' }
  ]
}
```

### Glass Effect Props
```javascript
{
  refraction: 0.026,    // Refraction intensity (0.01-0.05)
  frost: 0.712,         // Blur amount (0-1)
  magnify: 1.2,         // Magnification (1.0-2.0)
  shadow: true,         // Enable shadow
  specular: true,       // Enable highlights
  resolution: 2         // Render quality (1-4)
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

### Callbacks
```javascript
{
  onInit: (intro) => console.log('Initialized!'),
  onReady: (effect) => console.log('Ready!', effect)
}
```

## 📋 Complete Example

```javascript
import { LiquidGLHeader } from './liquidgl-header.module.js';

const header = new LiquidGLHeader({
  // Brand
  logo: './assets/logo.svg',
  brandName: 'My Company',
  
  // Navigation
  links: [
    { text: 'Home', href: '/' },
    { text: 'About', href: '/about' },
    { text: 'Services', href: '/services' },
    { text: 'Contact', href: '/contact' }
  ],
  
  // Social
  socials: [
    { icon: 'github', href: 'https://github.com/mycompany' },
    { icon: 'twitter', href: 'https://twitter.com/mycompany' }
  ],
  
  // Effects
  refraction: 0.03,
  frost: 0.5,
  magnify: 1.1,
  
  // Animation
  animationDuration: 1.5,
  animationDelay: 0.3,
  
  // Callbacks
  onReady: (effect) => console.log('Header loaded!', effect)
});

header.render('body');
```

## 🔧 API Methods

### `render(selector)`
Render the header to a DOM element.
```javascript
header.render('#app');
header.render('body');
header.render(document.querySelector('.container'));
```

### `destroy()`
Remove the header and cleanup.
```javascript
header.destroy();
```

## 🎯 Framework Integration

### React
```jsx
import { useEffect, useRef } from 'react';
import { LiquidGLHeader } from './liquidgl-header.module.js';

function App() {
  const ref = useRef(null);
  
  useEffect(() => {
    const header = new LiquidGLHeader({
      brandName: 'React App'
    }).render(ref.current);
    
    return () => header.destroy();
  }, []);
  
  return <div ref={ref}></div>;
}
```

### Vue 3
```vue
<template>
  <div ref="container"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { LiquidGLHeader } from './liquidgl-header.module.js';

const container = ref(null);
let header;

onMounted(() => {
  header = new LiquidGLHeader({
    brandName: 'Vue App'
  }).render(container.value);
});

onUnmounted(() => header?.destroy());
</script>
```

## 🐛 Troubleshooting

**Header not appearing?**
- Check that liquidGL.js is loaded before the module
- Verify target element exists in DOM
- Check browser console for errors

**No glass effect?**
- Ensure page has background content
- Try increasing `refraction` value
- Verify WebGL is enabled in browser

**Module not loading?**
- Use `type="module"` in script tag
- Check file path is correct
- Ensure server supports ES6 modules

## 📱 Responsive Design

The component automatically adapts:
- **Desktop (>768px):** Fixed header bar at top
- **Mobile (≤768px):** Centered card with more coverage

## 📄 License

Same as LiquidGL library.

## 🎉 Demo

Open `demo.html` in your browser to see a working example!

---

**Need help?** Check the demo file or inspect the module source for more details.
