import { AxiosResponse } from 'axios';
import { axiosInstance } from '@/configs/axios';
import { getAuth } from '@/actions/common.auth';

export const fetcher = async <DataType>(
  url: string,
): Promise<DataType | null> => {
  const auth = await getAuth('client');

  if (!auth) {
    return null;
  }

  const response: AxiosResponse<DataType> = await axiosInstance.get(url, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: auth,
    },
  });
  return response.data;
};
