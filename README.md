# Simon Phillip Guillen - Personal Website

**Interfaces with Rhythm**

A modern, minimal personal branding website showcasing frontend engineering expertise and musical passion.

![Brand Direction](https://img.shields.io/badge/Brand-Interfaces%20with%20Rhythm-8B5CF6)
![Tech Stack](https://img.shields.io/badge/Tech-HTML%20%7C%20Tailwind%20%7C%20Vanilla%20JS-22D3EE)

## 🎯 Overview

This is a static personal portfolio website built with modern web technologies but without any frontend frameworks. It combines a professional developer portfolio aesthetic with subtle progressive rock/metal energy — dark, sharp, minimal, and premium.

**Design Inspiration:** Vercel, Linear, Raycast, Framer, Stripe

## ✨ Features

- **One-page layout** with smooth scrolling navigation
- **Dark, futuristic design** with purple/cyan gradient accents
- **Scroll reveal animations** for progressive content disclosure
- **Responsive design** - mobile-first approach
- **Accessible** - semantic HTML and ARIA labels
- **Interactive elements** - hover effects, background glows
- **Performance optimized** - minimal dependencies, optimized CSS
- **SEO friendly** - proper meta tags and semantic structure

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first styling
- **Vanilla JavaScript** - No frameworks, pure JS
- **Google Fonts** - Inter & JetBrains Mono

## 📁 Project Structure

```
my-website/
├── index.html           # Main HTML file
├── src/
│   ├── input.css        # Tailwind CSS source
│   ├── output.css       # Compiled CSS (generated)
│   └── main.js          # Vanilla JavaScript
├── package.json         # Project dependencies
├── tailwind.config.js   # Tailwind configuration
└── README.md           # Documentation
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone or download the repository**

```bash
cd my-website
```

2. **Install dependencies**

```bash
npm install
```

3. **Build Tailwind CSS**

```bash
npm run build
```

4. **Development mode** (watches for changes)

```bash
npm run dev
```

5. **Open the website**

Open `index.html` in your browser, or use a local server:

```bash
npm run serve
```

Then navigate to `http://localhost:3000`

## 📝 Customization

### Colors

Edit the color palette in `tailwind.config.js`:

```js
colors: {
  bg: {
    primary: '#050505',
    secondary: '#09090B',
    surface: '#111113',
  },
  accent: {
    purple: '#8B5CF6',
    cyan: '#22D3EE',
    warm: '#F5E7C8',
  },
  // ...
}
```

### Content

All content is in `index.html`. Update sections directly:

- **Hero** - Update name, tagline, description
- **Work** - Add/remove project cards
- **Services** - Modify service offerings
- **Music** - Update band information and embed
- **About** - Personalize your story
- **Contact** - Update email and social links

### JavaScript Interactions

Edit `src/main.js` to modify:

- Mobile menu behavior
- Scroll animations
- Background glow effects
- Active navigation highlighting

## 🌐 Deployment

This is a static website that can be deployed to any static hosting service.

### GitHub Pages

1. Push your code to GitHub
2. Go to Settings → Pages
3. Select your branch (usually `main`)
4. Select root folder
5. Save and visit your GitHub Pages URL

### Netlify

1. Sign up at [Netlify](https://netlify.com)
2. Drag and drop your project folder
3. Or connect your GitHub repository
4. Build command: `npm run build`
5. Publish directory: `.`

### Vercel

1. Sign up at [Vercel](https://vercel.com)
2. Import your GitHub repository
3. Build command: `npm run build`
4. Output directory: `.`
5. Deploy

### Cloudflare Pages

1. Sign up at [Cloudflare Pages](https://pages.cloudflare.com)
2. Connect your GitHub repository
3. Build command: `npm run build`
4. Build output directory: `.`
5. Deploy

## 📦 Production Build

Before deploying, run:

```bash
npm run build
```

This will:
- Compile and minify Tailwind CSS
- Optimize output for production

Files needed for deployment:
- `index.html`
- `src/output.css`
- `src/main.js`

## 🎨 Design Philosophy

**"Interfaces with Rhythm"**

This website embodies the intersection of software engineering and musical discipline:

- **Structure** - Clean, organized, semantic code
- **Timing** - Smooth animations and transitions
- **Precision** - Pixel-perfect implementation
- **Intent** - Every element serves a purpose

The dark, minimal aesthetic is inspired by modern developer tools (Vercel, Linear, Raycast) with subtle progressive rock/metal energy through:

- Technical precision
- Complex but controlled design
- Purple/cyan futuristic gradients
- Monospace typography for technical elements

## 🎵 Musical Influence

As a bassist in progressive rock/metal, the skills translate directly to code:

- **Odd time signatures** → Complex state management
- **Live performance** → Production-ready code
- **Groove** → Smooth user experience
- **Structure** → Clean architecture

## 📧 Contact

**Simon Phillip Guillen**

- Email: spguillen@gmail.com
- GitHub: [github.com/spguillen](https://github.com/spguillen)
- LinkedIn: [linkedin.com/in/spguillen](https://linkedin.com/in/spguillen)
- Location: Davao City, Philippines 🇵🇭

## 📄 License

MIT License - feel free to use this template for your own portfolio.

---

**Built with rhythm, precision, and intent.** 🎸⚛️
