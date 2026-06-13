import { FormEvent, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, Mail, MapPin, RefreshCw, Phone, Linkedin, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) return;

    setFormLoading(true);
    
    // Construct simplified WhatsApp Message for General Inquiry
    const textMessage = `Hello Gokul,\n\nI want to connect!\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Type:* General Inquiry\n\n*Message:* ${formData.message}`;
    const whatsappUrl = `https://wa.me/919597025935?text=${encodeURIComponent(textMessage)}`;

    setTimeout(() => {
      setFormLoading(false);
      setFormSubmitted(true);
      try {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      } catch (err) {
        window.location.href = whatsappUrl;
      }
    }, 1200);
  };

  return (
    <div id="contact-panel" className="py-2 pr-0 md:pr-4 select-none flex flex-col justify-center min-h-[70vh] md:min-h-[85vh]">
      {/* Contact Header */}
      <div id="contact-header" className="mb-6">
        <h3 className="font-display font-extrabold text-3xl md:text-4xl text-neutral-950 uppercase tracking-tight">
          GET IN TOUCH
        </h3>
        <div className="w-12 h-1 bg-gold-400 mt-2.5 rounded-full" />
      </div>

      <p id="contact-intro-para" className="text-neutral-950 text-sm leading-relaxed mb-8 font-medium max-w-2xl">
        Have any questions, project ideas, or general inquiries? Fill out the form on the left, or connect directly through any of my official details on the right!
      </p>

      {/* Two-Column Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
        
        {/* Left Column: Enquiry Form (Spans 3/5 on large screens) */}
        <div className="lg:col-span-3">
          <div id="form-container-box" className="bg-neutral-50 border border-neutral-100 p-5 md:p-6 rounded-2xl relative overflow-hidden shadow-sm">
            <AnimatePresence mode="wait">
              {!formSubmitted ? (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="user-name" className="block font-sans text-xs md:text-sm tracking-wide text-neutral-900 uppercase font-black">
                        YOUR NAME *
                      </label>
                      <input
                        id="user-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder=""
                        className="w-full bg-white border border-neutral-200 focus:border-gold-500 rounded-xl px-4 py-3 text-xs outline-none transition-all duration-300 select-text font-semibold text-neutral-500"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="user-email" className="block font-sans text-xs md:text-sm tracking-wide text-neutral-900 uppercase font-black">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        id="user-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder=""
                        className="w-full bg-white border border-neutral-200 focus:border-gold-500 rounded-xl px-4 py-3 text-xs outline-none transition-all duration-300 select-text font-semibold text-neutral-500"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label htmlFor="user-phone" className="block font-sans text-xs md:text-sm tracking-wide text-neutral-900 uppercase font-black">
                      PHONE NUMBER *
                    </label>
                    <input
                      id="user-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder=""
                      className="w-full bg-white border border-neutral-200 focus:border-gold-500 rounded-xl px-4 py-3 text-xs outline-none transition-all duration-300 select-text font-semibold text-neutral-500"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="user-message" className="block font-sans text-xs md:text-sm tracking-wide text-neutral-900 uppercase font-black">
                      DESCRIPTION OF INQUIRY
                    </label>
                    <textarea
                      id="user-message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me what you have in mind or ask any question..."
                      className="w-full bg-white border border-neutral-200 focus:border-gold-500 rounded-xl px-4 py-3 text-xs outline-none transition-all duration-300 resize-none select-text font-semibold text-neutral-500"
                    />
                  </div>

                  {/* Action Submit */}
                  <button
                    id="submit-form-btn"
                    type="submit"
                    disabled={formLoading}
                    className="w-full bg-black hover:bg-gold-500 hover:text-black text-white py-4 rounded-xl font-sans text-xs font-black tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-50"
                  >
                    {formLoading ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span> REDIRECTING TO WHATSAPP... </span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span> WHATSAPP REBACK </span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                /* Successful Delivery Receipt card with WhatsApp manual link */
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-center py-8 px-4 flex flex-col items-center gap-4"
                >
                  <div className="bg-emerald-500/10 p-4 rounded-full text-emerald-500">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="font-display font-black text-neutral-900 text-xl uppercase tracking-wider">
                    MESSAGE PREPARED FOR WHATSAPP
                  </h4>
                  <p className="text-neutral-500 text-xs md:text-sm font-semibold max-w-sm leading-relaxed">
                    Thank you, <span className="font-black text-black">{formData.name}</span>! If the WhatsApp window did not open automatically, please click the button below to send your enquiry.
                  </p>

                  {/* Manual redirection link */}
                  <a
                    href={`https://wa.me/919597025935?text=${encodeURIComponent(
                      `Hello Gokul,\n\nI want to connect!\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Type:* General Inquiry\n\n*Message:* ${formData.message}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-sans text-xs font-black tracking-wider uppercase rounded-xl shadow transition-all duration-300"
                  >
                    <span>OPEN IN WHATSAPP</span>
                  </a>

                  {/* Reset or send another request */}
                  <button
                    id="redo-form-btn"
                    onClick={() => {
                      setFormData({ name: '', email: '', phone: '', service: 'General Inquiry', message: '' });
                      setFormSubmitted(false);
                    }}
                    className="text-xs font-sans font-black tracking-wider text-[#E5A93C] hover:text-black uppercase mt-2 underline transition-colors cursor-pointer"
                  >
                    [ RESET SUBMISSION SYSTEM ]
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Column: Contact Details (Spans 2/5 on large screens) */}
        <div className="lg:col-span-2 space-y-6">
          <div id="contact-directory-list" className="bg-neutral-50/50 border border-neutral-200/60 rounded-3xl p-6 shadow-sm space-y-6">
            <h4 className="font-sans text-xs md:text-sm tracking-widest text-[#E5A93C] font-black uppercase block mb-1">
              DIRECT CORE CONTACTS
            </h4>

            {/* Direct Cards Stack */}
            <div className="space-y-4">
              
              {/* Email Card */}
              <motion.a 
                whileHover={{ y: -2 }}
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-4 bg-white border border-neutral-200/50 hover:border-gold-500 p-4 rounded-2xl shadow-sm transition-all duration-300 block"
              >
                <div className="bg-[#FEF6C8] text-neutral-900 p-3.5 rounded-2xl flex-shrink-0 shadow-sm border border-[#fceeac]/30">
                  <Mail className="w-5 h-5 stroke-[2]" />
                </div>
                <div className="overflow-hidden">
                  <span className="block font-sans text-xs md:text-sm uppercase tracking-wide text-neutral-950 font-black">EMAIL ADDRESS</span>
                  <p className="text-[11px] md:text-xs font-semibold text-neutral-500 mt-0.5 truncate">
                    {PERSONAL_INFO.email}
                  </p>
                </div>
              </motion.a>

              {/* Phone Card */}
              <motion.a 
                whileHover={{ y: -2 }}
                href="tel:9597025935"
                className="flex items-center gap-4 bg-white border border-neutral-200/50 hover:border-gold-500 p-4 rounded-2xl shadow-sm transition-all duration-300 block"
              >
                <div className="bg-[#FEF6C8] text-neutral-900 p-3.5 rounded-2xl flex-shrink-0 shadow-sm border border-[#fceeac]/30">
                  <Phone className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <span className="block font-sans text-xs md:text-sm uppercase tracking-wide text-neutral-950 font-black">PHONE NUMBER</span>
                  <p className="text-[11px] md:text-xs font-semibold text-neutral-500 mt-0.5">
                    +91 9597025935
                  </p>
                </div>
              </motion.a>

              {/* Address Card */}
              <div className="flex items-center gap-4 bg-white border border-neutral-200/50 p-4 rounded-2xl shadow-sm">
                <div className="bg-[#FEF6C8] text-neutral-900 p-3.5 rounded-2xl flex-shrink-0 shadow-sm border border-[#fceeac]/30">
                  <MapPin className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <span className="block font-sans text-xs md:text-sm uppercase tracking-wide text-neutral-950 font-black">ADDRESS</span>
                  <p className="text-[11px] md:text-xs font-semibold text-neutral-500 mt-0.5">
                    {PERSONAL_INFO.address || 'Coimbatore, Tamil Nadu'}
                  </p>
                </div>
              </div>

              {/* LinkedIn Brand Card */}
              <motion.a 
                whileHover={{ y: -2 }}
                href="https://linkedin.com/in/gokulbontsk8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white border border-neutral-200/50 hover:border-[#0077b5] p-4 rounded-2xl shadow-sm transition-all duration-300 block cursor-pointer"
              >
                <div className="bg-[#0077b5]/10 text-[#0077b5] p-3.5 rounded-2xl flex-shrink-0 shadow-sm border border-[#0077b5]/20">
                  <Linkedin className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <span className="block font-sans text-xs md:text-sm uppercase tracking-wide text-[#0077b5] font-black">LINKEDIN</span>
                  <p className="text-[11px] md:text-xs font-semibold text-neutral-500 mt-0.5">
                    gokulbontsk8
                  </p>
                </div>
              </motion.a>

              {/* GitHub Brand Card */}
              <motion.a 
                whileHover={{ y: -2 }}
                href="https://github.com/gokulsk8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white border border-neutral-200/50 hover:border-[#1f2327] p-4 rounded-2xl shadow-sm transition-all duration-300 block cursor-pointer"
              >
                <div className="bg-[#1f2327]/10 text-[#1f2327] p-3.5 rounded-2xl flex-shrink-0 shadow-sm border border-neutral-300/40">
                  <Github className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <span className="block font-sans text-xs md:text-sm uppercase tracking-wide text-neutral-900 font-black">GITHUB</span>
                  <p className="text-[11px] md:text-xs font-semibold text-neutral-500 mt-0.5">
                    gokulsk8
                  </p>
                </div>
              </motion.a>

            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
