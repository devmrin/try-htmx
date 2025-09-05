# Modern HTMX Todo App with Vite

A modernized version of the HTMX todo application, now powered by Vite for fast development and modern tooling.

## Features

- ⚡ **Vite** - Lightning fast development server
- 🎯 **HTMX** - Dynamic HTML without complex JavaScript frameworks
- 🗄️ **SQLite** - Lightweight database for persistence
- 🎨 **Pico CSS** - Beautiful, minimal styling
- 🔄 **Hot Module Replacement** - Instant updates during development

## Project Structure

```
try-htmx/
├── index.html          # Main HTML entry point
├── vite.config.js      # Vite configuration
├── package.json        # Dependencies and scripts
├── src/
│   ├── main.js         # Client-side JavaScript
│   └── style.css       # Custom styles
└── server/
    ├── index.js        # Express backend server
    └── database.js     # SQLite database setup
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run server` - Run Express server only (for debugging)

## How It Works

1. **Vite** serves the frontend on port 3000
2. **Express** backend runs on port 3001
3. **HTMX** handles dynamic updates without page refreshes
4. **SQLite** persists todo data locally

## API Endpoints

- `POST /api/add` - Add a new todo
- `GET /api/todos` - Get all todos
- `DELETE /api/todos/:id` - Delete a todo

## Modern Improvements

- ✅ ES6 modules throughout
- ✅ Modern JavaScript syntax
- ✅ Vite's fast HMR
- ✅ Better project structure
- ✅ CORS handling for development
- ✅ Modern build pipeline
- ✅ TypeScript-ready (can be added easily)

## Development

The app uses Vite's proxy feature to forward `/api/*` requests to the Express server, allowing seamless development with both frontend and backend running simultaneously.
