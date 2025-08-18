# Deployment and Asset Guidelines

## Vercel-Specific Requirements
- **Critical**: Use `<img>` tags instead of CSS `background-image` for Vercel deployment compatibility
- Avoid spaces in image filenames (use `product1.jpg` not `product 1.jpg`)
- Background images should be implemented as `<img className="absolute inset-0 w-full h-full object-cover" />`
- CSS `style={{ backgroundImage: 'url(...)' }}` patterns don't work reliably on Vercel

## Asset Management
- All images stored in `public/images/` directory
- Static assets in `public/` folder are served directly
- File names with spaces cause 404 errors on production servers

## ReachFood Branding Standards
- Company name styling: `R<span className="text-orange-400">E</span>ACHF<span className="text-orange-400">OO</span>D`
- Consistent orange coloring on "E" and "OO" letters throughout the site
- All navigation and branding should maintain this pattern

## Content Management
- All content is hardcoded in React components (no CMS)
- Testimonials, team members, and product data defined as typed arrays
- Brand messaging emphasizes technology innovation and sustainability impact