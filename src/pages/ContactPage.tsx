import React, { useState } from 'react';
import { COMPANY_INFO, SECTORS } from '../data/companyData';
import { PageHeader } from '../components/common/PageHeader';
import { 
  Phone, Mail, MapPin, MessageSquare, 
  Send, CheckCircle2, AlertCircle, ArrowUpRight 
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    sector: 'general',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!formData.subject.trim()) {
      setErrorMessage('Please enter an inquiry subject.');
      return;
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      setErrorMessage('Please provide a message with at least 10 characters.');
      return;
    }

    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 1000);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      sector: 'general',
      message: ''
    });
    setFormStatus('idle');
    setErrorMessage('');
  };

  const generateMailto = () => {
    const subject = encodeURIComponent(`[${formData.sector.toUpperCase()}] ${formData.subject || 'Inquiry'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSector: ${formData.sector}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:info@arisehopegroup.co.za?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-[#F8F7F3] overflow-x-hidden">
      <PageHeader
        badge="Contact Headquarters"
        title="Connect With Arise Hope Group."
        subtitle="We invite business partnerships, turnkey infrastructure consultations, petroleum wholesale supply agreements, and institutional co-investment enquiries."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Contact Us' }
        ]}
      />

      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Column: Official Contact Directory */}
            <div className="lg:col-span-5 space-y-6 sm:space-y-8">
              <div>
                <span className="text-[11px] font-sans uppercase tracking-wider text-[#FF8A00] font-bold">
                  OFFICIAL CHANNELS
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#101B35] mt-1">
                  Headquarters Directory
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-stone-600 font-sans">
                  Direct engagement channels with corporate executives and subsidiary business heads.
                </p>
              </div>

              {/* Contact Information Cards */}
              <div className="space-y-3 sm:space-y-4">
                
                {/* Physical Address */}
                <div className="p-4 sm:p-5 rounded-xl bg-white border border-stone-200 shadow-xs flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#F8F7F3] border border-stone-200 text-[#101B35] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#FF8A00]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-serif font-bold text-[#101B35]">Physical Address</h3>
                    <p className="text-xs text-stone-600 mt-0.5 leading-relaxed font-sans">
                      {COMPANY_INFO.contact.address}
                    </p>
                    <span className="text-[11px] font-mono text-stone-400 block mt-1">
                      Johannesburg, Gauteng, South Africa
                    </span>
                  </div>
                </div>

                {/* Telephone */}
                <div className="p-4 sm:p-5 rounded-xl bg-white border border-stone-200 shadow-xs flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#F8F7F3] border border-stone-200 text-[#101B35] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#101B35]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-serif font-bold text-[#101B35]">Telephone Inquiries</h3>
                    <a 
                      href="tel:+27103351262" 
                      className="text-sm font-semibold text-[#101B35] hover:text-[#FF8A00] transition-colors mt-0.5 block"
                    >
                      {COMPANY_INFO.contact.phone}
                    </a>
                    <span className="text-[10px] text-stone-400 block mt-0.5 font-sans">
                      Headquarters Switchboard (Mon – Fri, 08:00 – 17:00 SAST)
                    </span>
                  </div>
                </div>

                {/* WhatsApp & Cell */}
                <div className="p-4 sm:p-5 rounded-xl bg-white border border-stone-200 shadow-xs flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-sm font-serif font-bold text-[#101B35]">Cell &amp; WhatsApp Direct</h3>
                    <a 
                      href="https://wa.me/27817024865" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-sm font-semibold text-emerald-700 hover:text-emerald-800 mt-0.5 flex items-center gap-1.5 transition-colors"
                    >
                      <span>{COMPANY_INFO.contact.mobileWhatsApp}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                    <span className="text-[10px] text-stone-400 block mt-0.5 font-sans">
                      Direct WhatsApp Messaging for rapid response
                    </span>
                  </div>
                </div>

                {/* Emails */}
                <div className="p-4 sm:p-5 rounded-xl bg-white border border-stone-200 shadow-xs flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#F8F7F3] border border-stone-200 text-[#101B35] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#FF8A00]" />
                  </div>
                  <div className="space-y-0.5 text-xs font-sans">
                    <h3 className="text-sm font-serif font-bold text-[#101B35]">Email Communications</h3>
                    <div>
                      <span className="text-stone-400">General: </span>
                      <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-[#101B35] hover:text-[#FF8A00] font-medium">
                        {COMPANY_INFO.contact.email}
                      </a>
                    </div>
                    <div>
                      <span className="text-stone-400">Corporate: </span>
                      <a href={`mailto:${COMPANY_INFO.contact.corporateEmail}`} className="text-[#101B35] hover:text-[#FF8A00] font-medium">
                        {COMPANY_INFO.contact.corporateEmail}
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Functional Contact Form */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 md:p-10 rounded-2xl bg-white border border-stone-200 shadow-sm relative">
                
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#101B35]">
                    Send an Institutional Enquiry
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1 font-sans">
                    Complete the formal enquiry form below. Your request will be routed directly to the relevant subsidiary managing director.
                  </p>
                </div>

                {/* Success State */}
                {formStatus === 'success' ? (
                  <div className="p-6 sm:p-8 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3 sm:space-y-4 animate-in fade-in duration-200">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-serif font-bold text-[#101B35]">Enquiry Received Successfully</h4>
                    <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed font-sans">
                      Thank you for contacting Arise Hope Group. Your enquiry regarding <strong className="text-[#101B35]">{formData.subject}</strong> has been logged and assigned to our Corporate Affairs team.
                    </p>
                    <div className="pt-3 flex flex-col sm:flex-row justify-center gap-2 sm:gap-3">
                      <button
                        onClick={generateMailto}
                        className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-white border border-stone-200 text-xs font-semibold text-[#101B35] hover:bg-stone-50 transition-all shadow-xs"
                      >
                        Open In Email App
                      </button>
                      <button
                        onClick={resetForm}
                        className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#101B35] text-white text-xs font-semibold uppercase tracking-wider transition-all hover:bg-[#1B2C56]"
                      >
                        Submit Another Enquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {errorMessage && (
                      <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-sans font-semibold text-[#101B35] mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Tendai Mokoena"
                          className="w-full px-3.5 py-3 rounded-lg bg-[#F8F7F3] border border-stone-200 text-[#101B35] placeholder-stone-400 text-base focus:outline-none focus:border-[#101B35] focus:bg-white transition-colors"
                          required
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-sans font-semibold text-[#101B35] mb-1.5">
                          Corporate Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. tmokoena@enterprise.co.za"
                          className="w-full px-3.5 py-3 rounded-lg bg-[#F8F7F3] border border-stone-200 text-[#101B35] placeholder-stone-400 text-base focus:outline-none focus:border-[#101B35] focus:bg-white transition-colors"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-sans font-semibold text-[#101B35] mb-1.5">
                          Telephone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+27 (0) ..."
                          className="w-full px-3.5 py-3 rounded-lg bg-[#F8F7F3] border border-stone-200 text-[#101B35] placeholder-stone-400 text-base focus:outline-none focus:border-[#101B35] focus:bg-white transition-colors"
                        />
                      </div>

                      {/* Sector Dropdown */}
                      <div>
                        <label className="block text-xs font-sans font-semibold text-[#101B35] mb-1.5">
                          Target Sector *
                        </label>
                        <select
                          name="sector"
                          value={formData.sector}
                          onChange={handleChange}
                          className="w-full px-3.5 py-3 rounded-lg bg-[#F8F7F3] border border-stone-200 text-[#101B35] text-base focus:outline-none focus:border-[#101B35] focus:bg-white transition-colors"
                        >
                          <option value="general">Executive General Enquiries</option>
                          {SECTORS.map((sector) => (
                            <option key={sector.id} value={sector.id}>
                              0{sector.number} • {sector.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-xs font-sans font-semibold text-[#101B35] mb-1.5">
                        Inquiry Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="e.g. Turnkey Civil Works / Bulk Fuel Procurement / Joint Venture"
                        className="w-full px-3.5 py-3 rounded-lg bg-[#F8F7F3] border border-stone-200 text-[#101B35] placeholder-stone-400 text-base focus:outline-none focus:border-[#101B35] focus:bg-white transition-colors"
                        required
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-sans font-semibold text-[#101B35] mb-1.5">
                        Detailed Proposal or Message *
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please describe project scope, requirements, timeline, or commercial collaboration objectives..."
                        className="w-full px-3.5 py-3 rounded-lg bg-[#F8F7F3] border border-stone-200 text-[#101B35] placeholder-stone-400 text-base focus:outline-none focus:border-[#101B35] focus:bg-white transition-colors resize-none"
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="w-full py-3.5 rounded-lg bg-[#101B35] hover:bg-[#1B2C56] text-white font-semibold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
                    >
                      {formStatus === 'submitting' ? (
                        <span>Processing Dispatch...</span>
                      ) : (
                        <>
                          <span>Submit Official Proposal</span>
                          <Send className="w-4 h-4 text-[#FF8A00]" />
                        </>
                      )}
                    </button>

                    <div className="pt-1 text-center">
                      <span className="text-xs text-stone-500 font-sans">
                        Prefer direct email? Send directly to{' '}
                        <a href="mailto:info@arisehopegroup.co.za" className="text-[#101B35] underline font-medium hover:text-[#FF8A00]">
                          info@arisehopegroup.co.za
                        </a>
                      </span>
                    </div>

                  </form>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};
