# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the ReachFood website - a React/TypeScript application showcasing revolutionary self-heating meal technology. The site presents ReachFood as a food technology company that creates meals that heat themselves in 5 minutes using calcium oxide reactions, with sustainable plantable packaging.

## Development Commands

### Essential Commands
- `npm run dev` - Start development server (Vite)
- `npm run build` - Production build (TypeScript compilation + Vite build)
- `npm run lint` - Run ESLint for code quality
- `npm run preview` - Preview production build locally

### Build Process
The build process runs TypeScript compilation first (`tsc -b`) followed by Vite bundling. All TypeScript errors must be resolved before the build succeeds.

## Architecture Overview

### Tech Stack
- **React 19** with TypeScript for type safety
- **Vite** as build tool and dev server
- **React Router** for client-side navigation
- **Framer Motion** for animations and page transitions
- **Tailwind CSS** with custom design system
- **Lucide React** for consistent iconography

### Application Structure

#### Pages & Routing
- **Home** (`/`) - Landing page with hero, technology showcase, testimonials
- **Services** (`/services`) - Product categories and meal offerings
- **Portfolio** (`/portfolio`) - Technology innovations and R&D showcase
- **About** (`/about`) - Company story, team, and values
- **Shop** (`/shop`) - Product catalog and subscription plans
- **Booking** (`/booking`) - Order and subscription management
- **Contact** (`/contact`) - Global offices and partnership inquiries

#### Component Architecture
- **Layout Components**: `Navbar`, `Footer` provide consistent site structure
- **Specialty Components**: 
  - `LoadingScreen` with GSAP animations and ReachFood branding
  - `ParallaxHero` for animated landing section
  - `PremiumCursor` for enhanced UX interactions
- **Page Components**: Full-page components with individual routing and animations

#### Animation System
- Each route has unique Framer Motion transitions (slide, scale, rotate)
- Loading screen with 3-second delay for premium experience
- Extensive use of `whileInView` animations for scroll-triggered effects
- Custom Tailwind animations for micro-interactions

### Design System

#### Color Scheme
- **Primary Brand**: Teal gradients (`#14b8a6` to `#0d9488`)
- **Secondary**: Slate tones (`#0f172a` to `#334155`) 
- **Legacy Colors**: Primary (yellow), dark, brown palettes remain in Tailwind config
- **Accent**: Orange/red for energy and heat visualization

#### Typography
- **Headings**: Serif fonts (Playfair Display) for authority
- **Body**: Sans-serif (Inter) for readability
- Consistent hierarchy across all pages

#### Responsive Design
- Mobile-first approach with breakpoints at 768px (tablet) and 1024px (desktop)
- Grid layouts that adapt from 1 column (mobile) to 2-4 columns (desktop)
- Navigation transforms to hamburger menu on mobile

## Content Architecture

### Brand Identity
- **Company**: ReachFood (food technology company)
- **Mission**: Self-heating meals that work anywhere in 5 minutes
- **Key Technologies**: Calcium oxide heating, plantable packaging, MENA flavors
- **Target Markets**: Emergency relief, outdoor adventures, corporate wellness, families

### Page Content Strategy
- **Home**: Technology demonstration, testimonials from diverse users, sustainability focus
- **Services**: Detailed meal categories with features and subscription options
- **About**: Company founding story, team bios, core values, timeline
- **Portfolio**: Technology innovations with interactive elements
- **Contact**: Global office locations, partnership opportunities

### SEO Implementation
- Comprehensive meta tags in `index.html` for food technology industry
- Structured data (Schema.org) for organization information
- Industry-specific keywords and social media optimization
- Performance optimization with preconnect directives

## Key Development Considerations

### TypeScript Integration
- Strict TypeScript configuration with React 19 types
- Import management is critical - unused imports cause build failures
- Lucide React icons must be imported explicitly and used consistently

### Animation Performance
- Framer Motion components should use `whileInView={{ once: true }}` for performance
- GSAP used specifically in LoadingScreen for complex animations
- Page transitions are orchestrated through App.tsx route definitions

### Styling Approach
- Tailwind utility classes with extensive custom configuration
- Consistent color usage through design tokens
- Mobile-first responsive design patterns throughout

### Content Management
- All content is hardcoded in React components (no CMS)
- Testimonials, team members, and product data defined as typed arrays
- Brand messaging emphasizes technology innovation and sustainability impact

This codebase represents a complete transformation from a barber shop website to a food technology company, maintaining the technical architecture while completely replacing content and branding.