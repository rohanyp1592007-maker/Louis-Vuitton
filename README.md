# Louis Vuitton Website Clone

A responsive luxury fashion e-commerce website clone inspired by Louis Vuitton's official website, built with HTML, CSS, and JavaScript.

## Features

- **Responsive Design**: Works on all device sizes (mobile, tablet, desktop)
- **Luxury Aesthetics**: Clean, minimalist design with premium feel
- **Interactive Elements**: Hover effects, smooth scrolling, and animations
- **Image Management**: Easy to replace with actual image paths
- **Newsletter Subscription**: Functional email subscription form
- **Product Showcase**: Featured products with pricing
- **Navigation**: Smooth scrolling navigation with responsive menu

## File Structure

```
louis-vuitton-clone/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
├── react-component.js  # React component version (optional)
├── images/             # Image folder (place your images here)
│   ├── homepage.png           # Homepage background image
│   ├── MONOGRAM-NEVERFULL-MM.png  # Product 1
│   ├── CAPUCINES-BB.png       # Product 2
│   ├── LV-TRAINER-SNEAKER.png # Product 3
│   ├── TAMBOUR-HORNBILL.png   # Product 4
│   ├── NECKLACE.png           # Product 5
│   ├── SUNGLASSES.png         # Product 6
│   ├── mens.png               # Men's collection image
│   ├── womens.png             # Women's collection image
│   ├── mens-background.png    # Men's section background
│   └── womens-background.png  # Women's section background
└── README.md           # This file
```

## How to Use

1. **Open the website**: Simply open `index.html` in any modern web browser
2. **Add your images**: 
   - Place all your PNG images in the `images/` folder
   - Use the exact filenames listed above
   - The homepage background uses `homepage.png` directly (not in images folder)
3. **Customize content**: Edit the HTML to change text, prices, and product information

## Key Components

### Header
- Fixed navigation bar with logo and menu
- Location selector (India)
- Shopping icons (search, user, bag)
- Responsive menu that collapses on mobile

### Hero Section
- Full-screen banner with background image
- Spring-Summer 2026 collection theme
- "Shop Now" button with hover effects

### Featured Products
- Grid layout with 4 product cards
- Each card includes:
  - Product image
  - Product name
  - Category
  - Price
- Hover animations and click functionality

### Collection Section
- Grid layout with 6 product cards
- Each card includes product image, name, category, and price
- Hover animations and click functionality

### Men's Section
- Full-width section with background image
- White text on dark background
- "Shop Men" button

### Women's Section
- Full-width section with background image
- White text on dark background
- "Shop Women" button

### Newsletter
- Email subscription form
- Validation and feedback alerts

### Footer
- Organized links by category
- Social media icons
- Copyright information

## Image Requirements

Place these images in the `images/` folder:

1. `MONOGRAM-NEVERFULL-MM.png` - Handbag product image
2. `CAPUCINES-BB.png` - Handbag product image
3. `LV-TRAINER-SNEAKER.png` - Shoe product image
4. `TAMBOUR-HORNBILL.png` - Watch product image
5. `NECKLACE.png` - Necklace product image
6. `SUNGLASSES.png` - Sunglasses product image
7. `mens.png` - Men's collection image
8. `womens.png` - Women's collection image
9. `mens-background.png` - Background for men's section
10. `womens-background.png` - Background for women's section

The `homepage.png` should be placed in the root folder (same level as index.html) for the hero background.

## Navigation Functionality

The navbar buttons now work properly:
- **COLLECTION**: Scrolls to featured products section
- **MEN**: Scrolls to men's section with background image
- **WOMEN**: Scrolls to women's section with background image
- **NEW**: Scrolls to hero section

## JavaScript Features

- **Smooth scrolling** for all navigation links
- **Form validation** for newsletter subscription
- **Hover effects** on products and buttons
- **Image loading** with fallback placeholders
- **Responsive design** adjustments for mobile

## Customization Options

### Colors
- Primary: Black (#000000)
- Background: White (#FFFFFF)
- Text: Black (#000000) and White for contrast sections

### Fonts
- Primary: Arial, sans-serif
- Font weights: 400 (normal), 500 (medium)

### Spacing
- Section padding: 100px vertical (150px for men/women sections)
- Grid gaps: 40px
- Card spacing: 20px

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Responsive Breakpoints

- Mobile: Up to 768px
- Tablet: 769px to 1024px
- Desktop: 1025px and above

## Performance Notes

- Optimized CSS with minimal repaints
- Efficient JavaScript with event delegation
- Mobile-first responsive approach
- Background images optimized for performance

## Development Tips

1. **Image Optimization**: Use compressed images for better performance
2. **SEO**: Add meta tags and alt text for images
3. **Accessibility**: Ensure proper contrast ratios and keyboard navigation
4. **Testing**: Test on multiple devices and browsers

## License

This is a demonstration/educational project. Louis Vuitton is a registered trademark of LVMH.

## Author

Created as a web development exercise focusing on luxury brand website design principles.