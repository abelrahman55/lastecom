import { useQuery } from 'react-query';



export const useFetch = (queryKey, route) => {
  const { data, isError, isLoading } = useQuery(
    [queryKey],
    async () => {
      try {
        const res = await api.get(route);
        if (!res.ok) {
          throw res.data;
        } else {
          
          return res.data;
        }
      } catch (e) {
      

      }
    },
    {
      onError(error) {
        // alert(JSON.stringify(error))
        
      },
    },
  );
  

  return {
    data,
    isError,
    isLoading,
  };
};