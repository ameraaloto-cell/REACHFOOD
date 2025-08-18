# Code Style and Conventions

## TypeScript Standards
- Strict TypeScript configuration with React 19 types
- Import management is critical - unused imports cause build failures
- Lucide React icons must be imported explicitly and used consistently

## Component Architecture
- **Layout Components**: `Navbar`, `Footer` provide consistent site structure
- **Specialty Components**: `LoadingScreen`, `ParallaxHero`, `PremiumCursor`
- **Page Components**: Full-page components with individual routing and animations
- Components organized in `src/components/` and `src/pages/`

## Animation Standards
- Framer Motion for page transitions and scroll animations
- Each route has unique transition (slide, scale, rotate)
- Use `whileInView={{ once: true }}` for performance
- GSAP used for complex loading screen animations

## Styling Approach
- Tailwind CSS utility classes with extensive custom configuration
- Mobile-first responsive design patterns
- Consistent color usage through design tokens
- Custom Tailwind animations for micro-interactions

## Import/Export Patterns
- Named exports preferred
- Clean import organization
- Remove unused imports to prevent build failures

## File Naming
- PascalCase for React components
- camelCase for utilities and types
- kebab-case avoided in favor of PascalCase for components