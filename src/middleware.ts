import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|icons|manifest.webmanifest|robots.txt|sitemap.xml|CNAME|fonts).*)'],
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  //If the path starts with /fa or /en, we return the path unchanged.
  const localePattern = /^\/(fa|en)(\/|$)/;
  if (localePattern.test(pathname)) {
    return NextResponse.next();
  }
  console.log('pathname',pathname);
  console.log('localePattern',localePattern.test(pathname));
  
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