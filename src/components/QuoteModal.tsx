import React, { useState } from 'react';
import { X, CheckCircle2, ChevronRight, ChevronLeft, ShieldCheck, ArrowRight, Clock, MapPin, DollarSign } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [referenceCode, setReferenceCode] = useState<string>('');

  // Form State
  const [projectType, setProjectType] = useState<string>('Custom Home Construction');
  const [propertyStatus, setPropertyStatus] = useState<string>('Raw Land / Undeveloped');
  const [region, setRegion] = useState<string>('Seattle & Puget Sound, WA');
  const [budget, setBudget] = useState<string>('$4M – $8M');
  const [timeline, setTimeline] = useState<string>('6 – 12 Months');
  const [architectStatus, setArchitectStatus] = useState<string>('Architect already engaged & drawing');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [siteAddress, setSiteAddress] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  if (!isOpen) return null;

  const validateStep4 = () => {
    const errs: { [key: string]: string } = {};
    if (!name.trim()) errs.name = 'Full name is required';
    if (!email.trim() || !email.includes('@')) errs.email = 'Valid business or personal email is required';
    if (!phone.trim() || phone.length < 8) errs.phone = 'Valid phone number is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep4()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setReferenceCode(`VC-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 1200);
  };

  const resetAndClose = () => {
    setIsSuccess(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#12151b] border border-[#2b313d] rounded-sm shadow-2xl text-[#d2d8e3] my-8 overflow-hidden animate-fade-in">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#232832] bg-[#161a22]">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#c4a47c]">
              Project Feasibility &amp; Estimating
            </div>
            <h3 className="text-lg font-display font-bold text-white tracking-tight">
              Request an Architectural Consultation
            </h3>
          </div>
          <button
            onClick={resetAndClose}
            className="p-2 text-neutral-400 hover:text-white rounded-sm hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Multi-step progress indicator */}
        {!isSuccess && (
          <div className="w-full bg-[#181d25] border-b border-[#232832] px-6 py-3">
            <div className="flex items-center justify-between text-xs font-mono text-[#8a92a0]">
              <span className={step >= 1 ? 'text-[#c4a47c] font-semibold' : ''}>01 Scope</span>
              <span>—</span>
              <span className={step >= 2 ? 'text-[#c4a47c] font-semibold' : ''}>02 Site &amp; Location</span>
              <span>—</span>
              <span className={step >= 3 ? 'text-[#c4a47c] font-semibold' : ''}>03 Budget &amp; Timing</span>
              <span>—</span>
              <span className={step >= 4 ? 'text-[#c4a47c] font-semibold' : ''}>04 Contact</span>
            </div>
            <div className="w-full bg-[#242934] h-1 mt-2 rounded-full overflow-hidden">
              <div
                className="bg-[#c4a47c] h-full transition-all duration-300"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {isSuccess ? (
            <div className="text-center py-8 space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#10b981]/10 border border-[#10b981]/40 text-[#10b981] mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-display font-bold text-white">
                  Consultation Request Received
                </h4>
                <p className="text-sm text-[#9fa6b2] max-w-md mx-auto">
                  Thank you, <span className="text-white font-medium">{name}</span>. Marcus Vander and Eleanor Cole will review your project parameters and respond within 24 business hours.
                </p>
              </div>

              <div className="max-w-md mx-auto p-4 bg-[#181d26] border border-[#2b313d] rounded-sm text-left space-y-2 text-xs font-mono">
                <div className="flex justify-between border-b border-[#2b313d] pb-2">
                  <span className="text-neutral-400">File Reference:</span>
                  <span className="text-[#c4a47c] font-bold">{referenceCode}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Commission Type:</span>
                  <span className="text-white">{projectType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Region:</span>
                  <span className="text-white">{region}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Target Capital:</span>
                  <span className="text-white">{budget}</span>
                </div>
              </div>

              <button
                onClick={resetAndClose}
                className="px-6 py-3 bg-[#c4a47c] hover:bg-[#b0926c] text-[#0e1013] text-xs font-semibold uppercase tracking-wider rounded-sm transition-all cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Step 1: Project Scope */}
              {step === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <h4 className="text-base font-semibold text-white mb-1">
                      What is the nature of your construction project?
                    </h4>
                    <p className="text-xs text-[#8c94a2]">
                      Select the primary building category to help us assign the appropriate preconstruction lead.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { id: 'Custom Home Construction', desc: 'Ground-up architectural residence or estate' },
                      { id: 'Luxury Home Renovation', desc: 'Full structural transformation or historic preservation' },
                      { id: 'Architectural Kitchen & Spa Suite', desc: 'Monolithic stone & bespoke fine cabinetry' },
                      { id: 'Commercial / Winery / Hospitality', desc: 'Boutique tasting rooms, pavilions & spaces' }
                    ].map((item) => (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => setProjectType(item.id)}
                        className={`p-4 rounded-sm border text-left transition-all cursor-pointer ${
                          projectType === item.id
                            ? 'bg-[#1e232d] border-[#c4a47c] text-white shadow'
                            : 'bg-[#151921] border-[#252b36] text-[#8c94a2] hover:border-neutral-600 hover:text-white'
                        }`}
                      >
                        <div className="text-xs font-bold text-white mb-1">{item.id}</div>
                        <div className="text-[11px] text-[#8c94a2]">{item.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Property & Site */}
              {step === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <h4 className="text-base font-semibold text-white mb-1">
                      Site Condition &amp; Geographic Location
                    </h4>
                    <p className="text-xs text-[#8c94a2]">
                      Our teams operate dedicated crews in Washington and Northern California.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-[#9fa6b2] mb-2">
                        Property Site Condition
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {[
                          'Raw Land / Undeveloped Site',
                          'Existing Residence (Tear Down / Rebuild)',
                          'Existing Residence (Complete Gut & Expansion)',
                          'Commercial / Mixed-Use Site'
                        ].map((status) => (
                          <button
                            type="button"
                            key={status}
                            onClick={() => setPropertyStatus(status)}
                            className={`p-3 text-xs rounded-sm border text-left transition-all cursor-pointer ${
                              propertyStatus === status
                                ? 'bg-[#1e232d] border-[#c4a47c] text-white'
                                : 'bg-[#151921] border-[#252b36] text-[#8c94a2] hover:text-white'
                            }`}
                          >
                            {status}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-[#9fa6b2] mb-2 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#c4a47c]" />
                        Project Location
                      </label>
                      <select
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                        className="w-full bg-[#171b23] border border-[#2d3441] rounded-sm px-4 py-2.5 text-xs text-white focus:border-[#c4a47c] outline-none"
                      >
                        <option value="Seattle & Puget Sound, WA">Seattle &amp; Greater Puget Sound, WA</option>
                        <option value="Bellevue, Medina & Mercer Island, WA">Bellevue, Medina &amp; Mercer Island, WA</option>
                        <option value="Bainbridge & San Juan Islands, WA">Bainbridge &amp; San Juan Islands, WA</option>
                        <option value="San Francisco & Marin County, CA">San Francisco &amp; Marin County, CA</option>
                        <option value="Napa Valley & Sonoma, CA">Napa Valley &amp; Sonoma, CA</option>
                        <option value="Palo Alto & Silicon Valley, CA">Palo Alto &amp; Silicon Valley, CA</option>
                        <option value="Other Western US Location">Other Western US Location</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Budget & Timeline */}
              {step === 3 && (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <h4 className="text-base font-semibold text-white mb-1">
                      Anticipated Capital Allocation &amp; Schedule
                    </h4>
                    <p className="text-xs text-[#8c94a2]">
                      Open-book budgeting requires an honest initial benchmark to assess structural systems and finishes.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-[#9fa6b2] mb-2 flex items-center gap-1">
                        <DollarSign className="w-3.5 h-3.5 text-[#c4a47c]" />
                        Construction Budget Framework
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {['$2M – $4M', '$4M – $8M', '$8M – $15M', '$15M+'].map((tier) => (
                          <button
                            type="button"
                            key={tier}
                            onClick={() => setBudget(tier)}
                            className={`p-3 text-xs font-medium rounded-sm border text-center transition-all cursor-pointer ${
                              budget === tier
                                ? 'bg-[#1e232d] border-[#c4a47c] text-white'
                                : 'bg-[#151921] border-[#252b36] text-[#8c94a2] hover:text-white'
                            }`}
                          >
                            {tier}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-[#9fa6b2] mb-2 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#c4a47c]" />
                        Target Construction Start Timeline
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {['Immediate (Plans Ready)', '6 – 12 Months', '1 – 2 Years (Concept)'].map((time) => (
                          <button
                            type="button"
                            key={time}
                            onClick={() => setTimeline(time)}
                            className={`p-2.5 text-xs text-center rounded-sm border transition-all cursor-pointer ${
                              timeline === time
                                ? 'bg-[#1e232d] border-[#c4a47c] text-white'
                                : 'bg-[#151921] border-[#252b36] text-[#8c94a2] hover:text-white'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-[#9fa6b2] mb-2">
                        Architect Status
                      </label>
                      <select
                        value={architectStatus}
                        onChange={(e) => setArchitectStatus(e.target.value)}
                        className="w-full bg-[#171b23] border border-[#2d3441] rounded-sm px-4 py-2.5 text-xs text-white focus:border-[#c4a47c] outline-none"
                      >
                        <option value="Architect already engaged & drawing">Architect already engaged &amp; drawing plans</option>
                        <option value="Permitted architectural drawings in hand">Permitted architectural drawings in hand</option>
                        <option value="Requesting architect recommendations from Vander & Cole">Requesting architect recommendations from Vander &amp; Cole</option>
                        <option value="Interested in integrated Design-Build delivery">Interested in integrated Design-Build delivery</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Contact & Project Specifics */}
              {step === 4 && (
                <div className="space-y-4 animate-fade-in">
                  <div>
                    <h4 className="text-base font-semibold text-white mb-1">
                      Direct Principal Contact Information
                    </h4>
                    <p className="text-xs text-[#8c94a2]">
                      Your information is kept strictly confidential under our executive privacy agreement.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono uppercase text-[#9fa6b2] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Katherine Sterling"
                        className={`w-full bg-[#171b23] border ${
                          errors.name ? 'border-red-500' : 'border-[#2d3441]'
                        } rounded-sm px-3.5 py-2 text-xs text-white focus:border-[#c4a47c] outline-none`}
                      />
                      {errors.name && <span className="text-[10px] text-red-400 mt-0.5">{errors.name}</span>}
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase text-[#9fa6b2] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="katherine@sterling-capital.com"
                        className={`w-full bg-[#171b23] border ${
                          errors.email ? 'border-red-500' : 'border-[#2d3441]'
                        } rounded-sm px-3.5 py-2 text-xs text-white focus:border-[#c4a47c] outline-none`}
                      />
                      {errors.email && <span className="text-[10px] text-red-400 mt-0.5">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-mono uppercase text-[#9fa6b2] mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(206) 555-0192"
                        className={`w-full bg-[#171b23] border ${
                          errors.phone ? 'border-red-500' : 'border-[#2d3441]'
                        } rounded-sm px-3.5 py-2 text-xs text-white focus:border-[#c4a47c] outline-none`}
                      />
                      {errors.phone && <span className="text-[10px] text-red-400 mt-0.5">{errors.phone}</span>}
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase text-[#9fa6b2] mb-1">
                        Parcel / Site Street or Neighborhood
                      </label>
                      <input
                        type="text"
                        value={siteAddress}
                        onChange={(e) => setSiteAddress(e.target.value)}
                        placeholder="e.g. Hunts Point, WA or Belvedere, CA"
                        className="w-full bg-[#171b23] border border-[#2d3441] rounded-sm px-3.5 py-2 text-xs text-white focus:border-[#c4a47c] outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase text-[#9fa6b2] mb-1">
                      Project Notes or Architectural Details
                    </label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Share details on lot characteristics, architectural firm, square footage, special materials (e.g. rammed earth, custom steel cantilevers), or schedule targets..."
                      className="w-full bg-[#171b23] border border-[#2d3441] rounded-sm px-3.5 py-2 text-xs text-white focus:border-[#c4a47c] outline-none"
                    />
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-[#717a8a] pt-1">
                    <ShieldCheck className="w-4 h-4 text-[#c4a47c] shrink-0" />
                    <span>Non-disclosure protected. We never sell or share client plans or data.</span>
                  </div>
                </div>
              )}

              {/* Step Navigation Buttons */}
              <div className="mt-8 pt-4 border-t border-[#232832] flex items-center justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white px-3 py-2 cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </button>
                ) : (
                  <div />
                )}

                {step < 4 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    className="flex items-center gap-1.5 px-5 py-2.5 bg-[#c4a47c] hover:bg-[#b0926c] text-[#0e1013] text-xs font-semibold uppercase tracking-wider rounded-sm transition-all cursor-pointer"
                  >
                    <span>Next Step</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center gap-2 px-6 py-2.5 bg-[#c4a47c] hover:bg-[#b0926c] text-[#0e1013] text-xs font-semibold uppercase tracking-wider rounded-sm transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Verifying Project Dossier...</span>
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
