import { unstable_setRequestLocale } from 'next-intl/server';
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTiktok,
} from '@tabler/icons-react';

const UserPage = ({
  params: { locale, uuid },
}: {
  params: {
    locale: string;
    uuid: string;
  };
}) => {
  unstable_setRequestLocale(locale);

  const user = {
    uuid,
    username: `user${uuid}`,
    avatar: 'https://via.placeholder.com/150',
  };

  return (
    <main className='flex h-full min-h-screen w-full flex-col items-center px-3 py-32'>
      <div className='relative mt-16 flex w-full max-w-screen-2xl flex-col items-center justify-center gap-4 rounded-xl border-2 border-stroke bg-primary px-3 pb-4 pt-20'>
        <img
          src={user.avatar}
          alt={user.username}
          className='absolute -top-16 aspect-square h-32 w-32 rounded-full border-2 border-stroke bg-primary'
        />
        <p className='text-lg font-semibold'>@{user.username}</p>
        <div className='flex gap-4 text-text-secondary'>
          <IconBrandFacebook size={32} />
          <IconBrandInstagram size={32} />
          <IconBrandTiktok size={32} />
        </div>
      </div>
    </main>
  );
};

export default UserPage;
