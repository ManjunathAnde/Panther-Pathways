export function HeroSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-block mb-6">
          <div className="bg-[#0A2240] text-white px-4 py-2 rounded-full" style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.05em' }}>
            FALL 2025 RESOURCES
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-[#0A2240] mb-4" style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: '1.1', letterSpacing: '-0.02em' }}>
          Navigating the U.S. College Life
        </h1>

        {/* Gold Underline */}
        <div className="w-32 h-1 bg-[#C8A457] mx-auto mb-6"></div>

        {/* Subtext */}
        <p className="text-gray-600 mb-10" style={{ fontSize: '1.125rem', lineHeight: '1.7' }}>
          "Feel confident like home at GSU! Your all-essential starter guide."
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <button 
            onClick={() => {
              const element = document.getElementById('week1-guide');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-[#0A2240] text-white px-8 py-3 rounded-lg hover:bg-[#0d2d52] transition-colors" 
            style={{ fontWeight: 600 }}
          >
            Start Here
          </button>
          <button 
            onClick={() => {
              const element = document.getElementById('emergency-contacts');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors" 
            style={{ fontWeight: 600 }}
          >
            Emergency Contacts
          </button>
          <button 
            onClick={() => {
              const element = document.getElementById('communication-templates');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="border-2 border-[#0A2240] text-[#0A2240] px-8 py-3 rounded-lg hover:bg-[#F7F8FA] transition-colors" 
            style={{ fontWeight: 600 }}
          >
            Essential Templates
          </button>
        </div>
      </div>
    </section>
  );
}