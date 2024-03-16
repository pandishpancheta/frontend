'use client';
import ImageListing from '@/components/image-listing';
import { useEffect, useState } from 'react';
import { IPFS_URL } from '@/constants/ipfs';

export type ImageType = {
  id: string;
  url: string;
  description: string;
  tag_names?: string[];
  username: string;
  created_at: string;
};

const ImagesGrid = ({ images }: { images: ImageType[] }) => {
  return (
    <div className='container mx-auto px-0 md:px-4'>
      <div className='flex flex-col items-center'>
        <div className='masonry mt-8 w-full px-0 md:px-4'>
          {images.length > 0 &&
            images.map((image: any) => (
              <ImageListing
                key={image.id.toString()}
                uuid={image.id.toString()}
                url={IPFS_URL + image.uri}
                description={`${image?.description || 'No description'}`}
                tags={image?.tag_names || []}
                username={image?.username}
                created_at={image?.created_at}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ImagesGrid;
