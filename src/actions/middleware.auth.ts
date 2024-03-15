import { jwtDecode } from 'jwt-decode';
import { NextResponse } from 'next/server';
import { ResponseCookies } from 'next/dist/compiled/@edge-runtime/cookies';
import { unstable_noStore as noStore } from 'next/dist/server/web/spec-extension/unstable-no-store';

import { getTokens, refreshTokensAndReturnAccess } from '@/actions/common.auth';

import { API_URL } from '@/configs/api';

export const refreshTokensMiddleware = async (cookieStore: ResponseCookies) => {
  const newToken = await refreshTokensAndReturnAccess();
  const newTokenExpiry = jwtDecode(newToken).exp;

  cookieStore.set('access_token', newToken, {
    expires: newTokenExpiry ? newTokenExpiry * 1000 : undefined,
  });
};

const deleteTokensMiddleware = (cookieStore: ResponseCookies) => {
  cookieStore.delete('access_token');
  cookieStore.delete('refresh_token');
};

export async function logout(response: NextResponse) {
  noStore();

  const { accessToken, refreshToken } = getTokens();

  if (!refreshToken || !accessToken) {
    deleteTokensMiddleware(response.cookies);
    return;
  }

  const res = await fetch(`${API_URL}/auth/logout`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${refreshToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      accessToken,
      refreshToken,
    }),
  });

  if (res.status === 200 || res.status === 201 || res.status === 401) {
    deleteTokensMiddleware(response.cookies);
  }
}
