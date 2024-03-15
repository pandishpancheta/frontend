import { unstable_setRequestLocale } from 'next-intl/server';
import { IconSearch } from '@tabler/icons-react';
import ImagesGrid from '@/partials/images-grid';

const SearchPage = ({
  params: { locale },
  searchParams: { search },
}: {
  params: {
    locale: string;
  };
  searchParams: {
    search?: string;
  };
}) => {
  unstable_setRequestLocale(locale);

  return (
    <main
      className={`flex h-full min-h-screen w-full flex-col items-center justify-center px-3 py-24 ${
        search ? ' !justify-start' : ''
      }
        `}
    >
      <form className='sticky top-20 z-10 h-fit w-full sm:w-fit'>
        <input
          id={'search'}
          name={'search'}
          className='w-full min-w-96 max-w-screen-xl rounded-xl border-2 border-stroke bg-background px-8 py-4 pr-16 text-2xl font-semibold transition-colors hover:border-stroke-secondary sm:w-screen sm:max-w-xl md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg'
          type='text'
          placeholder={'Search an image...'}
          value={search}
        />
        <IconSearch className='absolute right-4 top-4 h-8 w-8' />
      </form>
      <div className='w-full sm:w-screen sm:max-w-xl md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg'>
        {search && <ImagesGrid />}
      </div>
    </main>
  );
};

export default SearchPage;
