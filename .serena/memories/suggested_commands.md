# Essential Development Commands

## Daily Development
- `npm run dev` - Start development server (Vite)
- `npm run build` - Production build (TypeScript compilation + Vite build)
- `npm run lint` - Run ESLint for code quality
- `npm run preview` - Preview production build locally

## Build Process
The build process runs TypeScript compilation first (`tsc -b`) followed by Vite bundling. All TypeScript errors must be resolved before the build succeeds.

## Task Completion Protocol
After completing any development task, ALWAYS run:
1. `npm run lint` - Check for code quality issues
2. `npm run build` - Ensure TypeScript compilation succeeds
3. Fix any errors before considering task complete

## Windows System Commands
- `dir` - List directory contents (equivalent to `ls`)
- `cd` - Change directory
- `type` - Display file contents (equivalent to `cat`)
- `findstr` - Search in files (equivalent to `grep`)
- `git` - Git version control commands work normally