// Authentication Types
export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: UserData;
}

export interface UserData {
  id: string;
  name: string;
  email: string;
  role: 'USER' | 'MODERATOR' | 'ADMIN';
  avatar?: string;
  bio?: string;
}

// Dashboard Types
export interface Dashboard {
  id: string;
  title: string;
  description?: string;
  layout?: Record<string, any>;
  isPublic: boolean;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

// Favorite Types
export interface Favorite {
  id: string;
  userId: string;
  type: 'TEAM' | 'PLAYER';
  externalId: string;
  name: string;
  imageUrl?: string;
  createdAt: string;
}

// Prediction Types
export interface Prediction {
  id: string;
  userId: string;
  gameId: string;
  prediction: string;
  result?: 'CORRECT' | 'INCORRECT' | 'PENDING';
  createdAt: string;
  updatedAt: string;
}

// Note Types
export interface Note {
  id: string;
  userId: string;
  title: string;
  content: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

// Sports Data Types
export interface Team {
  id: string;
  name: string;
  abbreviation: string;
  logo?: string;
  wins: number;
  losses: number;
  conference?: string;
  division?: string;
}

export interface Player {
  id: string;
  name: string;
  team: string;
  position: string;
  number: number;
  image?: string;
  stats: Record<string, any>;
}

export interface Game {
  id: string;
  homeTeam: Team;
  awayTeam: Team;
  startTime: string;
  status: 'scheduled' | 'live' | 'finished';
  homeScore?: number;
  awayScore?: number;
  league: 'NBA' | 'NFL' | 'MLB' | 'NHL' | 'SOCCER';
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  total: number;
  page: number;
  pageSize: number;
}
