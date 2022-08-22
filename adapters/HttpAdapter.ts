type HttpResponse<T, E = Error> = {
  body?: T;
  error?: E;
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

    return { body: data, statusCode: response.status };
  } catch (error) {
    return { error, statusCode: -1 };
  }
};
