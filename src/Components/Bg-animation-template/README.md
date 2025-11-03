# Background Animation Templates

This folder contains reusable background animation components that can be used across different sections of your application.

## Available Templates

### 1. `SectionsBgAnimation.jsx` (Default/Full)
Complete animation set with all shape types:
- Floating circles
- Triangles
- Squares
- Diamonds
- Gradient orbs
- Lines
- Particles
- Hexagons
- Stars

**Best for:** Main content sections, hero areas, featured sections

**Usage:**
```jsx
import SectionsBgAnimation from '../../Components/Bg-animation-template/SectionsBgAnimation';

<SectionsBgAnimation />
```

---

### 2. `MinimalBgAnimation.jsx`
Lightweight animation with minimal shapes:
- Fewer circles
- Basic geometric shapes
- Small particles

**Best for:** Simple sections, sidebar areas, compact spaces

**Usage:**
```jsx
import MinimalBgAnimation from '../../Components/Bg-animation-template/MinimalBgAnimation';

<MinimalBgAnimation />
```

---

### 3. `DenseBgAnimation.jsx`
Rich, dense animation with many shapes:
- More circles and geometric shapes
- Increased particle count
- Multiple layers of shapes

**Best for:** Background-heavy sections, landing pages, splash screens

**Usage:**
```jsx
import DenseBgAnimation from '../../Components/Bg-animation-template/DenseBgAnimation';

<DenseBgAnimation />
```

---

### 4. `ParticlesBgAnimation.jsx`
Particle-only animation:
- Only floating particles (dots)
- Various sizes and opacities
- Clean, minimal aesthetic

**Best for:** Tech sections, modern interfaces, minimalist designs

**Usage:**
```jsx
import ParticlesBgAnimation from '../../Components/Bg-animation-template/ParticlesBgAnimation';

<ParticlesBgAnimation />
```

---

### 5. `GeometricBgAnimation.jsx`
Geometric shapes only:
- Squares
- Diamonds
- Hexagons
- Triangles
- No circles or particles

**Best for:** Structured sections, technical content, architectural themes

**Usage:**
```jsx
import GeometricBgAnimation from '../../Components/Bg-animation-template/GeometricBgAnimation';

<GeometricBgAnimation />
```

---

### 6. `LargeShapesBgAnimation.jsx`
**Very large shapes** (64px - 80px):
- Extra large circles (up to 80px)
- Large squares and diamonds (52px - 60px)
- Massive hexagons and triangles
- Positioned at edges and corners

**Best for:** Bold sections, hero areas, impactful backgrounds

**Usage:**
```jsx
import LargeShapesBgAnimation from '../../Components/Bg-animation-template/LargeShapesBgAnimation';

<LargeShapesBgAnimation />
```

---

### 7. `GridStructureBgAnimation.jsx`
**Grid-based layout structure:**
- Organized in horizontal rows (top, middle, bottom)
- Vertical and horizontal grid lines
- Consistent spacing and alignment
- Symmetrical pattern

**Best for:** Professional sections, organized content, structured layouts

**Usage:**
```jsx
import GridStructureBgAnimation from '../../Components/Bg-animation-template/GridStructureBgAnimation';

<GridStructureBgAnimation />
```

---

### 8. `RadialStructureBgAnimation.jsx`
**Radial/circular structure:**
- Concentric circles from center
- Radial elements extending from center
- Circular symmetry
- Elements positioned in all directions (top, bottom, left, right, diagonal)

**Best for:** Centered content, focal point sections, radial designs

**Usage:**
```jsx
import RadialStructureBgAnimation from '../../Components/Bg-animation-template/RadialStructureBgAnimation';

<RadialStructureBgAnimation />
```

---

### 9. `WaveStructureBgAnimation.jsx`
**Wave/flowing structure:**
- Wave patterns across top, middle, and bottom
- Flowing horizontal arrangement
- Connecting lines between waves
- Smooth, organic feel

**Best for:** Dynamic sections, flowing content, movement-themed areas

**Usage:**
```jsx
import WaveStructureBgAnimation from '../../Components/Bg-animation-template/WaveStructureBgAnimation';

<WaveStructureBgAnimation />
```

---

### 10. `CornerStructureBgAnimation.jsx`
**Corner-focused structure:**
- Very large shapes in all four corners (top-left, top-right, bottom-left, bottom-right)
- Massive shapes (80px - 96px)
- Center large hexagon
- Strong corner emphasis

**Best for:** Framed content, corner-highlighted sections, border-focused designs

**Usage:**
```jsx
import CornerStructureBgAnimation from '../../Components/Bg-animation-template/CornerStructureBgAnimation';

<CornerStructureBgAnimation />
```

---

### 11. `ZigzagStructureBgAnimation.jsx`
**Zigzag pattern structure:**
- Diagonal zigzag patterns from left to right
- Alternating diagonal lines
- Connecting triangles
- Dynamic diagonal flow

**Best for:** Energetic sections, dynamic content, movement-oriented areas

**Usage:**
```jsx
import ZigzagStructureBgAnimation from '../../Components/Bg-animation-template/ZigzagStructureBgAnimation';

<ZigzagStructureBgAnimation />
```

---

### 12. `LayeredStructureBgAnimation.jsx`
**Multi-layer structure:**
- 6 layers of shapes with different sizes
- Very large background layer (500px - 600px)
- Progressive size reduction through layers
- Deep layering effect

**Best for:** Rich backgrounds, depth-focused sections, layered content

**Usage:**
```jsx
import LayeredStructureBgAnimation from '../../Components/Bg-animation-template/LayeredStructureBgAnimation';

<LayeredStructureBgAnimation />
```

## Customization

All templates accept an optional `color` prop to override the theme-based color:

```jsx
// Use custom color
<SectionsBgAnimation color="#ff6b6b" />

// Use theme-based color (default)
<SectionsBgAnimation />
```

## Theme Integration

All templates automatically adapt to light/dark themes:
- **Light theme:** Blue shapes (`#2d65bc`)
- **Dark theme:** White shapes (`#ffffff`)

## Common Properties

- **No shadows:** All shapes have `boxShadow: 'none'` applied
- **Pointer events disabled:** Animations won't interfere with user interactions
- **Absolute positioning:** Positioned relative to parent container

## Implementation Example

```jsx
import React from 'react';
import SectionsBgAnimation from '../../Components/Bg-animation-template/SectionsBgAnimation';

const MySection = () => {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Background Animation */}
      <SectionsBgAnimation />
      
      {/* Your Content */}
      <div className="relative z-10">
        {/* Section content here */}
      </div>
    </section>
  );
};
```

## Notes

- Ensure parent container has `position: relative` and `overflow: hidden`
- Content should have `relative z-10` or higher to appear above animations
- All animations use the same animation classes defined in your global CSS

