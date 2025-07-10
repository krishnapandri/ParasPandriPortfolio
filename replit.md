# Portfolio Website

## Overview

This is a full-stack portfolio website built with React, Express.js, and PostgreSQL. The application features a modern dark-themed design showcasing a software engineer's professional experience, skills, projects, and contact information. The site includes an animated hero section, interactive components, and a functional contact form with email notifications.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Animations**: Framer Motion for smooth animations and transitions
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with JSON responses
- **Email Service**: Nodemailer for contact form notifications
- **Session Management**: Express sessions with PostgreSQL store
- **Development**: Hot reload with Vite middleware integration

### Database Layer
- **Database**: PostgreSQL with Neon serverless driver
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle migrations in the `/migrations` directory
- **Connection**: Environment-based database URL configuration

## Key Components

### Portfolio Sections
1. **Hero Section**: Animated introduction with floating code snippets, typing animation, and call-to-action buttons
2. **About Section**: Professional summary with animated stat counters and background information
3. **Skills Section**: Interactive skill categories with animated progress indicators
4. **Experience Timeline**: Complete educational and professional journey with achievements
5. **Projects Showcase**: Featured projects with technology badges and descriptions
6. **Testimonials**: Professional feedback from colleagues and team members
7. **Contact Form**: Functional contact form with validation and email notifications

### New Interactive Features
1. **Theme Toggle**: Light/dark mode switcher with smooth transitions
2. **Typing Animation**: Dynamic text rotation in hero section
3. **Animated Counters**: Statistics that count up when scrolled into view
4. **Scroll Progress**: Visual progress bar showing page scroll position
5. **Interactive Background**: Animated particle system with connecting lines
6. **Custom Cursor**: Enhanced cursor following with blend effects
7. **Back to Top**: Smooth scroll to top button that appears on scroll
8. **Email Notifications**: Contact form submissions trigger email alerts

### UI Components
- **Navigation**: Sticky navigation with smooth scrolling and active section detection
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Dual Theme Support**: Light and dark themes with purple/blue accent colors
- **Form Validation**: Zod schema validation for contact form inputs
- **Toast Notifications**: User feedback for form submissions and errors
- **Loading States**: Smooth loading animations and skeleton states
- **Micro-interactions**: Hover effects, transitions, and animation feedback

### Contact System
- **Form Validation**: Client and server-side validation using Zod schemas
- **Email Notifications**: Automated email sending to krishnapandri001@gmail.com
- **Console Logging**: Development email preview in server console
- **Error Handling**: Graceful error handling with user-friendly messages
- **Success Feedback**: Toast notifications for successful submissions
- **Resume Download**: Direct PDF download functionality with floating action button

## Data Flow

1. **Client Request**: User interacts with the portfolio website
2. **React Components**: Components handle user interactions and state changes
3. **API Calls**: TanStack Query manages API requests to the Express backend
4. **Express Routes**: Server processes requests and validates data
5. **Email Service**: Contact form submissions trigger email notifications
6. **Database Operations**: User data stored using Drizzle ORM (currently using in-memory storage)
7. **Response**: JSON responses sent back to the client with success/error status

### Contact Form Flow
1. User fills out contact form (name, email, message)
2. Client-side validation using Zod schema
3. Form submission sent to `/api/contact` endpoint
4. Server validates data and sends email notification
5. Success/error response returned to client
6. Toast notification displays result to user

## External Dependencies

### Frontend Dependencies
- **@radix-ui/***: Accessible UI component primitives
- **@tanstack/react-query**: Server state management
- **framer-motion**: Advanced animation library for micro-interactions
- **tailwindcss**: Utility-first CSS framework with custom theming
- **wouter**: Lightweight React router
- **class-variance-authority**: Component variant management
- **clsx**: Conditional CSS class utility
- **lucide-react**: Modern icon library

### Backend Dependencies
- **express**: Web application framework
- **drizzle-orm**: Type-safe ORM
- **@neondatabase/serverless**: PostgreSQL serverless driver
- **nodemailer**: Email sending library for contact notifications
- **zod**: Schema validation library
- **dotenv**: Environment variable management
- **@types/nodemailer**: TypeScript definitions for nodemailer

### Development Dependencies
- **vite**: Build tool and development server
- **typescript**: Type checking and compilation
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React application to static assets in `/dist/public`
2. **Backend Build**: esbuild bundles Express server to `/dist/index.js`
3. **Type Checking**: TypeScript compilation validates types across the entire codebase
4. **Database Migration**: Drizzle pushes schema changes to PostgreSQL

### Environment Configuration
- **DATABASE_URL**: PostgreSQL connection string for Neon database
- **EMAIL_USER**: Gmail account for sending contact notifications
- **EMAIL_PASSWORD**: Gmail app password for authentication
- **NODE_ENV**: Environment flag for production optimizations

### Production Deployment
- Static frontend assets served from `/dist/public`
- Express server runs from bundled `/dist/index.js`
- PostgreSQL database hosted on Neon serverless platform
- Email notifications sent via Gmail SMTP

### Development Workflow
- **Dev Server**: `npm run dev` starts Express with Vite middleware
- **Type Checking**: `npm run check` validates TypeScript types
- **Database Operations**: `npm run db:push` applies schema changes
- **Hot Reload**: Automatic refresh for both frontend and backend changes