import { useState, useEffect } from 'react';
import { letters as initialLetters } from '../data/letters';
import { Edit2, Save, X } from 'lucide-react';

function Letters() {
  const [activeTab, setActiveTab] = useState<'me' | 'you'>('me');
  const [isEditing, setIsEditing] = useState(false);
  const [letters, setLetters] = useState(initialLetters);
  const [editContent, setEditContent] = useState('');

  // Load saved letters from localStorage on mount
  useEffect(() => {
    const savedLetters = localStorage.getItem('anniversaryLetters');
    if (savedLetters) {
      setLetters(JSON.parse(savedLetters));
    }
  }, []);

  const activeLetter = letters.find(letter => letter.author === activeTab);

  const handleEdit = () => {
    setEditContent(activeLetter?.content || '');
    setIsEditing(true);
  };

  const handleSave = () => {
    const updatedLetters = letters.map(letter => 
      letter.author === activeTab 
        ? { ...letter, content: editContent }
        : letter
    );
    setLetters(updatedLetters);
    localStorage.setItem('anniversaryLetters', JSON.stringify(updatedLetters));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditContent('');
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 bg-white">
      <div className="max-w-3xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">Letters</h2>
        
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => {
              setActiveTab('me');
              setIsEditing(false);
            }}
            className={`px-6 py-3 rounded-full text-lg font-medium transition-colors ${
              activeTab === 'me'
                ? 'bg-gray-900 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            From Me
          </button>
          <button
            onClick={() => {
              setActiveTab('you');
              setIsEditing(false);
            }}
            className={`px-6 py-3 rounded-full text-lg font-medium transition-colors ${
              activeTab === 'you'
                ? 'bg-gray-900 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            From You
          </button>
        </div>
        
        <div className="fade-in">
          <div className="bg-gray-50 rounded-lg p-8 md:p-12 shadow-sm relative">
            {/* Edit/Save/Cancel buttons */}
            {!isEditing ? (
              <button
                onClick={handleEdit}
                className="absolute top-4 right-4 p-2 bg-white rounded-lg hover:bg-gray-100 transition-colors shadow-sm"
                title="Edit letter"
              >
                <Edit2 className="w-5 h-5 text-gray-700" />
              </button>
            ) : (
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  onClick={handleSave}
                  className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-sm"
                  title="Save letter"
                >
                  <Save className="w-5 h-5" />
                </button>
                <button
                  onClick={handleCancel}
                  className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors shadow-sm"
                  title="Cancel editing"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* Display or Edit mode */}
            {!isEditing ? (
              <div className="prose prose-lg max-w-none">
                {activeLetter?.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-800 leading-relaxed text-lg mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
            ) : (
              <textarea
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                className="w-full min-h-[500px] text-gray-800 leading-relaxed text-lg p-4 border-2 border-gray-300 rounded-lg focus:border-gray-900 focus:outline-none resize-y"
                placeholder="Write your heartfelt letter here..."
              />
            )}
          </div>

          {isEditing && (
            <p className="text-center text-gray-500 text-sm mt-4">
              Tip: Use double line breaks for new paragraphs
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Letters;
