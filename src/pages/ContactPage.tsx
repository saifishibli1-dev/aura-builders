import React, { useState } from 'react';
import { COMPANY_DETAILS } from '../data/contentData';
import { MapPin, Phone, Mail, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { ArchitecturalReveal } from '../components/ArchitecturalReveal';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [office, setOffice] = useState('Seattle Headquarters (WA)');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-[#0e1013] text-[#d4d9e2] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#c4a47c] mb-3">
            <MapPin className="w-4 h-4" />
            <span>Regional Studios &amp; Inquiries</span>
          </div>
          <ArchitecturalReveal
            as="h1"
            variant="stagger-words"
            duration={1.15}
            className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight"
          >
            Connect with Our Principals
          </ArchitecturalReveal>
          <ArchitecturalReveal
            as="p"
            variant="mask"
            delay={0.2}
            className="mt-4 text-base text-[#9ea6b5] leading-relaxed"
          >
            Whether evaluating undeveloped acreage, seeking a general contractor partner for permitted architectural drawings, or initiating a commercial commission, we welcome direct discussions.
          </ArchitecturalReveal>
        </div>

        {/* Dual Regional Studios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Seattle Office */}
          <div className="p-8 rounded-sm bg-[#12151b] border border-[#212630] space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-[#c4a47c]">
              Washington &amp; Pacific Northwest
            </div>
            <h3 className="text-2xl font-display font-bold text-white">
              Seattle Headquarters &amp; Studio
            </h3>
            <p className="text-xs text-[#8c94a2]">
              {COMPANY_DETAILS.headquarters.description}
            </p>
            <div className="space-y-2 pt-3 text-xs font-mono text-neutral-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c4a47c] shrink-0 mt-0.5" />
                <span>{COMPANY_DETAILS.headquarters.address}, {COMPANY_DETAILS.headquarters.city}, {COMPANY_DETAILS.headquarters.state} {COMPANY_DETAILS.headquarters.zip}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#c4a47c] shrink-0" />
                <span>{COMPANY_DETAILS.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#c4a47c] shrink-0" />
                <span>{COMPANY_DETAILS.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#c4a47c] shrink-0" />
                <span>Mon–Fri: 07:30 – 17:30 PST</span>
              </div>
            </div>
            <div className="pt-3 border-t border-[#1d222b] text-[11px] font-mono text-[#677080]">
              Contractor Lic: {COMPANY_DETAILS.licenseNumbers.wa}
            </div>
          </div>

          {/* California Office */}
          <div className="p-8 rounded-sm bg-[#12151b] border border-[#212630] space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-[#c4a47c]">
              California &amp; Wine Country
            </div>
            <h3 className="text-2xl font-display font-bold text-white">
              Marin &amp; Napa Valley Atelier
            </h3>
            <p className="text-xs text-[#8c94a2]">
              {COMPANY_DETAILS.californiaOffice.description}
            </p>
            <div className="space-y-2 pt-3 text-xs font-mono text-neutral-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c4a47c] shrink-0 mt-0.5" />
                <span>{COMPANY_DETAILS.californiaOffice.address}, {COMPANY_DETAILS.californiaOffice.city}, {COMPANY_DETAILS.californiaOffice.state} {COMPANY_DETAILS.californiaOffice.zip}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#c4a47c] shrink-0" />
                <span>{COMPANY_DETAILS.secondaryPhone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#c4a47c] shrink-0" />
                <span>california@vandercolebuilders.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#c4a47c] shrink-0" />
                <span>Mon–Fri: 07:30 – 17:30 PST</span>
              </div>
            </div>
            <div className="pt-3 border-t border-[#1d222b] text-[11px] font-mono text-[#677080]">
              Contractor Lic: {COMPANY_DETAILS.licenseNumbers.ca}
            </div>
          </div>
        </div>

        {/* Message Dispatch Form */}
        <div className="bg-[#12151b] border border-[#212630] rounded-sm p-8 sm:p-12 max-w-4xl mx-auto shadow-2xl">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#10b981]/10 text-[#10b981]">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white">
                Message Dispatched to Principals
              </h3>
              <p className="text-xs text-[#9aa2af] max-w-md mx-auto">
                Thank you. Marcus Vander and Eleanor Cole review all inquiries personally. Expect a response within one business day.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 text-xs font-mono text-[#c4a47c] underline cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-1">
                  Direct Inquiries &amp; Plan Submissions
                </h3>
                <p className="text-xs text-[#8c94a2]">
                  For high-level project discussions, submittals, or media inquiries.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-[#9fa6b2] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Marcus Vance"
                    className="w-full bg-[#161a22] border border-[#2c3341] rounded-sm px-3.5 py-2.5 text-xs text-white focus:border-[#c4a47c] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#9fa6b2] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="m.vance@architects.com"
                    className="w-full bg-[#161a22] border border-[#2c3341] rounded-sm px-3.5 py-2.5 text-xs text-white focus:border-[#c4a47c] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-[#9fa6b2] mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(415) 555-0182"
                    className="w-full bg-[#161a22] border border-[#2c3341] rounded-sm px-3.5 py-2.5 text-xs text-white focus:border-[#c4a47c] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-[#9fa6b2] mb-1">
                    Studio Target
                  </label>
                  <select
                    value={office}
                    onChange={(e) => setOffice(e.target.value)}
                    className="w-full bg-[#161a22] border border-[#2c3341] rounded-sm px-3.5 py-2.5 text-xs text-white focus:border-[#c4a47c] outline-none"
                  >
                    <option value="Seattle Headquarters (WA)">Seattle Headquarters (WA)</option>
                    <option value="Marin & Napa Valley Atelier (CA)">Marin &amp; Napa Valley Atelier (CA)</option>
                    <option value="Executive Management / Career">Executive Management / Career</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-[#9fa6b2] mb-1">
                  Message / Project Context
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share details on your site, architect, target schedule, or inquiry..."
                  className="w-full bg-[#161a22] border border-[#2c3341] rounded-sm px-3.5 py-2.5 text-xs text-white focus:border-[#c4a47c] outline-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-2 text-[11px] text-[#717a89]">
                  <ShieldCheck className="w-4 h-4 text-[#c4a47c]" />
                  <span>Strict confidentiality under NDA when requested.</span>
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#c4a47c] hover:bg-[#b0926c] text-[#0e1013] text-xs font-semibold uppercase tracking-wider rounded-sm transition-all cursor-pointer shadow-md"
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
