import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "REAL LEVELING Privacy Policy",
  description: "Learn how REAL LEVELING collects, stores, and protects your information.",
  alternates: {
    canonical: "https://realleveling.com/privacy",
  }
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#03030A]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="prose prose-invert prose-indigo mx-auto prose-headings:font-heading prose-headings:font-bold prose-a:text-primary">
          <h1 className="text-4xl md:text-5xl font-black mb-8 text-white tracking-tight">Privacy Policy</h1>
          <p className="text-muted-foreground mb-12">
            Effective Date: October 10, 2026<br />
            Last Updated: October 13, 2026<br />
            Version: 2.1
          </p>
          
          <div className="space-y-8 text-white/80 leading-relaxed">
            <p>
              Welcome to <strong>REAL LEVELING</strong> ("we," "our," or "us"). We are an independent project operated by its founders, Rounak Indal Rathod and Sagar Jha, based in CBD Belapur, Maharashtra, India. We are committed to protecting your personal information and your right to privacy.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, and share your information when you use our mobile application (the "App") and our website at https://realleveling.com (collectively, the "Services").
            </p>
            <p>
              If you have any questions or concerns about this policy, please contact us at <strong>rrounak495@gmail.com</strong> or <strong>reallevling@gmail.com</strong>.
            </p>

            <section>
              <h2 className="text-2xl text-white mb-4">1. Information We Collect</h2>
              
              <h3 className="text-xl text-white mt-6 mb-2">Account Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Email & Password:</strong> If you register directly with an email and password, we collect your email address and securely store hashed credentials via our authentication provider.</li>
                <li><strong>Google Sign-In:</strong> If you choose "Continue with Google," we receive your basic Google account profile information (name, email address, profile picture) via Google's authentication service to create and access your account.</li>
              </ul>

              <h3 className="text-xl text-white mt-6 mb-2">Profile & Preference Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Required Account Identifiers:</strong> Your chosen username.</li>
                <li><strong>Optional Profile Details:</strong> Your display name, gender (used for avatar presentation), bio, country, and timezone.</li>
                <li><strong>Fitness Preferences:</strong> Information you voluntarily select: your fitness goal, experience level, training location preference, and available daily workout time.</li>
                <li><strong>Optional Body Metrics:</strong> Optional metrics you may choose to enter: current weight and goal weight (used solely to personalize your in-app fitness missions; never shared publicly).</li>
              </ul>

              <h3 className="text-xl text-white mt-6 mb-2">Photos You Select</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Profile Avatar:</strong> You may optionally select an image from your device's photo gallery to personalize your profile avatar. We request gallery access only at the moment you choose to upload an avatar — never in the background. The App does not request or require Camera access, and social feed posts in the current release are text-only.</li>
              </ul>

              <h3 className="text-xl text-white mt-6 mb-2">App Activity & Progression</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your in-app progress: level, XP, coins, gems, achievements, streaks, and inventory items.</li>
                <li>Missions and workout tasks you accept or complete (all fitness and workout data is self-reported by you within the App — we do not access external health platforms, device sensors, or background activity tracking).</li>
                <li>Boss battle participation, personal records, and reward history.</li>
              </ul>

              <h3 className="text-xl text-white mt-6 mb-2">Social Activity</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Friends, followers, and any users you block or report.</li>
                <li>Feed posts (strictly text-only in the current release), comments, and reactions you create.</li>
                <li>Leaderboard rankings.</li>
              </ul>

              <h3 className="text-xl text-white mt-6 mb-2">Push Notification Data</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>A device push notification token, used solely to deliver notifications relevant to your daily missions, streaks, achievements, and social interactions.</li>
              </ul>

              <h3 className="text-xl text-white mt-6 mb-2">Support Communications & Consent Logs</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Any messages, subject lines, or category information you provide when you contact our support team through the App.</li>
                <li>Records of your acceptance of our legal terms and privacy policy.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">2. Information We DO NOT Collect</h2>
              <p>We do <strong>not</strong> collect:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Device camera access or audio recordings.</li>
                <li>Your precise GPS location.</li>
                <li>Data from Google Fit, Apple Health, or any other external health/fitness tracking platform.</li>
                <li>Payment card or financial information — in-app currency (coins, gems) is earned strictly through in-game activity and is never purchased with real money.</li>
                <li>Advertising identifiers — the App does not display third-party advertisements.</li>
                <li>Any behavioral analytics or crash-reporting data through third-party SDKs — we do not currently use active third-party analytics or crash trackers.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">3. How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Create and secure your account, authenticate you, and maintain your session.</li>
                <li>Operate core App features: generate missions, calculate XP/levels, and run boss battles.</li>
                <li>Show your username, avatar, and activity to other users where the App's social features are designed to be public (e.g., leaderboards, friend lists, feed).</li>
                <li>Send you push notifications about your progress, social activity, or important system announcements.</li>
                <li>Respond to your support requests and fix bugs.</li>
                <li>Detect and prevent cheating, abuse, or violations of our Terms & Conditions.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">4. How We Share Your Information</h2>
              <p>We only share your information with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service Providers:</strong> Supabase (our backend database, authentication, and cloud file storage provider, hosted in AWS ap-south-1 in Mumbai, India) and Expo (our push notification delivery infrastructure).</li>
                <li><strong>Google:</strong> Solely to process "Continue with Google" sign-in authentication.</li>
                <li><strong>Other Users:</strong> Information you've made part of your public profile or social activity (username, avatar, level, text feed posts) is visible to other users of the App, as intended by these features.</li>
                <li><strong>Legal Requirements:</strong> If required by law, court order, or governmental request.</li>
              </ul>
              <p className="mt-4">
                We do not sell your personal information to anyone, for any purpose.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">5. Data Retention & Hosting</h2>
              <p>
                Our backend database and media storage are hosted in the Asia Pacific region (AWS ap-south-1, Mumbai, India) via Supabase. We retain your personal and gameplay information for as long as your account remains active.
              </p>
              <p className="mt-4">
                When you delete your account, your authentication record, profile, progression history, and uploaded avatar images are permanently deleted immediately from our active database and cloud storage buckets (see Section 6). Routine encrypted database backups maintained by our infrastructure provider for disaster-recovery purposes are overwritten and purged in accordance with standard backup retention cycles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">6. Account Deletion</h2>
              <p>
                You can permanently delete your account and all associated data at any time:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>In-App Self-Service:</strong> Open the App and navigate to <strong>Profile → Settings → Danger Zone → Delete Account</strong>. Confirming deletion immediately executes a backend operation that erases your authentication record, profile, progression, workout logs, social interactions, and custom avatar files from active storage.</li>
                <li><strong>Web / Email Deletion Request:</strong> If you have uninstalled the app or cannot access your account, you can request manual deletion by emailing <strong>reallevling@gmail.com</strong> from your registered email address. We will verify your account ownership and permanently delete your account within 48 to 72 hours.</li>
              </ul>
              <p className="mt-4">
                Operational support ticket messages and legal consent records are retained in an anonymized format (disassociated from your identity) for operational support history and regulatory compliance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">7. Children's Privacy</h2>
              <p>
                REAL LEVELING is intended for users 13 years of age and older. We do not knowingly collect personal information from children under the age of 13. If you believe a child under 13 has provided us with personal information, please contact us at <strong>rrounak495@gmail.com</strong> so we can promptly delete it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">8. Your Rights</h2>
              <p>
                Depending on your location (including rights under the General Data Protection Regulation, the California Consumer Privacy Act, and India's Digital Personal Data Protection Act), you may have the right to access, rectify, export, or delete your personal information. You can update most of your profile information directly within the App's settings, or contact us at <strong>rrounak495@gmail.com</strong> or <strong>reallevling@gmail.com</strong> for any privacy inquiries.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. If we make material changes, we will update the "Last Updated" date above and, where appropriate, notify you within the App or via our website.
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
