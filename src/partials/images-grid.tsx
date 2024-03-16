"use client";
import ImageListing from '@/components/image-listing';
import { API_URL } from '@/configs/api';
import { useEffect, useState } from 'react';

const ImagesGrid = () => {
  const images = [
    'https://via.placeholder.com/150x250',
    'https://via.placeholder.com/150x150',
    'https://via.placeholder.com/150x100',
    'https://via.placeholder.com/150x200',
    'https://via.placeholder.com/150x250',
    'https://via.placeholder.com/150x150',
    'https://via.placeholder.com/150x100',
    'https://via.placeholder.com/150x200',
    'https://via.placeholder.com/150x250',
    'https://via.placeholder.com/150x150',
    'https://via.placeholder.com/150x100',
    'https://via.placeholder.com/150x200',
    'https://via.placeholder.com/150x250',
    'https://via.placeholder.com/150x150',
    'https://via.placeholder.com/150x100',
    'https://via.placeholder.com/150x200',
  ];

  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      const res = await fetch(`${API_URL}/listings/`);
      const data = await res.json();
      setListings(data.listings);
    }

    fetchListings();
  }, [])

  return (
    <div className='container mx-auto px-0 md:px-4'>
      <div className='flex flex-col items-center'>
        <div className='masonry mt-8 w-full px-0 md:px-4'>
          {listings.length > 0 && listings.map((listing: any, index) => (
            <ImageListing
              uuid={listing.id.toString()}
              url={"https://emerald-efficient-caterpillar-983.mypinata.cloud/ipfs/" + listing.uri}
              description={`${listing?.description || 'No description'}`}
              tags={listing?.tag_names || []}
              username={listing?.username}
              created_at={listing?.created_at}
              key={index.toString()}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImagesGrid;
