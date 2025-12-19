import { Globe, CheckCircle, MapPin, ExternalLink } from 'lucide-react';

interface LocationCardProps {
  title: string;
  subtitle: string;
  url: string;
}

function LocationCard({ title, subtitle, url }: LocationCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all border border-gray-200 hover:border-[#0A2240] flex flex-col group">
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 bg-[#0A2240] rounded-lg flex items-center justify-center group-hover:bg-[#C8A457] group-hover:scale-110 transition-all duration-300">
          <MapPin className="w-5 h-5 text-white" />
        </div>
        <ExternalLink className="w-4 h-4 text-gray-400" />
      </div>
      
      <h4 className="text-[#0A2240] mb-2" style={{ fontWeight: 700, fontSize: '1.125rem' }}>
        {title}
      </h4>
      
      <p className="text-gray-600 mb-4 flex-1" style={{ fontSize: '0.875rem' }}>
        {subtitle}
      </p>
      
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#0A2240] text-white px-4 py-2 rounded-lg hover:bg-[#0d2d52] transition-colors text-center"
        style={{ fontWeight: 600, fontSize: '0.875rem' }}
      >
        Open in Google Maps
      </a>
    </div>
  );
}

export function PreArrivalTab() {
  return (
    <div className="space-y-8">
      {/* iStart Portal Navigation */}
      <div className="bg-[#F7F8FA] rounded-xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-[#0A2240] rounded-xl flex items-center justify-center">
            <Globe className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-[#0A2240]" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
            iStart Portal Navigation
          </h3>
        </div>

        <div className="space-y-6">
          <p className="text-gray-700" style={{ lineHeight: '1.7' }}>
            iStart is Georgia State's web portal for all immigration services, requests, and benefits. You will use it throughout your pre-arrival process.
          </p>

          <div>
            <h4 className="text-[#0A2240] mb-4" style={{ fontWeight: 700, fontSize: '1.125rem' }}>
              Key iStart Functions:
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#C8A457] rounded-full mt-2"></div>
                <span className="text-gray-700">Request I-20/DS-2019 immigration documents</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#C8A457] rounded-full mt-2"></div>
                <span className="text-gray-700">Upload required documentation</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#C8A457] rounded-full mt-2"></div>
                <span className="text-gray-700">Complete pre-arrival e-forms</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#C8A457] rounded-full mt-2"></div>
                <span className="text-gray-700">Access immigration benefits and services</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#C8A457] rounded-full mt-2"></div>
                <span className="text-gray-700">Track your application status</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 border-l-4 border-[#C8A457]">
            <h4 className="text-[#0A2240] mb-2" style={{ fontWeight: 700 }}>
              Access:
            </h4>
            <p className="text-gray-700 mb-3">
              You will receive iStart login instructions via email after academic acceptance.
            </p>
            <a
              href="https://isss.gsu.edu/current-students/istart-for-students/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0A2240] hover:text-[#C8A457] inline-flex items-center gap-2"
              style={{ fontWeight: 600 }}
            >
              Visit iStart Portal →
            </a>
          </div>
        </div>
      </div>

      {/* Pre-Arrival Checklist */}
      <div className="bg-[#F7F8FA] rounded-xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-[#C8A457]/20 rounded-xl flex items-center justify-center">
            <CheckCircle className="w-6 h-6 text-[#C8A457]" />
          </div>
          <h3 className="text-[#0A2240]" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
            Pre-Arrival Checklist
          </h3>
        </div>

        <p className="text-gray-600 mb-6" style={{ fontStyle: 'italic' }}>
          Complete at least 2–3 weeks before travel
        </p>

        <div className="space-y-6">
          {/* Section 1 */}
          <div className="bg-white rounded-lg p-6">
            <h4 className="text-[#0A2240] mb-4 flex items-center gap-2" style={{ fontWeight: 700, fontSize: '1.125rem' }}>
              <span className="w-8 h-8 bg-[#0A2240] text-white rounded-full flex items-center justify-center">1</span>
              Confirm Enrollment & Apply for Visa
            </h4>
            <ul className="space-y-3 ml-10">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#0A2240] rounded-full mt-2"></div>
                <span className="text-gray-700">Review your I-20/DS-2019 for accuracy</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#0A2240] rounded-full mt-2"></div>
                <span className="text-gray-700">Pay SEVIS I-901 fee at fmjfee.com</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#0A2240] rounded-full mt-2"></div>
                <span className="text-gray-700">Schedule visa interview</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#0A2240] rounded-full mt-2"></div>
                <span className="text-gray-700">Prepare DS-160 confirmation, I-20/DS-2019, passport, financial proof, admission letter</span>
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="bg-white rounded-lg p-6">
            <h4 className="text-[#0A2240] mb-4 flex items-center gap-2" style={{ fontWeight: 700, fontSize: '1.125rem' }}>
              <span className="w-8 h-8 bg-[#0A2240] text-white rounded-full flex items-center justify-center">2</span>
              Upload Immigration Documents to iStart
            </h4>
            <ul className="space-y-3 ml-10">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#0A2240] rounded-full mt-2"></div>
                <span className="text-gray-700">Submit passport, visa, and I-94 through the portal</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#0A2240] rounded-full mt-2"></div>
                <span className="text-gray-700">Upload financial documentation showing liquid funds</span>
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="bg-white rounded-lg p-6">
            <h4 className="text-[#0A2240] mb-4 flex items-center gap-2" style={{ fontWeight: 700, fontSize: '1.125rem' }}>
              <span className="w-8 h-8 bg-[#0A2240] text-white rounded-full flex items-center justify-center">3</span>
              Complete Start@State Online Modules
            </h4>
            <div className="ml-10 space-y-3">
              <p className="text-gray-700">
                <a
                  href="https://onlineorientation.gsu.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0A2240] hover:text-[#C8A457]"
                  style={{ fontWeight: 600 }}
                >
                  https://onlineorientation.gsu.edu
                </a>
              </p>
              <p className="text-gray-700" style={{ fontStyle: 'italic' }}>
                Note: First-year F-1 students do NOT register for New Student Orientation.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="bg-white rounded-lg p-6">
            <h4 className="text-[#0A2240] mb-4 flex items-center gap-2" style={{ fontWeight: 700, fontSize: '1.125rem' }}>
              <span className="w-8 h-8 bg-[#0A2240] text-white rounded-full flex items-center justify-center">4</span>
              Academic Advising & Course Registration
            </h4>
            <ul className="space-y-3 ml-10">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#0A2240] rounded-full mt-2"></div>
                <span className="text-gray-700">Receive invitation for virtual advising after I-20 issuance</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#0A2240] rounded-full mt-2"></div>
                <span className="text-gray-700">Register for classes from your home country during advising</span>
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="bg-white rounded-lg p-6">
            <h4 className="text-[#0A2240] mb-4 flex items-center gap-2" style={{ fontWeight: 700, fontSize: '1.125rem' }}>
              <span className="w-8 h-8 bg-[#0A2240] text-white rounded-full flex items-center justify-center">5</span>
              Request Special Assistance (if needed)
            </h4>
            <ul className="space-y-3 ml-10">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#0A2240] rounded-full mt-2"></div>
                <span className="text-gray-700">Submit disability accommodation requests through iStart</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#0A2240] rounded-full mt-2"></div>
                <span className="text-gray-700">Contact ISSS early for support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* How to Reach Important Locations */}
      <div className="bg-[#F7F8FA] rounded-xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-[#0A2240] rounded-xl flex items-center justify-center">
            <MapPin className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-[#0A2240]" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
            How to Reach Important Locations
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <LocationCard
            title="Student Center"
            subtitle="Recharge, Eat, Gather."
            url="https://www.google.com/maps/search/?api=1&query=55+Gilmer+St+SE+Atlanta+GA+30303"
          />
          <LocationCard
            title="Student Success Center"
            subtitle="ISSS, Advising, Help Desk."
            url="https://www.google.com/maps/search/?api=1&query=25-27+Auburn+Ave+NE+Atlanta+GA+30303"
          />
          <LocationCard
            title="Student Recreation Center"
            subtitle="Gym, Sports, Wellness."
            url="https://www.google.com/maps/search/?api=1&query=101+Piedmont+Ave+SE+Atlanta+GA+30303"
          />
          <LocationCard
            title="75 Piedmont Ave"
            subtitle="Residence, Dining, Daily Essentials."
            url="https://www.google.com/maps/search/?api=1&query=75+Piedmont+Ave+NE+Atlanta+GA+30303"
          />
          <LocationCard
            title="Hurt Park"
            subtitle="Green Space to Unwind."
            url="https://www.google.com/maps/search/?api=1&query=Hurt+Park+Atlanta+GA+30303"
          />
          <LocationCard
            title="Honors College – Centennial Hall"
            subtitle="Honors Classes & Study Spaces."
            url="https://www.google.com/maps/search/?api=1&query=100+Auburn+Ave+NE+Atlanta+GA+30303"
          />
          <LocationCard
            title="25 Park Place"
            subtitle="Advising, Faculty Offices, Services."
            url="https://www.google.com/maps/search/?api=1&query=25+Park+Pl+NE+Atlanta+GA+30303"
          />
          <LocationCard
            title="55 Park Place"
            subtitle="Business, Policy, & Admin Hub."
            url="https://www.google.com/maps/search/?api=1&query=55+Park+Pl+NE+Atlanta+GA+30303"
          />
          <LocationCard
            title="Aderhold Learning Center"
            subtitle="Classrooms, Study Spots, Tutoring."
            url="https://www.google.com/maps/search/?api=1&query=Aderhold+Learning+Center+Atlanta+GA+30303"
          />
        </div>
      </div>
    </div>
  );
}