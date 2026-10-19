import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  Copy, 
  ChevronDown, 
  Search, 
  ShieldCheck, 
  Calendar,
  X,
  Code2,
  Building2,
  Layout,
  MessageSquare,
  Navigation,
  ExternalLink
} from 'lucide-react';

const ContactUs = () => {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Web Design',
    budget: '$3k - $10k',
    message: '',
  });

  const [selectedServices, setSelectedServices] = useState(['Web Design']);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedField, setCopiedField] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const [faqQuery, setFaqQuery] = useState('');
  const [time, setTime] = useState('');
  const [showCalendarModal, setShowCalendarModal] = useState(false);
  const [selectedHelpCategory, setSelectedHelpCategory] = useState(null);

  const servicesList = [
    'Web Design',
    'Mobile App Dev',
    'UI/UX Design',
    'Enterprise Software',
    'Cloud & DevOps',
    'AI & Automation'
  ];

  // How Can We Help Options
  const helpOptions = [
    {
      id: 'web-design',
      icon: <Code2 className="w-6 h-6 text-cyan-500" />,
      title: 'Build a Web Design / Mobile App',
      description: 'Creating high-performance, visually engaging websites and mobile applications.',
      serviceTag: 'Web Design'
    },
    {
      id: 'enterprise',
      icon: <Building2 className="w-6 h-6 text-blue-500" />,
      title: 'Enterprise ERP & Software',
      description: 'Streamline business operations with custom management systems & automation.',
      serviceTag: 'Enterprise Software'
    },
    {
      id: 'ui-ux',
      icon: <Layout className="w-6 h-6 text-indigo-500" />,
      title: 'UI/UX Redesign & Branding',
      description: 'Modernize user experience, interfaces, and digital product designs.',
      serviceTag: 'UI/UX Design'
    },
    {
      id: 'consulting',
      icon: <MessageSquare className="w-6 h-6 text-emerald-500" />,
      title: 'Technical Advisory & Audit',
      description: 'Codebase reviews, DevOps optimization, cloud setup, and architecture audits.',
      serviceTag: 'Cloud & DevOps'
    }
  ];

  // Live Time Clock (Nairobi EAT)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Africa/Nairobi',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleHelpSelection = (option) => {
    setSelectedHelpCategory(option.id);
    if (!selectedServices.includes(option.serviceTag)) {
      setSelectedServices([option.serviceTag]);
    }
    const formElement = document.getElementById('inquiry-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleService = (service) => {
    if (selectedServices.includes(service)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(s => s !== service));
      }
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const faqs = [
    {
      q: "How quickly can Legit Technologies kick off a project?",
      a: "Typically, we schedule an initial discovery alignment call within 24 hours of receiving your inquiry. Project onboarding can begin within 3–5 business days after requirements confirmation."
    },
    {
      q: "Where are Legit Technologies headquarters and operations located?",
      a: "Our core tech hub is located at Plaza 2000, Mombasa Road, Nairobi, Kenya."
    },
    {
      q: "Do you offer post-launch technical support and SLA contracts?",
      a: "Yes! We provide tier-3 ongoing maintenance, security updates, cloud server management, and reliability monitoring tailored to your operational SLA."
    },
    {
      q: "How do you handle project confidentiality and IP?",
      a: "100% IP ownership is transferred to you upon deployment. We sign strict Non-Disclosure Agreements (NDAs) prior to discussing proprietary business logic."
    }
  ];

  const filteredFaqs = faqs.filter(f => 
    f.q.toLowerCase().includes(faqQuery.toLowerCase()) || 
    f.a.toLowerCase().includes(faqQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen font-sans bg-slate-50 dark:bg-[#0A0D14] text-slate-800 dark:text-slate-100 selection:bg-cyan-500 selection:text-white dark:selection:text-black transition-colors duration-300 relative overflow-hidden">
      
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-cyan-400/20 dark:bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-300/30 dark:bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">

        {/* Copy Notification Toast */}
        {copiedField && (
          <div className="fixed top-6 right-6 z-50 bg-cyan-500 text-slate-950 px-5 py-3 rounded-xl font-bold shadow-2xl flex items-center gap-2 animate-bounce">
            <CheckCircle2 size={18} />
            <span>Copied {copiedField} to clipboard!</span>
          </div>
        )}

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-200 dark:border-cyan-500/30 bg-cyan-50 dark:bg-slate-900/80 text-cyan-600 dark:text-cyan-400 text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
            <Sparkles size={14} className="animate-pulse" />
            <span>Legit Technologies</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Let's Talk <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500">Tech & Solutions.</span>
          </h1>
          
          <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
            Have a project in mind, need custom software built, or looking for digital transformation? Connect with our engineering team today.
          </p>
        </div>

        {/* SECTION 1: How Can We Help You Today? */}
        <div className="mb-20 space-y-6">
          <div className="text-center space-y-1">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">How Can We Help You Today?</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">Select an option below to tailor your inquiry.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {helpOptions.map((option) => {
              const isSelected = selectedHelpCategory === option.id;
              return (
                <div
                  key={option.id}
                  onClick={() => handleHelpSelection(option)}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-4 group ${
                    isSelected
                      ? 'bg-white dark:bg-slate-900 border-cyan-500 dark:border-cyan-400 shadow-xl dark:shadow-cyan-500/10 scale-[1.02]'
                      : 'bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 dark:hover:bg-slate-900 shadow-sm hover:shadow-md'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80 w-fit group-hover:border-cyan-500/30 transition-colors">
                      {option.icon}
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                      {option.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {option.description}
                    </p>
                  </div>

                  <div className="text-xs font-semibold text-cyan-500 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>{isSelected ? 'Selected' : 'Get Started'}</span>
                    <span>→</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SECTION 2: Balanced Contact Details & Form Grid */}
        <div id="inquiry-form" className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start scroll-mt-10">

          {/* LEFT COLUMN: Real Contact Details */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">Get in Touch</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">Choose your preferred way to connect with our team.</p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              {/* Phone Card */}
              <div 
                onClick={() => handleCopy('0796182880', 'Phone Number')}
                className="group p-5 rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 hover:border-blue-400 dark:hover:border-blue-500/50 shadow-sm transition-all cursor-pointer flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-xl bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Call / WhatsApp</p>
                    <p className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                      0796182880
                    </p>
                  </div>
                </div>
                <Copy size={16} className="text-slate-400 dark:text-slate-600 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              </div>

              {/* Email Card */}
              <div 
                onClick={() => handleCopy('legittechnologys@gmail.com', 'Email')}
                className="group p-5 rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 hover:border-cyan-400 dark:hover:border-cyan-500/50 shadow-sm transition-all cursor-pointer flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-xl bg-cyan-500/10 text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Email Us</p>
                    <p className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                      legittechnologys@gmail.com
                    </p>
                  </div>
                </div>
                <Copy size={16} className="text-slate-400 dark:text-slate-600 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
              </div>

              {/* Location Card */}
              <div 
                onClick={() => handleCopy('Plaza 2000, Mombasa Road, Nairobi, Kenya', 'HQ Location')}
                className="group p-5 rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 hover:border-indigo-400 dark:hover:border-indigo-500/50 shadow-sm transition-all cursor-pointer flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-xl bg-indigo-500/10 text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">Headquarters</p>
                    <p className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                      Plaza 2000, Mombasa Road, Nairobi
                    </p>
                  </div>
                </div>
                <Copy size={16} className="text-slate-400 dark:text-slate-600 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
              </div>
            </div>

            {/* Live Nairobi Time & Meeting CTA Strip */}
            <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800/60 bg-white dark:bg-slate-900/40 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-500">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-400 dark:text-slate-500">Nairobi Local Time (EAT)</p>
                  <p className="text-sm font-bold text-slate-800 dark:text-slate-200">{time || "12:00 PM"}</p>
                </div>
              </div>

              <button 
                onClick={() => setShowCalendarModal(true)}
                className="text-xs font-bold px-3.5 py-2 rounded-xl transition-all border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-cyan-600 dark:text-cyan-400 flex items-center gap-2"
              >
                <Calendar size={14} />
                <span>Book 20-Min Call</span>
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: Project Inquiry Form */}
          <div className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/70 rounded-3xl p-6 sm:p-8 shadow-xl backdrop-blur-xl">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-5">
                <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/40 text-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle2 size={32} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Message Sent!</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
                    Thanks for reaching out to <strong className="text-cyan-500">Legit Technologies</strong>. We will respond shortly.
                  </p>
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="font-bold px-5 py-2.5 rounded-xl text-xs transition-all border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Project Inquiry</h3>
                  <p className="text-xs mt-1 text-slate-500 dark:text-slate-400">Select required services & describe your needs.</p>
                </div>

                {/* Service Selection */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Services Needed
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {servicesList.map((service) => {
                      const isSelected = selectedServices.includes(service);
                      return (
                        <button
                          key={service}
                          type="button"
                          onClick={() => toggleService(service)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                            isSelected
                              ? 'bg-cyan-500/20 border-cyan-500 text-cyan-500 font-bold'
                              : 'bg-slate-50 dark:bg-slate-950/60 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700'
                          }`}
                        >
                          {isSelected ? '✓ ' : '+ '}{service}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Name & Email Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 focus:border-cyan-500 rounded-xl px-3.5 py-2.5 text-sm outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 focus:border-cyan-500 rounded-xl px-3.5 py-2.5 text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Phone & Budget Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      placeholder="0796182880"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 focus:border-cyan-500 rounded-xl px-3.5 py-2.5 text-sm outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">Budget Range</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80 text-slate-800 dark:text-slate-100 focus:border-cyan-500 rounded-xl px-3.5 py-2.5 text-sm outline-none cursor-pointer transition-all"
                    >
                      <option value="<$3k">&lt; $3,000</option>
                      <option value="$3k - $10k">$3,000 - $10,000</option>
                      <option value="$10k - $25k">$10,000 - $25,000</option>
                      <option value="$25k+">$25,000+</option>
                    </select>
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">Message / Project Details *</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Briefly describe your project, timeline, or key objectives..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 focus:border-cyan-500 rounded-xl p-3.5 text-sm outline-none resize-none transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>

                <p className="text-center text-xs flex items-center justify-center gap-1 text-slate-400 dark:text-slate-500">
                  <ShieldCheck size={14} className="text-emerald-500" />
                  <span>Strict NDA Protected. Confidential & Secure.</span>
                </p>
              </form>
            )}
          </div>

        </div>

        {/* SECTION 3: Google Map Section (Accurate Plaza 2000, Mombasa Road) */}
        <div className="mt-20 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold flex items-center gap-2 text-slate-900 dark:text-white">
                <MapPin className="text-cyan-500" size={22} />
                <span>Visit Our Office</span>
              </h2>
              <p className="text-xs mt-1 text-slate-600 dark:text-slate-400">
                Legit Technologies • Plaza 2000, Mombasa Road, Nairobi, Kenya
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=Plaza+2000,+Mombasa+Road,+Nairobi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-cyan-600 dark:text-cyan-400 hover:border-cyan-400 dark:hover:border-cyan-500/50 shadow-sm transition-all"
            >
              <Navigation size={14} />
              <span>Get Directions</span>
              <ExternalLink size={12} />
            </a>
          </div>

          <div className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 rounded-3xl p-3 shadow-2xl overflow-hidden relative">
            <iframe
              title="Legit Technologies Office Location Map"
              src="https://maps.google.com/maps?q=Plaza%202000%2C%20Mombasa%20Road%2C%20Nairobi&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="360"
              style={{ 
                border: 0, 
                borderRadius: '1.25rem', 
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="dark:filter dark:invert-[90%] dark:hue-rotate-180 dark:opacity-85"
            />
            
            <div className="mt-3 px-3 py-2 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Office Hours: Mon – Fri (8:00 AM – 6:00 PM EAT)
              </span>
              <span>Plaza 2000, Mombasa Road, Nairobi</span>
            </div>
          </div>
        </div>

        {/* SECTION 4: FAQs */}
        <div className="mt-20 max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Frequently Asked Questions</h2>
            
            <div className="max-w-sm mx-auto relative mt-3">
              <Search size={16} className="absolute left-3.5 top-3 text-slate-400 dark:text-slate-500" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={faqQuery}
                onChange={(e) => setFaqQuery(e.target.value)}
                className="w-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:border-cyan-500 rounded-xl pl-10 pr-4 py-2 text-xs outline-none shadow-sm transition-all"
              />
            </div>
          </div>

          <div className="space-y-3">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div key={idx} className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 rounded-xl overflow-hidden shadow-sm">
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full p-4 text-left font-medium flex items-center justify-between text-sm text-slate-800 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180 text-cyan-500' : 'text-slate-400'}`} />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 text-xs border-t border-slate-100 dark:border-slate-800/50 text-slate-600 dark:text-slate-400 pt-3 leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <p className="text-center text-xs py-6 text-slate-400 dark:text-slate-500">No matching questions found.</p>
            )}
          </div>
        </div>

      </div>

      {/* Booking Calendar Modal */}
      {showCalendarModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-2xl p-6 max-w-md w-full relative space-y-4 shadow-2xl">
            <button 
              onClick={() => setShowCalendarModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800"
            >
              <X size={16} />
            </button>
            
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Schedule Discovery Session</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Book a 20-minute call with our lead tech architect.</p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 space-y-3 text-center">
              <p className="text-xs font-semibold uppercase text-slate-400 dark:text-slate-500">Select Preferred Date</p>
              <div className="grid grid-cols-3 gap-2">
                {['Mon, Oct 5', 'Tue, Oct 6', 'Wed, Oct 7'].map((day) => (
                  <div key={day} className="p-2.5 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-cyan-50 dark:hover:bg-cyan-500/20 hover:border-cyan-400 dark:hover:border-cyan-500/50 rounded-lg cursor-pointer text-xs font-medium text-slate-800 dark:text-slate-200 shadow-sm">
                    {day}
                  </div>
                ))}
              </div>
              <button 
                onClick={() => {
                  setShowCalendarModal(false);
                  alert("Slot selected! Redirecting to confirmation...");
                }}
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-2.5 rounded-lg text-xs transition-all mt-2"
              >
                Confirm Call Time
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ContactUs;




