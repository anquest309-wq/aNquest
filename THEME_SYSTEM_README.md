# Theme System Documentation

## Overview
This theme system allows users to switch between three different color schemes:
- **Dark Theme**: Black/dark gray backgrounds with light text
- **Light Theme**: White/light gray backgrounds with dark text  
- **Green Theme**: Green/nature-inspired backgrounds with light text

## Features
- ✅ Persistent theme selection (saved in localStorage)
- ✅ Smooth transitions between themes
- ✅ CSS custom properties for easy customization
- ✅ Theme-aware utility classes
- ✅ Responsive design support
- ✅ Accessibility considerations

## Usage

### 1. Wrap your app with ThemeProvider
```jsx
import { ThemeProvider } from './Context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      {/* Your app components */}
    </ThemeProvider>
  );
}
```

### 2. Use the ThemeSwitcher component
```jsx
import ThemeSwitcher from './Components/ThemeSwitcher';

function Header() {
  return (
    <header>
      <ThemeSwitcher />
    </header>
  );
}
```

### 3. Use theme-aware CSS classes
```jsx
// Backgrounds
<div className="theme-bg-primary">Primary background</div>
<div className="theme-bg-secondary">Secondary background</div>
<div className="theme-bg-tertiary">Tertiary background</div>

// Text colors
<h1 className="theme-text-primary">Primary text</h1>
<p className="theme-text-secondary">Secondary text</p>
<span className="theme-text-muted">Muted text</span>

// Buttons
<button className="theme-button-primary">Primary button</button>
<button className="theme-button-secondary">Secondary button</button>

// Cards
<div className="theme-card">Card with theme styling</div>

// Sections
<section className="theme-section">Main section</section>
<section className="theme-section-alt">Alternate section</section>
```

### 4. Use CSS custom properties directly
```css
.my-component {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  border: 1px solid var(--border-primary);
  box-shadow: 0 4px 6px var(--shadow-primary);
}
```

### 5. Use the useTheme hook in components
```jsx
import { useTheme } from './Context/ThemeContext';

function MyComponent() {
  const { theme, changeTheme } = useTheme();
  
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => changeTheme('light')}>
        Switch to Light
      </button>
    </div>
  );
}
```

## Available CSS Custom Properties

### Colors
- `--bg-primary`: Main background color
- `--bg-secondary`: Secondary background color
- `--bg-tertiary`: Tertiary background color
- `--text-primary`: Primary text color
- `--text-secondary`: Secondary text color
- `--text-muted`: Muted text color
- `--accent-primary`: Primary accent color
- `--accent-secondary`: Secondary accent color
- `--border-primary`: Primary border color
- `--border-secondary`: Secondary border color

### Shadows
- `--shadow-primary`: Primary shadow color
- `--shadow-secondary`: Secondary shadow color

### Gradients
- `--gradient-primary`: Primary gradient
- `--gradient-secondary`: Secondary gradient
- `--gradient-accent`: Accent gradient

## Theme-Specific Values

### Dark Theme
- Primary background: `#1a1a1a`
- Secondary background: `#2d2d2d`
- Primary text: `#ffffff`
- Accent: `#10b981` (green)

### Light Theme
- Primary background: `#ffffff`
- Secondary background: `#f8fafc`
- Primary text: `#1a1a1a`
- Accent: `#3b82f6` (blue)

### Green Theme
- Primary background: `#064e3b`
- Secondary background: `#065f46`
- Primary text: `#ffffff`
- Accent: `#10b981` (green)

## Adding New Themes

1. Add theme colors to the `themes` object in `ThemeContext.jsx`
2. Add CSS class `.theme-[name]` in `theme.css`
3. Update the `themes` array in `ThemeSwitcher.jsx`

## Best Practices

1. **Always use theme classes** instead of hardcoded colors
2. **Test all themes** to ensure good contrast and readability
3. **Use semantic color names** (primary, secondary) rather than specific colors
4. **Consider accessibility** - ensure sufficient contrast ratios
5. **Smooth transitions** - use the `theme-transition` class for smooth theme changes

## Example Integration

```jsx
// Before (hardcoded colors)
<div className="bg-gray-900 text-white p-4">
  <h1 className="text-2xl font-bold">Title</h1>
  <p className="text-gray-300">Description</p>
</div>

// After (theme-aware)
<div className="theme-bg-primary theme-text-primary p-4">
  <h1 className="text-2xl font-bold theme-text-primary">Title</h1>
  <p className="theme-text-secondary">Description</p>
</div>
```

This ensures your component will automatically adapt to any theme changes!
