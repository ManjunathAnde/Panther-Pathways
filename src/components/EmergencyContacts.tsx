import { Phone, AlertTriangle, Shield, Info, Flame, Users, PhoneCall } from 'lucide-react';

export function EmergencyContacts() {
  const emergencyContacts = [
    {
      id: 1,
      title: 'Life-Threatening Emergency',
      subtitle: 'On or Near Campus',
      icon: AlertTriangle,
      iconColor: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      urgent: true,
      contacts: [
        { label: 'GSUPD Emergency Dispatch', number: '404-413-3333', note: '24/7 Emergency Line' }
      ]
    },
    {
      id: 2,
      title: 'GSU Police – Non-Emergency',
      subtitle: 'General Safety & Campus Escorts',
      icon: Shield,
      iconColor: 'text-[#0A2240]',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      contacts: [
        { label: 'Non-Emergency Line', number: '404-413-2100', note: 'For general safety concerns, suspicious activity, assistance, or campus escorts.' }
      ]
    },
    {
      id: 3,
      title: 'Fire or Visible Smoke',
      subtitle: 'On Campus',
      icon: Flame,
      iconColor: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      instructions: [
        'Pull the nearest fire alarm',
        'Move to a safe location',
        'Call 911',
        'Then immediately call GSUPD Emergency: 404-413-3333'
      ]
    },
    {
      id: 4,
      title: 'Campus Emergency Information Line',
      subtitle: 'Updates During Emergencies',
      icon: Info,
      iconColor: 'text-[#0A2240]',
      bgColor: 'bg-[#F7F8FA]',
      borderColor: 'border-gray-200',
      contacts: [
        { label: '404-413-3637 (404-413-EMER)', number: '404-413-3637', note: 'Provides updates during campus-wide emergencies or closures.' }
      ]
    },
    {
      id: 5,
      title: 'GSUPD Safety Escort Services',
      subtitle: '24/7 Assistance',
      icon: Users,
      iconColor: 'text-[#C8A457]',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      contacts: [
        { label: 'Walk/Ride Escort', number: '404-413-2100' },
        { label: '24/7 Assistance / Vehicle Jumpstarts / Escorts', number: '404-413-3333' }
      ]
    },
    {
      id: 6,
      title: 'GSUPD Information Desk',
      subtitle: 'General Safety Questions',
      icon: Phone,
      iconColor: 'text-[#0A2240]',
      bgColor: 'bg-[#F7F8FA]',
      borderColor: 'border-gray-200',
      contacts: [
        { label: 'Information Desk', number: '404-413-3234', note: 'Lost & Found, general safety questions, escort program information.' }
      ]
    },
    {
      id: 7,
      title: 'GSUPD TTY / Hearing-Impaired Line',
      subtitle: 'Accessible Emergency Services',
      icon: PhoneCall,
      iconColor: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      contacts: [
        { label: 'TTY Line', number: '404-413-3203' }
      ]
    }
  ];

  return (
    <section id="emergency-contacts" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <AlertTriangle className="w-10 h-10 text-red-600" />
            <h2 className="text-[#0A2240]" style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.02em' }}>
              Emergency Contacts – Atlanta Campus
            </h2>
          </div>
          <p className="text-gray-600" style={{ fontSize: '1.125rem', lineHeight: '1.7' }}>
            Quick-access emergency numbers every student should know. Available 24/7.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20">
          {emergencyContacts.map((contact) => {
            const IconComponent = contact.icon;
            return (
              <div
                key={contact.id}
                className={`${contact.bgColor} ${contact.borderColor} border-2 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow`}
              >
                {/* Header with Icon */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`${contact.iconColor} flex-shrink-0`}>
                    <IconComponent className="w-8 h-8" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[#0A2240] mb-1" style={{ fontSize: '1.25rem', fontWeight: 700 }}>
                      {contact.title}
                    </h3>
                    <p className="text-gray-600" style={{ fontSize: '0.875rem' }}>
                      {contact.subtitle}
                    </p>
                  </div>
                </div>

                {/* Contact Information */}
                {contact.contacts && (
                  <div className="space-y-3">
                    {contact.contacts.map((contactInfo, idx) => (
                      <div key={idx} className="bg-white rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-gray-700" style={{ fontWeight: 600 }}>
                            {contactInfo.label}
                          </span>
                          <a
                            href={`tel:${contactInfo.number}`}
                            className={`${contact.urgent ? 'text-red-600' : 'text-[#0A2240]'} hover:underline`}
                            style={{ fontSize: '1.125rem', fontWeight: 700 }}
                          >
                            {contactInfo.number}
                          </a>
                        </div>
                        {contactInfo.note && (
                          <p className="text-gray-600" style={{ fontSize: '0.875rem', lineHeight: '1.6' }}>
                            {contactInfo.note}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Instructions */}
                {contact.instructions && (
                  <div className="bg-white rounded-lg p-4">
                    <ul className="space-y-2">
                      {contact.instructions.map((instruction, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-orange-600 flex-shrink-0" style={{ fontWeight: 700 }}>
                            {idx + 1}.
                          </span>
                          <span className="text-gray-700" style={{ fontSize: '0.938rem', lineHeight: '1.6' }}>
                            {instruction}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Floating Emergency Button for Mobile */}
        <div className="fixed bottom-24 right-8 z-40 lg:hidden">
          <a
            href="tel:404-413-3333"
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105"
            style={{ fontWeight: 700 }}
          >
            <Phone className="w-5 h-5" />
            <span>Call Emergency Now</span>
          </a>
        </div>
      </div>
    </section>
  );
}
