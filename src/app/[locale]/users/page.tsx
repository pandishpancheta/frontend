import { unstable_setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { API_URL } from '@/configs/api';

export type User = {
  id: string;
  username: string;
  avatar: string;
  contact: {
    email?: string; // facebook: string;
    phone?: string; // tiktok: string;
    instagram?: string;
  };
};

type UserData = {
  users: User[];
};

const getUsers = async () => {
  const response = await fetch(`${API_URL}/users/`, {
    next: {
      revalidate: 60,
    },
  });
  const users = (await response.json()) as UserData;
  return users.users;
};

const UsersPage = async ({
  params: { locale },
}: {
  params: {
    locale: string;
  };
}) => {
  unstable_setRequestLocale(locale);

  const users = await getUsers();

  return (
    <main className='flex h-full min-h-screen w-full flex-col items-center px-3 py-32'>
      <div className='grid w-full max-w-screen-2xl grid-cols-2 gap-4 px-3 sm:grid-cols-3 md:grid-cols-4 md:px-6 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
        {users?.map((user) => (
          <Link
            href={`/users/${user.username}`}
            key={user.username}
            className='flex flex-col items-center gap-4 rounded-b-[80rem] rounded-t-full border border-stroke bg-primary p-4 transition-colors hover:border-stroke-secondary'
          >
            <div className='flex aspect-square w-full items-center justify-center rounded-full bg-accent'>
              <p className='text-6xl font-semibold text-stroke-secondary'>
                {user.username?.at(0)}
              </p>
            </div>
            <p className='text-lg font-semibold'>@{user.username}</p>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default UsersPage;
