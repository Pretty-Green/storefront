'use client';
import React, { useEffect, useState } from 'react';
import { register } from 'swiper/element/bundle';
import { Autoplay } from 'swiper/modules';

register();

function ProductCarousel({ children }: React.PropsWithChildren) {
  const [mouted, setMouted] = useState(false);

  useEffect(() => {
    if (!mouted) {
      setMouted(true);
    }
  }, [mouted]);

  if (!mouted && Array.isArray(children)) {
    return <div className="flex overflow-hidden">{children}</div>;
  }

  if (Array.isArray(children)) {
    return (
      <swiper-container slides-per-view="auto" modules={[Autoplay]} autoplay={true}>
        {children.map((child, i) => {
          return (
            <swiper-slide key={i} style={{ width: '320px' }}>
              {child}
            </swiper-slide>
          );
        })}
      </swiper-container>
    );
  }
}

export default ProductCarousel;
