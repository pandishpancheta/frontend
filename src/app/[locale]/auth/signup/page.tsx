import { unstable_setRequestLocale } from 'next-intl/server';

import SignupForm from '@/partials/auth/signupForm';

const SignupPage = ({
  params: { locale },
}: {
  params: {
    locale: string;
  };
}) => {
  unstable_setRequestLocale(locale);

  return (
    <div className='flex h-screen min-h-full w-full items-center justify-center p-5'>
      <SignupForm />
    </div>
  );
};

export default SignupPage;
