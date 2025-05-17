import { NextResponse, type NextRequest } from 'next/server';
import { type Locale } from '@/lib/i18n';

const locales: Locale[] = ['fa', 'en'];
const defaultLocale: Locale = 'en';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  console.log("middleware is active")

  // اگر مسیر خالی است، به مسیر پیش‌فرض ریدایرکت کن
  if (pathname === '/') {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }

  // Skip if the request is for static files or API
  if (
    /\.(.*)$/.test(pathname) ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/favicon') ||
    pathname.startsWith('/robots') ||
    pathname.startsWith('/sitemap')
  ) {
    return;
  }

  // Check if the pathname starts with any locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!pathnameHasLocale) {
    // Redirect to the default locale if no locale is present
    const newUrl = new URL(
      `/${defaultLocale}${pathname}`,
      request.url
    );
    return NextResponse.redirect(newUrl);
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt (SEO file)
     * - sitemap.xml (SEO file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
    '/',  // اضافه کردن مسیر اصلی به matcher
  ],
};
