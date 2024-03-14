'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import DropdownButton from '@/components/navigation/dropdown-button';
import useDropdown from '@/hooks/useDropdown';
import {
  IconPlus,
  IconShoppingCart,
  IconUser,
  IconUserCircle,
} from '@tabler/icons-react';
import { PAGES, USER_PAGES } from '@/constants/pages';
import LinkComponent from '@/components/navigation/link-component';
import Link from 'next/link';

const UserNavigation = () => {
  const {
    dropdownOpen,
    dropdownMenuRef,
    dropdownButtonRef,
    setDropdownOpen,
    handleDropdownOpen,
  } = useDropdown();

  const t = useTranslations('navigation.profile');

  return (
    <>
      <DropdownButton
        ref={dropdownButtonRef}
        className='absolute right-16 top-1/2 flex translate-y-[-50%] items-center justify-center gap-4 rounded-lg px-3 py-3 ring-primary focus:ring-2'
        handleMobileOpen={handleDropdownOpen}
      >
        <Link href={'create'}>
          <IconPlus size={32} />
        </Link>
        <Link href={'cart'}>
          <IconShoppingCart size={32} />
        </Link>
        <div className='flex items-center justify-center gap-2'>
          <p className='hidden font-semibold sm:block'>@username</p>
          <IconUserCircle size={32} />
        </div>
      </DropdownButton>
      <div
        id='navbarCollapse'
        ref={dropdownMenuRef} // mobileMenuRef
        className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-primary py-3 shadow-lg ${
          dropdownOpen ? ' block' : ' hidden'
        }`}
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
