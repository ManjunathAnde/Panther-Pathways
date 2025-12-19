import { Calendar, MapPin, Info, CheckSquare, AlertTriangle, Mail, ChevronDown, ChevronUp, Car, Key, ShoppingBag, XCircle } from 'lucide-react';
import { useState } from 'react';

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function CollapsibleSection({ title, children, defaultOpen = false }: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden mb-4 shadow-md hover:shadow-lg transition-shadow">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between hover:bg-[#F7F8FA] transition-colors"
      >
        <span className="text-[#0A2240]" style={{ fontWeight: 700, fontSize: '1.25rem' }}>
          {title}
        </span>
        {isOpen ? (
          <ChevronUp className="w-6 h-6 text-[#0A2240] flex-shrink-0" />
        ) : (
          <ChevronDown className="w-6 h-6 text-[#0A2240] flex-shrink-0" />
        )}
      </button>

      {isOpen && (
        <div className="px-6 pb-6 pt-2 border-t-2 border-[#C8A457]">
          {children}
        </div>
      )}
    </div>
  );
}

export function MoveInOutEssentials() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <p className="text-gray-600 mb-8" style={{ fontSize: '1.125rem', lineHeight: '1.7' }}>
        A practical guide to help residents arrive and depart smoothly.
      </p>

      {/* Move-In Section */}
      <CollapsibleSection title="Move-In" defaultOpen={true}>
        <div className="space-y-6">
          {/* When Students Arrive */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Calendar className="w-5 h-5 text-[#C8A457]" />
              <h4 className="text-[#0A2240]" style={{ fontWeight: 700, fontSize: '1.125rem' }}>
                When Students Arrive
              </h4>
            </div>
            <ul className="space-y-2 ml-7">
              <li className="text-gray-700 flex items-start gap-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                <span className="text-[#C8A457] mt-1 flex-shrink-0">•</span>
                <span>Move-In appointment required (must sign up in advance).</span>
              </li>
              <li className="text-gray-700 flex items-start gap-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                <span className="text-[#C8A457] mt-1 flex-shrink-0">•</span>
                <span>Fall 2025 Move-In: August 20–23, 2025 (9 a.m.–6 p.m.)</span>
              </li>
              <li className="text-gray-700 flex items-start gap-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                <span className="text-[#C8A457] mt-1 flex-shrink-0">•</span>
                <span>Residents cannot arrive after 4 p.m. (Aug 20–23).</span>
              </li>
              <li className="text-gray-700 flex items-start gap-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                <span className="text-[#C8A457] mt-1 flex-shrink-0">•</span>
                <span>Deadline: Must check in by 9 a.m. on first day of classes (Aug 25) or considered a no-show.</span>
              </li>
            </ul>
          </div>

          {/* Where Students Check In */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-5 h-5 text-[#C8A457]" />
              <h4 className="text-[#0A2240]" style={{ fontWeight: 700, fontSize: '1.125rem' }}>
                Where Students Check In
              </h4>
            </div>
            <div className="ml-7 space-y-3">
              <p className="text-gray-700" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                All residents begin at the Student Recreation Center, not at their hall.
              </p>
              <p className="text-gray-700" style={{ fontSize: '1rem', lineHeight: '1.6', fontWeight: 600 }}>
                Residents show:
              </p>
              <ul className="space-y-2">
                <li className="text-gray-700 flex items-start gap-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                  <span className="text-[#C8A457] mt-1 flex-shrink-0">•</span>
                  <span>Panther ID</span>
                </li>
                <li className="text-gray-700 flex items-start gap-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                  <span className="text-[#C8A457] mt-1 flex-shrink-0">•</span>
                  <span>Government-issued ID</span>
                </li>
                <li className="text-gray-700 flex items-start gap-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                  <span className="text-[#C8A457] mt-1 flex-shrink-0">•</span>
                  <span>Arrival Time Confirmation email</span>
                </li>
              </ul>
              <p className="text-gray-700" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                Keys are issued in the Recreation Center gymnasium.
              </p>
              <div className="bg-[#F7F8FA] rounded-lg p-4 mt-3">
                <p className="text-[#0A2240]" style={{ fontSize: '1rem', lineHeight: '1.6', fontWeight: 600 }}>
                  Exception:
                </p>
                <p className="text-gray-700" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                  University Lofts → First go to Lofts Deck (28 Piedmont Ave SE), then walk to the Student Recreation Center.
                </p>
              </div>
            </div>
          </div>

          {/* Required Documents */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Info className="w-5 h-5 text-[#C8A457]" />
              <h4 className="text-[#0A2240]" style={{ fontWeight: 700, fontSize: '1.125rem' }}>
                Required Documents
              </h4>
            </div>
            <ul className="space-y-2 ml-7">
              <li className="text-gray-700 flex items-start gap-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                <span className="text-[#C8A457] mt-1 flex-shrink-0">•</span>
                <span>Government-issued photo ID</span>
              </li>
              <li className="text-gray-700 flex items-start gap-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                <span className="text-[#C8A457] mt-1 flex-shrink-0">•</span>
                <span>Panther ID</span>
              </li>
              <li className="text-gray-700 flex items-start gap-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                <span className="text-[#C8A457] mt-1 flex-shrink-0">•</span>
                <span>Arrival Time Confirmation email</span>
              </li>
            </ul>
          </div>

          {/* How to Receive Keys / Access Cards */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Key className="w-5 h-5 text-[#C8A457]" />
              <h4 className="text-[#0A2240]" style={{ fontWeight: 700, fontSize: '1.125rem' }}>
                How to Receive Keys / Access Cards
              </h4>
            </div>
            <ul className="space-y-2 ml-7">
              <li className="text-gray-700 flex items-start gap-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                <span className="text-[#C8A457] mt-1 flex-shrink-0">•</span>
                <span>Issued at the Student Recreation Center gymnasium</span>
              </li>
              <li className="text-gray-700 flex items-start gap-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                <span className="text-[#C8A457] mt-1 flex-shrink-0">•</span>
                <span>Parking passes distributed here (if applicable)</span>
              </li>
            </ul>
          </div>

          {/* Parking & Unloading */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Car className="w-5 h-5 text-[#C8A457]" />
              <h4 className="text-[#0A2240]" style={{ fontWeight: 700, fontSize: '1.125rem' }}>
                Parking & Unloading
              </h4>
            </div>
            <div className="ml-7 space-y-3">
              <ul className="space-y-2">
                <li className="text-gray-700 flex items-start gap-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                  <span className="text-[#C8A457] mt-1 flex-shrink-0">•</span>
                  <span>One-hour complimentary parking in K and N decks</span>
                </li>
                <li className="text-gray-700 flex items-start gap-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                  <span className="text-[#C8A457] mt-1 flex-shrink-0">•</span>
                  <span>Limit: 1 vehicle per resident</span>
                </li>
                <li className="text-gray-700 flex items-start gap-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                  <span className="text-[#C8A457] mt-1 flex-shrink-0">•</span>
                  <span>Oversized vehicles not permitted</span>
                </li>
              </ul>
              
              <p className="text-gray-700" style={{ fontSize: '1rem', lineHeight: '1.6', fontWeight: 600 }}>
                After check-in, proceed to your hall's unloading zone:
              </p>

              {/* Unloading Locations Table */}
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border-2 border-[#0A2240] rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-[#0A2240]">
                      <th className="border-2 border-[#0A2240] px-4 py-3 text-left text-white" style={{ fontWeight: 700, fontSize: '0.9375rem' }}>
                        Residence Hall
                      </th>
                      <th className="border-2 border-[#0A2240] px-4 py-3 text-left text-white" style={{ fontWeight: 700, fontSize: '0.9375rem' }}>
                        Unloading Location
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white hover:bg-[#F7F8FA]">
                      <td className="border-2 border-gray-300 px-4 py-3 text-gray-700" style={{ fontSize: '0.9375rem' }}>Piedmont North</td>
                      <td className="border-2 border-gray-300 px-4 py-3 text-gray-700" style={{ fontSize: '0.9375rem' }}>175 Piedmont Ave</td>
                    </tr>
                    <tr className="bg-[#F7F8FA] hover:bg-white">
                      <td className="border-2 border-gray-300 px-4 py-3 text-gray-700" style={{ fontSize: '0.9375rem' }}>University Commons</td>
                      <td className="border-2 border-gray-300 px-4 py-3 text-gray-700" style={{ fontSize: '0.9375rem' }}>214 John Wesley Dobbs Ave NE</td>
                    </tr>
                    <tr className="bg-white hover:bg-[#F7F8FA]">
                      <td className="border-2 border-gray-300 px-4 py-3 text-gray-700" style={{ fontSize: '0.9375rem' }}>Piedmont Central</td>
                      <td className="border-2 border-gray-300 px-4 py-3 text-gray-700" style={{ fontSize: '0.9375rem' }}>68 Piedmont Ave NE</td>
                    </tr>
                    <tr className="bg-[#F7F8FA] hover:bg-white">
                      <td className="border-2 border-gray-300 px-4 py-3 text-gray-700" style={{ fontSize: '0.9375rem' }}>Patton Hall & Greek Housing</td>
                      <td className="border-2 border-gray-300 px-4 py-3 text-gray-700" style={{ fontSize: '0.9375rem' }}>18 Piedmont Ave NE</td>
                    </tr>
                    <tr className="bg-white hover:bg-[#F7F8FA]">
                      <td className="border-2 border-gray-300 px-4 py-3 text-gray-700" style={{ fontSize: '0.9375rem' }}>University Lofts</td>
                      <td className="border-2 border-gray-300 px-4 py-3 text-gray-700" style={{ fontSize: '0.9375rem' }}>28 Piedmont Ave SE</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                Unload within one hour, then move car off campus unless you have a housing parking permit.
              </p>
            </div>
          </div>

          {/* What to Bring */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <ShoppingBag className="w-5 h-5 text-[#C8A457]" />
              <h4 className="text-[#0A2240]" style={{ fontWeight: 700, fontSize: '1.125rem' }}>
                What to Bring (Essentials)
              </h4>
            </div>
            <ul className="space-y-2 ml-7">
              <li className="text-gray-700 flex items-start gap-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                <span className="text-[#C8A457] mt-1 flex-shrink-0">•</span>
                <span>XL twin sheets (2 sets)</span>
              </li>
              <li className="text-gray-700 flex items-start gap-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                <span className="text-[#C8A457] mt-1 flex-shrink-0">•</span>
                <span>Blanket, pillow, pillowcases</span>
              </li>
              <li className="text-gray-700 flex items-start gap-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                <span className="text-[#C8A457] mt-1 flex-shrink-0">•</span>
                <span>Power strip (12–14 gauge)</span>
              </li>
              <li className="text-gray-700 flex items-start gap-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                <span className="text-[#C8A457] mt-1 flex-shrink-0">•</span>
                <span>Desk/floor lamp (no halogen)</span>
              </li>
              <li className="text-gray-700 flex items-start gap-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                <span className="text-[#C8A457] mt-1 flex-shrink-0">•</span>
                <span>Laundry bag + detergent</span>
              </li>
              <li className="text-gray-700 flex items-start gap-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                <span className="text-[#C8A457] mt-1 flex-shrink-0">•</span>
                <span>Under-bed storage</span>
              </li>
              <li className="text-gray-700 flex items-start gap-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                <span className="text-[#C8A457] mt-1 flex-shrink-0">•</span>
                <span>Hangers</span>
              </li>
              <li className="text-gray-700 flex items-start gap-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                <span className="text-[#C8A457] mt-1 flex-shrink-0">•</span>
                <span>Small first-aid kit</span>
              </li>
              <li className="text-gray-700 flex items-start gap-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                <span className="text-[#C8A457] mt-1 flex-shrink-0">•</span>
                <span>Collapsible dolly/wagon</span>
              </li>
            </ul>
          </div>

          {/* What NOT to Bring */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <XCircle className="w-5 h-5 text-[#C8A457]" />
              <h4 className="text-[#0A2240]" style={{ fontWeight: 700, fontSize: '1.125rem' }}>
                What NOT to Bring
              </h4>
            </div>
            <ul className="space-y-2 ml-7">
              <li className="text-gray-700 flex items-start gap-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                <span className="text-[#C8A457] mt-1 flex-shrink-0">•</span>
                <span>Space heaters, hot plates, grills</span>
              </li>
              <li className="text-gray-700 flex items-start gap-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                <span className="text-[#C8A457] mt-1 flex-shrink-0">•</span>
                <span>Candles, incense, fireworks</span>
              </li>
              <li className="text-gray-700 flex items-start gap-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                <span className="text-[#C8A457] mt-1 flex-shrink-0">•</span>
                <span>Extension cords</span>
              </li>
              <li className="text-gray-700 flex items-start gap-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                <span className="text-[#C8A457] mt-1 flex-shrink-0">•</span>
                <span>Personal microwaves & mini-fridges (Patton, Piedmont Central, Piedmont North)</span>
              </li>
              <li className="text-gray-700 flex items-start gap-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                <span className="text-[#C8A457] mt-1 flex-shrink-0">•</span>
                <span>Personal internet routers</span>
              </li>
              <li className="text-gray-700 flex items-start gap-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                <span className="text-[#C8A457] mt-1 flex-shrink-0">•</span>
                <span>Door cameras / personal locks</span>
              </li>
              <li className="text-gray-700 flex items-start gap-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                <span className="text-[#C8A457] mt-1 flex-shrink-0">•</span>
                <span>Electric scooters, hoverboards</span>
              </li>
              <li className="text-gray-700 flex items-start gap-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                <span className="text-[#C8A457] mt-1 flex-shrink-0">•</span>
                <span>Pets (except fish ≤10 gallons)</span>
              </li>
            </ul>
          </div>
        </div>
      </CollapsibleSection>

      {/* Move-Out Section */}
      <CollapsibleSection title="Move-Out">
        <div className="space-y-6">
          {/* Standard Move-Out Deadline */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Calendar className="w-5 h-5 text-[#C8A457]" />
              <h4 className="text-[#0A2240]" style={{ fontWeight: 700, fontSize: '1.125rem' }}>
                Standard Move-Out Deadline
              </h4>
            </div>
            <ul className="space-y-2 ml-7">
              <li className="text-gray-700 flex items-start gap-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                <span className="text-[#C8A457] mt-1 flex-shrink-0">•</span>
                <span>Fall 2025: December 17, 2025 at 12 p.m.</span>
              </li>
              <li className="text-gray-700 flex items-start gap-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                <span className="text-[#C8A457] mt-1 flex-shrink-0">•</span>
                <span>Residents must move out within 24 hours of their last final exam.</span>
              </li>
            </ul>
          </div>

          {/* Cleaning Expectations */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <CheckSquare className="w-5 h-5 text-[#C8A457]" />
              <h4 className="text-[#0A2240]" style={{ fontWeight: 700, fontSize: '1.125rem' }}>
                Cleaning Expectations
              </h4>
            </div>
            <ul className="space-y-2 ml-7">
              <li className="text-gray-700 flex items-start gap-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                <span className="text-[#C8A457] mt-1 flex-shrink-0">•</span>
                <span>Remove all belongings</span>
              </li>
              <li className="text-gray-700 flex items-start gap-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                <span className="text-[#C8A457] mt-1 flex-shrink-0">•</span>
                <span>Empty drawers, cabinets, shelves</span>
              </li>
              <li className="text-gray-700 flex items-start gap-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                <span className="text-[#C8A457] mt-1 flex-shrink-0">•</span>
                <span>Remove all trash</span>
              </li>
              <li className="text-gray-700 flex items-start gap-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                <span className="text-[#C8A457] mt-1 flex-shrink-0">•</span>
                <span>Sweep, mop, and wipe all surfaces</span>
              </li>
              <li className="text-gray-700 flex items-start gap-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                <span className="text-[#C8A457] mt-1 flex-shrink-0">•</span>
                <span>Clean bathtub, sink, toilet, oven, stove, microwave, refrigerator</span>
              </li>
              <li className="text-gray-700 flex items-start gap-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                <span className="text-[#C8A457] mt-1 flex-shrink-0">•</span>
                <span>Return furniture to original position</span>
              </li>
              <li className="text-gray-700 flex items-start gap-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                <span className="text-[#C8A457] mt-1 flex-shrink-0">•</span>
                <span>Leave AC set to 70° cool</span>
              </li>
              <li className="text-gray-700 flex items-start gap-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                <span className="text-[#C8A457] mt-1 flex-shrink-0">•</span>
                <span>Complete roommate Cleaning Agreement (due Dec 3)</span>
              </li>
            </ul>
          </div>

          {/* How to Return Keys */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Key className="w-5 h-5 text-[#C8A457]" />
              <h4 className="text-[#0A2240]" style={{ fontWeight: 700, fontSize: '1.125rem' }}>
                How to Return Keys
              </h4>
            </div>
            <div className="ml-7 space-y-3">
              <p className="text-gray-700" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                Use Express Checkout located near your front desk
              </p>
              <p className="text-gray-700" style={{ fontSize: '1rem', lineHeight: '1.6', fontWeight: 600 }}>
                Return:
              </p>
              <ul className="space-y-2">
                <li className="text-gray-700 flex items-start gap-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                  <span className="text-[#C8A457] mt-1 flex-shrink-0">•</span>
                  <span>Room key</span>
                </li>
                <li className="text-gray-700 flex items-start gap-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                  <span className="text-[#C8A457] mt-1 flex-shrink-0">•</span>
                  <span>Access card/fob</span>
                </li>
                <li className="text-gray-700 flex items-start gap-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                  <span className="text-[#C8A457] mt-1 flex-shrink-0">•</span>
                  <span>Mailbox key</span>
                </li>
              </ul>
              <p className="text-gray-700" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                If mailbox room is closed, place mailbox key inside the checkout envelope
              </p>
              <div className="bg-[#FFF9E6] border-l-4 border-[#C8A457] rounded-lg p-4 mt-3">
                <p className="text-[#0A2240]" style={{ fontSize: '1rem', lineHeight: '1.6', fontWeight: 600 }}>
                  Once keys are returned → no re-entry allowed
                </p>
              </div>
            </div>
          </div>

          {/* Common Fines to Avoid */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-5 h-5 text-[#C8A457]" />
              <h4 className="text-[#0A2240]" style={{ fontWeight: 700, fontSize: '1.125rem' }}>
                Common Fines to Avoid
              </h4>
            </div>
            <div className="ml-7">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border-2 border-[#0A2240] rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-[#0A2240]">
                      <th className="border-2 border-[#0A2240] px-4 py-3 text-left text-white" style={{ fontWeight: 700, fontSize: '0.9375rem' }}>
                        Violation
                      </th>
                      <th className="border-2 border-[#0A2240] px-4 py-3 text-left text-white" style={{ fontWeight: 700, fontSize: '0.9375rem' }}>
                        Fee
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white hover:bg-[#F7F8FA]">
                      <td className="border-2 border-gray-300 px-4 py-3 text-gray-700" style={{ fontSize: '0.9375rem' }}>Improper Checkout</td>
                      <td className="border-2 border-gray-300 px-4 py-3 text-gray-700" style={{ fontSize: '0.9375rem' }}>$75</td>
                    </tr>
                    <tr className="bg-[#F7F8FA] hover:bg-white">
                      <td className="border-2 border-gray-300 px-4 py-3 text-gray-700" style={{ fontSize: '0.9375rem' }}>Late Stay</td>
                      <td className="border-2 border-gray-300 px-4 py-3 text-gray-700" style={{ fontSize: '0.9375rem' }}>$60/day</td>
                    </tr>
                    <tr className="bg-white hover:bg-[#F7F8FA]">
                      <td className="border-2 border-gray-300 px-4 py-3 text-gray-700" style={{ fontSize: '0.9375rem' }}>Lost Room Key</td>
                      <td className="border-2 border-gray-300 px-4 py-3 text-gray-700" style={{ fontSize: '0.9375rem' }}>$95</td>
                    </tr>
                    <tr className="bg-[#F7F8FA] hover:bg-white">
                      <td className="border-2 border-gray-300 px-4 py-3 text-gray-700" style={{ fontSize: '0.9375rem' }}>Lost Access Card/Fob</td>
                      <td className="border-2 border-gray-300 px-4 py-3 text-gray-700" style={{ fontSize: '0.9375rem' }}>$45</td>
                    </tr>
                    <tr className="bg-white hover:bg-[#F7F8FA]">
                      <td className="border-2 border-gray-300 px-4 py-3 text-gray-700" style={{ fontSize: '0.9375rem' }}>Lost Mailbox Key</td>
                      <td className="border-2 border-gray-300 px-4 py-3 text-gray-700" style={{ fontSize: '0.9375rem' }}>$60</td>
                    </tr>
                    <tr className="bg-[#F7F8FA] hover:bg-white">
                      <td className="border-2 border-gray-300 px-4 py-3 text-gray-700" style={{ fontSize: '0.9375rem' }}>Extra Cleaning</td>
                      <td className="border-2 border-gray-300 px-4 py-3 text-gray-700" style={{ fontSize: '0.9375rem' }}>$60 per room</td>
                    </tr>
                    <tr className="bg-white hover:bg-[#F7F8FA]">
                      <td className="border-2 border-gray-300 px-4 py-3 text-gray-700" style={{ fontSize: '0.9375rem' }}>Trash Removal</td>
                      <td className="border-2 border-gray-300 px-4 py-3 text-gray-700" style={{ fontSize: '0.9375rem' }}>$25 per container / $125 per bin</td>
                    </tr>
                    <tr className="bg-[#F7F8FA] hover:bg-white">
                      <td className="border-2 border-gray-300 px-4 py-3 text-gray-700" style={{ fontSize: '0.9375rem' }}>Carpet Stain Cleaning</td>
                      <td className="border-2 border-gray-300 px-4 py-3 text-gray-700" style={{ fontSize: '0.9375rem' }}>$60 each (max $185)</td>
                    </tr>
                    <tr className="bg-white hover:bg-[#F7F8FA]">
                      <td className="border-2 border-gray-300 px-4 py-3 text-gray-700" style={{ fontSize: '0.9375rem' }}>Holes in Walls</td>
                      <td className="border-2 border-gray-300 px-4 py-3 text-gray-700" style={{ fontSize: '0.9375rem' }}>$90 per sq. ft.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Mail & Packages */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Mail className="w-5 h-5 text-[#C8A457]" />
              <h4 className="text-[#0A2240]" style={{ fontWeight: 700, fontSize: '1.125rem' }}>
                Mail & Packages
              </h4>
            </div>
            <ul className="space-y-2 ml-7">
              <li className="text-gray-700 flex items-start gap-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                <span className="text-[#C8A457] mt-1 flex-shrink-0">•</span>
                <span>Complete a Mail Forwarding Form before leaving</span>
              </li>
              <li className="text-gray-700 flex items-start gap-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                <span className="text-[#C8A457] mt-1 flex-shrink-0">•</span>
                <span>Mail forwarded for 30 days</span>
              </li>
              <li className="text-gray-700 flex items-start gap-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                <span className="text-[#C8A457] mt-1 flex-shrink-0">•</span>
                <span>After 30 days → returned to sender</span>
              </li>
              <li className="text-gray-700 flex items-start gap-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                <span className="text-[#C8A457] mt-1 flex-shrink-0">•</span>
                <span>Unclaimed packages returned after 1 week</span>
              </li>
              <li className="text-gray-700 flex items-start gap-3" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                <span className="text-[#C8A457] mt-1 flex-shrink-0">•</span>
                <span>Update mailing address in PAWS</span>
              </li>
            </ul>
          </div>
        </div>
      </CollapsibleSection>
    </div>
  );
}
