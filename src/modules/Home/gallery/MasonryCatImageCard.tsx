import React, { memo, useMemo } from 'react';
import type { CatImage } from '../../../types/cat.types';
import { LoadingSpinner } from '../../../components/ui';
import { useLazyImage } from '../../../hooks';

interface MasonryCatImageCardProps {
  image: CatImage;
}

export const MasonryCatImageCard: React.FC<MasonryCatImageCardProps> = memo(({ image }) => {  
  const {
    imgRef,
    src,
    isLoaded,
    error: imageError,
    handleLoad,
    handleError,
  } = useLazyImage(image.url);
  
  // Calculate aspect ratio for natural image display
  const aspectRatio = useMemo(() => {
    if (image.width && image.height) {
      return image.height / image.width;
    }
    return 1; // Default square if no dimensions
  }, [image.width, image.height]);

  return (
    <article className="image-card relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden group cursor-pointer">
      {/* Image Container with Natural Aspect Ratio */}
      <div 
        className="relative w-full bg-gray-100 dark:bg-gray-700"
        style={{ paddingBottom: `${aspectRatio * 100}%` }}
      >
        {!isLoaded && (
          <div className="absolute inset-0 image-loading flex items-center justify-center">
            <LoadingSpinner size="lg" />
          </div>
        )}
        
        {imageError ? (
          <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400">
            <div className="text-center">
              <div className="text-4xl mb-2">😿</div>
              <div className="text-sm">Failed to load image</div>
            </div>
          </div>
        ) : (
          <img
            ref={imgRef}
            src={src}
            alt={`Cat ${image.id}`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
            onLoad={handleLoad}
            onError={handleError}
            loading="lazy"
          />
        )}
      </div>

      {/* Image Info (Optional - can be shown on hover) */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="text-white text-sm">
          <div className="flex justify-between items-center">
            <span className="font-medium">Cat #{image.id.slice(0, 8)}</span>
            <span className="text-xs opacity-75">
              {image.width} × {image.height}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
});

MasonryCatImageCard.displayName = 'MasonryCatImageCard';