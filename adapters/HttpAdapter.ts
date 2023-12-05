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

export const post = async <B, T, E = Error>({
  url,
  request: { body },
}: {
  url: string;
  request: { body: B };
}): Promise<HttpResponse<T, E>> => {
  try {
    const response = await fetch(url, {
      method: 'post',
      body: JSON.stringify(body),
    });
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

    return {
      statusCode: response.status,
      headers: response.headers,
    };
  } catch (error) {
    return { error, statusCode: -1 };
  }
};
