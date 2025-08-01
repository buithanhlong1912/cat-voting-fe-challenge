import React, { memo } from 'react';
import type { CatImage } from '../../../types/cat.types';
import { LoadingSpinner } from '../../../components/ui';
import { useLazyImage } from '../../../hooks';

interface OptimizedCatImageCardProps {
  image: CatImage;
}

export const OptimizedCatImageCard: React.FC<OptimizedCatImageCardProps> = memo(({ image }) => {  
  const {
    imgRef,
    src,
    isLoaded,
    error: imageError,
    handleLoad,
    handleError,
  } = useLazyImage(image.url);

  return (
    <article className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image Container */}
      <div className="relative aspect-square bg-gray-100 dark:bg-gray-700">
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
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
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={handleLoad}
            onError={handleError}
            loading="lazy"
          />
        )}
      </div>
    </article>
  );
});

OptimizedCatImageCard.displayName = 'OptimizedCatImageCard';