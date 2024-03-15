'use server';

import { unstable_noStore as noStore } from 'next/dist/server/web/spec-extension/unstable-no-store';
import { API_URL } from '@/configs/api';
import { signupSchema } from '@/schemas/signup.schema';
import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';
import { AuthResponse, FormError } from '@/actions/auth.type';
import { setTokens } from '@/actions/common.auth';

const signup = async (
  email: string,
  username: string,
  password: string,
): Promise<boolean> => {
  noStore();

  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      username,
      password,
    }),
  });

  if (res.ok) {
    const { token, refresh } = (await res.json()) as AuthResponse;

    setTokens(token, refresh);
    return true;
  }

  throw new FormError('errors.invalid_credentials');
};

export const signupAction = async (prevState: unknown, formData: FormData) => {
  noStore();

  let successful = false;

  const validatedData = signupSchema.safeParse({
    email: formData.get('email'),
    username: formData.get('username'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword'),
  });

  if (!validatedData.success) {
    return {
      messages: validatedData.error.issues.map((issue) => issue.message),
    };
  }

  const { email, username, password } = validatedData.data;

  try {
    successful = await signup(email, username, password);
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

  if (successful) redirect('/');
};
