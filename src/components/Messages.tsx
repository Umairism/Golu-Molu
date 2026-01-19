import { messages } from '../data/messages';

function Messages() {
  return (
    <section id="messages" className="min-h-screen flex items-center justify-center px-4 py-16 bg-gray-50">
      <div className="max-w-3xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">Jo Baatein Dil Ko Chu Gayi</h2>
        <p className="text-lg text-gray-600 text-center mb-8 -mt-8">The words that touched our hearts 💝</p>
        
        <div className="space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`slide-up flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-md ${message.sender === 'me' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} rounded-2xl px-6 py-4 shadow-sm`}>
                <p className="text-lg leading-relaxed mb-2">{message.text}</p>
                <time className={`text-sm ${message.sender === 'me' ? 'text-gray-300' : 'text-gray-500'}`}>
                  {message.date}
                </time>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Messages;
