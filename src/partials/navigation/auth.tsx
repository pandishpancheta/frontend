import LinkComponent from '@/components/navigation/link-component';
import Link from 'next/link';
import { IconLock } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';

const AuthNavigation = () => {
  const t = useTranslations('navigation');

  return (
    <div className='flex hidden justify-end gap-6 pr-16 sm:flex lg:pr-0'>
      <LinkComponent href='/auth/signup'>{t('signup')}</LinkComponent>
      <Link
        href='/auth/login'
        className='border-white text-white flex items-center justify-center rounded-md border-2 px-6 py-3 text-base font-semibold transition duration-300 ease-in-out hover:border-primary hover:bg-primary lg:px-4 xl:px-6'
      >
        {t('login')}
        <span className='pl-2'>
          <IconLock size={24} />
        </span>
      </Link>
    </div>
  );
};

export default AuthNavigation;
