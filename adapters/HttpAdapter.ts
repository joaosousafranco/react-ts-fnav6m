type HttpResponse<T, E = Error> = {
  body?: T;
  error?: E;
  headers?: Headers;
  statusCode: number;
};

export const get = async <T, E = Error>({
  url,
}: {
  url: string;
}): Promise<HttpResponse<T, E>> => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    return {
      body: data,
      statusCode: response.status,
      headers: response.headers,
    };
  } catch (error) {
    return { error, statusCode: -1 };
  }
};

export const head = async <T, E = Error>({
  url,
}: {
  url: string;
}): Promise<HttpResponse<T, E>> => {
  try {
    const response = await fetch(url, { method: 'HEAD' });

    console.log('head', {
      statusCode: response.status,
      headers: response.headers,
    });

    return {
      statusCode: response.status,
      headers: response.headers,
    };
  } catch (error) {
    return { error, statusCode: -1 };
  }
};
