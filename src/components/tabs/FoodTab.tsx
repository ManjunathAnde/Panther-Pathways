import { MapPin, Phone, ExternalLink } from 'lucide-react';

interface RestaurantCardProps {
  name: string;
  flag?: string;
  distance: string;
  tags: string[];
  address: string;
  phone: string;
  description: string;
  mapsUrl: string;
}

function RestaurantCard({ name, flag, distance, tags, address, phone, description, mapsUrl }: RestaurantCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#C8A457]">
      <div className="mb-4">
        <h4 className="text-[#0A2240] mb-2 flex items-center gap-2" style={{ fontSize: '1.25rem', fontWeight: 700 }}>
          {name} {flag && <span>{flag}</span>}
        </h4>
        <div className="flex items-center gap-3 flex-wrap mb-3">
          <span className="text-gray-600">{distance}</span>
          <div className="flex gap-2 flex-wrap">
            {tags.map((tag, index) => (
              <span key={index} className="bg-[#F7F8FA] text-[#0A2240] px-3 py-1 rounded-full" style={{ fontSize: '0.875rem', fontWeight: 500 }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-start gap-2 text-gray-700">
          <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
          <span style={{ fontSize: '0.875rem' }}>{address}</span>
        </div>
        <div className="flex items-start gap-2 text-gray-700">
          <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
          <span style={{ fontSize: '0.875rem' }}>{phone}</span>
        </div>
      </div>

      <p className="text-gray-700 mb-4" style={{ fontSize: '0.875rem', lineHeight: '1.6' }}>
        {description}
      </p>

      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-[#0A2240] text-white px-4 py-2 rounded-lg hover:bg-[#0d2d52] transition-colors"
        style={{ fontWeight: 600, fontSize: '0.875rem' }}
      >
        Open in Google Maps
        <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  );
}

export function FoodTab() {
  const restaurants = [
    {
      name: 'Aamar Indian Cuisine',
      flag: '🇮🇳',
      distance: '0.3 mi',
      tags: ['Indian', 'Halal'],
      address: '200 Peachtree St NW, Atlanta, GA 30303',
      phone: '(404) 524-5444',
      description: 'Authentic Indian cuisine with halal options. Popular among GSU students for flavorful dishes and generous portions. Great for both quick lunch and sit-down dinners.',
      mapsUrl: 'https://maps.google.com/?q=Aamar+Indian+Cuisine+Atlanta'
    },
    {
      name: 'Alma Cocina',
      distance: '0.4 mi',
      tags: ['Latin', 'Mexican'],
      address: '191 Peachtree St NE, Atlanta, GA 30303',
      phone: '(404) 968-9662',
      description: 'Contemporary Latin cuisine with a modern twist. Known for creative tacos, fresh ingredients, and vibrant atmosphere. Perfect for group dining.',
      mapsUrl: 'https://maps.google.com/?q=Alma+Cocina+Atlanta'
    },
    {
      name: "Kenley's Restaurant",
      distance: '0.2 mi',
      tags: ['American', 'Breakfast'],
      address: '88 Edgewood Ave SE, Atlanta, GA 30303',
      phone: '(404) 420-2337',
      description: 'Classic American diner offering hearty breakfast and comfort food. Budget-friendly with large portions. A student favorite for weekend brunch.',
      mapsUrl: 'https://maps.google.com/?q=Kenleys+Restaurant+Atlanta'
    },
    {
      name: 'The Original Hot Dog Factory',
      distance: '0.3 mi',
      tags: ['Fast Food', 'American'],
      address: '61 Broad St NW, Atlanta, GA 30303',
      phone: '(404) 525-4100',
      description: 'Quick and affordable hot dogs with various toppings. Perfect for a quick bite between classes. Cash-friendly and student budget-approved.',
      mapsUrl: 'https://maps.google.com/?q=The+Original+Hot+Dog+Factory+Atlanta'
    },
    {
      name: 'Subway – Edgewood Ave',
      distance: '0.2 mi',
      tags: ['Sandwiches', 'Fast Food'],
      address: '75 Edgewood Ave SE, Atlanta, GA 30303',
      phone: '(404) 659-9595',
      description: 'Convenient sandwich chain near campus. Customizable subs, salads, and wraps. Great for quick meals and takeout.',
      mapsUrl: 'https://maps.google.com/?q=Subway+Edgewood+Ave+Atlanta'
    },
    {
      name: 'Aviva by Kameel – Peachtree Center',
      distance: '0.5 mi',
      tags: ['Mediterranean', 'Halal'],
      address: '233 Peachtree St NE, Atlanta, GA 30303',
      phone: '(404) 420-2120',
      description: 'Fresh Mediterranean fare with halal certification. Offers bowls, wraps, and salads with high-quality ingredients. Healthy option for conscious eaters.',
      mapsUrl: 'https://maps.google.com/?q=Aviva+by+Kameel+Peachtree+Center+Atlanta'
    },
    {
      name: 'Mangos Caribbean Restaurant',
      distance: '0.6 mi',
      tags: ['Caribbean', 'Island Food'],
      address: '180 Auburn Ave NE, Atlanta, GA 30303',
      phone: '(404) 584-3447',
      description: 'Authentic Caribbean flavors with jerk chicken, oxtail, and plantains. Generous portions at reasonable prices. Experience island cuisine near campus.',
      mapsUrl: 'https://maps.google.com/?q=Mangos+Caribbean+Restaurant+Atlanta'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-[#F7F8FA] rounded-xl p-8">
        <h3 className="text-[#0A2240] mb-2" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
          Food Near Campus
        </h3>
        <p className="text-gray-600 mb-8">
          Discover nearby restaurants popular with GSU students. All locations are within walking distance of campus.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {restaurants.map((restaurant, index) => (
            <RestaurantCard key={index} {...restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
}
