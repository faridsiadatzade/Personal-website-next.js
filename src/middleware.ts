import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|icons|manifest.webmanifest|robots.txt|sitemap.xml|CNAME|fonts).*)'],
};

export function middleware(request: NextRequest) {
  // استخراج مسیر درخواست
  const { pathname } = request.nextUrl;
  
  // اگر مسیر با /fa یا /en شروع شود، مسیر را بدون تغییر برمی‌گردانیم
  if (/^\/fa($|\/)/.test(pathname) || /^\/en($|\/)/.test(pathname)) {
    return NextResponse.next();
  }
  
  // زبان پیش‌فرض کاربر را از هدر Accept-Language استخراج می‌کنیم
  const acceptLanguage = request.headers.get('accept-language') || '';
  const preferredLanguage = acceptLanguage.includes('fa') || acceptLanguage.includes('fa-IR') ? 'fa' : 'en';
  
  // هدایت به مسیر با پیش‌وند زبان
  const url = request.nextUrl.clone();
  url.pathname = `/${preferredLanguage}${pathname === '/' ? 'en' : pathname}`;
  
  return NextResponse.redirect(url);
} 