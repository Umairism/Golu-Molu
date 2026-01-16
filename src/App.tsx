import { useState } from 'react';
import Landing from './components/Landing';
import Timeline from './components/Timeline';
import Messages from './components/Messages';
import VideoMoments from './components/VideoMoments';
import PhotoStory from './components/PhotoStory';
import Letters from './components/Letters';
import Closing from './components/Closing';

// Set your password here
const CORRECT_PASSWORD = '2822';

function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password. Try again.');
      setPassword('');
    }
  };

  // Landing page
  if (!hasEntered) {
    return (
      <div className="min-h-screen bg-white">
        <Landing onEnter={() => setHasEntered(true)} />
      </div>
    );
  }

  // Password prompt
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center px-4">
        <div className="max-w-md w-full fade-in">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2 text-center">
              Protected Access
            </h2>
            <p className="text-gray-600 text-center mb-6">
              Enter the password to continue
            </p>
            
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none text-lg"
                  autoFocus
                />
              </div>
              
              {error && (
                <p className="text-red-600 text-sm text-center">{error}</p>
              )}
              
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-lg font-medium"
              >
                Enter
              </button>
            </form>
            
            <p className="text-gray-400 text-xs text-center mt-6">
              Only for those who know the secret
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Main content (after authentication)
  return (
    <div className="min-h-screen bg-white">
      <Timeline />
      <Messages />
      <VideoMoments />
      <PhotoStory />
      <Letters />
      <Closing />
    </div>
  );
}

export default App;
