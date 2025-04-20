import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|icons|manifest.webmanifest|robots.txt|sitemap.xml|CNAME|fonts).*)'],
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only check the actual path (not the domain)
  const firstSegment = pathname.split('/')[1];

  // If the path starts with /fa or /en, continue without changing
  if (firstSegment === 'fa' || firstSegment === 'en') {
    return NextResponse.next();
  }

  // Detect language with more accurate header
  const acceptLanguage = request.headers.get('accept-language') || '';
  const preferredLanguage =
    acceptLanguage.toLowerCase().includes('fa') ? 'fa' : 'en';

  // Create a new path with the appropriate language
  const url = request.nextUrl.clone();
  url.pathname = `/${preferredLanguage}${pathname === '/' ? '' : pathname}`;

  return NextResponse.redirect(url);
}
