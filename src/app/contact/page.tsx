'use client';
import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, ArrowRight, Calendar, MessageSquare, BarChart3 } from 'lucide-react';

const contactTypes = [
  { id: 'assessment', label: 'Free Cost Assessment', icon: BarChart3, desc: 'Get a free analysis of your AWS spend' },
  { id: 'demo', label: 'Product Demo', icon: Calendar, desc: 'See our FinOps tooling in action' },
  { id: 'general', label: 'General Inquiry', icon: MessageSquare, desc: 'Ask us anything' },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formType, setFormType] = useState('assessment');
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', message: '', monthly_spend: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-hero pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">Contact Us</p>
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Let's Talk About<br /><span className="text-gradient">Your Cloud Costs</span>
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Whether you're ready to get started or just exploring your options, we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left: Contact info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  <a href="mailto:hello@altuscloud.com" className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-sm">hello@altuscloud.com</span>
                  </a>
                  <a href="tel:+18882588760" className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-sm">+1 (888) 258-8760</span>
                  </a>
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-sm">San Francisco, CA</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-950 rounded-2xl p-6 text-white">
                <h3 className="font-semibold text-blue-300 mb-3">What to Expect</h3>
                <ul className="space-y-3">
                  {['Response within 2 business hours','Free 30-min discovery call','No commitment required','Complimentary cost assessment report'].map(i => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />{i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center py-16">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-emerald-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Received!</h3>
                    <p className="text-gray-500 max-w-sm mx-auto">Thanks for reaching out. We'll be in touch within 2 business hours.</p>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                  {/* Type selector */}
                  <div className="grid grid-cols-3 gap-3 mb-8">
                    {contactTypes.map((t) => (
                      <button key={t.id} onClick={() => setFormType(t.id)}
                        className={`p-3 rounded-xl border text-left transition-all ${formType === t.id ? 'border-blue-300 bg-blue-50' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
                        <t.icon className={`w-4 h-4 mb-1.5 ${formType === t.id ? 'text-blue-600' : 'text-gray-400'}`} />
                        <p className={`text-xs font-semibold ${formType === t.id ? 'text-blue-700' : 'text-gray-700'}`}>{t.label}</p>
                        <p className="text-xs text-gray-400 mt-0.5 hidden sm:block">{t.desc}</p>
                      </button>
                    ))}
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">Full Name *</label>
                        <input required type="text" placeholder="Jane Smith"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-100 transition-colors"
                          value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">Work Email *</label>
                        <input required type="email" placeholder="jane@company.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-100 transition-colors"
                          value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">Company *</label>
                        <input required type="text" placeholder="Acme Corp"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-100 transition-colors"
                          value={form.company} onChange={e => setForm({...form, company: e.target.value})} />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">Monthly AWS Spend</label>
                        <select className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-100 transition-colors text-gray-500"
                          value={form.monthly_spend} onChange={e => setForm({...form, monthly_spend: e.target.value})}>
                          <option value="">Select range...</option>
                          <option>Less than $10K/mo</option>
                          <option>$10K - $50K/mo</option>
                          <option>$50K - $200K/mo</option>
                          <option>$200K - $1M/mo</option>
                          <option>Over $1M/mo</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">Message</label>
                      <textarea rows={4} placeholder="Tell us about your cloud environment and what you're trying to achieve..."
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-100 transition-colors resize-none"
                        value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
                    </div>
                    <button type="submit"
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl hover:opacity-90 transition-all shadow-md shadow-blue-200">
                      Send Message <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
