import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|icons|manifest.webmanifest|robots.txt|sitemap.xml|CNAME|fonts).*)'],
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  //If the path starts with /fa or /en, we return the path unchanged.
  const pathLocale = pathname.split('/')[1];
  if (pathLocale === 'fa' || pathLocale === 'en') {
    return NextResponse.next();
  }
  // if (/^\/fa($|\/)/.test(pathname) || /^\/en($|\/)/.test(pathname)) {
  //   return NextResponse.next();
  // }

  //Get the user's preferred language from the Accept-Language header.
  const acceptLanguage = request.headers.get('accept-language') || '';
  const preferredLanguage = acceptLanguage.includes('fa') || acceptLanguage.includes('fa-IR') ? 'fa' : 'en';

  //Redirect to the path with the preferred language prefix.
  const url = request.nextUrl.clone();
  url.pathname = `/${preferredLanguage}${pathname === '/' ? '' : pathname}`;
  
  return NextResponse.redirect(url);
} 