import { DependencyList, useCallback, useEffect, useState } from 'react';

export const useService = <T>(
  {
    service,
    serviceOptions,
  }: { service: (...options: any) => T; serviceOptions: any },
  dependencies: DependencyList
) => {
  const [fetching, setFetching] = useState(true);
  const [data, setData] = useState<T>();

  const getData = useCallback(async () => {
    const serviceData = await service(serviceOptions);
    setData(serviceData);
    setFetching(false);
  }, dependencies);

  useEffect(() => {
    getData();
  }, dependencies);

  return { data, fetching };
};
