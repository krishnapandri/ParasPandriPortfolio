# Portfolio Application

## Overview

This is a modern, full-stack portfolio application built with React, Express.js, and Drizzle ORM. The application showcases a personal portfolio with animated components, responsive design, and a contact form functionality. It uses a monorepo structure with separate client and server directories, sharing common schema definitions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Animations**: Framer Motion for smooth animations and transitions
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Validation**: Zod for runtime type validation
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Built-in storage abstraction with in-memory implementation

### Design System
- **Theme**: Dark theme with purple/blue accent colors
- **Components**: Comprehensive UI component library using Radix UI
- **Typography**: Custom CSS variables for consistent spacing and colors
- **Responsive**: Mobile-first design approach

## Key Components

### Frontend Components
1. **AnimatedHero**: Landing section with animated code snippets and call-to-action buttons
2. **Navigation**: Sticky navigation with scroll-based active section detection
3. **SkillsSection**: Interactive skills display with progress bars and animations
4. **ExperienceTimeline**: Professional experience in timeline format
5. **ProjectsShowcase**: Portfolio projects with technology badges and achievements
6. **ContactForm**: Form submission with validation and toast notifications

### Backend Components
1. **Routes**: API endpoints for contact form submission
2. **Storage**: Abstracted storage layer with in-memory implementation for users
3. **Schema**: Shared database schema definitions using Drizzle
4. **Validation**: Zod schemas for API request validation

### UI Component Library
- Complete set of reusable UI components (Button, Card, Input, etc.)
- Toast notification system
- Form handling with React Hook Form
- Responsive navigation and layout components

## Data Flow

1. **Client-Side**: React components manage local state and make API calls using TanStack Query
2. **API Layer**: Express.js handles HTTP requests with validation middleware
3. **Database**: Drizzle ORM provides type-safe database operations
4. **Shared Types**: Common schema definitions ensure type consistency across client and server

### Contact Form Flow
1. User fills out contact form with name, email, and message
2. Client-side validation using Zod schema
3. Form submission via TanStack Query mutation
4. Server validates data and logs submission (placeholder for email/database storage)
5. Success/error feedback via toast notifications

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library
- **wouter**: Lightweight routing
- **zod**: Runtime type validation

### UI Dependencies
- **@radix-ui/***: Primitive UI components for accessibility
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

### Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Type safety
- **tsx**: TypeScript execution for Node.js

## Deployment Strategy

### Build Process
1. **Frontend**: Vite builds React application to `dist/public`
2. **Backend**: esbuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations can be pushed using `npm run db:push`

### Environment Setup
- Requires `DATABASE_URL` environment variable for PostgreSQL connection
- Development server runs on Node.js with hot reload
- Production build creates optimized static files and bundled server

### Development vs Production
- **Development**: Uses Vite dev server with HMR and development middleware
- **Production**: Serves static files from Express with optimized builds
- **Database**: Uses Drizzle with PostgreSQL dialect (currently configured for Neon)

### Replit Integration
- Includes Replit-specific development banner and error overlay
- Cartographer plugin for enhanced development experience
- Runtime error modal for better debugging