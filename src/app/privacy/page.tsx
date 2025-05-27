import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <Link href="/" className="text-[var(--sports-blue)] hover:underline">
          &larr; Back to Home
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-4">Introduction</h2>
          <p>
            This Privacy Policy explains how SportsGuy (&quot;we&quot;,
            &quot;us&quot;, or &quot;our&quot;) collects, uses, shares, and
            protects user information obtained through the SportsGuy mobile
            application.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Information We Collect</h2>
          <p className="mb-2">
            We may collect the following types of information:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>User-provided Information:</strong> Information you
              provide when using our app, including queries, saved
              conversations, and preferences.
            </li>
            <li>
              <strong>Automatically Collected Information:</strong> Usage data,
              device information, and analytics to improve our service.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">
            How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide and maintain the SportsGuy service</li>
            <li>To improve and personalize your experience</li>
            <li>To respond to your requests or inquiries</li>
            <li>To monitor and analyze usage patterns and trends</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">
            Data Sharing and Disclosure
          </h2>
          <p>
            We do not sell your personal information. We may share information
            with third parties in limited circumstances, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Service providers who help us operate our app</li>
            <li>When required by law or to protect our rights</li>
            <li>In connection with a merger, sale, or acquisition</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Data Security</h2>
          <p>
            We implement reasonable security measures to protect your
            information from unauthorized access, use, or disclosure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Your Rights</h2>
          <p>
            Depending on your location, you may have certain rights regarding
            your personal information, such as the right to access, correct, or
            delete your data.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new policy on this page.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at privacy@sportsguy.app.
          </p>
        </section>
      </div>

      <footer className="mt-12 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
        <p>Last updated: June 2023</p>
      </footer>
    </div>
  );
}
