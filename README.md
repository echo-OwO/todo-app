# Todo App

A beautiful and modern todo application built with React, TypeScript, Vite, and Mantine UI.

## Features

- ✨ Clean and modern UI with Mantine components
- 📝 Add, complete, and delete todos
- 🔍 Filter todos by status (All, Active, Completed)
- 💾 Persistent storage using localStorage
- 📊 Real-time statistics (active and completed counts)
- 🎨 Beautiful design with smooth interactions

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Build

To build the app for production:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool and dev server
- **Mantine UI** - Beautiful component library
- **Tabler Icons** - Icon set
- **Local Storage API** - Data persistence

## Project Structure

```
todo-app/
├── src/
│   ├── components/
│   │   ├── AddTodo.tsx      # Input form for new todos
│   │   ├── TodoItem.tsx     # Individual todo item component
│   │   └── TodoList.tsx     # List container with filtering
│   ├── types/
│   │   └── todo.ts          # TypeScript type definitions
│   ├── utils/
│   │   └── localStorage.ts  # Local storage utilities
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # App entry point
│   └── vite-env.d.ts        # Vite type definitions
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## License

MIT

