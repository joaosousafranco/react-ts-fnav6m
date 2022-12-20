import * as React from 'react';

type BaseImageProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

type AssetProps = {
  fallbackImage: string;
} & BaseImageProps;

export const Asset = ({ fallbackImage, src, ...rest }: AssetProps) => {
  const [imageUrl, setImageUrl] = React.useState(src);
  const [isVideo, setIsVideo] = React.useState(false);

  const handleOnError = React.useCallback(() => {
    if (!isVideo) {
      setIsVideo(true);
    }

    if (isVideo && imageUrl !== fallbackImage) {
      setIsVideo(false);
      setImageUrl(fallbackImage);
    }
  }, [imageUrl]);

  return isVideo ? (
    <video
      onError={handleOnError}
      src={imageUrl}
      autoPlay={true}
      loop={true}
      title={rest.title}
    />
  ) : (
    <img onError={handleOnError} src={imageUrl} {...rest} />
  );
};
