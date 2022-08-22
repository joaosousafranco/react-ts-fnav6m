import { DependencyList, useCallback, useEffect, useState } from 'react';

export const useService = <T>(
  service: () => any,
  dependencies: DependencyList
) => {
  const [fetching, setFetching] = useState(true);
  const [data, setData] = useState<T>();

  const getData = useCallback(async () => {
    const serviceData = await service();
    setData(serviceData);
    setFetching(false);
  }, dependencies);

  useEffect(() => {
    getData();
  }, dependencies);

  return { data, fetching };
};
