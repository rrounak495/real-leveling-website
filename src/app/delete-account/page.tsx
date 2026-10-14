import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "REAL LEVELING - Account Deletion",
  description: "Learn how to request deletion of your REAL LEVELING account and understand our data deletion process.",
  alternates: {
    canonical: "https://realleveling.com/delete-account",
  },
};

export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-[#03030A]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="prose prose-invert prose-indigo mx-auto prose-headings:font-heading prose-headings:font-bold prose-a:text-primary">
          <h1 className="text-4xl md:text-5xl font-black mb-8 text-white tracking-tight">Account Deletion</h1>
          <p className="text-muted-foreground mb-12">
            Effective Date: September 13, 2026<br />
            Last Updated: October 13, 2026<br />
            Version: 1.0
          </p>

          <div className="space-y-8 text-white/80 leading-relaxed">
            <p>
              At <strong>REAL LEVELING</strong>, we respect your right to control and delete your personal data. In full compliance with Google Play Developer Policies and global privacy standards, you can permanently delete your account and associated data at any time.
            </p>

            <section>
              <h2 className="text-2xl text-white mb-4">How to Request Account Deletion</h2>
              
              <h3 className="text-xl text-white mt-6 mb-2">Option 1: In-App Instant Deletion (Self-Service)</h3>
              <p>
                You can permanently delete your account directly inside the mobile app at any time:
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Open the <strong>REAL LEVELING</strong> app.</li>
                <li>Navigate to your <strong>Profile</strong> tab.</li>
                <li>Tap the <strong>Settings</strong> icon (gear icon in the top right).</li>
                <li>Scroll down to the <strong>Danger Zone</strong> section.</li>
                <li>Tap <strong>Delete Account</strong> and confirm the deletion prompt.</li>
              </ol>
              <p className="mt-4">
                Confirming deletion triggers an immediate backend purge of your account, authentication record, profile data, uploaded files, and progression.
              </p>

              <h3 className="text-xl text-white mt-6 mb-2">Option 2: Web / Email Deletion Request (Manual Verification)</h3>
              <p>
                If you have uninstalled the app or cannot access your account, you can request manual account deletion by emailing our support team:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Support Email:</strong> <a href="mailto:reallevling@gmail.com" className="text-primary hover:underline">reallevling@gmail.com</a></li>
                <li><strong>Subject Line:</strong> <code>Account Deletion Request - [Your Username or Email]</code></li>
              </ul>
              <p className="mt-4">
                <strong>Important Note:</strong> To prevent unauthorized deletion and protect account security, web-initiated deletion requests are not automated. You must send your request from the exact email address registered with your REAL LEVELING account so we can verify your identity. Our team will verify the request and permanently delete your account and associated data within 48 to 72 hours, confirming completion by reply email.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">What Data is Deleted</h2>
              <p>When your account is deleted, the following data is permanently purged from our active systems:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Authentication Records:</strong> Email address, hashed credentials, and OAuth associations.</li>
                <li><strong>Profile Information:</strong> Username, display name, avatar preferences, bio, gender, and regional preferences.</li>
                <li><strong>Progression & Game Data:</strong> Hunter level, total XP, rank, streaks, coins, gems, achievements, and quest history.</li>
                <li><strong>Workout & Activity Records:</strong> Completed tasks, personal records, and boss battle contributions.</li>
                <li><strong>Uploaded Media:</strong> Custom profile avatar images and any user-uploaded files stored in our cloud storage buckets.</li>
                <li><strong>Social Connections:</strong> Friend lists, friend requests, feed posts, comments, reactions, reports, and blocks.</li>
                <li><strong>Push Notification Tokens:</strong> Registered device tokens and notification preferences.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">Data Retention Policy</h2>
              <p>
                As stated in Section 5 of our Privacy Policy, we retain your personal and gameplay information only for as long as your account remains active. Once deleted, your data is permanently removed from our active database and storage buckets. Encrypted backups maintained by our infrastructure provider for disaster-recovery purposes are retained briefly in line with standard cloud operational practices and are automatically overwritten.
              </p>
              <p className="mt-4">
                Operational support ticket messages and legal consent records are retained in an anonymized format (disassociated from your identity) for operational support history and regulatory compliance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-white mb-4">Contact Information</h2>
              <p>For any questions regarding account deletion or data privacy, please contact:</p>
              <p className="mt-4">
                <strong>Support Email:</strong> reallevling@gmail.com<br />
                <strong>Privacy Email:</strong> rrounak495@gmail.com<br />
                <strong>Operations:</strong> CBD Belapur, Maharashtra, India
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
