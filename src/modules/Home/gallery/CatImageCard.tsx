import React, { memo, useState, useCallback } from 'react';
import { LoadingSpinner } from '../../../components/ui';
import type { CatImage } from '../../../types/cat.types';

interface CatImageCardProps {
  image: CatImage;
}

export const CatImageCard: React.FC<CatImageCardProps> = memo(({ image }) => {
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);  
  
  const handleImageLoad = useCallback(() => {
    setImageLoading(false);
  }, []);

  const handleImageError = useCallback(() => {
    setImageLoading(false);
    setImageError(true);
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image Container */}
      <div className="relative aspect-square bg-gray-100">
        {imageLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <LoadingSpinner size="lg" />
          </div>
        )}
        
        {imageError ? (
          <div className="absolute inset-0 flex items-center justify-center text-gray-500">
            <div className="text-center">
              <div className="text-4xl mb-2">😿</div>
              <div>Failed to load image</div>
            </div>
          </div>
        ) : (
          <img
            src={image.url}
            alt={`Cat ${image.id}`}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              imageLoading ? 'opacity-0' : 'opacity-100'
            }`}
            onLoad={handleImageLoad}
            onError={handleImageError}
            loading="lazy" // Native lazy loading
          />
        )}
      </div>
    </div>
  );
});

CatImageCard.displayName = 'CatImageCard';