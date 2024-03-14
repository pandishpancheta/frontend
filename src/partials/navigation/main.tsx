import { forwardRef } from 'react';
import { useTranslations } from 'next-intl';

import LinkComponent from '@/components/navigation/link-component';

import { PAGES } from '@/constants/pages';

type MainNavigationProps = {
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
};

const MainNavigation = forwardRef<HTMLDivElement, MainNavigationProps>(
  ({ mobileOpen, setMobileOpen }, ref) => {
    const t = useTranslations('navigation');

    return (
      <nav
        id='navbarCollapse'
        ref={ref} // mobileMenuRef
        className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-background py-3 shadow-lg lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:px-4 lg:py-0 lg:shadow-none xl:px-6${
          mobileOpen ? ' block' : ' hidden'
        }`}
      >
        <ul className='block lg:flex'>
          {PAGES.map((link) => (
            <li
              className='group relative'
              onClick={() => setMobileOpen(false)}
              key={link.title}
            >
              <LinkComponent href={link.href}>{t(link.title)}</LinkComponent>
            </li>
          ))}
        </ul>
      </nav>
    );
  },
);

MainNavigation.displayName = 'MainNavigation';

export default MainNavigation;
