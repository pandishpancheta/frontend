import { unstable_setRequestLocale } from 'next-intl/server';
import Link from 'next/link';

const UsersPage = ({
  params: { locale },
}: {
  params: {
    locale: string;
  };
}) => {
  unstable_setRequestLocale(locale);

  const users = [
    {
      uuid: '1',
      username: 'user1',
      avatar: 'https://via.placeholder.com/150',
    },
    {
      uuid: '2',
      username: 'user2',
      avatar: 'https://via.placeholder.com/150',
    },
    {
      uuid: '3',
      username: 'user3',
      avatar: 'https://via.placeholder.com/150',
    },
    {
      uuid: '4',
      username: 'user4',
      avatar: 'https://via.placeholder.com/150',
    },
    {
      uuid: '5',
      username: 'user5',
      avatar: 'https://via.placeholder.com/150',
    },
    {
      uuid: '6',
      username: 'user6',
      avatar: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <main className='flex h-full min-h-screen w-full flex-col items-center px-3 py-32'>
      <div className='grid w-full max-w-screen-2xl grid-cols-2 gap-4 px-3 sm:grid-cols-3 md:grid-cols-4 md:px-6 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
        {users.map((user) => (
          <Link
            href={`/users/${user.uuid}`}
            key={user.uuid}
            className='flex flex-col items-center gap-4 rounded-b-[80rem] rounded-t-full border border-stroke bg-primary p-4 transition-colors hover:border-stroke-secondary'
          >
            <img
              src={user.avatar}
              alt={user.username}
              className='aspect-square w-full rounded-full invert'
            />
            <p className='text-lg font-semibold'>@{user.username}</p>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default UsersPage;
