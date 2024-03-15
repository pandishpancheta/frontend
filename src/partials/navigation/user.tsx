'use client';

import DropdownButton from '@/components/navigation/dropdown-button';
import LinkComponent from '@/components/navigation/link-component';
import { USER_PAGES } from '@/constants/pages';
import useDropdown from '@/hooks/useDropdown';
import {
  IconPlus,
  IconShoppingCart,
  IconShoppingCartFilled,
  IconUserCircle,
} from '@tabler/icons-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import useSWR from 'swr';
import { fetcher } from '@/utils/fetcher';
import { useCart } from '@/context/cart.context';

const UserNavigation = () => {
  const {
    dropdownOpen,
    dropdownMenuRef,
    dropdownButtonRef,
    setDropdownOpen,
    handleDropdownOpen,
  } = useDropdown();
  const { items } = useCart();

  const t = useTranslations('navigation.profile');

  // const {
  //   data: user,
  //   error,
  //   isLoading,
  // }: {
  //   data:
  //     | {
  //         uuid: string;
  //         username: string;
  //       }
  //     | null
  //     | undefined;
  //   error: undefined;
  //   isLoading: boolean;
  // } = useSWR<{
  //   uuid: string;
  //   username: string;
  // } | null>('/me', fetcher);
  //
  // if (isLoading) return <p>Loading...</p>;
  // if (error) return <p>Error...</p>;
  // if (!user) return <p>No user...</p>;

  return (
    <>
      <div className='absolute right-16 top-1/2 flex translate-y-[-50%] items-center justify-center gap-4 rounded-lg px-3 py-3 ring-primary focus:ring-2'>
        <Link href={'/create'}>
          <IconPlus size={32} />
        </Link>
        <Link href={'/cart'}>
          {items?.length ? (
            <IconShoppingCartFilled size={32} />
          ) : (
            <IconShoppingCart size={32} />
          )}
        </Link>
        <DropdownButton
          ref={dropdownButtonRef}
          handleMobileOpen={handleDropdownOpen}
          className='flex items-center justify-center gap-2'
        >
          <p className='hidden font-semibold sm:block'>@username</p>
          <IconUserCircle size={32} />
        </DropdownButton>
      </div>
      <div
        id='navbarCollapse'
        ref={dropdownMenuRef} // mobileMenuRef
        className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-primary py-3 shadow-lg ${dropdownOpen ? ' block' : ' hidden'}`}
      >
        <ul className='flex flex-col gap-2'>
          {USER_PAGES.map((link) => (
            <li
              className='group relative'
              onClick={() => setDropdownOpen(false)}
              key={link.title}
            >
              <LinkComponent href={link.href}>{t(link.title)}</LinkComponent>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default UserNavigation;
