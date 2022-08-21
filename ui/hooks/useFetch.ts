import { useEffect, useState } from 'react';

type FetchInput = {
  url: string;
};

export const useFetch = <T>({ url }: FetchInput, dependencies = []) => {
  const [fetching, setFetching] = useState(true);
  const [data, setData] = useState<T>(undefined);
  const [errorCode, setErrorCode] = useState(0);

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      setErrorCode(response.status);
    }

    setData(data);
    setFetching(false);
  };

  useEffect(() => {
    getData();
  }, dependencies);

  return { fetching, data, errorCode };
};
