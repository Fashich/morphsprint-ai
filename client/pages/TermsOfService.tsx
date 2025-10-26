import { ArrowLeft } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const LOGO_URL =
  "https://cdn.builder.io/api/v1/image/assets%2F5b28f6891f9443469e73e62e1d9f2778%2F1437029880df4d3ca60e17eeef837ab6?format=webp&width=800";

export default function TermsOfService() {
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
            Terms of Service
          </h1>

          <div className="space-y-8 text-slate-700 dark:text-slate-300">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-display">
                1. Agreement to Terms
              </h2>
              <p>
                By accessing and using the MorphSprint AI platform
                ("Service"), you accept and agree to be bound by the terms and
                provision of this agreement. If you do not agree to abide by
                the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-display">
                2. Use License
              </h2>
              <p>
                Permission is granted to temporarily download one copy of the
                materials (information or software) on MorphSprint AI for
                personal, non-commercial transitory viewing only. This is the
                grant of a license, not a transfer of title, and under this
                license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>Modify or copy the materials</li>
                <li>
                  Use the materials for any commercial purpose or for any public
                  display
                </li>
                <li>
                  Attempt to decompile or reverse engineer any software
                  contained on the platform
                </li>
                <li>
                  Transfer the materials to another person or "mirror" the
                  materials on any other server
                </li>
                <li>Remove any copyright or other proprietary notations</li>
                <li>
                  Transfer or assign the license granted herein to any other
                  persons or entities
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-display">
                3. Disclaimer
              </h2>
              <p>
                The materials on MorphSprint AI's website are provided on an
                'as is' basis. MorphSprint AI makes no warranties, expressed or
                implied, and hereby disclaims and negates all other warranties
                including, without limitation, implied warranties or conditions
                of merchantability, fitness for a particular purpose, or
                non-infringement of intellectual property or other violation of
                rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-display">
                4. Limitations
              </h2>
              <p>
                In no event shall MorphSprint AI or its suppliers be liable for
                any damages (including, without limitation, damages for loss of
                data or profit, or due to business interruption) arising out of
                the use or inability to use the materials on MorphSprint AI,
                even if MorphSprint AI or a MorphSprint AI authorized
                representative has been notified orally or in writing of the
                possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-display">
                5. Accuracy of Materials
              </h2>
              <p>
                The materials appearing on MorphSprint AI's website could
                include technical, typographical, or photographic errors.
                MorphSprint AI does not warrant that any of the materials on
                its website are accurate, complete, or current. MorphSprint AI
                may make changes to the materials contained on its website at
                any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-display">
                6. Materials and Links
              </h2>
              <p>
                MorphSprint AI has not reviewed all of the sites linked to its
                website and is not responsible for the contents of any such
                linked site. The inclusion of any link does not imply
                endorsement by MorphSprint AI of the site. Use of any such
                linked website is at the user's own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-display">
                7. Modifications
              </h2>
              <p>
                MorphSprint AI may revise these terms of service for its
                website at any time without notice. By using this website, you
                are agreeing to be bound by the then current version of these
                terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-display">
                8. Governing Law
              </h2>
              <p>
                These terms and conditions are governed by and construed in
                accordance with the laws of California, United States, and you
                irrevocably submit to the exclusive jurisdiction of the courts
                located in California.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-display">
                9. User Accounts
              </h2>
              <p>
                If you create an account on MorphSprint AI, you are responsible
                for maintaining the confidentiality of your account information
                and password and for restricting access to your computer. You
                agree to accept responsibility for all activities that occur
                under your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-display">
                10. Prohibited Activities
              </h2>
              <p>You may not:</p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>
                  Engage in any conduct that restricts or inhibits anyone's use
                  or enjoyment of the Service
                </li>
                <li>
                  Post or transmit obscene, offensive, or indecent content
                </li>
                <li>
                  Engage in commercial activities or sales without our express
                  written consent
                </li>
                <li>Attempt to interfere with the proper working of the Service</li>
                <li>Attempt to gain unauthorized access to any portion or area</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-display">
                11. Blockchain and Cryptocurrency
              </h2>
              <p>
                Users acknowledge that cryptocurrency transactions are
                irreversible. MorphSprint AI is not responsible for any losses
                incurred due to incorrect wallet addresses, transaction errors,
                or market fluctuations. By using wallet integration features,
                you assume all risks associated with cryptocurrency
                transactions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-display">
                12. Limitation of Liability
              </h2>
              <p>
                In no event shall MorphSprint AI, nor its directors, employees
                or agents, be liable to you for any indirect, incidental,
                special, consequential or punitive damages resulting from any
                use thereof or caused thereby.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-display">
                13. Termination
              </h2>
              <p>
                We may terminate or suspend your access to our Service
                immediately, without prior notice or liability, for any reason
                whatsoever, including if you breach the Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-display">
                14. Contact Information
              </h2>
              <p>
                If you have any questions about these Terms of Service, please
                contact us at:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>Email: legal@morphsprint.ai</li>
                <li>Address: MorphSprint AI, Tech Hub, San Francisco, CA</li>
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
