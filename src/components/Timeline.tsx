import { timelineEvents } from '../data/timeline';

function Timeline() {
  return (
    <section id="timeline" className="min-h-screen flex items-center justify-center px-4 py-16 bg-white">
      <div className="max-w-3xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">Hamara Safar</h2>
        <p className="text-lg text-gray-600 text-center mb-8 -mt-8">Every moment with you, a beautiful memory 💕</p>
        
        <div className="space-y-12">
          {timelineEvents.map((event, index) => (
            <div key={index} className="slide-up border-l-2 border-gray-300 pl-8 py-4 relative">
              <div className="absolute w-4 h-4 bg-gray-900 rounded-full -left-[9px] top-6"></div>
              
              <time className="text-sm text-gray-500 font-medium">{event.date}</time>
              <h3 className="text-2xl font-semibold text-gray-900 mt-2 mb-3">{event.title}</h3>
              <p className="text-gray-700 leading-relaxed">{event.description}</p>
              
              {event.image && (
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="mt-4 rounded-lg max-w-sm"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline;
