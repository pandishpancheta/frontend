import { getAuth } from '@/actions/common.auth';
import { API_URL } from '@/configs/api';

export const fetcher = async <DataType>(
  url: string,
): Promise<DataType | null> => {
  const auth = await getAuth('client');
  console.log('auth', auth);

  if (!auth) {
    return null;
  }

  const response = await fetch(API_URL + url, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: auth,
    },
  });

  return (await response.json()) as DataType;
};
