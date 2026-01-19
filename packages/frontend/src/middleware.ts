import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Obtener el token de las cookies
  const token = request.cookies.get('auth-token')?.value;
  
  // Si no hay token, redirigir al home
  if (!token) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  
  // Si hay token, permitir acceso
  return NextResponse.next();
}

// Configurar qué rutas proteger
export const config = {
  matcher: [
    '/dashboard/:path*',
  ],
};
