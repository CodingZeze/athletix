import { NextResponse } from 'next/server';

export class AppError extends Error {
  constructor(
    public statusCode: number,
    message: string
  ) {
    super(message);
    this.name = 'AppError';
  }
}

export const NotFoundError = (resource: string) => 
  new AppError(404, `${resource} not found`);

export const UnauthorizedError = () => 
  new AppError(401, 'Unauthorized');

export const ForbiddenError = () => 
  new AppError(403, 'Forbidden');

export const BadRequestError = (message: string) => 
  new AppError(400, message);

export const handleError = (error: unknown) => {
  if (error instanceof AppError) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: error.statusCode }
    );
  }

  if (error instanceof Error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { success: false, error: 'Internal server error' },
    { status: 500 }
  );
};
