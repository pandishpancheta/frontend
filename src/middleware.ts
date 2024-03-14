import { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { locales } from '@/constants/locales';

const intl = createMiddleware({
  locales,
  defaultLocale: 'en',
});

export default function middleware(request: NextRequest) {
  return intl(request);
}

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
};
