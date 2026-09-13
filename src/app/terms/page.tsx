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
          <h1 className="text-4xl md:text-5xl font-black mb-8 text-white tracking-tight">Terms & Conditions</h1>
          <p className="text-muted-foreground mb-12">
            Effective Date: September 13, 2026<br />
            Last Updated: September 13, 2026<br />
            Version: 1.3
          </p>
          
          <div className="space-y-8 text-white/80 leading-relaxed">
            <p>
              Welcome to <strong>REAL LEVELING</strong>. These Terms & Conditions ("Terms") govern your access to and use of our mobile application (the "App") and website at https://realleveling.com. The App is independently operated by Rounak Indal Rathod and Sagar Jha, based in CBD Belapur, Maharashtra, India.
            </p>
            <p>
              By creating an account or using the App, you agree to be bound by these Terms. If you do not agree to these Terms, do not use the App.
            </p>

            <section>
              <h2 className="text-2xl text-white mb-4">1. Eligibility</h2>
              <p>
                You must be at least 13 years of age to use this App. By using the App, you represent and warrant that you meet this requirement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">2. Account Registration & Security</h2>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>You must provide accurate information when registering, whether you register directly with an email and password or via "Continue with Google."</li>
                <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                <li>You may not share your account or use another user's account.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">3. Fitness & Health Disclaimer</h2>
              <p><strong>IMPORTANT:</strong> REAL LEVELING includes fitness/workout-related activities.</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Not Medical Advice:</strong> REAL LEVELING is not a medical service. The App does not provide medical diagnosis, treatment, or professional medical advice. Fitness and workout information is for general informational, entertainment, and self-improvement purposes only.</li>
                <li><strong>Assumption of Risk:</strong> Users participate in physical activities at their own discretion and risk. You should consider your own physical condition before performing exercises.</li>
                <li><strong>Professional Consultation:</strong> You should consult an appropriately qualified healthcare or professional provider when appropriate, especially if you have medical conditions, injuries, pain, or concerns about exercise.</li>
                <li><strong>Stop if Unwell:</strong> You should immediately stop an activity if you experience pain, dizziness, difficulty breathing, or other concerning symptoms and seek appropriate professional help.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">4. App Functionality & Progression</h2>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>XP and Levels:</strong> XP, levels, coins, and gems are virtual progression metrics with no real-world monetary value.</li>
                <li><strong>Avatar Evolution:</strong> Avatar evolution and progression are tied to your engagement with the App.</li>
                <li><strong>Missions & Streaks:</strong> We reserve the right to alter mission difficulties, XP payouts, and streak logic at any time to balance the App's ecosystem.</li>
                <li><strong>Boss Battles & Leaderboards:</strong> Exploiting bugs, automating gameplay, or providing false self-reported data to gain an unfair advantage in social or competitive features is strictly prohibited.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">5. User-Generated Content & Social Features</h2>
              <p>When you interact with the social feed, reactions, or leaderboards:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>You may not post offensive, abusive, illegal, or highly objectionable content.</li>
                <li>You grant us a non-exclusive license to display your public profile (username, avatar, level) and feed posts to other users within the App.</li>
                <li>We reserve the right to moderate, remove content, or ban accounts that violate these guidelines without prior notice.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">6. Prohibited Conduct</h2>
              <p>You agree NOT to:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Reverse engineer, decompile, or attempt to extract the source code of the App.</li>
                <li>Interfere with or disrupt the backend infrastructure.</li>
                <li>Submit fraudulent support tickets or abuse the reporting system.</li>
                <li>Harass, threaten, or impersonate other users.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">7. Account Suspension and Termination</h2>
              <p>
                We reserve the right to suspend or terminate your account at any time, for any reason, including violation of these Terms. You may terminate these Terms by deleting your account through the App settings or by requesting deletion at <strong>reallevling@gmail.com</strong>. Certain information may be retained where legally required.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">8. Subscriptions, Payments & Advertising</h2>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Subscriptions:</strong> While the App's architecture may support premium features in the future, subscriptions are not currently implemented and are not available for purchase.</li>
                <li><strong>Advertising:</strong> The App currently does not serve any third-party advertisements.</li>
              </ul>
              <p className="mt-4">
                When subscription features and payments are officially launched, these Terms will be updated to govern billing, renewals, and refunds.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">9. Disclaimer of Warranties & Limitation of Liability</h2>
              <p>
                The App is provided on an "as is" and "as available" basis. To the fullest extent permitted by applicable law, the operators of REAL LEVELING disclaim all warranties and shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use or inability to use the App.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">10. Governing Law & Jurisdiction</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles. Any legal action or proceeding related to the App shall be brought exclusively in the competent courts located in Maharashtra, India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">11. Changes to Terms</h2>
              <p>
                We may modify these Terms at any time. We will notify you of significant changes via the App or email. Continued use of the App constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">12. Contact Information</h2>
              <p>If you have any questions about these Terms, please contact us:</p>
              <p className="mt-4">
                <strong>General Support:</strong> reallevling@gmail.com<br />
                <strong>Legal Inquiries:</strong> rrounak495@gmail.com<br />
                <strong>Official Website:</strong> https://realleveling.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
