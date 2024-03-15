'use client';

import { useEffect, useState } from 'react';

import MainNavigation from '@/partials/navigation/main';
import AuthNavigation from '@/partials/navigation/auth';
import UserNavigation from '@/partials/navigation/user';

import Logo from '@/components/navigation/logo';
import DropdownButton from '@/components/navigation/dropdown-button';

import { navbarClasses } from '@/constants/navigation/navbar-classes';
import useDropdown from '@/hooks/useDropdown';

const Index = () => {
  const [scrolled, setScrolled] = useState(false);

  const {
    dropdownOpen: mobileOpen,
    dropdownMenuRef: mobileMenuRef,
    dropdownButtonRef: mobileButtonRef,
    setDropdownOpen: setMobileOpen,
    handleDropdownOpen: handleMobileOpen,
  } = useDropdown();

  const auth = true;
  const classes = navbarClasses(scrolled);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={classes.join(' ')}>
      <div className='container'>
        <div className='relative mx-[-16px] flex items-center justify-between'>
          <Logo scrolled={scrolled} />
          <div className='flex w-full items-center justify-between px-4'>
            <div>
              <DropdownButton
                ref={mobileButtonRef}
                handleMobileOpen={handleMobileOpen}
              />
              <MainNavigation
                ref={mobileMenuRef}
                mobileOpen={mobileOpen}
                setMobileOpen={setMobileOpen}
              />
            </div>
            {auth ? <UserNavigation /> : <AuthNavigation />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Index;
