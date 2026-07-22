import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "REAL LEVELING Privacy Policy",
  description: "Learn how REAL LEVELING collects, stores, and protects your information.",
  alternates: {
    canonical: "https://realleveling.com/privacy-policy",
  }
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#03030A]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="prose prose-invert prose-indigo mx-auto prose-headings:font-heading prose-headings:font-bold prose-a:text-primary">
          <h1 className="text-4xl md:text-5xl font-black mb-8 text-white tracking-tight">Privacy Policy</h1>
          <p className="text-muted-foreground mb-12">
            Effective Date: July 22, 2026<br />
            Last Updated: July 22, 2026
          </p>
          
          <div className="space-y-8 text-white/80 leading-relaxed">
            <section>
              <h2 className="text-2xl text-white mb-4">1. Introduction</h2>
              <p>
                Welcome to REAL LEVELING, a gamified fitness and self-improvement platform. 
                We are committed to protecting your personal information and your right to privacy. 
                If you have any questions or concerns about this privacy notice, or our practices with 
                regards to your personal information, please contact us at support@realleveling.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">2. Information We Collect</h2>
              <p>
                We collect personal information that you voluntarily provide to us when you register on the 
                Services, express an interest in obtaining information about us or our products and Services, 
                when you participate in activities on the Services (such as completing fitness quests), or otherwise 
                when you contact us.
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Personal Information:</strong> Names, email addresses, usernames, and passwords.</li>
                <li><strong>Health & Fitness Data:</strong> Workout logs, completed quests, habits, goals, progress, and other fitness information voluntarily provided by the user.</li>
                <li><strong>Usage Data:</strong> Information on how you interact with our app, including XP gained, levels achieved, and feature usage.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">3. How We Use Information</h2>
              <p>We use personal information collected via our Services for a variety of business purposes described below:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>To facilitate account creation and logon process.</li>
                <li>To manage user accounts and provide you with personalized leveling metrics.</li>
                <li>To send administrative information to you regarding your account or quests.</li>
                <li>To manage user accounts and provide the Services.</li>
                <li>To protect our Services from fraudulent activity.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">4. Data Storage & Security</h2>
              <p>
                We use administrative, technical, and physical security measures to help protect your personal 
                information. While we have taken reasonable steps to secure the personal information you provide 
                to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, 
                and no method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">5. Cookies and Similar Technologies</h2>
              <p>
                We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store 
                information. This helps us analyze app usage, maintain your session, and remember your preferences 
                (such as your selected hunter class). You can control cookies through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">6. Third Party Services</h2>
              <p>
                We may share your data with third-party vendors, service providers, contractors, or agents who perform 
                services for us or on our behalf and require access to such information to do that work. This includes 
                cloud hosting providers and email delivery services. We do not sell your personal 
                information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">7. User Rights</h2>
              <p>
                Depending on where you reside, you may have the right to request access to the personal information we 
                collect from you, change that information, or delete it in some circumstances. To request to review, 
                update, or delete your personal information, please email us at the contact address provided below.
              </p>
              <p className="mt-4">
                Users may request deletion of their account and associated personal data by contacting our support email.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">8. Children's Privacy</h2>
              <p>
                We do not knowingly solicit data from or market to children under 13 years of age. By using the Services, 
                you represent that you are at least 13 or that you are the parent or guardian of such a minor and consent 
                to such minor dependent’s use of the Services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">9. Changes to this Policy</h2>
              <p>
                We may update this privacy notice from time to time. The updated version will be indicated by an updated 
                "Revised" date and the updated version will be effective as soon as it is accessible. We encourage you to 
                review this privacy notice frequently to be informed of how we are protecting your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">10. Contact Information</h2>
              <p>
                If you have questions or comments about this notice, you may email us at:
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
