'use client';
import * as React from 'react';
 
import { useIsMobile } from '@/hooks/use-mobile';
import { MotionEffect } from '@/components/animate-ui/effects/motion-effect';
 
export const MotionEffectImageGridDemo = () => {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  // Cargar imágenes desde public/carrusel
  const images = Array.from({ length: 5 }, (_, i) => `/galeria/slide${i + 1}.jpg`);
  const featured = images[0];
  const thumbnails = images.slice(1);
  return (
    <div className="grid gap-4">
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/50 bg-opacity-75 flex items-center justify-center z-50 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <img src={selectedImage} alt="Selected" className="max-h-full max-w-full " />
        </div>
      )}
      <div>
        <MotionEffect slide fade zoom inView delay={0}>
          <img
            className=" sm:mx-36  rounded-lg cursor-pointer hover:brightness-75"
            src={featured}
            alt=""
            onClick={() => setSelectedImage(featured)}
          />
        </MotionEffect>
      </div>
      <div className="grid grid-cols-5 gap-4">
        {thumbnails.map((src, index) => (
          <div key={index}>
            <MotionEffect slide fade zoom inView delay={0.6 + index * 0.1}>
              <img
                className="h-full w-full sm:mx-28 rounded-lg cursor-pointer hover:brightness-75"
                src={src}
                alt=""
                onClick={() => setSelectedImage(src)}
              />
            </MotionEffect>
          </div>
        ))}
      </div>
    </div>
  );
};