# hiba Portfolio Website

A clean, minimalist portfolio website built with Next.js, TypeScript, and Tailwind CSS, designed specifically for writers and copywriters.

## Features

- **Responsive Design**: Mobile-first approach with hamburger menu for small screens
- **Clean Typography**: Playfair Display for headings, Inter for body text
- **Modern Layout**: Hero section, card grids, and contact form
- **Smooth Animations**: Hover effects and transitions throughout
- **Accessibility**: Focus outlines and semantic HTML
- **SEO Optimized**: Proper metadata and Open Graph tags

## Design System

### Colors
- Hero Background: `#f6f5f4` (light gray/beige)
- Text Primary: `#111111` (near-black)
- Text Secondary: `#666666` (gray)
- Accent: `#2b7cff` (blue)
- Accent Warm: `#a55b4f` (muted red)

### Typography
- Headings: Playfair Display (serif)
- Body: Inter (sans-serif)
- Sizes: H1 (48-64px), H2 (28-34px), Body (16px), Meta (13px)

### Layout
- Container: Max-width 1100px, centered
- Grid: 3 columns desktop, 2 tablet, 1 mobile
- Spacing: 64px sections, 24px gaps

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and CSS utilities
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
└── components/
    ├── Header.tsx           # Navigation header with mobile menu
    ├── Hero.tsx             # Hero section with large heading
    ├── Card.tsx             # Reusable card component
    ├── PublishedStories.tsx # Articles section
    ├── CopywritingWork.tsx  # Copywriting projects section
    ├── Contact.tsx          # Contact form and information
    └── Footer.tsx           # Site footer
```

## Customization

### Content Updates
- Edit `PublishedStories.tsx` to update article content
- Edit `CopywritingWork.tsx` to update project content
- Edit `Contact.tsx` to update contact information

### Styling
- Modify `tailwind.config.ts` for color and spacing changes
- Update `globals.css` for custom CSS utilities
- Adjust component classes for layout changes

### Images
- Replace placeholder images in `/public/` folder
- Update image paths in component files

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Other Platforms
```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 16**: React framework with App Router
- **TypeScript**: Type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Google Fonts**: Playfair Display and Inter fonts

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).