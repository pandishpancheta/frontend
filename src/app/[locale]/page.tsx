import ImagesGrid, { ImageType } from '@/partials/images-grid';
import { API_URL } from '@/configs/api';

export type ImagesData = {
  listings: ImageType[];
};

const fetchImages = async () => {
  const res = await fetch(API_URL + '/listings/', {
    next: {
      revalidate: 60,
    },
  });
  const data = (await res.json()) as ImagesData;
  return data.listings;
};

const Home = async () => {
  const images = await fetchImages();

  return (
    <main className='flex h-full min-h-screen w-full flex-col justify-between px-3 pb-8 pt-24'>
      <ImagesGrid images={images} />
      <footer className='mt-8 flex min-h-16 w-full items-center justify-center gap-4 rounded-xl border border-stroke bg-primary p-4'>
        StockChain © 2024
      </footer>
    </main>
  );
};

export default Home;
