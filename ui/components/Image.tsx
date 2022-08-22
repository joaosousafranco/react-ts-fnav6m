import * as React from 'react';

type BaseImageProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

type ImageProps = {
  fallbackImage?: string;
} & BaseImageProps;

export const Image = ({ fallbackImage, src, ...rest }: ImageProps) => {
  const [imageUrl, setImageUrl] = React.useState(src);

  const handleOnError = React.useCallback(() => {
    if (fallbackImage) {
      setImageUrl(fallbackImage);
    }
  }, [imageUrl]);

  return <img onError={handleOnError} src={imageUrl} {...rest} />;
};
