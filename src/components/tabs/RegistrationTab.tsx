import { ExternalLink, AlertCircle, ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';
import { useState } from 'react';

interface CollapsibleRuleProps {
  title: string;
  description: string;
  learnMoreLinks: Array<{ url: string; label: string }>;
}

function CollapsibleRule({ title, description, learnMoreLinks }: CollapsibleRuleProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center gap-3 hover:bg-[#F7F8FA] transition-colors"
      >
        <CheckCircle className="w-5 h-5 text-[#0A2240] flex-shrink-0" />
        <span className="text-[#0A2240] flex-1 text-left" style={{ fontWeight: 600 }}>
          {title}
        </span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-[#0A2240] flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[#0A2240] flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-6 pt-2 border-t border-gray-100">
          <p className="text-gray-700 mb-4" style={{ lineHeight: '1.7' }}>
            {description}
          </p>
          <div className="flex flex-wrap gap-3">
            {learnMoreLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0A2240] hover:text-[#C8A457] inline-flex items-center gap-1"
                style={{ fontWeight: 600 }}
              >
                {link.label} →
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function RegistrationTab() {
  return (
    <div className="space-y-8">
      {/* Portal Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* PAWS Portal */}
        <a
          href="https://paws.gsu.edu"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0A2240] rounded-xl p-6 flex items-center justify-between cursor-pointer hover:bg-[#0d2d52] transition-colors"
        >
          <div>
            <h3 className="text-white mb-1" style={{ fontSize: '1.25rem', fontWeight: 700 }}>
              PAWS Portal
            </h3>
            <p className="text-white/80">Access registration & grades</p>
          </div>
          <ExternalLink className="w-6 h-6 text-white" />
        </a>

        {/* ISSS Portal */}
        <a
          href="https://isss.gsu.edu"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white border-2 border-[#0A2240] rounded-xl p-6 flex items-center justify-between cursor-pointer hover:bg-[#F7F8FA] transition-colors"
        >
          <div>
            <h3 className="text-[#0A2240] mb-1" style={{ fontSize: '1.25rem', fontWeight: 700 }}>
              ISSS Portal
            </h3>
            <p className="text-gray-600">International Student Services</p>
          </div>
          <ExternalLink className="w-6 h-6 text-[#0A2240]" />
        </a>
      </div>

      {/* Common Hold Types Table */}
      <div className="bg-[#F7F8FA] rounded-xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-[#C8A457]/20 rounded-xl flex items-center justify-center">
            <AlertCircle className="w-6 h-6 text-[#C8A457]" />
          </div>
          <h3 className="text-[#0A2240]" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
            Common Hold Types
          </h3>
        </div>

        <div className="bg-white rounded-xl overflow-hidden shadow-sm">
          <table className="w-full">
            <thead>
              <tr className="bg-[#0A2240]">
                <th className="px-6 py-4 text-left text-white" style={{ fontWeight: 700 }}>
                  HOLD TYPE
                </th>
                <th className="px-6 py-4 text-left text-white" style={{ fontWeight: 700 }}>
                  WHY IT HAPPENS
                </th>
                <th className="px-6 py-4 text-left text-white" style={{ fontWeight: 700 }}>
                  HOW TO RESOLVE
                </th>
                <th className="px-6 py-4 text-left text-white" style={{ fontWeight: 700 }}>
                  WHO TO CONTACT
                </th>
                <th className="px-6 py-4 text-left text-white" style={{ fontWeight: 700 }}>
                  PROCESSING TIME
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="px-6 py-4 text-[#0A2240]" style={{ fontWeight: 600 }}>
                  Immunization
                </td>
                <td className="px-6 py-4 text-gray-700">Missing required vaccines</td>
                <td className="px-6 py-4 text-gray-700">Upload records to Patient Portal</td>
                <td className="px-6 py-4 text-gray-700">Student Health Clinic</td>
                <td className="px-6 py-4 text-gray-700">24–48 Hours</td>
              </tr>
              <tr className="bg-[#F7F8FA] border-b border-gray-100">
                <td className="px-6 py-4 text-[#0A2240]" style={{ fontWeight: 600 }}>
                  Student Accounts
                </td>
                <td className="px-6 py-4 text-gray-700">Past due balance ({'>'}$200)</td>
                <td className="px-6 py-4 text-gray-700">Pay balance via PAWS</td>
                <td className="px-6 py-4 text-gray-700">Student Financial Services</td>
                <td className="px-6 py-4 text-gray-700">Immediate (System)</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="px-6 py-4 text-[#0A2240]" style={{ fontWeight: 600 }}>
                  Emergency Contact
                </td>
                <td className="px-6 py-4 text-gray-700">Missing contact info</td>
                <td className="px-6 py-4 text-gray-700">Update in PAWS Personal Info</td>
                <td className="px-6 py-4 text-gray-700">Registrar's Office</td>
                <td className="px-6 py-4 text-gray-700">Immediate</td>
              </tr>
              <tr className="bg-[#F7F8FA]">
                <td className="px-6 py-4 text-[#0A2240]" style={{ fontWeight: 600 }}>
                  Advising
                </td>
                <td className="px-6 py-4 text-gray-700">GPA {'<'} 2.0 or 90+ credit hours</td>
                <td className="px-6 py-4 text-gray-700">Meet with academic advisor</td>
                <td className="px-6 py-4 text-gray-700">University Advising</td>
                <td className="px-6 py-4 text-gray-700">Manual Lift</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* GSU Registration Rules */}
      <div className="bg-[#F7F8FA] rounded-xl p-8">
        <h3 className="text-[#0A2240] mb-6" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
          GSU Registration Rules You Must Know
        </h3>
        <div className="space-y-3">
          <CollapsibleRule
            title="You can only register during your assigned time-ticket window."
            description="You can only register during your assigned time-ticket window. Registration time-tickets are assigned by Georgia State based on priority such as class level, and you can only register once your time-ticket opens and until registration closes."
            learnMoreLinks={[
              { url: 'https://admissions.gsu.edu/kb/registration-time-tickets/', label: 'Learn More' },
            ]}
          />
          <CollapsibleRule
            title="Students on academic warning/supervision/probation must meet an advisor before registering."
            description="Students on academic warning/supervision/probation must meet an advisor before registering. If your cumulative GSU GPA falls below 2.0, you enter the Academic Improvement Program, and students on supervision or probation have a registration hold that requires an academic advising appointment and advisor approval before the hold is lifted."
            learnMoreLinks={[
              { url: 'https://advisement.gsu.edu/self-service/holds/', label: 'Learn More' },
            ]}
          />
          <CollapsibleRule
            title="Any active hold listed in PAWS must be cleared before you can register."
            description='Any active hold listed in PAWS must be cleared before you can register. Holds like immunization, transcript, balance due, and others appear in PAWS under "View Holds," and each one must be resolved according to the instructions there before registration is allowed or changed.'
            learnMoreLinks={[
              { url: 'https://chemistry.gsu.edu/faq/i-have-a-hold-on-my-account-what-should-i-do/', label: 'Learn' },
              { url: 'https://gsu.my.site.com/support/s/article/I-have-a-hold-that-prevents-registration-What-can-I-do/', label: 'Learn More' },
            ]}
          />
          <CollapsibleRule
            title="Good academic standing at GSU requires a minimum 2.0 cumulative GPA."
            description="Good academic standing at GSU requires a minimum 2.0 cumulative GPA. To remain in good standing and register without special restrictions, undergraduate students must maintain a cumulative GPA of at least 2.0; falling below this triggers Academic Improvement Program standing and registration-related interventions."
            learnMoreLinks={[
              { url: 'https://admissions.gsu.edu/kb/disciplinary-and-academic-standing/', label: 'Learn More' },
            ]}
          />
        </div>
      </div>
    </div>
  );
}