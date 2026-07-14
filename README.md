# AthletiX - Professional Sports Analytics Platform

A full-stack web application for tracking live games, analyzing teams and players, and collaborating with teammates.

## Tech Stack

- **Frontend**: Next.js 14 + React 18 + TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT + Email/Password
- **Charts**: Recharts
- **Sports APIs**: NBA API, ESPN API, and more

## Features

### Authentication & Authorization
- User registration and login
- Secure password hashing with bcrypt
- JWT-based session management
- Role-based access control (USER, MODERATOR, ADMIN)

### User Features
- View live sports scores and upcoming games
- Track player and team statistics
- Save favorite teams and players
- Create and customize dashboards
- Make game predictions
- Create and manage notes
- Compare players and teams
- Share dashboards with collaborators

### Admin Features
- Manage all users
- View system analytics
- Moderate content and comments
- Suspend or promote users
- Manage API keys

## Project Structure

```
src/
├── components/        # React components
├── hooks/            # Custom React hooks
├── lib/              # Utility libraries (auth, prisma, etc.)
├── middleware/       # Express-like middleware
├── pages/            # Next.js pages
├── services/         # API and business logic services
├── styles/           # Global styles
├── types/            # TypeScript type definitions
└── utils/            # Helper functions
```

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL 13+
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/CodingZeze/athletix.git
cd athletix
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

4. Set up the database
```bash
npm run prisma:migrate
```

5. Start the development server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## API Documentation

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Users
- `GET /api/users/me` - Get current user
- `PATCH /api/users/me` - Update current user

### Dashboards
- `GET /api/dashboard` - Get user dashboards
- `POST /api/dashboard` - Create dashboard
- `PATCH /api/dashboard/:id` - Update dashboard
- `DELETE /api/dashboard/:id` - Delete dashboard

### Favorites
- `GET /api/favorites` - Get favorites
- `POST /api/favorites` - Add favorite
- `DELETE /api/favorites/:id` - Remove favorite

### Predictions
- `GET /api/predictions` - Get predictions
- `POST /api/predictions` - Create prediction
- `PATCH /api/predictions/:id` - Update prediction
- `DELETE /api/predictions/:id` - Delete prediction

### Notes
- `GET /api/notes` - Get notes
- `POST /api/notes` - Create note
- `PATCH /api/notes/:id` - Update note
- `DELETE /api/notes/:id` - Delete note

### Admin
- `GET /api/admin/users` - List all users
- `PATCH /api/admin/users/:id` - Update user role
- `DELETE /api/admin/users/:id` - Delete user
- `GET /api/admin/analytics` - Get system analytics

## Security Features

- Password hashing with bcrypt
- JWT token authentication
- Input validation with Zod
- SQL injection protection via Prisma
- XSS protection via React
- CORS configuration
- Environment variable protection
- Role-based access control

## Development

### Run Database Studio
```bash
npm run prisma:studio
```

### Generate Prisma Client
```bash
npm run prisma:generate
```

## License

MIT
