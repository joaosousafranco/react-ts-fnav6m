import { DependencyList, useCallback, useEffect, useState } from 'react';

export const useService = <T>(
  {
    service,
    staleData = false,
  }: {
    service: () => any;
    staleData?: boolean;
  },
  dependencies: DependencyList
) => {
  const [fetching, setFetching] = useState(true);
  const [data, setData] = useState<T>();

  const getData = useCallback(async () => {
    setFetching(true);

    if (!staleData) {
      setData(undefined);
    }

    const serviceData = await service();
    setData(serviceData);
    setFetching(false);
  }, dependencies);

  useEffect(() => {
    getData();
  }, dependencies);

  return { data, fetching };
};
