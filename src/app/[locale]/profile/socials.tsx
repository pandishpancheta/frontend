'use client';

import Input from '@/components/forms/input';
import { useEffect, useState } from 'react';
import { IconDeviceFloppy, IconTrash } from '@tabler/icons-react';
import { useAutoAnimate } from '@formkit/auto-animate/react';

const EditSocials = ({
  instagram,
  facebook,
  tiktok,
}: {
  instagram?: string;
  facebook?: string;
  tiktok?: string;
}) => {
  const [changed, setChanged] = useState(false);
  const [socials, setSocials] = useState({
    instagram,
    facebook,
    tiktok,
  });

  const [parent] = useAutoAnimate({
    duration: 500,
  });

  useEffect(() => {
    let res =
      socials.instagram !== instagram ||
      socials.facebook !== facebook ||
      socials.tiktok !== tiktok;

    if (res) {
      if (socials.instagram === '' && instagram === undefined) {
        res = false;
      } else if (socials.facebook === '' && facebook === undefined) {
        res = false;
      } else if (socials.tiktok === '' && tiktok === undefined) {
        res = false;
      }
    }

    setChanged(res);
  }, [
    facebook,
    instagram,
    socials.facebook,
    socials.instagram,
    socials.tiktok,
    tiktok,
  ]);

  return (
    <>
      <div className='flex w-full flex-col gap-4 text-text-secondary lg:flex-row'>
        <Input
          id='instagram'
          name='instagram'
          type='text'
          placeholder='@instagram'
          icon='IconBrandInstagram'
          addClass={'!w-full shrink'}
          value={socials.instagram}
          onChange={(e) =>
            setSocials({
              ...socials,
              instagram: e.target.value,
            })
          }
        />
        <Input
          id='facebook'
          name='facebook'
          type='text'
          placeholder='https://facebook.com/username'
          icon='IconBrandFacebook'
          addClass={'!w-full shrink'}
          value={socials.facebook}
          onChange={(e) =>
            setSocials({
              ...socials,
              facebook: e.target.value,
            })
          }
        />
        <Input
          id='tiktok'
          name='tiktok'
          type='text'
          placeholder='@tiktok'
          icon='IconBrandTiktok'
          addClass={'!w-full shrink'}
          value={socials.tiktok}
          onChange={(e) =>
            setSocials({
              ...socials,
              tiktok: e.target.value,
            })
          }
        />
      </div>
      <div className='flex w-full flex-col gap-4 md:flex-row' ref={parent}>
        {changed && (
          <button className='flex w-full items-center justify-center gap-2 rounded-lg border-2 border-stroke-secondary bg-stroke py-3 text-text transition-colors hover:border-stroke-secondary hover:bg-stroke-secondary'>
            <IconDeviceFloppy size={26} />
            Save changes
          </button>
        )}
        <button className='flex w-full items-center justify-center gap-2 rounded-lg border-2 border-stroke bg-primary py-3 text-text transition-colors hover:border-stroke-secondary'>
          <IconTrash size={26} />
          Delete account
        </button>
      </div>
    </>
  );
};

export default EditSocials;
