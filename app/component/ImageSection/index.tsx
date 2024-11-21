import React from 'react';

interface ImageSectionProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const ImageSection: React.FC<ImageSectionProps> = ({ src, alt, width, height }) => (
  <div className="flex h-[350px] items-center flex-1">
    <img src={src} alt={alt} width={width} height={height} loading="lazy" />
  </div>
);

export default React.memo(ImageSection);