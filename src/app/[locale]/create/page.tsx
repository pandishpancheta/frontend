'use client';
import { IconPhoto } from '@tabler/icons-react';
import { ChangeEvent, useState } from 'react';
import TagInput from '@/components/tag-input';
import { isEmpty } from 'lodash';
import Input from '@/components/forms/input';
import { API_URL } from '@/configs/api';
import { getAuth } from '@/actions/common.auth';

const CreatePage = ({}: {
  params: {
    locale: string;
  };
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [tags, setTags] = useState<string[]>([]);
  const [price, setPrice] = useState<number>(0);
  const [lock, setLock] = useState<boolean>(false);

  const handleAddTag = (tag: string) => {
    if (tags.includes(tag) || isEmpty(tag)) return;
    setTags((prevState) => [...prevState, tag]);
  };

  const handleRemoveTag = (tag: string) => {
    setTags((prevState) => prevState.filter((t) => t !== tag));
  };

  const addImages = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const files = Array.from(e.target.files);

    if (files.length > 1) {
      console.log('Only one file is allowed');
      return;
    }

    setFile(files[0]);
  };

  const handleUpload = async () => {
    setLock(true);
    console.log('(s) uploading', file, price, tags);
    if (!file || !price || price <= 0) {
      console.log('Invalid input');
      setLock(false);
      return;
    }
    const formData = new FormData();

    formData.append('image', file);
    formData.append('price', price.toString());
    tags.map((tag) => formData.append('tags', tag));
    formData.append('name', file.name);

    console.log(formData);

    const auth = await getAuth('client');
    if (!auth) return;

    console.log('uploading');

    const res = await fetch(`${API_URL}/listings/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: auth,
      },
      body: formData,
    });

    console.log('stat', res.status);
    if (res.ok) {
      console.log('Uploaded');
    }

    console.log(res);
    setLock(false);
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
          <div className='flex w-full flex-col gap-4 md:flex-row'>
            <TagInput
              tags={tags}
              handleAddTag={handleAddTag}
              handleRemoveTag={handleRemoveTag}
              placeholder={'Add tags'}
            />
            <Input
              id={'price'}
              name={'price'}
              type={'number'}
              placeholder={'ETH Price'}
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </div>
          <div className='flex gap-4'>
            <button
              className='text-white rounded-lg border-2 border-stroke bg-primary p-2 px-4 hover:border-stroke-secondary'
              onClick={() => setFile(null)}
              disabled={lock}
            >
              Remove
            </button>
            <button
              className='text-white rounded-lg border-2 border-stroke bg-primary p-2 px-4 hover:border-stroke-secondary'
              onClick={handleUpload}
              disabled={lock}
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
