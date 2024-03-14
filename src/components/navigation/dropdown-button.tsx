import { forwardRef, ReactNode } from 'react';
import { IconMenu2 } from '@tabler/icons-react';

type MobileButtonProps = {
  className?: string;
  children?: ReactNode;
  handleMobileOpen: () => void;
};

const DropdownButton = forwardRef<HTMLButtonElement, MobileButtonProps>(
  ({ className, children, handleMobileOpen }, ref) => (
    <button
      onClick={handleMobileOpen}
      id='navbarToggler'
      name='navbarToggler'
      ref={ref}
      className={
        className
          ? className
          : 'absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-3 ring-primary focus:ring-2 lg:hidden'
      }
    >
      {children ? children : <IconMenu2 size={32} />}
    </button>
  ),
);

DropdownButton.displayName = 'MobileButton';
export default DropdownButton;
