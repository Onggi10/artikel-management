// File: /middleware.ts
import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value

  const pathname = req.nextUrl.pathname

  // Akses tanpa login yang diizinkan
  const publicPaths = ['/auth/login', '/auth/register']

  // Jika belum login, redirect ke login
  if (!token && !publicPaths.includes(pathname)) {
    return NextResponse.redirect(new URL('/auth/login', req.url))
  }

  // Jika sudah login, bisa tambahkan logika pengecekan role dari token / cookie
  // Misalnya, kamu simpan role di cookie `role`
  const role = req.cookies.get('role')?.value

  // Admin only routes
  if (pathname.startsWith('/admin')) {
    if (role !== 'admin') {
      return NextResponse.redirect(new URL('/articles', req.url))
    }
  }

  // User only routes
  if (pathname.startsWith('/articles') && role === 'admin') {
    // Misalnya admin tidak boleh akses halaman user
    return NextResponse.redirect(new URL('/admin/articles', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
