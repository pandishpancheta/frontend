import { unstable_setRequestLocale } from 'next-intl/server';
import ShareButton from '@/components/share-button';
import { IconShoppingCart } from '@tabler/icons-react';
import CartButton from '@/components/cart-button';

const ImagePage = ({
  params: { locale, uuid },
}: {
  params: {
    locale: string;
    uuid: string;
  };
}) => {
  unstable_setRequestLocale(locale);

  const tags = ['tag1', 'tag2', 'tag3'];

  return (
    <main className='flex h-full min-h-screen w-full flex-col items-center px-3 py-24'>
      <div className='flex w-full max-w-screen-lg flex-col gap-4'>
        <div className='relative h-auto w-full'>
          <ShareButton />
          <img
            src={'https://via.placeholder.com/150x100'}
            alt={'bla'}
            className='h-auto w-full rounded-xl border-2 border-stroke'
          />
          <div className='absolute bottom-4 left-4 flex flex-wrap'>
            {tags?.map((tag) => (
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            congue quisque egestas diam in arcu. Ultricies leo integer malesuada
            nunc vel risus commodo viverra maecenas. Pellentesque diam volutpat
            commodo sed egestas egestas fringilla. Elementum sagittis vitae et
            leo duis ut diam quam nulla. Vestibulum sed arcu non odio euismod
            lacinia at quis risus. Odio ut enim blandit volutpat. Dui id ornare
            arcu odio ut sem nulla. Adipiscing enim eu turpis egestas pretium.
            Venenatis cras sed felis eget. Arcu cursus vitae congue mauris
            rhoncus aenean vel elit. Massa ultricies mi quis hendrerit dolor
            magna eget est lorem. Dui nunc mattis enim ut tellus elementum.
            Facilisis leo vel fringilla est ullamcorper eget nulla facilisi.
            Justo laoreet sit amet cursus sit amet. Eros donec ac odio tempor
            orci dapibus ultrices. Dictumst quisque sagittis purus sit amet
            volutpat consequat mauris nunc. Congue mauris rhoncus aenean vel
            elit scelerisque mauris pellentesque pulvinar. Arcu risus quis
            varius quam quisque id diam vel. Ac placerat vestibulum lectus
            mauris. Facilisis magna etiam tempor orci eu. Leo integer malesuada
            nunc vel risus commodo viverra maecenas accumsan. Egestas congue
            quisque egestas diam in. Elit scelerisque mauris pellentesque
            pulvinar pellentesque habitant. Consequat interdum varius sit amet
            mattis vulputate enim nulla. At tellus at urna condimentum mattis
            pellentesque id nibh. Lorem dolor sed viverra ipsum nunc aliquet.
            Rhoncus est pellentesque elit ullamcorper.
          </p>
          <div className='flex rounded-lg border-2 border-stroke px-4 py-2 font-semibold'>
            @username
          </div>
        </div>
      </div>
    </main>
  );
};

export default ImagePage;
