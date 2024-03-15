/* eslint-disable indent */
'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const CartContext = createContext<{
  items: string[] | null;
  addItem: (item: string) => void;
  removeItem: (item: string) => void;
}>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<string[] | null>(null);
  const router = useRouter();

  const checkIfItemExists = (item: string) => {
    if (items) {
      return items.includes(item);
    }
    return false;
  };

  const addItem = (item: string) => {
    if (checkIfItemExists(item)) {
      return toast('Item already in cart', {
        type: 'warning',
        onClick: () => {
          void router.push('/cart');
        },
      });
    }

    setItems((prev) => (prev ? [...prev, item] : [item]));
    toast('Item added to cart', {
      type: 'success',
      onClick: () => {
        void router.push('/cart');
      },
    });
  };

  const removeItem = (item: string) => {
    if (!checkIfItemExists(item)) {
      return toast('Item not in cart', {
        type: 'error',
      });
    }

    setItems((prev) => (prev ? prev.filter((i) => i !== item) : []));
    toast('Item removed from cart', {
      type: 'success',
    });
  };

  useEffect(() => {
    if (!items) {
      return;
    }
    // Save the items to local storage
    localStorage.setItem('cartItems', JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    // Load the items from local storage
    const savedItems = localStorage.getItem('cartItems');
    if (savedItems) {
      setItems(JSON.parse(savedItems) as string[]);
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

export const useCart = () => {
  const { items, addItem, removeItem } = useContext(CartContext);

  return {
    items,
    addItem,
    removeItem,
  };
};
