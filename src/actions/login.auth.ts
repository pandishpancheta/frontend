'use server';

import { unstable_noStore as noStore } from 'next/dist/server/web/spec-extension/unstable-no-store';
import { API_URL } from '@/configs/api';
import { loginSchema } from '@/schemas/login.schema';
import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';
import { setTokens } from '@/actions/common.auth';
import { AuthResponse, FormError } from '@/actions/auth.type';

const login = async (email: string, password: string): Promise<boolean> => {
  noStore();

  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (res.ok) {
    const { jwt } = (await res.json()) as AuthResponse;

    setTokens(jwt, 'refresh');
    return true;
  }

  throw new FormError('errors.invalid_credentials');
};

export const loginAction = async (prevState: unknown, formData: FormData) => {
  noStore();

  let logged = false;

  const validatedData = loginSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validatedData.success) {
    return {
      messages: validatedData.error.issues.map((issue) => issue.message),
    };
  }

  const { email, password } = validatedData.data;

  try {
    logged = await login(email, password);
    revalidateTag('user');
  } catch (err) {
    if (err instanceof FormError) {
      return {
        messages: [err.message],
      };
    }

    return {
      messages: ['errors.500'],
    };
  }

  if (logged) redirect('/');
};
