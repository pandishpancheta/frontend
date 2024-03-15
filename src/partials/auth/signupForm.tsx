'use client';

import { useTranslations } from 'next-intl';
import { useFormState } from 'react-dom';

import FormErrors from '@/components/forms/form-errors';
import Input from '@/components/forms/input';
import SubmitButton from '@/components/forms/submit-button';

import { signupAction } from '@/actions/signup.auth';
import PasswordInput from '@/components/forms/password.input';
import Link from 'next/link';

const initialState = {
  messages: [],
};

const LoginForm = () => {
  const [state, formAction] = useFormState(signupAction, initialState);
  const t = useTranslations('auth.signup');

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
      <Input
        id='username'
        placeholder={t('username')}
        type='text'
        name='username'
        icon='IconUser'
        autoComplete={'username'}
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
      <PasswordInput
        id='confirmPassword'
        placeholder={t('confirmPassword')}
        type='password'
        name='confirmPassword'
        icon='IconLock'
        required
      />
      <div className='flex items-center justify-between'>
        <Link className='ml-3' href='/auth/login'>
          {t('have_account')}
        </Link>
        <SubmitButton pendingContent={t('pending')}>{t('submit')}</SubmitButton>
      </div>
      <FormErrors errors={state?.messages} t={t} />
    </form>
  );
};

export default LoginForm;
