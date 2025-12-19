import { Lightbulb, MessageCircle, Building2 } from 'lucide-react';

interface CardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  onClick?: () => void;
}

function Card({ icon, title, subtitle, onClick }: CardProps) {
  return (
    <div onClick={onClick} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer overflow-hidden border-l-4 border-[#C8A457] group">
      <div className="p-8">
        {/* Icon */}
        <div className="w-14 h-14 bg-[#F7F8FA] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#C8A457]/10 transition-colors">
          <div className="text-[#0A2240]">
            {icon}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-[#0A2240] mb-3" style={{ fontSize: '1.5rem', fontWeight: 700, lineHeight: '1.3' }}>
          {title}
        </h3>

        {/* Subtitle */}
        <div className="text-[#C8A457] flex items-center gap-2" style={{ fontWeight: 600 }}>
          {subtitle}
        </div>
      </div>
    </div>
  );
}

export function ContentGrid() {
  const handleScrollToWeek1 = () => {
    const element = document.getElementById('week1-guide');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleScrollToTemplates = () => {
    const element = document.getElementById('communication-templates');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleScrollToHousing = () => {
    const element = document.getElementById('housing-overview');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="bg-[#F7F8FA] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            icon={<Lightbulb className="w-7 h-7" strokeWidth={2} />}
            title="Top 5 Things to Know in Week 1"
            subtitle="Get Prepared →"
            onClick={handleScrollToWeek1}
          />
          <Card
            icon={<MessageCircle className="w-7 h-7" strokeWidth={2} />}
            title="Communication & Email Scripts"
            subtitle="Access Templates →"
            onClick={handleScrollToTemplates}
          />
          <Card
            icon={<Building2 className="w-7 h-7" strokeWidth={2} />}
            title="GSU Housing Overview"
            subtitle="Explore Housing →"
            onClick={handleScrollToHousing}
          />
        </div>
      </div>
    </section>
  );
}