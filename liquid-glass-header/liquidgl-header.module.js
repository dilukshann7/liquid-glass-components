/**
 * LiquidGL Header Component
 * ES6 Module - Import and render with props
 *
 * @example
 * import { LiquidGLHeader } from './liquidgl-header.module.js';
 *
 * const header = new LiquidGLHeader({
 *   logo: './assets/logo.svg',
 *   brandName: 'My Brand',
 *   links: [
 *     { text: 'About', href: '#about' },
 *     { text: 'Services', href: '#services' }
 *   ],
 *   socials: [
 *     { icon: 'github', href: 'https://github.com/user' }
 *   ]
 * });
 *
 * header.render('#app');
 */

class LiquidGLHeader {
  constructor(props = {}) {
    this.props = {
      // Brand
      logo: props.logo || "./assets/logo.svg",
      logoAlt: props.logoAlt || "Logo",
      brandName: props.brandName || "LiquidGL",
      brandHref: props.brandHref || "#",

      // Navigation
      links: props.links || [
        { text: "Features", href: "#features" },
        { text: "Docs", href: "#docs" },
        { text: "Demos", href: "#demos" },
      ],

      // Social links
      socials: props.socials || [],

      // LiquidGL Options
      refraction:
        props.refraction || (window.innerWidth <= 767 ? 0.011 : 0.026),
      frost: props.frost ?? 0.712,
      bevelDepth: props.bevelDepth ?? 0.119,
      bevelWidth: props.bevelWidth ?? 0.057,
      magnify: props.magnify ?? 1.2,
      shadow: props.shadow ?? true,
      specular: props.specular ?? true,
      resolution: props.resolution ?? 2,
      chromaticAberration: props.chromaticAberration ?? 0,

      // Animation
      animationDuration: props.animationDuration ?? 1.2,
      animationDelay: props.animationDelay ?? 0.5,
      animationEase: props.animationEase || "expo.out",

      // Custom styles
      customStyles: props.customStyles || {},

      // Callbacks
      onInit: props.onInit || null,
      onReady: props.onReady || null,
    };

    this.glassEffect = null;
    this.container = null;
  }

  /**
   * Generate social icon SVG
   */
  getSocialIcon(type) {
    const icons = {
      github:
        '<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>',
      twitter:
        '<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>',
      linkedin:
        '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>',
      youtube:
        '<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>',
      instagram:
        '<path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>',
    };
    return icons[type] || "";
  }

  /**
   * Generate HTML template
   */
  getTemplate() {
    const { logo, logoAlt, brandName, brandHref, links, socials } = this.props;

    return `
      <div class="liquidgl-header-container liquidGL" data-liquidgl-header>
        <header class="liquidgl-header" aria-label="Site header">
          <div class="liquidgl-header-left">
            <a href="${brandHref}" class="liquidgl-brand" aria-label="Home">
              <img src="${logo}" alt="${logoAlt}" class="liquidgl-brand-logo" />
              <span class="liquidgl-brand-name">${brandName}</span>
            </a>
          </div>
          <nav class="liquidgl-header-nav" aria-label="Primary navigation">
            ${links
              .map(
                (link) => `
              <a href="${link.href}" class="liquidgl-nav-link">${link.text}</a>
            `
              )
              .join("")}
          </nav>
          <div class="liquidgl-header-social" aria-label="Social links">
            ${socials
              .map(
                (social) => `
              <a href="${social.href}" 
                 class="liquidgl-social-link" 
                 aria-label="${social.label || social.icon}"
                 target="_blank"
                 rel="noopener noreferrer">
                <svg class="liquidgl-social-icon" viewBox="0 0 24 24" fill="currentColor">
                  ${this.getSocialIcon(social.icon)}
                </svg>
              </a>
            `
              )
              .join("")}
          </div>
        </header>
      </div>
    `;
  }

  /**
   * Inject styles
   */
  injectStyles() {
    if (document.getElementById("liquidgl-header-styles")) return;

    const { customStyles } = this.props;

    const defaultStyles = `
      .liquidgl-header-container {
        position: fixed;
        top: 1vw;
        left: 2.5vw;
        width: calc(100vw - 5vw);
        height: 60px;
        border-radius: 50vw;
        transform: scaleX(0);
        transform-origin: center;
        will-change: transform;
        pointer-events: auto;
        z-index: 9999;
      }
      
      @media screen and (max-width: 768px) {
        .liquidgl-header-container {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: calc(100% - 2.5rem);
          height: calc(65vh);
          border-radius: 4vw;
          will-change: transform;
          pointer-events: auto;
        }
      }
      
      .liquidgl-header {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 16px;
        pointer-events: auto;
        font-family: system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
      }
      
      .liquidgl-header-left {
        display: flex;
        align-items: center;
        gap: 10px;
      }
      
      .liquidgl-brand {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        color: inherit;
        text-decoration: none;
      }
      
      .liquidgl-brand-logo {
        width: 24px;
        height: 24px;
        object-fit: contain;
      }
      
      .liquidgl-brand-name {
        font-weight: 700;
      }
      
      .liquidgl-header-nav {
        display: flex;
        align-items: center;
        gap: 16px;
      }
      
      .liquidgl-nav-link {
        color: inherit;
        text-decoration: none;
        font-weight: 500;
        transition: opacity 0.2s;
        pointer-events: auto;
      }
      
      .liquidgl-nav-link:hover {
        opacity: 0.8;
      }
      
      .liquidgl-header-social {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      
      .liquidgl-social-link {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 28px;
        height: 28px;
        color: inherit;
        transition: opacity 0.2s;
        pointer-events: auto;
      }
      
      .liquidgl-social-link:hover {
        opacity: 0.8;
      }
      
      .liquidgl-social-icon {
        width: 20px;
        height: 20px;
        fill: currentColor;
      }
    `;

    const style = document.createElement("style");
    style.id = "liquidgl-header-styles";
    style.textContent = defaultStyles + (customStyles.css || "");
    document.head.appendChild(style);
  }

  /**
   * Initialize LiquidGL effect
   */
  initLiquidGL() {
    const fontsReady =
      document.fonts && document.fonts.ready
        ? document.fonts.ready
        : Promise.resolve();

    fontsReady.then(() => {
      if (typeof liquidGL === "undefined") {
        console.error("LiquidGL library not found. Please include liquidGL.js");
        return;
      }

      const {
        refraction,
        frost,
        bevelDepth,
        bevelWidth,
        magnify,
        shadow,
        specular,
        resolution,
        chromaticAberration,
        animationDuration,
        animationDelay,
        animationEase,
        onInit,
      } = this.props;

      this.glassEffect = liquidGL({
        target: ".liquidGL",
        snapshot: "body",
        resolution,
        refraction,
        bevelDepth,
        bevelWidth,
        frost,
        specular,
        shadow,
        reveal: "fade",
        tilt: false,
        magnify,
        chromaticAberration,
        on: {
          init: (intro) => {
            // Animate the header in
            if (typeof gsap !== "undefined") {
              gsap.to(intro.el, {
                scaleX: 1,
                duration: animationDuration,
                ease: animationEase,
                delay: animationDelay,
              });
            } else {
              intro.el.style.transform = "scaleX(1)";
              intro.el.style.transition = `transform ${animationDuration}s ease-out ${animationDelay}s`;
            }

            if (onInit) onInit(intro);
          },
        },
      });

      // Handle responsive refraction
      window.addEventListener("resize", () => {
        const newRefraction = window.innerWidth <= 767 ? 0.011 : 0.026;
        if (this.glassEffect && this.glassEffect.options) {
          this.glassEffect.options.refraction = newRefraction;
        }
      });

      // Register dynamic elements
      liquidGL.registerDynamic(".liquidgl-header, .liquidgl-header *");

      // Sync with scroll libraries
      if (liquidGL.syncWith) liquidGL.syncWith();

      if (this.props.onReady) {
        this.props.onReady(this.glassEffect);
      }
    });
  }

  /**
   * Render the component
   */
  render(selector) {
    const targetElement =
      typeof selector === "string"
        ? document.querySelector(selector)
        : selector;

    if (!targetElement) {
      console.error(`Target element "${selector}" not found`);
      return this;
    }

    // Inject styles
    this.injectStyles();

    // Inject HTML
    targetElement.insertAdjacentHTML("afterbegin", this.getTemplate());

    // Store reference
    this.container = document.querySelector("[data-liquidgl-header]");

    // Initialize on DOM ready
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => this.initLiquidGL());
    } else {
      this.initLiquidGL();
    }

    return this;
  }

  /**
   * Update props and re-render
   */
  update(newProps) {
    this.props = { ...this.props, ...newProps };
    if (this.container) {
      this.container.remove();
    }
    return this;
  }

  /**
   * Destroy the component
   */
  destroy() {
    if (this.container) {
      this.container.remove();
    }
    const styles = document.getElementById("liquidgl-header-styles");
    if (styles) {
      styles.remove();
    }
  }
}

// Export for ES6 modules
export { LiquidGLHeader };

// Support UMD pattern for non-module environments
if (typeof window !== "undefined") {
  window.LiquidGLHeader = LiquidGLHeader;
}
