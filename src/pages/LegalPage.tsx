import React from 'react';
import { PageView } from '../types';
import { Shield, FileText } from 'lucide-react';

interface LegalPageProps {
  type: 'privacy' | 'terms';
  onNavigate: (page: PageView) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ type }) => {
  const isPrivacy = type === 'privacy';

  return (
    <div className="w-full bg-[#0e1013] text-[#d4d9e2] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="border-b border-[#212630] pb-8">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#c4a47c] mb-3">
            {isPrivacy ? <Shield className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
            <span>Legal Governance &amp; Standards</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            {isPrivacy ? 'Client Privacy & Non-Disclosure Notice' : 'Standard Terms of General Contracting Engagement'}
          </h1>
          <p className="mt-2 text-xs font-mono text-[#798393]">
            Last Updated: January 2026 // Vander &amp; Cole Builders Inc.
          </p>
        </div>

        <div className="space-y-8 text-sm text-[#a2aab8] leading-relaxed">
          {isPrivacy ? (
            <>
              <section className="space-y-3">
                <h3 className="text-base font-semibold text-white">01. High-Value Client Confidentiality</h3>
                <p>
                  Vander &amp; Cole regularly builds estates for high-net-worth individuals, executives, and family offices where privacy is paramount. We enforce strict Non-Disclosure Agreements (NDAs) covering all project addresses, floor plans, aerial lidar scans, security systems, and owner identities.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-semibold text-white">02. Trade Subcontractor Compliance</h3>
                <p>
                  All trade partners, specialty fabricators, and on-site craftsmen are bound by sub-tier confidentiality covenants prohibiting unauthorized photography, social media posting, or disclosure of jobsite locations.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-semibold text-white">03. Digital As-Built Data Security</h3>
                <p>
                  All digital 3D scans, MEP coordination files, and warranty archives are hosted in SOC-2 compliant encrypted repositories. Access is restricted exclusively to authorized project engineers and the client’s designated estate managers.
                </p>
              </section>
            </>
          ) : (
            <>
              <section className="space-y-3">
                <h3 className="text-base font-semibold text-white">01. Contracting Framework (GMP / Cost-Plus)</h3>
                <p>
                  All construction contracts executed by Vander &amp; Cole Builders Inc. utilize AIA A102 (Standard Form of Agreement Between Owner and Contractor with Guaranteed Maximum Price) or AIA A103 (Cost of the Work Plus a Fee).
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-semibold text-white">02. Open-Book Transparency</h3>
                <p>
                  The Owner or Owner’s Representative retains audit rights over all subcontractor bids, supplier invoices, labor burden schedules, and equipment rentals. Zero hidden markups are applied outside the contractually agreed General Conditions and Contractor Fee.
                </p>
              </section>

              <section className="space-y-3">
                <h3 className="text-base font-semibold text-white">03. Statutory Warranties &amp; Dispute Mitigation</h3>
                <p>
                  All structural foundations, framing, and load-bearing elements carry a 10-Year Structural Warranty under Washington and California state licensing standards. All architectural finishes and MEP assemblies carry an all-inclusive 2-Year Craftsmanship Warranty.
                </p>
              </section>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
