import { MessageCircle, ChevronDown, ChevronUp, Copy } from 'lucide-react';
import { useState } from 'react';

interface EmailTemplateProps {
  number: number;
  title: string;
  subject: string;
  body: string;
}

function EmailTemplate({ number, title, subject, body }: EmailTemplateProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const fullText = `Subject: ${subject}\n\n${body}`;
    
    // Fallback method for copying text
    const textArea = document.createElement('textarea');
    textArea.value = fullText;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      document.execCommand('copy');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
    
    document.body.removeChild(textArea);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
      <div className="flex items-start justify-between mb-4">
        <h4 className="text-[#0A2240]" style={{ fontWeight: 700, fontSize: '1rem' }}>
          Template {number} – {title}
        </h4>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-3 py-1.5 text-gray-600 hover:text-[#0A2240] hover:bg-gray-100 rounded-md transition-colors"
          style={{ fontSize: '0.875rem' }}
        >
          <Copy className="w-4 h-4" />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>

      <div className="bg-[#F7F8FA] rounded-md px-4 py-2 mb-4 border border-gray-200">
        <span className="text-[#0A2240]" style={{ fontWeight: 600, fontSize: '0.875rem' }}>
          Subject:
        </span>
        <span className="text-[#0A2240] ml-2" style={{ fontSize: '0.875rem' }}>
          {subject}
        </span>
      </div>

      <div className="text-gray-700 whitespace-pre-line" style={{ fontSize: '0.9375rem', lineHeight: '1.7' }}>
        {body}
      </div>
    </div>
  );
}

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function CollapsibleSection({ title, children, defaultOpen = true }: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between hover:bg-[#F7F8FA] transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#0A2240] rounded-full flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
          <span className="text-[#0A2240]" style={{ fontWeight: 700, fontSize: '1.25rem' }}>
            {title}
          </span>
        </div>
        {isOpen ? (
          <ChevronUp className="w-6 h-6 text-[#0A2240]" />
        ) : (
          <ChevronDown className="w-6 h-6 text-[#0A2240]" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-6 pt-2">
          {children}
        </div>
      )}
    </div>
  );
}

export function CommunicationTemplates() {
  return (
    <section id="communication-templates" className="bg-[#F7F8FA] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-[#0A2240] mb-4" style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.02em' }}>
            Communication & Email Scripts
          </h2>
          <p className="text-gray-600" style={{ fontSize: '1.125rem', lineHeight: '1.7' }}>
            Professional templates to help you communicate effectively with professors, advisors, and staff.
          </p>
        </div>

        {/* Professor / Course-Related Emails Section */}
        <CollapsibleSection title="Professor / Course-Related Emails" defaultOpen={true}>
          <div className="pt-4">
            {/* Template 1 */}
            <EmailTemplate
              number={1}
              title="Clarification Request About Course Materials"
              subject="Clarification Request About Course Materials — [Course Code]"
              body={`Dear Professor Last Name,

I hope you are doing well. I had a question about the course materials listed for this week and wanted to make sure I'm reviewing the correct items.

Could you please confirm whether the required materials include [insert specific item], or if there are additional documents I should refer to? I want to ensure I'm fully prepared for class.

Thank you for your time and guidance.

Sincerely,
Your Name
Panther ID:`}
            />

            {/* Template 2 */}
            <EmailTemplate
              number={2}
              title="Request for Deadline Extension (Valid, Respectful Reason)"
              subject="Request for Extension on Upcoming Assignment — [Course Code]"
              body={`Dear Professor Last Name,

I hope you are doing well. I am reaching out regarding the upcoming assignment due on [date]. I am experiencing [briefly explain legitimate situation—e.g., a schedule conflict with another major exam, short-term illness, or unexpected personal difficulty] and I am concerned that I may not be able to submit my best work by the current deadline.

Would it be possible to receive a short extension of [X days]? I will make sure to complete the assignment promptly within the adjusted timeframe. I completely understand if this is not possible, but I wanted to ask respectfully in advance.

Thank you very much for your understanding and consideration.

Sincerely,
Your Name
Panther ID:`}
            />

            {/* Template 3 */}
            <EmailTemplate
              number={3}
              title="Request to Meet During Office Hours"
              subject="Request for Office Hours Meeting — [Course Code]"
              body={`Dear Professor Last Name,

I hope your week is going well. I would like to schedule a time to meet during your office hours to discuss [brief description—course concept, assignment clarification, exam preparation, etc.].

I want to ensure I fully understand the material and would appreciate the chance to review my questions directly with you. Please let me know if there is a time during your upcoming office hours that works best, or if there is an alternative slot you recommend.

Thank you for your help and guidance.

Sincerely,
Your Name
Panther ID:`}
            />

            {/* Template 4 */}
            <EmailTemplate
              number={4}
              title="Professional Email to Notify Absence (Legitimate Reason)"
              subject="Absence Notification — [Course Code], [Date]"
              body={`Dear Professor Last Name,

I wanted to inform you that I will be unable to attend class on [date] due to [reason—short-term illness, required appointment, or unforeseen conflict]. I will make sure to review the materials covered and keep up with any assignments or announcements.

If there is anything specific I should review or submit, please let me know. I appreciate your understanding.

Sincerely,
Your Name
Panther ID:`}
            />

            {/* Template 5 */}
            <EmailTemplate
              number={5}
              title="Inquiry About Improving Performance"
              subject="Request for Guidance on Improving My Performance — [Course Code]"
              body={`Dear Professor Last Name,

I hope you are doing well. I wanted to reach out because I would like to improve my performance in the course and ensure I am meeting your expectations.

If possible, could you please share any suggestions on what I should focus on—such as study strategies, specific concepts to review, or common mistakes to avoid? I am committed to putting in the necessary effort.

Thank you for your time and support.

Sincerely,
Your Name
Panther ID:`}
            />
          </div>
        </CollapsibleSection>

        {/* Advising & Registration Emails Section */}
        <div className="mt-6">
          <CollapsibleSection title="Advising & Registration Emails" defaultOpen={false}>
            <div className="pt-4">
              {/* Template 1 */}
              <EmailTemplate
                number={1}
                title="Request to Schedule Academic Advising Appointment"
                subject="Request to Schedule Academic Advising Appointment"
                body={`Dear Advisor,

I hope you are doing well. I would like to schedule an advising appointment to review my course plan for the upcoming semester and ensure I am meeting all degree requirements.

Please let me know your availability or the preferred method to book an appointment. I want to make sure I am registering for the correct courses and staying on track academically.

Thank you for your time and assistance.

Sincerely,
Your Name
Panther ID:`}
              />

              {/* Template 2 */}
              <EmailTemplate
                number={2}
                title="Time-Ticket or Registration Access Issue"
                subject="Assistance Needed With Registration Time Ticket / System Access"
                body={`Dear Advisor,

I hope you are doing well. I am reaching out because I am having trouble accessing my registration time ticket or enrolling in classes for the upcoming semester.

When I log into PAWS, I am seeing the following issue:
[briefly describe what appears—no time ticket, unable to register, unexpected restriction, etc.]

Could you please help me understand what might be causing this and advise me on the next steps so I can complete my registration?

Thank you for your guidance.

Sincerely,
Your Name
Panther ID:`}
              />

              {/* Template 3 */}
              <EmailTemplate
                number={3}
                title="Asking Whether a Course Counts Toward Degree Requirements"
                subject="Question About Degree Requirement for [Course Name]"
                body={`Dear Advisor,

I hope you are doing well. I had a quick question regarding the course [Course Name]. I want to confirm whether this course satisfies the requirement for [Area, Pathway, or Major Requirement] in my degree plan.

I want to make sure I am selecting the correct courses before finalizing my schedule.
Please let me know if this course fulfills the requirement or if there is an alternative course I should consider.

Thank you for your help.

Sincerely,
Your Name
Panther ID:`}
              />

              {/* Template 4 */}
              <EmailTemplate
                number={4}
                title="Hold Preventing Registration (General Inquiry)"
                subject="Inquiry Regarding Registration Hold in PAWS"
                body={`Dear Advisor,

I hope you are doing well. I noticed that there is a hold on my PAWS account that is preventing me from registering. The hold is listed as: [Name of Hold].

Could you please advise me on the steps required to clear this hold or direct me to the appropriate department? I want to resolve this as soon as possible so I can complete my registration.

Thank you for your assistance.

Sincerely,
Your Name
Panther ID:`}
              />

              {/* Template 5 */}
              <EmailTemplate
                number={5}
                title="Help With Choosing Courses or Creating a Schedule"
                subject="Request for Guidance on Course Selection"
                body={`Dear Advisor,

I hope your week is going well. I wanted to ask for guidance on selecting my courses for the upcoming semester. I want to ensure I am choosing the right combination based on prerequisites, workload balance, and my long-term degree pathway.

If possible, could you please review my planned schedule or suggest any adjustments you recommend?

Thank you for supporting my academic progress.

Sincerely,
Your Name
Panther ID:`}
              />
            </div>
          </CollapsibleSection>
        </div>

        {/* ISSS / Immigration & iStart Emails Section */}
        <div className="mt-6">
          <CollapsibleSection title="ISSS / Immigration & iStart Emails" defaultOpen={false}>
            <div className="pt-4">
              {/* Template 1 */}
              <EmailTemplate
                number={1}
                title="Request for Help With iStart e-Forms"
                subject="Question About Completing Required iStart Forms"
                body={`Dear ISSS Team,

I hope you are doing well. I had a question regarding the iStart e-forms I need to complete. I want to make sure I am submitting everything correctly and on time.

Could you please confirm which forms are currently required for my situation and whether there are any additional steps I should be aware of?

Thank you for your assistance and guidance.

Sincerely,
Your Name
Panther ID:`}
              />

              {/* Template 2 */}
              <EmailTemplate
                number={2}
                title="Inquiry About SEVIS Check-In Requirements"
                subject="Clarification Regarding SEVIS Check-In Steps"
                body={`Dear ISSS Team,

I hope your day is going well. I am writing to confirm the steps required for completing my SEVIS check-in. I want to ensure I upload all necessary documents correctly and meet the deadlines.

Could you please confirm what items I must submit and whether there is anything else I need to complete after uploading my documents?

Thank you for your support.

Sincerely,
Your Name
Panther ID:`}
              />

              {/* Template 3 */}
              <EmailTemplate
                number={3}
                title="Asking About Travel Signature or Travel Validation"
                subject="Request for Information About Travel Signature Requirements"
                body={`Dear ISSS Team,

I hope you are doing well. I am planning upcoming travel and wanted to check whether I need a new travel signature before leaving the United States.

Could you please let me know if my current I-20 travel signature is still valid, and if not, what the process and timeline are for requesting a new one?

Thank you for your help.

Sincerely,
Your Name
Panther ID:`}
              />

              {/* Template 4 */}
              <EmailTemplate
                number={4}
                title="Inquiry About CPT/OPT Eligibility or Timeline"
                subject="Question About CPT/OPT Eligibility and Application Timeline"
                body={`Dear ISSS Team,

I hope you are doing well. I had a question about CPT/OPT and wanted to confirm whether I am eligible to apply and what the expected timeline would be.

If possible, could you also let me know which iStart forms or workshops I should complete to begin the process?

Thank you for guiding me through this.

Sincerely,
Your Name
Panther ID:`}
              />

              {/* Template 5 */}
              <EmailTemplate
                number={5}
                title="Reporting an Issue or Error in iStart"
                subject="Assistance Needed With iStart System Issue"
                body={`Dear ISSS Team,

I hope your day is going well. I am reaching out because I am experiencing an issue in the iStart system. When I try to complete my required forms, the following problem appears:

[briefly describe the issue]

Could you please assist me with resolving this or direct me to the correct office that can help?

Thank you for your support.

Sincerely,
Your Name
Panther ID:`}
              />

              {/* Template 6 */}
              <EmailTemplate
                number={6}
                title="Asking About Required Documents for Visa Interview Prep"
                subject="Question Regarding Required Documents for Visa Interview Preparation"
                body={`Dear ISSS Team,

I hope you are doing well. I am preparing for my visa interview and wanted to confirm the documents I should bring with me.

Could you please let me know what items ISSS recommends students carry to ensure they are fully prepared?

Thank you very much for your guidance.

Sincerely,
Your Name
Panther ID:`}
              />
            </div>
          </CollapsibleSection>
        </div>

        {/* Housing & Residence Life Emails Section */}
        <div className="mt-6">
          <CollapsibleSection title="Housing & Residence Life Emails" defaultOpen={false}>
            <div className="pt-4">
              {/* Template 1 */}
              <EmailTemplate
                number={1}
                title="Room Maintenance or Repair Request"
                subject="Request for Maintenance Assistance in My Room"
                body={`Dear Housing Team,

I hope you are doing well. I am writing to request assistance with a maintenance issue in my room. The following item needs attention:

[briefly describe the issue]

Could you please let me know the next steps and the expected timeline for repair? I would appreciate any guidance on whether I need to submit an additional form or remain in the room during the visit.

Thank you for your help.

Sincerely,
Your Name
Room Number:
Panther ID:`}
              />

              {/* Template 2 */}
              <EmailTemplate
                number={2}
                title="Inquiry About Move-In Instructions or Required Documents"
                subject="Question About Move-In Process and Required Documents"
                body={`Dear Housing Team,

I hope your day is going well. I had a question regarding the move-in process and wanted to make sure I am fully prepared.

Could you please confirm the documents I need to bring and whether there are any specific arrival instructions or check-in procedures I should follow?

Thank you for your assistance.

Sincerely,
Your Name
Panther ID:`}
              />

              {/* Template 3 */}
              <EmailTemplate
                number={3}
                title="Room Change Request / Inquiry"
                subject="Inquiry About Room Change Options"
                body={`Dear Housing Team,

I hope you are doing well. I wanted to ask about the availability and process for requesting a room change. I understand that this depends on space and Housing policies, so I wanted to check whether any options are currently available.

If possible, could you also let me know how long the review process usually takes and if there are any forms I need to complete in advance?

Thank you for your guidance.

Sincerely,
Your Name
Current Residence Hall:
Panther ID:`}
              />

              {/* Template 4 */}
              <EmailTemplate
                number={4}
                title="Reporting a Noise, Cleanliness, or Community Concern"
                subject="Reporting a Community Concern in My Residence Hall"
                body={`Dear Housing Team,

I hope you are doing well. I wanted to bring a concern to your attention regarding my residence hall. The issue is:

[briefly describe concern, such as noise, cleanliness, or policy issue]

I wanted to report this so that it can be addressed appropriately. Please let me know if you need additional details from me or if there is a specific form I should submit.

Thank you for your support.

Sincerely,
Your Name
Residence Hall:
Panther ID:`}
              />

              {/* Template 5 */}
              <EmailTemplate
                number={5}
                title="Asking About Mail, Packages, or Delivery Procedures"
                subject="Question About Mail and Package Pickup Procedures"
                body={`Dear Housing Team,

I hope your day is going well. I had a quick question about the process for receiving packages and mail in my residence hall.

Could you please confirm where deliveries are received and what steps I should follow to pick them up? I want to make sure I am following the correct procedures.

Thank you for your help.

Sincerely,
Your Name
Panther ID:`}
              />

              {/* Template 6 */}
              <EmailTemplate
                number={6}
                title="Lockout Assistance Inquiry"
                subject="Request for Guidance Regarding Lockout Assistance"
                body={`Dear Housing Team,

I hope you are doing well. I wanted to ask about the procedure for receiving help if I get locked out of my room.

Could you please let me know whom I should contact, whether there is a fee, and during which hours assistance is available?

Thank you for your guidance.

Sincerely,
Your Name
Residence Hall:
Panther ID:`}
              />

              {/* Template 7 */}
              <EmailTemplate
                number={7}
                title="Reporting a Safety or Security Concern"
                subject="Reporting a Safety Concern in My Residence Hall"
                body={`Dear Housing Team,

I hope you are doing well. I wanted to report a safety concern I observed in my residence hall. The issue is:

[briefly describe the issue]

I wanted to share this so Housing can be aware of it and take appropriate steps. Please let me know if you need further details.

Thank you for your attention.

Sincerely,
Your Name
Residence Hall:
Panther ID:`}
              />
            </div>
          </CollapsibleSection>
        </div>
      </div>
    </section>
  );
}