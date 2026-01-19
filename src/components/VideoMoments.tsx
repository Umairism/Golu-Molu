import { useState, useRef } from 'react';
import { combinedVideos } from '../data/videos';
import { Play, Heart } from 'lucide-react';

interface VideoPlayerProps {
  videos: typeof combinedVideos;
  title: string;
}

function VideoPlayer({ videos, title }: VideoPlayerProps) {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoDimensions, setVideoDimensions] = useState<{ width: number; height: number } | null>(null);

  const handleVideoEnd = () => {
    if (currentVideo < videos.length - 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentVideo(currentVideo + 1);
        setIsTransitioning(false);
      }, 600);
    }
  };

  const handleStart = () => {
    setHasStarted(true);
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setVideoDimensions({
        width: videoRef.current.videoWidth,
        height: videoRef.current.videoHeight
      });
    }
  };

  const getAspectRatioClass = () => {
    if (!videoDimensions) return 'aspect-video';
    const ratio = videoDimensions.width / videoDimensions.height;
    
    if (ratio > 1.5) return 'aspect-video'; // Standard 16:9
    if (ratio > 1.2) return 'aspect-[4/3]'; // Slightly wider
    if (ratio > 0.85 && ratio <= 1.2) return 'aspect-square'; // Square-ish
    return 'aspect-[9/16]'; // Portrait/vertical video
  };

  return (
    <div className="w-full">
      <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8 text-center">{title}</h3>
      
      {!hasStarted ? (
        <div className="text-center bg-white rounded-lg shadow-lg p-12">
          <p className="text-gray-600 mb-8 text-lg">
            Special moments captured
          </p>
          <button
            onClick={handleStart}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors text-lg font-medium"
          >
            <Play className="w-6 h-6" />
            Watch
          </button>
        </div>
      ) : (
        <div className={`relative ${isTransitioning ? 'opacity-0' : 'opacity-100'} transition-opacity duration-600`}>
          <div className={`relative ${getAspectRatioClass()} bg-gray-100 rounded-lg overflow-hidden shadow-lg`}>
            <video
              ref={videoRef}
              key={videos[currentVideo].id}
              controls
              onEnded={handleVideoEnd}
              onLoadedMetadata={handleLoadedMetadata}
              preload="metadata"
              className="w-full h-full object-contain"
            >
              <source src={videos[currentVideo].url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          <div className="flex justify-center gap-2 mt-4 flex-wrap">
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
      )}
    </div>
  );
}

function VideoMoments() {
  return (
    <section id="videos" className="min-h-screen flex items-center justify-center px-4 py-16 bg-white">
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">Video Moments</h2>
        
        {/* Video Collection */}
        <div className="max-w-4xl mx-auto">
          <VideoPlayer videos={combinedVideos} title="Her Beautiful Moments 💖" />
        </div>
      </div>
    </section>
  );
}

export default VideoMoments;
