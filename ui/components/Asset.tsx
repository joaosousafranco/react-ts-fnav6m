import * as React from 'react';

type BaseImageProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

type AssetProps = BaseImageProps;

export const Asset = ({ src, ...rest }: AssetProps) => {
  const [imageUrl] = React.useState(src);
  const [isVideo, setIsVideo] = React.useState(false);

  const handleOnError = React.useCallback(() => {
    if (!isVideo) {
      setIsVideo(true);
    }
  }, [imageUrl]);

  return isVideo ? (
    <video onError={handleOnError} src={imageUrl} autoPlay={true} />
  ) : (
    <img onError={handleOnError} src={imageUrl} {...rest} />
  );
};
