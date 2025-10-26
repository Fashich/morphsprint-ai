import { ArrowLeft } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const LOGO_URL =
  "https://cdn.builder.io/api/v1/image/assets%2F5b28f6891f9443469e73e62e1d9f2778%2F1437029880df4d3ca60e17eeef837ab6?format=webp&width=800";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-blue-950 dark:to-purple-950">
      {/* Navigation */}
      <nav className="border-b border-slate-200/50 dark:border-slate-800/50 backdrop-blur-md bg-white/30 dark:bg-slate-950/30 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={LOGO_URL}
              alt="MorphSprint AI"
              className="h-10 w-10 rounded-lg"
            />
            <span className="text-xl font-bold text-slate-900 dark:text-white font-display">
              MorphSprint AI
            </span>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <button
          onClick={() => window.history.back()}
          className="mb-8 flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        <article className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-8 font-display">
            Privacy Policy
          </h1>

          <div className="space-y-8 text-slate-700 dark:text-slate-300">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-display">
                1. Introduction
              </h2>
              <p>
                MorphSprint AI ("we," "us," "our," or "Company") is committed to
                protecting your privacy. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                visit our website and use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-display">
                2. Information We Collect
              </h2>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                2.1 Personal Data
              </h3>
              <p>
                We may collect personally identifiable information about you
                such as:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>Name and email address</li>
                <li>Wallet addresses</li>
                <li>Profile information</li>
                <li>Usage patterns and preferences</li>
              </ul>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 mt-6">
                2.2 Automatically Collected Data
              </h3>
              <p>When you access our platform, we automatically collect:</p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>IP addresses</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent</li>
                <li>Referring website addresses</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-display">
                3. How We Use Your Information
              </h2>
              <p>We use the information we collect for:</p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>Providing and improving our services</li>
                <li>Processing transactions and sending confirmations</li>
                <li>Responding to inquiries and providing support</li>
                <li>Analyzing usage patterns to enhance user experience</li>
                <li>Complying with legal obligations</li>
                <li>Preventing fraud and ensuring security</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-display">
                4. Sharing Your Information
              </h2>
              <p>
                We do not sell, trade, or rent your personal information to
                third parties. However, we may share your information with:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>
                  Service providers who assist us in operating our website
                </li>
                <li>Business partners with your consent</li>
                <li>Law enforcement when legally required</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-display">
                5. Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational measures
                to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. However, no
                method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-display">
                6. Blockchain and Wallet Integration
              </h2>
              <p>
                When you connect your cryptocurrency wallet to our platform,
                please note that blockchain transactions are permanent and
                publicly visible on the blockchain. We do not store your private
                keys or have access to your wallet funds.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-display">
                7. Your Rights
              </h2>
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of certain data processing</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-display">
                8. Cookies
              </h2>
              <p>
                We use cookies to improve your experience. You can control
                cookie settings through your browser preferences. Disabling
                cookies may affect the functionality of our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-display">
                9. Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy periodically. Your continued
                use of our platform following the posting of revised Privacy
                Policy means that you accept and agree to the changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-display">
                10. Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy, please contact
                us at:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>Email: thalassaaddict@gmail.com</li>
                <li>
                  LinkedIn:{" "}
                  <a
                    href="https://www.linkedin.com/in/ahmadfashich/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    https://www.linkedin.com/in/ahmadfashich/
                  </a>
                </li>
              </ul>
            </section>

            <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Last updated: January 2025
              </p>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
