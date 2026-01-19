interface LandingProps {
  onEnter: () => void;
}

function Landing({ onEnter }: LandingProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="text-center fade-in">
        <p className="text-2xl md:text-3xl text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
          Only for my Golu, Sweet and Sugar like girl, My Sweetie ButterScotch❤️💕💕.
        </p>
        <button
          onClick={onEnter}
          className="px-8 py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors text-lg font-medium"
        >
          Enter
        </button>
      </div>
    </section>
  );
}

export default Landing;
