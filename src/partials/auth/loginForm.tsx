'use client';

import { useFormState } from 'react-dom';
import { useTranslations } from 'next-intl';

import Input from '@/components/forms/input';
import FormErrors from '@/components/forms/form-errors';
import SubmitButton from '@/components/forms/submit-button';

import { loginAction } from '@/actions/login.auth';
import React from 'react';
import Link from 'next/link';
import PasswordInput from '@/components/forms/password.input';

const initialState = {
  messages: [],
};

const LoginForm = () => {
  const [state, formAction] = useFormState(loginAction, initialState);
  const t = useTranslations('auth.login');

  return (
    <form
      action={formAction}
      className='flex w-full flex-col gap-4 rounded-xl border border-stroke bg-primary p-6 font-semibold sm:w-fit'
    >
      <h3 className='text-2xl font-extrabold'>{t('title')}</h3>
      <Input
        id='email'
        placeholder={t('email')}
        type='email'
        name='email'
        icon='IconUser'
        autoComplete={'email'}
        required
      />
      <PasswordInput
        id='password'
        placeholder={t('password')}
        type='password'
        name='password'
        icon='IconLock'
        required
      />
      <div className='flex items-center justify-between'>
        <Link className='ml-3' href='/auth/signup'>
          {t('no_account')}
        </Link>
        <SubmitButton pendingContent={t('pending')}>{t('submit')}</SubmitButton>
      </div>
      <FormErrors errors={state?.messages} t={t} />
    </form>
  );
};

export default LoginForm;
