# Tempora — Temperature Converter

A modern, elegant web application for converting temperatures between Celsius, Fahrenheit, and Kelvin with a beautiful user interface and dark mode support.

## Overview

Tempora is a temperature conversion tool that makes it easy to convert between three major temperature scales. With its clean design, instant calculations, and dark mode support, it provides a seamless user experience for quick temperature conversions.

## Features

🌡️ **Multi-Scale Conversion**

- Convert between Celsius, Fahrenheit, and Kelvin
- Real-time conversion on form submission
- Displays all three scales simultaneously

🎨 **Beautiful Design**

- Modern, minimalist interface with gradient background
- Smooth animations and decorative elements
- Professional typography using Google Fonts
- Responsive card-based layout

🌙 **Dark Mode Support**

- Toggle between light and dark themes
- Smooth transitions between modes
- Theme preference saved in localStorage

✓ **Smart Validation**

- Real-time input validation
- Absolute zero checks to prevent impossible temperatures
- Error messages for invalid inputs
- Prevents conversion errors

📱 **Responsive Design**

- Works perfectly on desktop, tablet, and mobile
- Flexible grid layout for results
- Touch-friendly interface

## Technologies Used

**Frontend:**

- HTML5
- CSS3 (Gradients, Animations, Flexbox, Grid)
- JavaScript ES6+

**Design:**

- Google Fonts (DM Sans, Playfair Display)
- Custom CSS animations
- Decorative background shapes

## Project Structure

```
WebDev-L1-Task3-Tempconverter/
├── index.html          # Main HTML structure
├── style.css           # Styling, animations, and theme
├── script.js           # Conversion logic and interactivity
└── README.md           # This file
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No installation or dependencies required

### How to Use

1. **Open the Application**
   - Open `index.html` in your web browser
   - Or deploy to a web hosting service

2. **Convert a Temperature**
   - Enter a temperature value in the input field
   - Select the unit to convert from (Celsius, Fahrenheit, or Kelvin)
   - Click "Convert temperature" button
   - View the results in all three temperature scales

3. **Toggle Dark Mode**
   - Click the theme toggle button (moon/sun icon) in the top-right
   - Theme preference is automatically saved

## Conversion Logic

### Formulas Used

**From Celsius (°C):**

- To Fahrenheit: `(C × 9/5) + 32`
- To Kelvin: `C + 273.15`

**From Fahrenheit (°F):**

- To Celsius: `(F - 32) × 5/9`
- To Kelvin: `((F - 32) × 5/9) + 273.15`

**From Kelvin (K):**

- To Celsius: `K - 273.15`
- To Fahrenheit: `((K - 273.15) × 9/5) + 32`

### Validation Rules

- **Input must be a valid number** - Rejects empty fields and non-numeric values
- **Absolute Zero Check:**
  - Celsius: Must be ≥ -273.15°C
  - Fahrenheit: Must be ≥ -459.67°F
  - Kelvin: Must be ≥ 0 K

## Color Palette

| Element    | Color             | Hex Code                    |
| ---------- | ----------------- | --------------------------- |
| Background | Light Purple      | `#f4f1ff`                   |
| Card       | White Transparent | `rgba(255, 255, 255, 0.78)` |
| Accent     | Purple            | `#7257d9`                   |
| Text       | Dark Purple       | `#27233a`                   |
| Muted      | Gray Purple       | `#77728b`                   |
| Error      | Red               | `#d9536f`                   |

## Key Technical Features

### Form Handling

- Form submission prevents default behavior
- Real-time parsing of numeric input
- Automatic format of results to 2 decimal places

### Error Handling

- Validates input before conversion
- Checks for absolute zero violations
- Displays user-friendly error messages
- Hides results section on error

### Dark Mode Implementation

- Uses CSS variables for theme switching
- `data-theme="dark"` attribute toggles theme
- localStorage persists user preference
- Smooth transitions between themes

### Animations

- Floating background shapes with keyframe animations
- Smooth fade-in/out transitions for results and messages
- Button hover effects
- Input focus states

## Browser Compatibility

| Browser         | Support |
| --------------- | ------- |
| Chrome          | ✅ Full |
| Firefox         | ✅ Full |
| Safari          | ✅ Full |
| Edge            | ✅ Full |
| Mobile Browsers | ✅ Full |

## Example Conversions

| Input  | From       | Celsius | Fahrenheit | Kelvin |
| ------ | ---------- | ------- | ---------- | ------ |
| 0      | Celsius    | 0.00    | 32.00      | 273.15 |
| 100    | Celsius    | 100.00  | 212.00     | 373.15 |
| 32     | Fahrenheit | 0.00    | 32.00      | 273.15 |
| 273.15 | Kelvin     | 0.00    | 32.00      | 273.15 |

## Accessibility Features

- ✓ ARIA labels for buttons
- ✓ Semantic HTML structure
- ✓ Keyboard navigable form
- ✓ High contrast color scheme
- ✓ Clear error messages

## Future Enhancements

- [ ] Add Réaumur scale option
- [ ] Conversion history/memory
- [ ] Copy to clipboard functionality
- [ ] Keyboard shortcuts (Enter to convert)
- [ ] Animated number transitions
- [ ] Preset temperature examples (freezing point, boiling point, etc.)
- [ ] Unit conversion speed comparison
- [ ] Export results as PDF or image
- [ ] Multiple language support
- [ ] Sound effects for conversions

## Deployment

This application can be deployed to any static hosting service:

- **GitHub Pages** - Free hosting with GitHub repository
- **Netlify** - Drag-and-drop deployment
- **Vercel** - Optimized static hosting
- **Traditional Web Hosting** - Upload files via FTP

## Performance

- **Lightweight:** No external dependencies
- **Fast:** Instant calculations
- **Optimized:** Minimal CSS and JavaScript
- **Efficient:** Uses browser localStorage for theme persistence

## Credits

Built with ❤️ using HTML, CSS, and JavaScript.

**Typography:**

- [DM Sans](https://fonts.google.com/specimen/DM+Sans) by Colophon Foundry
- [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) by Claus Eggers Sørensen

## License

This project is open source and available for personal and educational use.

---

© 2026 Tempora | Built with HTML, CSS & JavaScript
