import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "REAL LEVELING Terms of Service",
  description: "Read the Terms of Service for using REAL LEVELING.",
  alternates: {
    canonical: "https://realleveling.com/terms",
  }
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#03030A]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="prose prose-invert prose-indigo mx-auto prose-headings:font-heading prose-headings:font-bold prose-a:text-primary">
          <h1 className="text-4xl md:text-5xl font-black mb-8 text-white tracking-tight">Terms of Service</h1>
          
          <div className="space-y-8 text-white/80 leading-relaxed">
            <section>
              <h2 className="text-2xl text-white mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using REAL LEVELING ("the Service"), you accept and agree to be bound by the terms 
                and provision of this agreement. In addition, when using this Service, you shall be subject to any 
                posted guidelines or rules applicable to such services. Any participation in this service will constitute 
                acceptance of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">2. Eligibility</h2>
              <p>
                You must be at least 13 years of age to create an account and use the Service. By creating an account 
                and using the Service, you represent and warrant that you can form a binding contract with REAL LEVELING, 
                and that you comply with all local, state, national, and international laws, rules, and regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">3. User Responsibilities</h2>
              <p>
                As a Hunter on our platform, you are responsible for maintaining the confidentiality of your account and 
                password and for restricting access to your computer or mobile device, and you agree to accept responsibility 
                for all activities that occur under your account or password. You are strictly prohibited from exploiting 
                game mechanics, faking real-world data to gain XP, or engaging in behavior that undermines the integrity 
                of the self-improvement journey.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">4. Acceptable Use</h2>
              <p>
                You agree not to use the Service to:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Upload, post, or transmit any content that is unlawful, harmful, threatening, abusive, or harassing.</li>
                <li>Impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with a person or entity.</li>
                <li>Interfere with or disrupt the Service or servers or networks connected to the Service.</li>
                <li>Attempt to reverse engineer, decompile, or hack the gamification algorithms or the mobile application.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">5. Intellectual Property</h2>
              <p>
                The Service and its original content, features, functionality (including gamification rules, algorithms, and UI), 
                and design are and will remain the exclusive property of REAL LEVELING and its licensors. The Service is protected 
                by applicable copyright, trademark, and intellectual property laws. Our trademarks and trade 
                dress may not be used in connection with any product or service without the prior written consent of REAL LEVELING.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">6. Disclaimer</h2>
              <p>
                REAL LEVELING provides the Service on an "AS IS" and "AS AVAILABLE" basis. We do not warrant that the Service 
                will be uninterrupted, secure, or error-free. Furthermore, REAL LEVELING is intended for motivation, habit tracking, and fitness gamification only. It is not a medical device and does not provide medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional before beginning any fitness program.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">7. Limitation of Liability</h2>
              <p>
                In no event shall REAL LEVELING, nor its directors, employees, partners, agents, suppliers, or affiliates, 
                be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, 
                loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of 
                or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; 
                (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions 
                or content, whether based on warranty, contract, tort (including negligence) or any other legal theory.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">8. Termination</h2>
              <p>
                We may terminate or suspend your account and bar access to the Service immediately, without prior notice or 
                liability, under our sole discretion, for any reason whatsoever and without limitation, including but not 
                limited to a breach of the Terms. If you wish to terminate your account, you may simply discontinue using the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">9. Changes to Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is 
                material we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a 
                material change will be determined at our sole discretion. By continuing to access or use our Service after 
                any revisions become effective, you agree to be bound by the revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">10. Governing Law</h2>
              <p>
                These Terms shall be governed and interpreted in accordance with the laws of India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">11. Contact</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="mt-4 font-bold text-primary">
                support@realleveling.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
