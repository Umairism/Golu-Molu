import { useState } from 'react';
import { videos } from '../data/videos';

function VideoMoments() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleVideoEnd = () => {
    if (currentVideo < videos.length - 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentVideo(currentVideo + 1);
        setIsTransitioning(false);
      }, 600);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 bg-white">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">Video Moments</h2>
        
        <div className={`relative ${isTransitioning ? 'opacity-0' : 'opacity-100'} transition-opacity duration-600`}>
          <video
            key={videos[currentVideo].id}
            controls
            onEnded={handleVideoEnd}
            className="w-full rounded-lg shadow-lg"
          >
            <source src={videos[currentVideo].url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          <p className="text-center text-gray-600 mt-6 text-lg">
            {videos[currentVideo].title}
          </p>
          
          <div className="flex justify-center gap-2 mt-4">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentVideo(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentVideo ? 'bg-gray-900' : 'bg-gray-300'
                }`}
                aria-label={`Go to video ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoMoments;
