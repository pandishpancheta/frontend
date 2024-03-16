'use server';

import { jwtDecode } from 'jwt-decode';
import { cookies } from 'next/headers';
import { unstable_noStore as noStore } from 'next/cache';

import { API_URL } from '@/configs/api';

import { HTTPUnauthorizedException } from '@/errors/HTTPExceptions';

export const refreshTokensAndReturnAccess = async () => {
  noStore();

  const cookieStore = cookies();
  const refreshToken = cookieStore.get('refresh_token');

  if (!refreshToken) {
    throw new Error('No refresh token found');
  }

  const response = await fetch(`${API_URL}/auth/refresh`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: refreshToken.value,
    }),
  });

  if (response.status !== 200) {
    if (response.status === 401) {
      throw new HTTPUnauthorizedException();
    }

    throw new Error('Failed to refresh tokens');
  }

  const data = (await response.json()) as {
    access_token: string;
  };

  return data.access_token;
};

export const isAuth = async (
  rendering: 'client' | 'ssr',
): Promise<string | false> => {
  noStore();

  const cookieStore = cookies();
  const accessToken = cookieStore.get('access_token');

  if (!accessToken) {
    try {
      const new_access = await refreshTokensAndReturnAccess();

      if (rendering === 'client') {
        setTokens(new_access);
      }

      return new_access;
    } catch (err) {
      return false;
    }
  }

  return accessToken.value;
};

export const getAuth = async (
  rendering: 'client' | 'ssr',
): Promise<string | null> => {
  noStore();

  const auth = await isAuth(rendering);

  if (!auth) {
    return null;
  }

  return `Bearer ${auth}`;
};

export const setTokens = (
  accessToken: string,
  refreshToken?: string | null,
) => {
  noStore();

  const cookieStore = cookies();

  const accessExpiry = jwtDecode(accessToken).exp;
  cookieStore.set('access_token', accessToken, {
    expires: accessExpiry ? accessExpiry * 1000 : undefined,
  });

  if (!refreshToken) return;

  const refreshExpiry =
    refreshToken === 'refresh' ? 999999999999 : jwtDecode(refreshToken).exp;
  cookieStore.set('refresh_token', refreshToken, {
    expires: refreshExpiry ? refreshExpiry * 1000 : undefined,
  });
};

export const getTokens = () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('access_token');
  const refreshToken = cookieStore.get('refresh_token');

  return {
    accessToken: accessToken?.value ?? undefined,
    refreshToken: refreshToken?.value ?? undefined,
  };
};
