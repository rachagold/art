# Rachel Goldberg - Fine Art Portfolio Website

A visually stunning portfolio website that merges basic geometric shapes with elements of nature, featuring exceptional UX/UI with smooth transitions and zoom capabilities.

## 🎨 Features

- **Gallery Page**: Series-based artwork showcase with thumbnail previews
  - Cambodia Series (5 paintings with sub-paintings)
  - Korea Series (7 paintings, including one triptych)
  - Miscellaneous Countries (3 paintings)
  - Portraits and Commissions (3 paintings)
- **About the Artist**: Personal artist statement and exhibition history
- **Contact Page**: Social media links and contact information
- **Interactive Features**:
  - Smooth transitions and animations
  - Zoom modal for detailed artwork viewing
  - Responsive design for all devices
  - Series-based navigation with thumbnail grids

## 🛠️ Technologies Used

- **HTML5**: Semantic structure
- **CSS3**: 
  - Custom properties (CSS variables)
  - Flexbox and CSS Grid layouts
  - Animations and transitions
  - Responsive design with media queries
- **JavaScript**: 
  - DOM manipulation
  - Interactive zoom modal
  - Series navigation
  - Lazy loading with IntersectionObserver

## 📁 Project Structure

```
Official Website/
├── index.html          # Gallery page (main page)
├── about.html          # About the Artist page
├── contact.html         # Contact page
├── styles.css          # Main stylesheet
├── script.js           # JavaScript functionality
├── README.md           # This file
├── artworks/           # Artwork images
│   ├── cambodia/       # Cambodia series paintings
│   ├── korea/          # Korea series paintings
│   ├── miscellaneous/  # Miscellaneous countries paintings
│   └── commissions/    # Commissioned works
└── icons/              # Social media icons and logo
    ├── logo.png
    ├── email.png
    ├── instagram.png
    ├── phone.png
    └── location.png
```

## 🎨 Design Elements

- **Typography**: 
  - Headings: Bodoni Moda (Bodoni 72 Small Caps alternative)
  - Body: Inter (Avenir alternative)
- **Color Scheme**:
  - Light Green: `#c8d9c6`
  - Dark Green: `#a6b5a5`
  - Cream background: `#faf8f3`
- **Geometric Shapes**: Minimal geometric elements integrated with natural design

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/rachagold/art.git
   cd art
   ```

2. Open `index.html` in your web browser, or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   ```

3. Navigate to `http://localhost:8000` in your browser

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1400px+)
- Tablet (768px - 1024px)
- Mobile (480px - 768px)
- Small mobile (< 480px)

## 🖼️ Artwork Management

Artwork images are organized by series in the `artworks/` directory. Each artwork includes:
- Title
- Year
- Medium
- Size

Images should be in PNG format and named according to the artwork title (e.g., `phnum_aoral.png`, `jejui.png`).

## 📝 Customization

### Adding New Artwork

1. Add the artwork image to the appropriate series folder in `artworks/`
2. Update `index.html` with the new artwork entry in the corresponding gallery section
3. Follow the existing HTML structure for artwork items

### Updating Colors

Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-green: #c8d9c6;
    --primary-green-dark: #a6b5a5;
    /* ... other variables */
}
```

### Changing Typography

Update the Google Fonts import in the HTML files and adjust font-family declarations in `styles.css`.

## 🔗 Contact Information

- **WhatsApp**: [+1 (240) 688-9866](https://wa.me/12406889866)
- **Telegram**: [+855 017-459-164](https://t.me/+855017459164)
- **Instagram**: [@rachelgoldberg](https://instagram.com/rachelgoldberg)
- **Email**: Available on contact page

## 📄 License

This project is the personal portfolio of Rachel Goldberg. All artwork and design are property of the artist.

## 👤 Artist

**Rachel Goldberg**  
Fine Artist • Designer • Educator

---

*Last updated: January 2025*

