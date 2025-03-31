# Instrek Technologies - Corporate Website

A modern corporate website for Instrek Technologies featuring 3D visualizations and animations to showcase AI, IoT, and next-gen technology services.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [3D Visualizations](#3d-visualizations)
- [Form Functionality](#form-functionality)
- [Responsive Design](#responsive-design)
- [Deployment](#deployment)
- [Contact](#contact)

## Overview

This website was built for Instrek Technologies to showcase their expertise in AI, IoT, blockchain, and other cutting-edge technologies. The site features modern UI/UX with 3D animations of technologies, emphasizing the company's mission to make India AI-ready through strategic consulting, workforce training, and scalable tech solutions.

## Features

- **Modern UI/UX**: Clean, professional design with subtle animations and interactions
- **3D Visualizations**: Interactive Three.js-powered visualizations of IoT and technology concepts
- **Responsive Design**: Mobile-friendly layout that adapts to all screen sizes
- **Scrollspy Navigation**: Highlights the current section in the navigation menu
- **Form Handling**: Contact and newsletter subscription forms with validation
- **Service Showcases**: Detailed cards highlighting the company's technological capabilities
- **Case Studies**: Success stories showcasing the company's impact across industries

## Tech Stack

- **Frontend**:
  - React with TypeScript
  - Tailwind CSS for styling
  - Framer Motion for animations
  - Three.js for 3D visualizations
  - React Hook Form with Zod validation
  - TanStack Query for data fetching
  
- **Backend**:
  - Express.js server
  - In-memory storage (can be replaced with a PostgreSQL database)
  - Zod for schema validation

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd instrek-technologies
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5000
   ```

## Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/      # UI components
│   │   ├── hooks/           # Custom React hooks
│   │   ├── lib/             # Utility functions and types
│   │   ├── pages/           # Page components
│   │   ├── App.tsx          # Main application component
│   │   └── main.tsx         # Application entry point
│   └── index.html           # HTML template
├── server/
│   ├── index.ts             # Server entry point
│   ├── routes.ts            # API routes
│   ├── storage.ts           # Data storage interface
│   └── vite.ts              # Vite server configuration
├── shared/
│   └── schema.ts            # Shared data schemas
├── package.json             # Project dependencies
└── README.md                # Project documentation
```

## 3D Visualizations

The website features three types of 3D visualizations built with Three.js:

1. **Hero Visualization**: Interactive connected objects representing IoT devices
2. **Particles**: Background particle system for visual appeal
3. **Services Visualization**: Torus knot wireframe to represent complex systems

These visualizations are responsive and adapt to different screen sizes, with optimized performance for mobile devices.

## Form Functionality

### Contact Form

The contact form includes the following fields:
- Name
- Email
- Company (optional)
- Service of interest
- Message

All form inputs are validated using Zod schemas with helpful error messages.

### Newsletter Subscription

Users can subscribe to the newsletter by providing their email address, which is validated before submission.

## Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (320px and up)
- Tablets (768px and up)
- Desktops (1024px and up)
- Large screens (1440px and up)

The responsive design ensures that all content is accessible and visually appealing across all device sizes.

## Deployment

To deploy this project, follow these steps:

1. Build the application:
   ```
   npm run build
   ```

2. The built files will be in the `dist` directory.

3. Deploy these files to your hosting service of choice.

4. Ensure your server is configured to serve the static files and handle API routes.
