import { useState, useEffect } from 'react';
import { hisPhotos, herPhotos, combinedPhotos } from '../data/photos';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

interface PhotoGalleryProps {
  photos: typeof hisPhotos;
  title: string;
}

function PhotoGallery({ photos, title }: PhotoGalleryProps) {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [imageDimensions, setImageDimensions] = useState<{ width: number; height: number } | null>(null);

  const goToPrevious = () => {
    setCurrentPhoto((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentPhoto((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    setImageDimensions({
      width: img.naturalWidth,
      height: img.naturalHeight
    });
  };

  const getAspectRatioClass = () => {
    if (!imageDimensions) return 'aspect-[4/3]';
    const ratio = imageDimensions.width / imageDimensions.height;
    
    if (ratio > 1.3) return 'aspect-video'; // Landscape
    if (ratio > 0.9 && ratio <= 1.3) return 'aspect-[4/3]'; // Square-ish
    return 'aspect-[3/4]'; // Portrait
  };

  return (
    <div className="w-full">
      <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8 text-center">{title}</h3>
      
      <div className="relative fade-in">
        <div className={`relative ${getAspectRatioClass()} bg-white rounded-lg shadow-lg overflow-hidden`}>
          <img
            src={photos[currentPhoto].url}
            alt={photos[currentPhoto].caption || `Photo ${currentPhoto + 1}`}
            className="w-full h-full object-cover"
            onLoad={handleImageLoad}
          />
        </div>
        
        {photos[currentPhoto].caption && (
          <p className="text-center text-gray-700 mt-6 text-lg">
            {photos[currentPhoto].caption}
          </p>
        )}
        
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={goToPrevious}
            className="p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6 text-gray-900" />
          </button>
          
          <div className="flex gap-2 flex-wrap justify-center">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPhoto(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentPhoto ? 'bg-gray-900' : 'bg-gray-300'
                }`}
                aria-label={`Go to photo ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={goToNext}
            className="p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6 text-gray-900" />
          </button>
        </div>
        
        <p className="text-center text-gray-500 text-sm mt-4">
          {currentPhoto + 1} / {photos.length}
        </p>
      </div>
    </div>
  );
}

function PhotoStory() {
  return (
    <section id="photos" className="min-h-screen flex items-center justify-center px-4 py-16 bg-gray-50">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">Photo Story</h2>
        
        {/* His and Her Photos Side by Side */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-20">
          <PhotoGallery photos={hisPhotos} title="His Journey 💙" />
          
          {/* Beautiful Vertical Divider */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full">
            <div className="relative h-full flex flex-col items-center">
              <div className="w-px bg-gradient-to-b from-transparent via-pink-300 to-transparent h-full"></div>
              <div className="absolute top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg">
                <Heart className="w-6 h-6 text-pink-500 fill-pink-500" />
              </div>
            </div>
          </div>
          
          {/* Mobile Horizontal Divider */}
          <div className="md:hidden col-span-full flex items-center justify-center py-8">
            <div className="flex items-center w-full">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-pink-300 to-pink-300"></div>
              <div className="px-4">
                <Heart className="w-6 h-6 text-pink-500 fill-pink-500" />
              </div>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent via-pink-300 to-pink-300"></div>
            </div>
          </div>
          
          <PhotoGallery photos={herPhotos} title="Her Journey 💖" />
        </div>
        
        {/* Combined Photos Section */}
        <div className="relative">
          {/* Beautiful Horizontal Divider */}
          <div className="flex items-center justify-center mb-16">
            <div className="flex items-center w-full max-w-3xl">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-300 to-purple-400"></div>
              <div className="px-6 flex items-center gap-2">
                <Heart className="w-5 h-5 text-purple-500 fill-purple-500 animate-pulse" />
                <span className="text-xl font-semibold text-purple-600">Together</span>
                <Heart className="w-5 h-5 text-purple-500 fill-purple-500 animate-pulse" />
              </div>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent via-purple-300 to-purple-400"></div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <PhotoGallery photos={combinedPhotos} title="Our Moments Together 💑" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PhotoStory;
