# Alpine Shoes Website

A React + Vite application replicating the Alpine Shoes website design and functionality.

## Project Structure

\`\`\`
alpine-shoes/
├── public/
│   └── assets/
│       ├── AlpineLogoColour.png
│       ├── complianceiconorange297x300150x150.png
│       ├── DSC0587minabout.jpg
│       ├── DSC6580about.jpg
│       ├── DSC0579min.jpg
│       ├── DSC0594min.jpg
│       ├── DSC6796112.jpg
│       └── screencapture-alpineshoes-net-2025-09-18-17_41_03.png
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Quality.jsx
│   │   ├── Compliance.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
\`\`\`

## Features

- **Responsive Design**: Mobile-first approach with flexible grid and flexbox layouts
- **Component Architecture**: Modular React components for easy maintenance
- **Modern Styling**: Single CSS file with modern techniques and responsive breakpoints
- **Performance Optimized**: Vite build system for fast development and production builds

## Components

- **Navbar**: Navigation with logo and menu links
- **Hero**: Full-screen hero section with background image and overlay text
- **About**: Two-column layout with company information and images
- **Quality**: Full-width banner section with background image
- **Compliance**: Information section with icon and descriptive text
- **Footer**: Company information and useful links

## Setup Instructions

1. **Install Dependencies**
   \`\`\`bash
   npm install
   \`\`\`

2. **Start Development Server**
   \`\`\`bash
   npm run dev
   \`\`\`

3. **Build for Production**
   \`\`\`bash
   npm run build
   \`\`\`

4. **Preview Production Build**
   \`\`\`bash
   npm run preview
   \`\`\`

## Technology Stack

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and development server
- **CSS3**: Modern styling with Grid and Flexbox
- **JavaScript (JSX)**: No TypeScript as per requirements

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development

The project uses Vite for fast hot module replacement during development. All components are written in JSX without TypeScript, and styling is handled through a single `styles.css` file for simplicity and maintainability.
