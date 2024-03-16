'use client';
import ImageListing from '@/components/image-listing';
import { IPFS_URL } from '@/constants/ipfs';
import { IconPhotoOff } from '@tabler/icons-react';

export type ImageType = {
  id: string;
  uri: string;
  description: string;
  tag_names?: string[];
  username: string;
  price: number;
};

const ImagesGrid = ({ images }: { images: ImageType[] }) => (
  <div className='container mx-auto px-0 md:px-4'>
    {!images?.length && (
      <div className='flex flex-col items-center justify-center gap-4 py-16'>
        <IconPhotoOff size={64} />
        <p className='text-text-primary text-2xl font-semibold'>
          No images found
        </p>
      </div>
    )}
    <div className='flex flex-col items-center'>
      <div className='masonry mt-8 w-full px-0 md:px-4'>
        {images?.length > 0 &&
          images.map((image: ImageType) => (
            <ImageListing
              key={image.id.toString()}
              uuid={image.id.toString()}
              url={IPFS_URL + image.uri}
              description={`${image?.description || 'No description'}`}
              tags={image?.tag_names || []}
              username={image?.username}
              price={image?.price}
            />
          ))}
      </div>
    </div>
  </div>
);

export default ImagesGrid;
