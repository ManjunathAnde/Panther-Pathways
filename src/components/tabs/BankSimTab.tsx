import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function CollapsibleSection({ title, children, defaultOpen = false }: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#F7F8FA] transition-colors"
      >
        <span className="text-[#0A2240]" style={{ fontWeight: 700, fontSize: '1.125rem' }}>
          {title}
        </span>
        <div className="w-8 h-8 bg-[#0A2240] rounded-full flex items-center justify-center">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-white" />
          ) : (
            <ChevronDown className="w-5 h-5 text-white" />
          )}
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 border-t border-gray-200">
          {children}
        </div>
      )}
    </div>
  );
}

export function BankSimTab() {
  return (
    <div className="space-y-6">
      {/* A. Banking */}
      <CollapsibleSection title="A. Banking" defaultOpen={true}>
        <div className="pt-6 space-y-6">
          {/* Sub-header */}
          <h4 className="text-[#0A2240] tracking-wider" style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em' }}>
            BANKING
          </h4>

          {/* 1. Wells Fargo */}
          <div className="space-y-3">
            <h5 className="text-[#0A2240]" style={{ fontWeight: 700 }}>
              1. Wells Fargo – Tech Parkway Branch
            </h5>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-gray-700">•</span>
                <span className="text-gray-700">
                  <span style={{ fontWeight: 600 }}>Distance:</span> ~0.5 miles (6–8 min walk)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-700">•</span>
                <span className="text-gray-700">
                  <span style={{ fontWeight: 600 }}>Address:</span> 645 State St NW, Atlanta, GA 30313
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-700">•</span>
                <span className="text-gray-700">
                  <span style={{ fontWeight: 600 }}>Requirements:</span> Passport, I 20/DS 2019, proof of local address (no SSN required)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-700">•</span>
                <span className="text-gray-700">
                  <span style={{ fontWeight: 600 }}>Website:</span>{' '}
                  <a
                    href="https://www.wellsfargo.com/locator/search/Atlanta_GA_30313/wellsfargo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0A2240] hover:text-[#C8A457] underline"
                  >
                    https://www.wellsfargo.com/locator/search/Atlanta_GA_30313/wellsfargo
                  </a>
                </span>
              </li>
            </ul>
          </div>

          {/* 2. Bank of America */}
          <div className="space-y-3">
            <h5 className="text-[#0A2240]" style={{ fontWeight: 700 }}>
              2. Bank of America – Peachtree Center
            </h5>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-gray-700">•</span>
                <span className="text-gray-700">
                  <span style={{ fontWeight: 600 }}>Distance:</span> ~0.6 miles (8–10 min walk)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-700">•</span>
                <span className="text-gray-700">
                  <span style={{ fontWeight: 600 }}>Address:</span> 240 Peachtree St NW, Atlanta, GA 30303
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-700">•</span>
                <span className="text-gray-700">
                  <span style={{ fontWeight: 600 }}>Requirements:</span> Passport, I 20/DS 2019, proof of address, secondary ID
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-700">•</span>
                <span className="text-gray-700">
                  <span style={{ fontWeight: 600 }}>Website:</span>{' '}
                  <a
                    href="https://locators.bankofamerica.com/ga/atlanta/locators.bankofamerica"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0A2240] hover:text-[#C8A457] underline"
                  >
                    https://locators.bankofamerica.com/ga/atlanta/locators.bankofamerica
                  </a>
                </span>
              </li>
            </ul>
          </div>

          {/* 3. Regions Bank */}
          <div className="space-y-3">
            <h5 className="text-[#0A2240]" style={{ fontWeight: 700 }}>
              3. Regions Bank – Piedmont Avenue
            </h5>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-gray-700">•</span>
                <span className="text-gray-700">
                  <span style={{ fontWeight: 600 }}>Distance:</span> ~0.7 miles (10–12 min walk)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-700">•</span>
                <span className="text-gray-700">
                  <span style={{ fontWeight: 600 }}>Address:</span> 1544 Piedmont Ave NE, Ste 215, Atlanta, GA 30324
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-700">•</span>
                <span className="text-gray-700">
                  <span style={{ fontWeight: 600 }}>Requirements:</span> Passport, I 20/DS 2019, local address proof, possibly SSN if available
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-700">•</span>
                <span className="text-gray-700">
                  <span style={{ fontWeight: 600 }}>Website:</span>{' '}
                  <a
                    href="https://www.mapquest.com/us/georgia/regions-bank-381i624mapquest"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0A2240] hover:text-[#C8A457] underline"
                  >
                    https://www.mapquest.com/us/georgia/regions-bank-381i624mapquest
                  </a>
                </span>
              </li>
            </ul>
          </div>

          {/* 4. Fifth Third Bank */}
          <div className="space-y-3">
            <h5 className="text-[#0A2240]" style={{ fontWeight: 700 }}>
              4. Fifth Third Bank – Lindbergh Plaza
            </h5>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-gray-700">•</span>
                <span className="text-gray-700">
                  <span style={{ fontWeight: 600 }}>Distance:</span> ~0.9 miles (12–15 min walk)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-700">•</span>
                <span className="text-gray-700">
                  <span style={{ fontWeight: 600 }}>Address:</span> 2555 Piedmont Road NE, Atlanta, GA 30324
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-700">•</span>
                <span className="text-gray-700">
                  <span style={{ fontWeight: 600 }}>Requirements:</span> Passport, I 20/DS 2019, proof of U.S. address, secondary ID
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-700">•</span>
                <span className="text-gray-700">
                  <span style={{ fontWeight: 600 }}>Website:</span>{' '}
                  <a
                    href="https://locations.53.com/ga/atlanta/2555-piedmont-road-ne.html?locations.53"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0A2240] hover:text-[#C8A457] underline"
                  >
                    https://locations.53.com/ga/atlanta/2555-piedmont-road-ne.html?locations.53
                  </a>
                </span>
              </li>
            </ul>
          </div>

          {/* General Note */}
          <div className="bg-[#F7F8FA] rounded-lg p-4 border-l-4 border-[#0A2240]">
            <p className="text-gray-700" style={{ lineHeight: '1.7' }}>
              <span style={{ fontWeight: 700 }}>General Note:</span> Most U.S. banks allow international students to open checking/savings accounts with passport, I 20/DS 2019, and proof of local address (lease, utility bill, or school letter). SSN is not required for basic accounts but may be requested.
            </p>
          </div>
        </div>
      </CollapsibleSection>

      {/* B. SIM */}
      <CollapsibleSection title="B. SIM" defaultOpen={false}>
        <div className="pt-6 space-y-6">
          {/* Sub-header */}
          <h4 className="text-[#0A2240] tracking-wider" style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em' }}>
            SIM
          </h4>

          {/* 1. Major U.S. Carrier Prepaid SIMs */}
          <div className="space-y-3">
            <h5 className="text-[#0A2240]" style={{ fontWeight: 700 }}>
              1. Major U.S. Carrier Prepaid SIMs
            </h5>
            <p className="text-gray-700 ml-4" style={{ lineHeight: '1.7' }}>
              Large U.S. carriers (such as AT&T, T-Mobile, and Verizon) sell prepaid SIM or eSIM plans that work on most unlocked phones.
            </p>
            
            <div className="ml-4 space-y-4">
              <div>
                <p className="text-gray-700" style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
                  Where to find them:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-700">•</span>
                    <span className="text-gray-700">
                      Carrier stores in Atlanta and many electronics/phone shops at or near Hartsfield-Jackson Atlanta International Airport.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-700">•</span>
                    <span className="text-gray-700">
                      Big retail chains (e.g., electronics stores, general supermarkets) often sell prepaid starter kits for these networks.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-gray-700" style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
                  Typical requirements (prepaid):
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-700">•</span>
                    <span className="text-gray-700">Unlocked phone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-700">•</span>
                    <span className="text-gray-700">Passport or photo ID</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-700">•</span>
                    <span className="text-gray-700">U.S. contact address</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-700">•</span>
                    <span className="text-gray-700">SSN usually not required for prepaid</span>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-gray-700" style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
                  Typical introductory offers:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-700">•</span>
                    <span className="text-gray-700">
                      Unlimited U.S. talk/text + fixed high-speed data amounts (3GB, 15GB, or unlimited)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-700">•</span>
                    <span className="text-gray-700">Fixed monthly price</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-700">•</span>
                    <span className="text-gray-700">
                      Some plans include international calling/texting add-ons
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-gray-700" style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
                  Useful comparison links:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-700">•</span>
                    <span className="text-gray-700">
                      AT&T Prepaid:{' '}
                      <a
                        href="https://www.att.com/prepaid/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0A2240] hover:text-[#C8A457] underline"
                      >
                        https://www.att.com/prepaid/
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-700">•</span>
                    <span className="text-gray-700">
                      T-Mobile Prepaid:{' '}
                      <a
                        href="https://prepaid.t-mobile.com/prepaid-plans"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0A2240] hover:text-[#C8A457] underline"
                      >
                        https://prepaid.t-mobile.com/prepaid-plans
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-700">•</span>
                    <span className="text-gray-700">
                      Verizon Prepaid:{' '}
                      <a
                        href="https://www.verizon.com/plans/prepaid/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0A2240] hover:text-[#C8A457] underline"
                      >
                        https://www.verizon.com/plans/prepaid/
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 2. Multi-Carrier SIM Kits Sold at the Airport */}
          <div className="space-y-3">
            <h5 className="text-[#0A2240]" style={{ fontWeight: 700 }}>
              2. Multi-Carrier SIM Kits Sold at the Airport
            </h5>
            <p className="text-gray-700 ml-4" style={{ lineHeight: '1.7' }}>
              Some airport shops (e.g., InMotion at ATL) and travel SIM providers sell multi-carrier starter kits.
            </p>
            
            <div className="ml-4 space-y-4">
              <div>
                <p className="text-gray-700" style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
                  What they are:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-700">•</span>
                    <span className="text-gray-700">
                      A physical SIM that can be activated on several networks (often AT&T, Verizon, or T-Mobile) via partners like TracFone.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-gray-700" style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
                  Typical introductory example:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-700">•</span>
                    <span className="text-gray-700">SIM card cost ≈ $1</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-700">•</span>
                    <span className="text-gray-700">
                      30-day plans: unlimited U.S. talk/text + a few GB of data (e.g., 3GB) for around $30
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-700">•</span>
                    <span className="text-gray-700">Exact details vary by provider</span>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-gray-700" style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
                  Where to learn more:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-700">•</span>
                    <span className="text-gray-700">
                      InMotion ATL Stores:{' '}
                      <a
                        href="https://www.inmotionstores.com/airports-cities/atlanta"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0A2240] hover:text-[#C8A457] underline"
                      >
                        https://www.inmotionstores.com/airports-cities/atlanta
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-700">•</span>
                    <span className="text-gray-700">
                      Atlanta SIM Overview:{' '}
                      <a
                        href="https://www.esim.net/guides/atlanta-sim-card-guide"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0A2240] hover:text-[#C8A457] underline"
                      >
                        https://www.esim.net/guides/atlanta-sim-card-guide
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 3. Online / App-Based eSIM & Student-Focused Services */}
          <div className="space-y-3">
            <h5 className="text-[#0A2240]" style={{ fontWeight: 700 }}>
              3. Online / App-Based eSIM & Student-Focused Services
            </h5>
            <p className="text-gray-700 ml-4" style={{ lineHeight: '1.7' }}>
              Several companies let students activate a U.S. phone number + data plan online (eSIM) or receive a physical SIM before travel.
            </p>
            
            <div className="ml-4 space-y-4">
              <div>
                <p className="text-gray-700" style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
                  What they offer:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-700">•</span>
                    <span className="text-gray-700">
                      U.S. numbers + data plans activated through an app or QR code
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-700">•</span>
                    <span className="text-gray-700">
                      Often no need for a U.S. bank account or credit history
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-700">•</span>
                    <span className="text-gray-700">
                      Many student-focused options allow passport-only activation
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-gray-700" style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
                  Typical introductory structures:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-700">•</span>
                    <span className="text-gray-700">
                      Plans organized by monthly data: 4GB, 10GB, 15GB, or unlimited
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-700">•</span>
                    <span className="text-gray-700">Unlimited U.S. talk/text</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-700">•</span>
                    <span className="text-gray-700">Usually $15–$30 per month depending on plan</span>
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-gray-700" style={{ fontWeight: 600, marginBottom: '0.5rem' }}>
                  Useful links:
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-700">•</span>
                    <span className="text-gray-700">
                      International Student SIM:{' '}
                      <a
                        href="https://www.internationalstudent.com/sim_cards/usa-sim/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0A2240] hover:text-[#C8A457] underline"
                      >
                        https://www.internationalstudent.com/sim_cards/usa-sim/
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-700">•</span>
                    <span className="text-gray-700">
                      campusSIMS:{' '}
                      <a
                        href="https://www.campussims.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0A2240] hover:text-[#C8A457] underline"
                      >
                        https://www.campussims.com
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 4. General Advice */}
          <div className="space-y-3">
            <h5 className="text-[#0A2240]" style={{ fontWeight: 700 }}>
              4. General Advice
            </h5>
            
            <div className="ml-4">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-gray-700">•</span>
                  <span className="text-gray-700">
                    Bring an unlocked phone (locked phones may reject new SIMs).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-700">•</span>
                  <span className="text-gray-700">
                    Compare prepaid plans first — they're easiest for new arrivals and don't need SSN.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-700">•</span>
                  <div className="text-gray-700">
                    <span style={{ fontWeight: 600 }}>Check:</span>
                    <ul className="ml-4 mt-1 space-y-1">
                      <li className="flex items-start gap-2">
                        <span>•</span>
                        <span>Monthly cost</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span>•</span>
                        <span>Data limits + speed (3G/4G/5G)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span>•</span>
                        <span>Hotspot allowance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span>•</span>
                        <span>International calling/texting options</span>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-700">•</span>
                  <span className="text-gray-700">
                    Keep passport + I-20 with you; some store staff may request verification even for prepaid plans.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </CollapsibleSection>
    </div>
  );
}
