import { Book } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo Block */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-[#0A2240] rounded-lg flex items-center justify-center">
            <Book className="w-6 h-6 text-white" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col">
            <span className="text-[#0A2240]" style={{ fontWeight: 700 }}>
              Panther Pathways
            </span>
            <span className="text-gray-500" style={{ fontSize: '0.875rem' }}>
              Your Path. Your Start. Your Panther Story
            </span>
          </div>
        </div>

        {/* Slogan */}
        <div className="text-[#0A2240]" style={{ fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.02em' }}>
          Panthers Start Strong
        </div>
      </div>
    </header>
  );
}