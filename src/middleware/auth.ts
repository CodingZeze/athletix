import { NextRequest, NextResponse } from 'next/server';
import { verifyToken, extractToken } from '@/lib/auth';

export interface AuthenticatedRequest extends NextRequest {
  user?: {
    userId: string;
    role: string;
  };
}

/**
 * Middleware to authenticate requests
 */
export function authenticate(handler: (req: AuthenticatedRequest) => Promise<NextResponse>) {
  return async (req: NextRequest) => {
    const token = extractToken(req.headers.get('authorization'));
    
    if (!token) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const payload = verifyToken(token);
    if (!payload) {
      return NextResponse.json(
        { success: false, error: 'Invalid token' },
        { status: 401 }
      );
    }

    const authReq = req as AuthenticatedRequest;
    authReq.user = payload;

    return handler(authReq);
  };
}

/**
 * Middleware to authorize admin role
 */
export function authorizeAdmin(handler: (req: AuthenticatedRequest) => Promise<NextResponse>) {
  return authenticate(async (req: AuthenticatedRequest) => {
    if (req.user?.role !== 'ADMIN') {
      return NextResponse.json(
        { success: false, error: 'Forbidden: Admin access required' },
        { status: 403 }
      );
    }
    return handler(req);
  });
}

/**
 * Middleware to authorize moderator or admin role
 */
export function authorizeModerator(handler: (req: AuthenticatedRequest) => Promise<NextResponse>) {
  return authenticate(async (req: AuthenticatedRequest) => {
    if (!['MODERATOR', 'ADMIN'].includes(req.user?.role || '')) {
      return NextResponse.json(
        { success: false, error: 'Forbidden: Moderator access required' },
        { status: 403 }
      );
    }
    return handler(req);
  });
}
