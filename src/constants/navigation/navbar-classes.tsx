/* eslint-disable indent */
export const navbarClasses = (scrolled: boolean) => [
  'header',
  'top-0',
  'left-0',
  'py-2',
  'flex',
  'w-full',
  'items-center',
  'transition',
  'fixed',
  'duration-500',
  ...(scrolled
    ? [
        'z-50',
        'bg-background',
        'bg-opacity-70',
        'shadow-sticky',
        'backdrop-blur-lg',
        'duration-500',
      ]
    : ['bg-transparent', 'z-50']),
];
