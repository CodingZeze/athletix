import { z } from 'zod';

// Auth Validators
export const RegisterSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export const LoginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

// Dashboard Validators
export const DashboardSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
  layout: z.any().optional(),
  isPublic: z.boolean().optional(),
});

// Note Validators
export const NoteSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  content: z.string().min(1, 'Content is required'),
  tags: z.array(z.string()).optional(),
});

// Prediction Validators
export const PredictionSchema = z.object({
  gameId: z.string().min(1, 'Game ID is required'),
  prediction: z.string().min(1, 'Prediction is required'),
});

// Favorite Validators
export const FavoriteSchema = z.object({
  type: z.enum(['TEAM', 'PLAYER']),
  externalId: z.string().min(1, 'External ID is required'),
  name: z.string().min(1, 'Name is required'),
  imageUrl: z.string().optional(),
});
