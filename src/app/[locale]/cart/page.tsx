'use client';

import { useCart } from '@/context/cart.context';
import Link from 'next/link';
import {
  IconGardenCartOff,
  IconShoppingCartOff,
  IconTrash,
} from '@tabler/icons-react';

const CartPage = ({
  params: { locale },
}: {
  params: {
    locale: string;
  };
}) => {
  const { items, removeItem } = useCart();

  console.log(items);

  return (
    <main className='flex h-full min-h-screen w-full flex-col gap-4 px-3 py-28 md:px-6'>
      <h1 className='text-4xl font-semibold'>Your Cart</h1>
      <ul className='flex flex-col gap-4'>
        {(items === null || items?.length === 0) && (
          <div className='flex flex-col gap-4 pt-20'>
            <IconShoppingCartOff size={64} className='mx-auto' />
            <p className='text-center text-2xl font-semibold'>
              Seems pretty empty here...
            </p>
            <Link
              href={'/'}
              className='mx-auto text-center text-text-secondary transition-all hover:text-text-important hover:underline'
            >
              Go find some amazing images here!
            </Link>
          </div>
        )}
        {items?.map((item) => (
          <li
            key={item}
            className='relative flex h-48 items-start gap-4 rounded-xl border border-stroke bg-primary p-4 transition-colors hover:border-stroke-secondary'
          >
            <img
              className='h-full min-h-32 max-w-[50%] rounded-xl border border-stroke bg-accent object-contain'
              src={'https://via.placeholder.com/100x100'}
              alt={item}
            />
            <div className='relative flex h-full flex-col gap-2'>
              <p className='pr-12 text-lg font-semibold md:text-2xl'>
                {item} bla bla bla
              </p>
              <Link
                href={`/users/${'username'}`}
                className='-mt-2 w-fit pr-12 text-sm font-semibold text-text-secondary transition-colors hover:text-text'
              >
                @username
              </Link>
              <p className='text-md h-full flex-shrink overflow-hidden text-ellipsis text-text-secondary'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </p>
            </div>
            <button
              className='absolute right-4 top-4 z-20 rounded-lg border border-stroke p-2 text-text-secondary transition-colors hover:border-stroke-secondary hover:text-text-important'
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                removeItem(item);
              }}
            >
              <IconTrash />
            </button>
            <Link
              href={`/images/${'uuid'}`}
              className='absolute inset-0 h-full w-full'
            />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default CartPage;
