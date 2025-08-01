# 🐱 Cat Voting App

A modern React application for voting on adorable cat photos from TheCatAPI. Built with TypeScript, React Query, Zustand, and Tailwind CSS for optimal performance and user experience.

## ✨ Key Features

- **📸 Photo Gallery**: Browse random cat photos with masonry layout
- **👍👎 Voting System**: Vote up/down with optimistic updates
- **📊 Voting History**: Track your votes with persistent storage
- **🌙 Dark Mode**: Auto system-aware light/dark theme switching
- **⚡ Performance Optimized**: Lazy loading images, memoization, debouncing
- **🛡️ Error Handling**: Error boundaries and user-friendly error messages
- **📱 Responsive**: Mobile-first design with smooth animations

## 🏗️ Project Architecture

### Folder Structure
```
src/
├── components/ui/          # Reusable UI components
│   ├── DarkModeToggle.tsx  # Toggle dark/light mode
│   ├── ErrorBoundary.tsx   # Global error handling
│   ├── LoadingSpinner.tsx  # Loading indicator
│   ├── MasonryGrid.tsx     # Masonry layout grid
│   └── Toast.tsx           # Toast notifications
├── configs/                # App configuration
│   └── env.config.ts       # Environment variables
├── constants/              # App constants
│   ├── local-storage.ts    # Local storage keys
│   └── query-keys.ts       # React Query keys
├── hooks/                  # Custom React hooks
│   ├── useDarkMode.ts      # Dark mode management hook
│   ├── useDebounce.ts      # Debounce hook
│   ├── useLazyImage.ts     # Lazy image loading hook
│   └── useToast.ts         # Toast display hook
├── layouts/                # Layout components
│   ├── MainLayout.tsx      # Main app layout
│   ├── Header.tsx          # Header with logo
│   ├── Navigation.tsx      # Tab navigation
│   └── Footer.tsx          # App footer
├── modules/                # Feature modules
│   └── Home/
│       ├── gallery/        # Gallery feature module
│       │   ├── Gallery.tsx
│       │   ├── CatImageCard.tsx
│       │   └── MasonryCatImageCard.tsx
│       ├── my-votes/       # Vote history module
│       │   ├── MyVotes.tsx
│       │   └── VotedImageCard.tsx
│       └── voting/         # Voting module
│           └── VotingButton.tsx
├── pages/                  # Page components
│   └── HomePage.tsx        # Main page
├── providers/              # React providers
│   ├── QueryClientProvider.tsx
│   └── index.tsx
├── queries/                # React Query hooks
│   ├── useImages.ts        # Images fetch hook
│   └── useVotes.ts         # Vote operations hook
├── services/               # API services
│   └── catApi.ts           # TheCatAPI client
├── store/                  # State management
│   └── uiStore.ts          # Zustand store for UI state
├── types/                  # TypeScript types
│   └── cat.types.ts        # Cat data types
└── utils/                  # Utility functions
    ├── error-handler.ts    # Error handling
    ├── performance.ts      # Performance utilities
    └── subId.ts            # User ID generation
```

### Tech Stack

**Core:**
- **React 18** - Latest React with concurrent features
- **TypeScript** - Type safety and developer experience
- **Vite** - Fast build tool with HMR

**State Management:**
- **TanStack Query** - Server state management with intelligent caching
- **Zustand** - Lightweight client state management

**Styling:**
- **Tailwind CSS** - Utility-first CSS framework
- **Headless UI** - Accessible UI components

**Performance:**
- **React.memo** - Memoization to prevent unnecessary re-renders
- **Lazy Loading** - Lazy load images with Intersection Observer
- **Debouncing** - Reduce unnecessary API calls
- **Query Caching** - Intelligent data caching

**Developer Tools:**
- **ESLint + Prettier** - Code quality and formatting
- **Vitest** - Unit testing framework
- **React Query Devtools** - Debug React Query

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- API key from [TheCatAPI](https://thecatapi.com) (free)

### Installation

1. **Clone and install dependencies**
   ```bash
   git clone <repo-url>
   cd cat-voting-fe-challenge
   npm install
   ```

2. **Environment setup**
   Create `.env` file:
   ```env
   VITE_CAT_API_KEY=your_api_key_here
   VITE_CAT_API_BASE_URL=https://api.thecatapi.com/v1
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   Navigate to [http://localhost:5173](http://localhost:5173)

## 🎯 Detailed Features

### 📸 Gallery (Photo Library)
- Display random cat photos from TheCatAPI
- Responsive masonry grid layout
- Lazy loading images for performance optimization
- Loading states and error handling

### 👍👎 Voting System
- Vote up/down for each image
- Optimistic updates for smooth UX
- Debouncing to prevent double-clicks
- Store votes with persistent storage

### 📊 My Votes (Voting History)
- Display all voted images
- Sort by voting time
- Show vote type (up/down)
- Empty state when no votes

### 🌙 Dark Mode
- Auto-detect system preference
- Manual toggle with persistence
- Smooth transitions
- All components support both themes

## 🔧 Available Scripts

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production  
npm run preview      # Preview production build
```

### Code Quality & Testing
```bash
npm run lint         # Run ESLint code quality checks
npm run test         # Run unit tests
```

## 🧪 Testing & Quality Assurance

### Implemented Testing Features
- **Unit Tests**: Comprehensive test coverage using Vitest
- **Testing Library**: React Testing Library for component testing
- **Code Quality**: ESLint + Prettier for consistent code style

### Test Structure
```
src/
├── modules/Home/voting/__tests__/  # Voting component tests
├── services/__tests__/             # API service tests
├── utils/__tests__/                # Utility function tests
└── test/setup.ts                   # Test configuration
```

### Testing Scripts
```bash
npm run test              # Run all tests
npm run lint              # Run ESLint code quality checks
```

## ⚙️ Implementation Details

### Core Technologies Implemented
- **React 18** with TypeScript for type safety
- **Vite** for fast development and building
- **TanStack Query (React Query)** for server state management
- **Zustand** for lightweight client state management
- **Tailwind CSS** for utility-first styling
- **Headless UI** for accessible components

### Performance Features
- **Lazy Image Loading** with Intersection Observer API
- **Debouncing** for API calls and user interactions
- **React.memo** optimization for preventing re-renders
- **Query Caching** with intelligent stale time strategies
- **Optimistic Updates** for smooth user experience

### API Integration
- **Custom API Client** for TheCatAPI integration
- **Error Handling** with retry logic and user feedback
- **Environment Configuration** for API keys and endpoints

### Storage & Persistence
- **Local Storage** for user preferences and vote history
- **Unique User ID** generation and persistence
- **Dark Mode** preference persistence

### UI/UX Features
- **Masonry Grid Layout** for responsive photo gallery
- **Toast Notifications** for user feedback
- **Loading States** and error boundaries
- **Dark/Light Mode** with system preference detection

## 🚀 Deployment

Detailed deployment instructions available in [DEPLOYMENT.md](DEPLOYMENT.md)

### Supported Platforms:
- **Netlify** (Recommended)
- **Vercel**
- **GitHub Pages**

### Environment variables for production:
```env
VITE_CAT_API_KEY=your_production_api_key
VITE_CAT_API_BASE_URL=https://api.thecatapi.com/v1
```

## 📈 Performance Optimizations

### React Query Features
- Smart caching with stale time
- Automatic retries for failed requests
- Optimistic updates for voting
- Background refetching

### Component Optimizations
- `React.memo` to prevent unnecessary re-renders
- `useMemo` for expensive computations
- `useCallback` for stable references
- Lazy image loading with Intersection Observer

### Custom Hooks
```typescript
// Debounce hook
const debouncedValue = useDebounce(value, 300);

// Lazy image loading
const { imgRef, src, isLoaded } = useLazyImage(imageUrl);

// Dark mode
const { isDark, toggle } = useDarkMode();
```

## 💾 Data Management

### Local Storage
- User sub_id (unique identifier)
- Dark mode preference
- Cached vote data

### API Integration
```typescript
// Fetch random images
const { data: images, isLoading } = useImages();

// Create vote
const createVoteMutation = useCreateVote();

// Get user votes
const { data: userVotes } = useUserVotes();
```

## 🛡️ Error Handling

- Global error boundary
- API error handling with retry logic
- User-friendly error messages
- Toast notifications for feedback

## 🔧 Troubleshooting

#### Performance Issues

**Issue**: Application experiences slight stuttering when loading images or voting continuously

**Solution**:
- Optimize loading by using skeleton UI instead of spinner
- Debounce vote button or disable quickly before sending request

**Prevention**: Always simulate slow network speed when testing (Chrome DevTools → Network → Slow 3G)

---

**Built with ❤️ and modern React patterns** 🐾