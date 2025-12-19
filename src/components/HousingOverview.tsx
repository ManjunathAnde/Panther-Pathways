import { MapPin, Package, Phone, Home, Calendar, Info, CheckSquare, AlertTriangle, Mail, ChevronDown, ChevronUp, Car, Key, ShoppingBag, XCircle } from 'lucide-react';
import { useState } from 'react';
import { MoveInOutEssentials } from './MoveInOutEssentials';

interface ResidenceHallProps {
  name: string;
  address: string;
  mailingAddress: string[];
  frontDesk: string;
  studentType: string;
  roomTypes: string;
  keyFeatures: string[];
  officialLink: string;
}

function ResidenceHallDetails({
  name,
  address,
  mailingAddress,
  frontDesk,
  studentType,
  roomTypes,
  keyFeatures,
  officialLink
}: ResidenceHallProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="space-y-6">
        {/* Address */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-5 h-5 text-[#C8A457]" />
            <h4 className="text-[#0A2240]" style={{ fontWeight: 700, fontSize: '1.125rem' }}>
              Address
            </h4>
          </div>
          <p className="text-gray-700 ml-7" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
            {address}
          </p>
        </div>

        {/* Mailing Address */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Package className="w-5 h-5 text-[#C8A457]" />
            <h4 className="text-[#0A2240]" style={{ fontWeight: 700, fontSize: '1.125rem' }}>
              Mailing Address
            </h4>
          </div>
          <div className="text-gray-700 ml-7" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
            {mailingAddress.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
        </div>

        {/* Front Desk */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Phone className="w-5 h-5 text-[#C8A457]" />
            <h4 className="text-[#0A2240]" style={{ fontWeight: 700, fontSize: '1.125rem' }}>
              Front Desk Phone
            </h4>
          </div>
          <p className="text-gray-700 ml-7" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
            {frontDesk}
          </p>
        </div>

        {/* Student Type */}
        <div>
          <h4 className="text-[#0A2240] mb-3" style={{ fontWeight: 700, fontSize: '1.125rem' }}>
            Student Type
          </h4>
          <p className="text-gray-700 ml-7" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
            {studentType}
          </p>
        </div>

        {/* Room Types */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">🛏️</span>
            <h4 className="text-[#0A2240]" style={{ fontWeight: 700, fontSize: '1.125rem' }}>
              Room Types
            </h4>
          </div>
          <p className="text-gray-700 ml-7" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
            {roomTypes}
          </p>
        </div>

        {/* Key Features */}
        <div>
          <h4 className="text-[#0A2240] mb-3" style={{ fontWeight: 700, fontSize: '1.125rem' }}>
            Key Features
          </h4>
          <ul className="space-y-2 ml-7">
            {keyFeatures.map((feature, idx) => (
              <li
                key={idx}
                className="text-gray-700 flex items-start gap-3"
                style={{ fontSize: '1rem', lineHeight: '1.6' }}
              >
                <span className="text-[#C8A457] mt-1 flex-shrink-0">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Official Link */}
        <div className="pt-2">
          <a
            href={officialLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A2240] text-white rounded-lg hover:bg-[#0A2240]/90 transition-colors shadow-md"
            style={{ fontWeight: 600, fontSize: '1rem' }}
          >
            Official Link →
          </a>
        </div>
      </div>
    </div>
  );
}

export function HousingOverview() {
  const [activeTab, setActiveTab] = useState('patton');

  const tabs = [
    { id: 'patton', label: 'Patton Hall' },
    { id: 'piedmont-central', label: 'Piedmont Central' },
    { id: 'piedmont-north', label: 'Piedmont North' },
    { id: 'commons', label: 'University Commons' },
    { id: 'lofts', label: 'University Lofts' },
    { id: 'greek', label: 'Greek Town Houses' },
    { id: 'moveinout', label: 'Move-In & Move-Out Essentials' },
  ];

  const hallsData: Record<string, ResidenceHallProps> = {
    'patton': {
      name: 'Patton Hall',
      address: '160 Edgewood Avenue, Atlanta, GA 30303',
      mailingAddress: [
        'First and Last Name',
        '160 Edgewood Avenue SE',
        'Atlanta, GA 30303'
      ],
      frontDesk: '404-413-1470',
      studentType: 'First-year students',
      roomTypes: 'Suite-style living for approximately 325 residents on 5 floors. Two resident rooms are connected by a bathroom shared by three residents. Options include double-occupancy rooms (151–178 sq ft) and single-occupancy rooms (106–124 sq ft)',
      keyFeatures: [
        'Community lounges on each floor with wireless internet',
        'Lockable built-in closet, carpeted floors, XL twin bed, dresser, desk & chair',
        'High-speed Ethernet and cable TV in each bedroom',
        'Free laundry facilities',
        'ADA-accessible suites available',
        'Meal plan required'
      ],
      officialLink: 'https://myhousing.gsu.edu/explore-residences/'
    },
    'piedmont-central': {
      name: 'Piedmont Central',
      address: '92 Piedmont Avenue NE, Atlanta, GA 30303',
      mailingAddress: [
        'First and Last Name',
        '92 Piedmont Avenue NE',
        'Atlanta, GA 30303'
      ],
      frontDesk: '404-413-1902',
      studentType: 'Primarily first-year students',
      roomTypes: 'Suite-style living for 1,144 residents on 10 floors with options for private singles or shared bedrooms. Each suite has a common vanity area and private toilet & shower.',
      keyFeatures: [
        '24-hour dining hall (Mon–Fri during fall/spring)',
        'Classroom, study rooms, chat/gather spaces, flix/play/tune rooms',
        'XL twin bed, carpeted floors, lockable closet',
        'High-speed internet',
        'Hosts LLCs: Pre-Nursing, STEM, Performing Arts',
        'Free laundry',
        'Meal plan required'
      ],
      officialLink: 'https://myhousing.gsu.edu/explore-residences/'
    },
    'piedmont-north': {
      name: 'Piedmont North',
      address: '175 Piedmont Avenue NE, Atlanta, GA 30303',
      mailingAddress: [
        'First and Last Name',
        '175 Piedmont Avenue NE',
        'Atlanta, GA 30303'
      ],
      frontDesk: '404-413-1904 (A) / 404-413-1911',
      studentType: 'Primarily first-year students',
      roomTypes: 'Traditional suite-style with single, double, and triple rooms. Private bathroom in each room. Two-building complex housing 1,000+ students.',
      keyFeatures: [
        'On-site dining hall (all-you-care-to-eat, five days a week)',
        'Courtyard for events and relaxation',
        'Learning Center with state-of-the-art technology',
        'XL bed, wardrobe, dresser, desk & chair',
        'Ethernet and cable TV',
        'Free laundry',
        'Meal plan required'
      ],
      officialLink: 'https://myhousing.gsu.edu/explore-residences/'
    },
    'commons': {
      name: 'University Commons (A, B, C & D)',
      address: '141 Piedmont Avenue NE, Atlanta, GA 30303',
      mailingAddress: [
        'First and Last Name',
        '141 Piedmont Avenue NE',
        'Atlanta, GA 30303'
      ],
      frontDesk: '404-413-1900',
      studentType: 'Upperclass students',
      roomTypes: 'Apartment-style living for ~2,000 residents across 4 buildings; options include 2BR/1BA, 2BR/2BA, and 4BR/2BA apartments with private bedrooms.',
      keyFeatures: [
        'Full kitchens (fridge, stove, oven, microwave)',
        'Furnished living spaces',
        'Floor lounges with Wi-Fi and premium cable',
        'Commons Learning Center & conference spaces',
        'Courtyards for events',
        'Free laundry on every floor',
        'Ethernet & cable TV',
        'ADA-accessible units',
        'University Police satellite office',
        'LLCs: Honors, Entrepreneurship, Outdoor Adventure, Social Issues',
        'No meal plan required'
      ],
      officialLink: 'https://myhousing.gsu.edu/explore-residences/'
    },
    'lofts': {
      name: 'University Lofts',
      address: '135 Edgewood Avenue, Atlanta, GA 30303',
      mailingAddress: [
        'First and Last Name',
        '160 Edgewood Avenue SE',
        'Lofts Mailbox #',
        'Atlanta, GA 30303'
      ],
      frontDesk: '404-413-2160',
      studentType: 'Upperclass students',
      roomTypes: 'Loft-style apartments with studios, 1BR, 2BR, 3BR townhomes, and 4BR units; all include living area and full kitchen.',
      keyFeatures: [
        'Fully furnished modern loft-style apartments',
        '24-hour card-key access',
        'Lofts Lounge with TV and premium cable',
        'Multipurpose event room',
        'Lofts Learning Center (classroom + study space)',
        'Courtyard for student events',
        'Free laundry',
        'Ethernet & cable TV',
        'ADA-accessible units',
        'LLC: Global Living',
        'Only hall open during winter break',
        'No meal plan required'
      ],
      officialLink: 'https://myhousing.gsu.edu/explore-residences/'
    },
    'greek': {
      name: 'Greek Town Houses',
      address: '156 Edgewood Avenue, Atlanta, GA 30303',
      mailingAddress: [
        'First and Last Name',
        '160 Edgewood Avenue SE',
        'Atlanta, GA 30303',
        '(Mailroom is in Patton Hall)'
      ],
      frontDesk: '404-413-2179',
      studentType: 'Greek-affiliated upperclass students',
      roomTypes: 'Nine 3-story townhouses ranging from 9–19 beds, housing sorority and fraternity members.',
      keyFeatures: [
        'Spacious living room & kitchen',
        'Furnished bedrooms',
        'Community meeting room',
        'Ethernet & cable TV',
        'Organization-specific interior décor allowed',
        'Free laundry',
        'No meal plan required'
      ],
      officialLink: 'https://myhousing.gsu.edu/explore-residences/'
    }
  };

  return (
    <section id="housing-overview" className="bg-[#F7F8FA] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-[#0A2240] mb-4 text-center" style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.02em' }}>
            GSU Housing Overview
          </h2>
          <p className="text-gray-600 text-center" style={{ fontSize: '1.125rem', lineHeight: '1.7' }}>
            Explore Georgia State University's residence halls and find the perfect home for your college experience.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-xl p-2 mb-8 flex gap-2 flex-wrap shadow-md">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 min-w-[160px] px-4 py-3 rounded-lg transition-all ${
                activeTab === tab.id
                  ? 'bg-[#0A2240] text-white shadow-md'
                  : 'bg-transparent text-[#0A2240] hover:bg-[#F7F8FA]'
              }`}
              style={{ fontWeight: 600, fontSize: '0.9375rem' }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {activeTab && hallsData[activeTab] && (
            <ResidenceHallDetails {...hallsData[activeTab]} />
          )}
          {activeTab === 'moveinout' && <MoveInOutEssentials />}
        </div>

        {/* University Housing Central Office */}
        <div className="mt-8 bg-gradient-to-br from-[#0A2240] to-[#0A2240]/90 rounded-2xl p-8 shadow-xl border-4 border-[#C8A457]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-[#C8A457] rounded-full flex items-center justify-center">
              <Home className="w-6 h-6 text-[#0A2240]" />
            </div>
            <h3 className="text-white" style={{ fontWeight: 800, fontSize: '1.5rem' }}>
              University Housing Central Office
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="mb-4">
                <h4 className="text-[#C8A457] mb-2" style={{ fontWeight: 700, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Address
                </h4>
                <p className="text-white" style={{ fontSize: '0.9375rem', lineHeight: '1.6' }}>
                  75 Piedmont Avenue NE, Suite 110<br />
                  Atlanta, GA 30303
                </p>
              </div>

              <div className="mb-4">
                <h4 className="text-[#C8A457] mb-2" style={{ fontWeight: 700, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Phone
                </h4>
                <p className="text-white" style={{ fontSize: '0.9375rem', lineHeight: '1.6' }}>
                  404-413-1800
                </p>
              </div>

              <div>
                <h4 className="text-[#C8A457] mb-2" style={{ fontWeight: 700, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Fax
                </h4>
                <p className="text-white" style={{ fontSize: '0.9375rem', lineHeight: '1.6' }}>
                  404-413-1803
                </p>
              </div>
            </div>

            <div>
              <div className="mb-4">
                <h4 className="text-[#C8A457] mb-2" style={{ fontWeight: 700, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Email
                </h4>
                <a
                  href="mailto:housing@gsu.edu"
                  className="text-white hover:text-[#C8A457] transition-colors underline"
                  style={{ fontSize: '0.9375rem', lineHeight: '1.6' }}
                >
                  housing@gsu.edu
                </a>
              </div>

              <div>
                <h4 className="text-[#C8A457] mb-2" style={{ fontWeight: 700, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Office Hours
                </h4>
                <p className="text-white" style={{ fontSize: '0.9375rem', lineHeight: '1.6' }}>
                  Monday–Friday<br />
                  8:30 a.m.–5:15 p.m.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}