# 🌊 Liquid Glass Header

A stunning, interactive header component featuring WebGL-powered glassmorphism effects. Built with liquidGL and ES6 modules for easy integration.

![License](https://img.shields.io/badge/license-MIT-blue.svg)

## ⚠️ Browser Compatibility

**IMPORTANT: This component currently works only with the latest version of Google Chrome.**

- ✅ Chrome (latest version) - **Fully Supported**
- ❌ Firefox - Not yet supported
- ❌ Safari - Not yet supported
- ❌ Edge - Not yet supported
- ❌ Other browsers - Not yet supported

The component uses advanced WebGL features and CSS properties that may not be fully compatible with other browsers. We are working on broader browser support in future releases.

## ✨ Features

- 🎨 **Ultra-realistic glass effect** with refraction, frost, and chromatic aberration
- 💎 **Customizable properties** - control refraction, frost, bevel depth, magnification, and more
- 🎬 **Smooth reveal animations** with GSAP integration
- 📱 **Responsive design** with mobile-optimized settings
- ⚡ **Hardware-accelerated** WebGL rendering
- 🔌 **Easy integration** as ES6 module
- 🎯 **Flexible navigation** with built-in social media icons

## 📦 Installation

### Prerequisites

Include the required dependencies in your HTML:

```html
<!-- GSAP for animations -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

<!-- html2canvas for snapshot capture -->
<script src="./html2canvas.min.js"></script>

<!-- liquidGL core library -->
<script src="./liquidGL.js"></script>
```

### Basic Setup

```html
<div id="app"></div>

<script type="module">
  import { LiquidGLHeader } from "./liquidgl-header.module.js";

  const header = new LiquidGLHeader({
    logo: "./assets/logo.svg",
    brandName: "My Brand",
    links: [
      { text: "Features", href: "#features" },
      { text: "Docs", href: "#docs" },
      { text: "About", href: "#about" },
    ],
    socials: [
      {
        icon: "github",
        href: "https://github.com/yourusername",
        label: "GitHub",
      },
      {
        icon: "twitter",
        href: "https://twitter.com/yourusername",
        label: "Twitter",
      },
    ],
  });

  header.render("#app");
</script>
```

## 🎛️ Configuration Options

### Brand Configuration

| Option      | Type   | Default               | Description        |
| ----------- | ------ | --------------------- | ------------------ |
| `logo`      | string | `"./assets/logo.svg"` | Path to logo image |
| `logoAlt`   | string | `"Logo"`              | Alt text for logo  |
| `brandName` | string | `"LiquidGL"`          | Brand name text    |
| `brandHref` | string | `"#"`                 | Brand link URL     |

### Navigation Links

```javascript
links: [
  { text: "Link Text", href: "#url" },
  // Add more links...
];
```

### Social Media Links

Supported icons: `github`, `twitter`, `linkedin`, `youtube`, `instagram`

```javascript
socials: [
  { icon: "github", href: "https://github.com/...", label: "GitHub" },
  { icon: "twitter", href: "https://twitter.com/...", label: "Twitter" },
  // Add more social links...
];
```

### Glass Effect Options

| Option                | Type    | Default                              | Range      | Description                 |
| --------------------- | ------- | ------------------------------------ | ---------- | --------------------------- |
| `refraction`          | number  | `0.026` (desktop) / `0.011` (mobile) | 0.0 - 0.1  | Light refraction intensity  |
| `frost`               | number  | `0.712`                              | 0.0 - 1.0  | Frosted glass blur amount   |
| `bevelDepth`          | number  | `0.119`                              | 0.0 - 0.5  | 3D bevel depth              |
| `bevelWidth`          | number  | `0.057`                              | 0.0 - 0.5  | 3D bevel width              |
| `magnify`             | number  | `1.2`                                | 0.5 - 3.0  | Magnification strength      |
| `shadow`              | boolean | `true`                               | -          | Enable drop shadow          |
| `specular`            | boolean | `true`                               | -          | Enable specular highlights  |
| `resolution`          | number  | `2`                                  | 0.5 - 3.0  | Rendering resolution        |
| `chromaticAberration` | number  | `0`                                  | 0.0 - 0.02 | Chromatic aberration effect |

### Animation Options

| Option              | Type   | Default      | Description                   |
| ------------------- | ------ | ------------ | ----------------------------- |
| `animationDuration` | number | `1.2`        | Animation duration in seconds |
| `animationDelay`    | number | `0.5`        | Delay before animation starts |
| `animationEase`     | string | `"expo.out"` | GSAP easing function          |

### Callbacks

```javascript
{
  onInit: (lens) => {
    console.log("Header initialized", lens);
  },
  onReady: (glassEffect) => {
    console.log("Glass effect ready", glassEffect);
  }
}
```

## 💡 Advanced Usage

### Custom Styling

```javascript
const header = new LiquidGLHeader({
  // ... other options
  customStyles: {
    css: `
      .liquidgl-header {
        padding: 0 32px;
      }
      .liquidgl-nav-link {
        font-size: 14px;
      }
    `,
  },
});
```

### Updating Configuration

```javascript
// Update props dynamically
header.update({
  refraction: 0.05,
  frost: 0.8,
});
```

### Destroying the Component

```javascript
header.destroy();
```

## 📱 Responsive Behavior

The component automatically adjusts for mobile devices:

- Lower refraction values for better performance
- Adjusted container dimensions and positioning
- Touch-optimized interactions

## 🎨 Complete Example

```javascript
import { LiquidGLHeader } from "./liquidgl-header.module.js";

const header = new LiquidGLHeader({
  // Brand
  logo: "./assets/logo.svg",
  logoAlt: "My Company",
  brandName: "My Company",
  brandHref: "https://mycompany.com",

  // Navigation
  links: [
    { text: "Features", href: "#features" },
    { text: "Pricing", href: "#pricing" },
    { text: "About", href: "#about" },
    { text: "Contact", href: "#contact" },
  ],

  // Socials
  socials: [
    { icon: "github", href: "https://github.com/mycompany", label: "GitHub" },
    {
      icon: "twitter",
      href: "https://twitter.com/mycompany",
      label: "Twitter",
    },
    {
      icon: "linkedin",
      href: "https://linkedin.com/company/mycompany",
      label: "LinkedIn",
    },
  ],

  // Glass Effect
  refraction: 0.05,
  frost: 0.712,
  bevelDepth: 0.1,
  bevelWidth: 0.1,
  magnify: 1.025,
  shadow: true,
  specular: true,
  resolution: 2,
  chromaticAberration: 0.01,

  // Animation
  animationDuration: 1.5,
  animationDelay: 0.5,
  animationEase: "expo.out",

  // Callbacks
  onInit: (lens) => console.log("Initialized!", lens),
  onReady: (effect) => console.log("Ready!", effect),
});

header.render("#app");
```

## 📄 File Structure

```
liquid-glass-header/
├── liquidgl-header.module.js  # Main component module
├── liquidGL.js                # Core glass effect library
├── html2canvas.min.js         # Snapshot utility
├── demo.html                  # Live demo
├── demo-style.css            # Demo styles
├── assets/                   # Images and resources
└── README.md                 # Documentation
```

## 🔧 Dependencies

- **liquidGL** - WebGL-powered glassmorphism library by [NaughtyDuk](https://liquidgl.naughtyduk.com)
- **GSAP** - Animation library (optional but recommended)
- **html2canvas** - DOM snapshot utility

## 📜 License

MIT License - feel free to use in personal and commercial projects.

## 🙏 Attribution

This component is built on top of:

- **[liquidGL](https://liquidgl.naughtyduk.com)** by [NaughtyDuk](https://liquidgl.naughtyduk.com)  
  _Ultra-light glassmorphism for the web_  
  © NaughtyDuk - MIT License

- **[GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/)**  
  _Professional-grade JavaScript animation library_

- **[html2canvas](https://html2canvas.hertzen.com/)**  
  _JavaScript HTML renderer_

## ⚡ Performance Tips

1. **Resolution**: Lower `resolution` values (e.g., `1.5`) improve performance on lower-end devices
2. **Frost**: High frost values are computationally expensive - use sparingly
3. **Chromatic Aberration**: Keep values low (< 0.02) for best visual quality
4. **Shadow**: Disable if performance is critical

## 🐛 Known Issues

- Currently only supports Chrome (latest version)
- May have performance impact on older GPUs
- Requires WebGL support

## 🚀 Future Improvements

- [ ] Cross-browser compatibility (Firefox, Safari, Edge)
- [ ] Fallback for non-WebGL browsers
- [ ] Mobile hamburger menu option
- [ ] Additional icon sets
- [ ] TypeScript definitions

## 📞 Support

For issues, questions, or contributions, please visit the project repository.

---

**Made with ❤️ and WebGL**
