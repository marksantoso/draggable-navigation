# Fillout - Draggable navigation

A dynamic form page builder built with Next.js that allows users to create, manage, and reorder form pages with a smooth drag-and-drop interface.

**Live Demo:** [https://draggable-navigation.vercel.app/](https://draggable-navigation.vercel.app/)

## Features

- Drag-and-drop page reordering using dnd-kit
- Add new pages between existing pages
- Context menu for page operations (rename, duplicate, delete)
- Active page highlighting and selection
- In-memory state management using Zustand

## Tech Stack

- [Next.js 15](https://nextjs.org/) - React framework
- [React 19](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [@dnd-kit](https://dndkit.com/) - Drag and drop functionality
- [Zustand](https://zustand-demo.pmnd.rs/) - State management
- [Lucide React](https://lucide.dev/) - Icons

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- Yarn or npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd fillout
```

2. Install dependencies:
```bash
yarn install
# or
npm install
```

3. Start the development server:
```bash
yarn dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

### Project Structure

```
fillout/
├── src/
│   ├── app/          # Next.js app router pages
│   ├── components/   # Reusable UI components
│   ├── config/       # Configuration files
│   ├── hooks/        # Custom React hooks
│   └── store/        # Zustand state management
├── public/           # Static assets
└── ...config files
```

### Available Scripts

- `yarn dev` - Starts development server with Turbopack
- `yarn build` - Creates production build
- `yarn start` - Runs production server
- `yarn lint` - Runs ESLint for code quality
