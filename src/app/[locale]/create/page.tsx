'use client';
import { unstable_setRequestLocale } from 'next-intl/server';
import { IconPhoto } from '@tabler/icons-react';
import { ChangeEvent, useState } from 'react';

const CreatePage = ({
  params: { locale },
}: {
  params: {
    locale: string;
  };
}) => {
  const [file, setFile] = useState<File | null>(null);

  const addImages = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const files = Array.from(e.target.files);

    if (files.length > 1) {
      console.log('Only one file is allowed');
      return;
    }

    setFile(files[0]);
  };

  return (
    <main className='relative flex h-full min-h-screen w-full justify-center px-8 pb-8 pt-28'>
      {file ? (
        <div className='relative flex max-h-dvh w-full max-w-screen-lg flex-col items-center justify-center gap-3'>
          <img
            src={URL.createObjectURL(file)}
            alt='preview'
            className='h-auto w-full rounded-xl border-2 border-stroke'
          />
          <div className='flex gap-4'>
            <button
              className='text-white rounded-lg border-2 border-stroke bg-primary p-2 px-4 hover:border-stroke-secondary'
              onClick={() => setFile(null)}
            >
              Remove
            </button>
            <button
              className='text-white rounded-lg border-2 border-stroke bg-primary p-2 px-4 hover:border-stroke-secondary'
              onClick={() => console.log('Upload')}
            >
              Upload
            </button>
          </div>
        </div>
      ) : (
        <div className='grow-1 relative flex w-full cursor-pointer items-center justify-center gap-3 rounded-2xl border-8 border-dotted border-stroke-secondary'>
          <IconPhoto size={48} />
          <p className='whitespace-pre-line font-semibold'>
            {`drop an image 
          or select a file`}
          </p>
          <input
            type='file'
            accept='image/*'
            multiple={false}
            className='absolute inset-0 h-full w-full cursor-pointer opacity-0'
            onChange={addImages}
          />
        </div>
      )}
    </main>
  );
};

export default CreatePage;
