import { useQuery } from '@tanstack/react-query';
import customFetch from './assets/utils';

export const useSearch = ({ query, page, searchTerm }) => {
  console.log('query, page ', query, page);
  console.log('key', import.meta.env.VITE_API_KEY);
  const { data, isLoading, isError } = useQuery({
    queryKey: ['images', searchTerm],
    queryFn: async () => {
      const { data } = await customFetch.get('/', {
        params: {
          query,
          page,
          client_id: import.meta.env.VITE_API_KEY,
        },
      });

      return data;
    },
  });
  return { data, isLoading, isError };
};
