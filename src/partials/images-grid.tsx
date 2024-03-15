import ImageListing from '@/components/image-listing';

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

  return (
    <div className='container mx-auto px-0 md:px-4'>
      <div className='flex flex-col items-center'>
        <div className='masonry mt-8 w-full px-0 md:px-4'>
          {images.map((image, index) => (
            <ImageListing
              uuid={index.toString()}
              url={image}
              description={`${index.toString()}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
              tags={['tag1', 'tag2', 'tag3'].slice(0, 3)}
              key={index.toString()}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImagesGrid;
