import { useState } from 'react';
import { RegistrationTab } from './tabs/RegistrationTab';
import { PreArrivalTab } from './tabs/PreArrivalTab';
import { BankSimTab } from './tabs/BankSimTab';
import { FoodTab } from './tabs/FoodTab';

export function Week1Guide() {
  const [activeTab, setActiveTab] = useState('registration');

  const tabs = [
    { id: 'registration', label: 'Registration & Holds' },
    { id: 'prearrival', label: 'Pre-arrival Checklist' },
    { id: 'banksim', label: 'Bank and SIM' },
    { id: 'food', label: 'Food Near Me' },
  ];

  return (
    <section id="week1-guide" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-[#0A2240] mb-10 text-center" style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.02em' }}>
          Top 5 Things to Know in Week 1
        </h2>

        {/* Tab Navigation */}
        <div className="bg-[#F7F8FA] rounded-xl p-2 mb-8 flex gap-2 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 min-w-[200px] px-6 py-3 rounded-lg transition-all ${
                activeTab === tab.id
                  ? 'bg-[#0A2240] text-white shadow-md'
                  : 'bg-transparent text-[#0A2240] hover:bg-white'
              }`}
              style={{ fontWeight: 600 }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px]">
          {activeTab === 'registration' && <RegistrationTab />}
          {activeTab === 'prearrival' && <PreArrivalTab />}
          {activeTab === 'banksim' && <BankSimTab />}
          {activeTab === 'food' && <FoodTab />}
        </div>
      </div>
    </section>
  );
}