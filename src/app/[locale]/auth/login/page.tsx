import { unstable_setRequestLocale } from 'next-intl/server';
import LoginForm from '@/partials/auth/loginForm';

const LoginPage = ({
  params: { locale },
}: {
  params: {
    locale: string;
  };
}) => {
  unstable_setRequestLocale(locale);

  return (
    <div className='flex h-screen min-h-full w-full items-center justify-center p-5'>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
