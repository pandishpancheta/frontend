import { unstable_setRequestLocale } from 'next-intl/server';
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTiktok,
} from '@tabler/icons-react';
import { API_URL } from '@/configs/api';
import { User } from '@/app/[locale]/users/page';
import Link from 'next/link';
import ImagesGrid from '@/partials/images-grid';
import { ImagesData } from '@/app/[locale]/page';

const getUser = async (username: string) => {
  const data = await fetch(`${API_URL}/users/usernames/${username}`, {
    next: {
      // revalidate: 60,
    },
    cache: 'no-cache',
  });
  return (await data.json()) as User;
};

const getUserImages = async (uuid: string) => {
  const res = await fetch(`${API_URL}/users/${uuid}/listings`, {
    next: {
      // revalidate: 60,
    },
    cache: 'no-cache',
  });

  if (!res.ok) {
    console.log('res', res.status);
    throw new Error('User not found');
  }

  const images = await res.json();

  console.log('img', images);

  return images?.listings || null;
};

const UserPage = async ({
  params: { locale, uuid },
}: {
  params: {
    locale: string;
    uuid: string;
  };
}) => {
  unstable_setRequestLocale(locale);

  let user = null;
  try {
    user = await getUser(uuid);
  } catch (error) {
    return (
      <main className='flex h-full min-h-screen w-full flex-col items-center px-3 py-32'>
        <p className='text-text-primary text-2xl font-semibold'>
          User not found
        </p>
      </main>
    );
  }

  let images = null;
  try {
    images = await getUserImages(user.id);
  } catch (error) {
    return (
      <main className='flex h-full min-h-screen w-full flex-col items-center px-3 py-32'>
        <p className='text-text-primary text-2xl font-semibold'>
          User not found
        </p>
      </main>
    );
  }

  return (
    <main className='flex h-full min-h-screen w-full flex-col items-center px-3 py-32'>
      <div className='relative mt-16 flex w-full max-w-screen-2xl flex-col items-center justify-center gap-4 rounded-xl border-2 border-stroke bg-primary px-3 pb-4 pt-20'>
        <div className='absolute -top-16 flex aspect-square h-32 w-32 items-center justify-center rounded-full border-2 border-stroke bg-primary'>
          <p className='text-6xl font-semibold text-stroke-secondary'>
            {user.username?.at(0)}
          </p>
        </div>
        <p className='text-lg font-semibold'>@{user.username}</p>
        <div className='flex gap-4 text-text-secondary'>
          {user.contact?.email && (
            <Link href={user.contact?.email}>
              <IconBrandFacebook size={32} />
            </Link>
          )}
          {user.contact?.phone && (
            <Link href={user.contact?.phone}>
              <IconBrandTiktok size={32} />
            </Link>
          )}
          {user.contact?.instagram && (
            <Link href={user.contact?.instagram}>
              <IconBrandInstagram size={32} />
            </Link>
          )}
        </div>
      </div>
      <ImagesGrid images={images} />
    </main>
  );
};

export default UserPage;
