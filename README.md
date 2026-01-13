# Food Order App - Frontend

A modern React-based food ordering application frontend. This repository contains the **frontend implementation only**—the backend service (Node.js/Express) is provided separately.

## Overview

This is a responsive single-page application that enables users to:

- Browse available meals
- Manage shopping cart items
- Complete checkout process
- Submit food orders

## Tech Stack

| Technology       | Version           |
| ---------------- | ----------------- |
| React            | 19.0.0            |
| Vite             | 4.4.5             |
| JavaScript/JSX   | ES6+              |
| State Management | React Context API |

## Quick Start

### Prerequisites

- Node.js v14+
- npm

### Installation & Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will run on `http://localhost:5173`

**Note:** Ensure the backend service is running before starting the frontend.

## Project Structure

```
src/
├── components/          # React components
│   ├── Cart.jsx
│   ├── CartItem.jsx
│   ├── Checkout.jsx
│   ├── Header.jsx
│   ├── MealItem.jsx
│   ├── Meals.jsx
│   └── UI/              # Reusable UI components
├── hooks/
│   └── useHttp.js       # Custom HTTP hook
├── store/               # Context providers
│   ├── CartContext.jsx
│   └── UserProgressContext.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Features

- ✓ Browse meal catalog
- ✓ Add/remove items from cart
- ✓ Real-time cart quantity management
- ✓ Modal-based checkout form
- ✓ Global state management with Context API
- ✓ Error handling & user feedback
- ✓ Responsive design

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Architecture

### State Management

- **CartContext:** Manages cart items, quantities, and totals
- **UserProgressContext:** Tracks modal visibility and user navigation state

### Key Components

| Component  | Purpose                       |
| ---------- | ----------------------------- |
| `Header`   | Navigation with cart button   |
| `Meals`    | Meal catalog display          |
| `Cart`     | Cart items & checkout trigger |
| `Checkout` | Order form                    |
| `UI/*`     | Reusable UI building blocks   |

### Custom Hooks

- **`useHttp`:** Handles HTTP requests with loading/error states

## Backend Integration

This frontend communicates with a separate backend API. Ensure the backend is configured and running before starting development.

**Expected Backend Endpoints:**

- `GET /meals` — Fetch available meals
- `POST /orders` — Submit new orders

## Development

### Building for Production

```bash
npm run build
```

Output will be generated in the `dist/` directory.

**Questions?** Open an issue or contact me via email .
