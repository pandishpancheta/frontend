import { unstable_setRequestLocale } from 'next-intl/server';
import { IconTrash } from '@tabler/icons-react';
import EditSocials from '@/app/[locale]/profile/socials';

const ProfilePage = ({
  params: { locale },
}: {
  params: {
    locale: string;
  };
}) => {
  unstable_setRequestLocale(locale);

  const user = {
    username: 'username',
    avatar: 'https://via.placeholder.com/150',
  };

  return (
    <main className='flex h-full min-h-screen w-full flex-col items-center px-3 py-32'>
      <div className='relative mt-16 flex w-full max-w-screen-2xl flex-col items-center justify-center gap-4 rounded-xl border-2 border-stroke bg-primary px-5 pb-4 pt-20'>
        <img
          src={user.avatar}
          alt={user.username}
          className='absolute -top-16 aspect-square h-32 w-32 rounded-full border-2 border-stroke bg-primary'
        />
        <p className='text-lg font-semibold'>@{user.username}</p>
        {/* button to save changes */}
        <EditSocials
          instagram={undefined}
          facebook={undefined}
          tiktok={undefined}
        />
      </div>
    </main>
  );
};

export default ProfilePage;
