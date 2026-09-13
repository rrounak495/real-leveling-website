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
            Effective Date: September 13, 2026<br />
            Last Updated: September 13, 2026<br />
            Version: 2.0
          </p>
          
          <div className="space-y-8 text-white/80 leading-relaxed">
            <p>
              Welcome to <strong>REAL LEVELING</strong> ("we," "our," or "us"). We are an independent project operated by its founders, Rounak Indal Rathod and Sagar Jha, based in CBD Belapur, Maharashtra, India. We are committed to protecting your personal information and your right to privacy.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, and share your information when you use our mobile application (the "App") and our website at https://realleveling.com (collectively, the "Services").
            </p>
            <p>
              If you have any questions or concerns about this policy, please contact us at <strong>rrounak495@gmail.com</strong>.
            </p>

            <section>
              <h2 className="text-2xl text-white mb-4">1. Information We Collect</h2>
              
              <h3 className="text-xl text-white mt-6 mb-2">Account Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Email & Password:</strong> If you register directly, we collect your email address and a securely hashed password via our authentication provider.</li>
                <li><strong>Google Sign-In:</strong> If you choose "Continue with Google," we receive your basic Google account information (name, email, profile picture) via Google's authentication service to create and access your account.</li>
              </ul>

              <h3 className="text-xl text-white mt-6 mb-2">Profile & Preference Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your chosen username, display name, gender, bio, country, and timezone.</li>
                <li>Fitness preferences you provide: your fitness goal, experience level, training location preference, and available daily time.</li>
                <li>Optional body metrics you may choose to enter: current weight and goal weight (used only to personalize your in-app fitness missions; never shared publicly).</li>
              </ul>

              <h3 className="text-xl text-white mt-6 mb-2">Photos You Upload</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Profile Picture:</strong> Photos you choose from your gallery for your profile avatar.</li>
                <li><strong>Social Feed Posts:</strong> Photos you choose to attach to posts, selected either from your camera or your photo gallery, if you use this feature. We request camera/gallery access only at the moment you choose to add a photo — never in the background.</li>
              </ul>

              <h3 className="text-xl text-white mt-6 mb-2">App Activity & Progression</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your in-app progress: level, XP, coins, gems, achievements, streaks, and inventory items.</li>
                <li>Missions and workout tasks you accept or complete (all fitness/workout data is self-reported by you within the App — we do not access external health apps or sensors).</li>
                <li>Boss battle participation, personal records, and reward history.</li>
              </ul>

              <h3 className="text-xl text-white mt-6 mb-2">Social Activity</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Friends, followers, and any users you block or report.</li>
                <li>Feed posts, comments, and reactions you create.</li>
                <li>Leaderboard rankings and rival pairings.</li>
              </ul>

              <h3 className="text-xl text-white mt-6 mb-2">Push Notification Data</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>A device notification token, used solely to deliver push notifications relevant to your missions, achievements, and social activity.</li>
              </ul>

              <h3 className="text-xl text-white mt-6 mb-2">Support Communications</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Any messages, subject lines, or category information you provide when you contact our support team through the App.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">2. Information We DO NOT Collect</h2>
              <p>We do <strong>not</strong> collect:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your precise GPS location.</li>
                <li>Data from Google Fit, Apple Health, or any other third-party health/fitness platform.</li>
                <li>Payment or credit card information — in-app currency (coins, gems) is currently earned only through in-app activity and is never purchased with real money.</li>
                <li>Advertising identifiers — the App does not display third-party advertisements.</li>
                <li>Any data through third-party analytics or crash-reporting tools — we do not currently use any such services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">3. How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Create and secure your account, and keep you signed in.</li>
                <li>Operate core App features: generate missions, calculate XP/levels, and run boss battles.</li>
                <li>Show your username, avatar, and activity to other users where the App's social features are designed to be public (e.g., leaderboards, friend lists, feed).</li>
                <li>Send you push notifications about your progress, social activity, or important updates.</li>
                <li>Respond to your support requests and fix bugs.</li>
                <li>Detect and prevent cheating, abuse, or violations of our Terms & Conditions.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">4. How We Share Your Information</h2>
              <p>We only share your information with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service Providers:</strong> Supabase (our backend database, authentication, and file storage provider) and Expo (our push notification delivery service).</li>
                <li><strong>Google:</strong> Solely to process "Continue with Google" sign-in.</li>
                <li><strong>Other Users:</strong> Information you've made part of your public profile or social activity (username, avatar, level, posts) is visible to other users of the App, as intended by these features.</li>
                <li><strong>Legal Requirements:</strong> If required by law, court order, or governmental request.</li>
              </ul>
              <p className="mt-4">
                We do not sell your personal information to anyone, for any purpose.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">5. Data Retention</h2>
              <p>
                We retain your information for as long as your account remains active. If you delete your account, your data is permanently removed from our active database (see Section 6). Encrypted backups may be retained briefly for disaster-recovery purposes, in line with our infrastructure provider's standard practices, and are not used for any other purpose.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">6. Account Deletion</h2>
              <p>
                You can permanently delete your account and all associated data at any time from within the App: go to <strong>Settings → Delete Account</strong>. This action is irreversible and immediately and permanently removes your authentication record, profile, progression, and all social data from our active database. You may also request deletion by emailing <strong>reallevling@gmail.com</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">7. Children's Privacy</h2>
              <p>
                REAL LEVELING is not directed at children under the age of 13, and we do not knowingly collect personal information from children under 13. If you believe a child under 13 has provided us with personal information, please contact us so we can promptly delete it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">8. Your Rights</h2>
              <p>
                Depending on your location, you may have the right to access, correct, or delete your personal information. You can update most of your information directly within the App's settings, or contact us at <strong>rrounak495@gmail.com</strong> for any request we can't yet handle in-app.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. If we make material changes, we will update the "Last Updated" date above and, where appropriate, notify you within the App.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">10. Contact Us</h2>
              <p>For any privacy-related inquiries, please contact:</p>
              <p className="mt-4">
                <strong>Privacy Email:</strong> rrounak495@gmail.com<br />
                <strong>Support Email:</strong> reallevling@gmail.com<br />
                <strong>Operations:</strong> CBD Belapur, Maharashtra, India
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
