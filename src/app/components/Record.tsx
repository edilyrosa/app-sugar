// components/RotationMask.tsx
import React from 'react';
import Image from 'next/image';

type RotationMaskProps = {
  layerImages?: string[];
};

const defaultLayerImages = [
  '/assets/images/parallax/layer1.png',
  '/assets/images/parallax/layer2.png',
  '/assets/images/parallax/layer3.png',
  '/assets/images/parallax/layer4.png',
];

const RotationMask: React.FC<RotationMaskProps> = ({
  layerImages = defaultLayerImages,
}) => {
  return (
    <div
      className="rotation-mask_imagecontainer__CB7td"
      style={{
        willChange: 'clip-path',
        clipPath:
          'path("M 427.837 167.562 Q 427.837 147.562 447.837 147.562 L 668.963 147.562 Q 688.963 147.562 688.963 167.562 L 688.963 562.016 Q 688.963 582.016 668.963 582.016 L 447.837 582.016 Q 427.837 582.016 427.837 562.016 Z")',
      }}
    >
      <div
        className="rotation-mask_background__Xo_7_"
        style={{
          width: '100%',
          height: '100%',
          opacity: 1,
          visibility: 'inherit',
          clipPath:
            'polygon(23% 0%, 100% 0%, 100% 100%, 84% 100%, 45% 100%, 30% 100%, 0% 100%, 0% 0%, 13% 0%)',
        }}
      >
        {layerImages.map((src, idx) => (
          <Image
            key={idx}
            alt="Bg image"
            width={1780}
            height={1510}
            className="rotation-mask_image__umB6x"
            style={{
              color: 'transparent',
              transform: 'translate3d(0px, 0px, 0px)',
            }}
            src={src}
            quality={90}
            priority={idx === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default RotationMask;
