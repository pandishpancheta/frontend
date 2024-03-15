'use client';

import { useCart } from '@/context/cart.context';
import { IconShoppingCart } from '@tabler/icons-react';

const CartButton = ({ uuid }: { uuid: string }) => {
  const { addItem } = useCart();

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();

        addItem(uuid);
      }}
      className='absolute bottom-4 right-4 z-20 flex items-center justify-center rounded-lg border border-stroke-secondary bg-accent p-2'
    >
      <IconShoppingCart className='h-8 w-8' />
    </button>
  );
};

export default CartButton;
