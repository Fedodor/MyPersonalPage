# 🚀 Personal Portfolio Website

Modern single-page portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## ✨ Features

- 🎨 **Premium Design** with gradients, glassmorphism effects, and animations
- 📱 **Fully Responsive** design for all devices
- ⚡ **High Performance** powered by Vite
- 🎭 **Smooth Animations** with Framer Motion
- 🧭 **Smart Navigation** with active section tracking
- 🎯 **SEO Optimized** with meta tags
- 🌊 **Animated Background** with particles
- 💫 **Micro-animations** for improved UX

## 🛠️ Technologies

- **React 19** - UI Library
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Modern icons

## 📁 Project Structure

```
MyPersonalPage/
├── public/
│   ├── resume.pdf
│   └── profile.jpg       
├── src/
│   ├── components/
│   │   └── Navigation.jsx  # Navigation menu
│   ├── sections/
│   │   ├── Hero.jsx        # Hero section
│   │   ├── About.jsx       # About Me section
│   │   ├── Skills.jsx      # Skills section
│   │   ├── Projects.jsx    # Projects section
│   │   └── Contact.jsx     # Contact section
│   ├── App.jsx             # Main component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Dev Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### 3. Build for Production

```bash
npm run build
```

Built files will be in the `dist/` directory.

### 4. Preview Build

```bash
npm run preview
```

### Customize Colors

Edit `tailwind.config.js` to change the color scheme:

```js
theme: {
  extend: {
    colors: {
      primary: {
        // Your colors
      },
    },
  },
}
```

## 🌐 Deployment

### On Own Server (Nginx)

1. Build the project:
```bash
npm run build
```

2. Copy the contents of `dist/` to your server:
```bash
scp -r dist/* user@your-server:/var/www/html/
```

3. Configure Nginx to serve static files.

### Using Docker

Create `Dockerfile`:

```dockerfile
FROM nginx:alpine
COPY dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Build and run:
```bash
docker build -t portfolio .
docker run -p 80:80 portfolio
```

### On Vercel/Netlify

1. Connect your repository
2. Build command: `npm run build`
3. Publish directory: `dist`

## 📱 Website Sections

1. **Home** - Welcome screen with animated background
2. **About** - Information about you with feature cards
3. **Skills** - Your skills grouped by category
4. **Projects** - Project portfolio with links
5. **Contact** - Contact information and resume download button

## 🎨 Design Features

- **Glassmorphism** - Semi-transparent cards with blur
- **Gradients** - Vibrant color transitions
- **Animations** - Smooth appearances and transitions
- **Particles** - Animated background
- **Hover Effects** - Interactive elements
- **Dark Theme** - Elegant dark color scheme

## 🔧 Scripts

- `npm run dev` - Start dev server
- `npm run build` - Build for production
- `npm run preview` - Preview build
- `npm run lint` - Lint code

## 📄 License

Free to use for personal and commercial projects.

## 🤝 Support

If you have questions or suggestions, please create an issue in the repository.

---

Created with ❤️ using React, Vite, and Tailwind CSS
