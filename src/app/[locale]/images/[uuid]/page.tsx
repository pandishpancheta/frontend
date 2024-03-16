"use client";
import CartButton from '@/components/cart-button';
import ShareButton from '@/components/share-button';
import { API_URL } from '@/configs/api';
import { unstable_setRequestLocale } from 'next-intl/server';
import { useEffect, useState } from 'react';

const ImagePage = ({
  params: { locale, uuid },
}: {
  params: {
    locale: string;
    uuid: string;
  };
}) => {
  // unstable_setRequestLocale(locale);

  const [listing, setListing] = useState<any>({});

  useEffect(() => {
    const fetchListing = async () => {
      const res = await fetch(
        `${API_URL}/listings/${uuid}`
      );
      const data = await res.json();
      setListing(data);
    };

    fetchListing();
  }, []);

  return (
    <main className='flex h-full min-h-screen w-full flex-col items-center px-3 py-24'>
      <div className='flex w-full max-w-screen-lg flex-col gap-4'>
        <div className='relative h-auto w-full'>
          <ShareButton />
          <img
            src={'https://emerald-efficient-caterpillar-983.mypinata.cloud/ipfs/' + listing?.uri}
            alt={'bla'}
            className='h-auto w-full rounded-xl border-2 border-stroke'
          />
          <div className='absolute bottom-4 left-4 flex flex-wrap'>
            {listing?.tag_names?.map((tag: string) => (
              <span
                key={tag}
                className='mr-2 rounded-full border border-stroke-secondary bg-stroke px-2 py-1 text-sm text-text'
              >
                {tag}
              </span>
            ))}
          </div>
          <CartButton uuid={uuid} />
        </div>
        <div className='flex flex-col gap-4 rounded-xl border-2 border-stroke bg-primary p-4'>
          <p className='whitespace-pre-wrap text-justify text-lg'>
            {listing?.description || 'No description'}
          </p>
          <div className='flex rounded-lg border-2 border-stroke px-4 py-2 font-semibold'>
            @{listing?.username}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ImagePage;
