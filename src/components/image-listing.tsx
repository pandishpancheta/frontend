import Link from 'next/link';
import CartButton from '@/components/cart-button';

type ImageListingProps = {
  uuid: string;
  url: string;
  description: string;
  tags: string[];
  username: string;
  price: number;
};

const ImageListing = ({
  uuid,
  url,
  description,
  tags,
  username,
  price,
}: ImageListingProps) => (
  <div className='relative mb-4 block cursor-pointer break-inside-avoid'>
    <div className='mb-2 flex break-inside-avoid-column flex-col items-center rounded-xl border border-stroke bg-primary p-4 transition-colors hover:border-stroke-secondary'>
      <div className='relative h-auto w-full'>
        <img src={url} alt={description} className='h-auto w-full rounded' />
        <div className='absolute bottom-2 left-2 flex flex-wrap'>
          {tags?.map((tag) => (
            <span
              key={tag}
              className='mr-2 rounded-full border border-stroke-secondary bg-stroke px-2 py-1 text-xs text-text'
            >
              {tag}
            </span>
          ))}
        </div>
        <CartButton uuid={uuid} />
      </div>
      <div className='mt-2 flex w-full flex-col items-start justify-start gap-2'>
        <div className='flex flex-col gap-0'>
          <p className='line-clamp-3 text-lg font-semibold'>{description}</p>
          <p className='text-sm font-semibold text-text-secondary'>
            @{username}
          </p>
        </div>
        <div
          className='w-full shrink-0 bg-stroke-secondary opacity-50'
          style={{
            height: '1px',
          }}
        />
        <div className='flex items-end justify-between'>
          <p className='text-md font-semibold'>ETH {price}</p>
        </div>
      </div>
      <Link
        href={`/images/${uuid}`}
        className='absolute inset-0 h-full w-full'
      />
    </div>
  </div>
);
export default ImageListing;
