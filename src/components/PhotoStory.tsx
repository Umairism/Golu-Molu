import { useState } from 'react';
import { photos } from '../data/photos';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function PhotoStory() {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const goToPrevious = () => {
    setCurrentPhoto((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentPhoto((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 bg-gray-50">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">Photo Story</h2>
        
        <div className="relative fade-in">
          <div className="relative aspect-[4/3] bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={photos[currentPhoto].url}
              alt={photos[currentPhoto].caption || `Photo ${currentPhoto + 1}`}
              className="w-full h-full object-cover"
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
            
            <div className="flex gap-2">
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
    </section>
  );
}

export default PhotoStory;
