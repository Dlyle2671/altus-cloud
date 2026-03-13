import Link from 'next/link';
import { ArrowRight, CheckCircle, DollarSign, TrendingDown, Zap, BarChart3, Cloud, Users, Award } from 'lucide-react';

const stats = [
  { value: '40%', label: 'Average AWS Cost Reduction', sub: 'Across our client portfolio' },
  { value: '$2.4M', label: 'Cloud Savings Delivered', sub: 'In the last 12 months' },
  { value: '150+', label: 'AWS Accounts Managed', sub: 'Across all industries' },
  { value: '98%', label: 'Client Retention Rate', sub: 'Year over year' },
];
const services = [
  { icon: Cloud, title: 'AWS Authorized Reseller', esc: 'Purchase AWS services through us and unlock exclusive pricing, consolidated billing, and dedicated support.', light: 'bg-blue-50', iconColor: 'text-blue-600' },
  { icon: DollarSign, title: 'FinOps Practice', desc: 'Establish financial accountability for cloud spend with real-time visibility and chargeback models.', light: 'bg-emerald-50', iconColor: 'text-emerald-600' },
  { icon: TrendingDown, title: 'Cost Optimization', desc: 'Rightsize resources, leverage Reserved Instances and Savings Plans, and eliminate waste.', light: 'bg-violet-50', iconColor: 'text-violet-600' },
  { icon: Zap, title: 'Cloud Migration', desc: 'Accelerate your journey to AWS with our proven migration framework, minimizing risk and downtime.', light: 'bg-amber-50', iconColor: 'text-amber-600' },
];
const whyUs = ['AWS Authorized Reseller — official partner pricing','Certified FinOps Practitioners on every engagement','Real-time cost visibility dashboards','Dedicated cloud financial advisor','No lock-in — month-to-month agreements','SOC 2 Type II compliant processes'];
const audiences = [
  { icon: BarChart3, role: 'CFOs & Finance Teams', desc: 'Full visibility into cloud spend, chargeback models, and budget forecasting.' },
  { icon: Cloud, role: 'CTOs & VP Engineering', desc: 'Optimize infrastructure without sacrificing performance or reliability.' },
  { icon: Users, role: 'DevOps & Platform Teams', desc: 'Automated cost guardrails, tagging policies, and rightsizing recommendations.' },
];

export default function Home() {
  return (
    <>
      <section className="relative min-h-[92vh] flex items-center bg-hero pt-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-100/60 blur-3xl" />
          <div className="absolute top-1/2 -left-24 w-80 h-80 rounded-full bg-cyan-100/50 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-8">
              <Award className="w-4 h-4" /> AWS Authorized Reseller & Certified FinOps Practice
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.08] tracking-tight mb-6">
              Stop Overpaying<br /><span className="text-gradient">for AWS.</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl">
              Altus Cloud is an AWS Authorized Reseller with a certified FinOps practice. We help engineering and finance teams cut cloud costs by up to 40%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact?type=assessment" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-green-500 hover:bg-green-400 rounded-2xl hover:opacity-90 transition-all shadow-lg shadow-green-200 hover:-translate-y-0.5">
                Get Free Cost Assessment <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-gray-700 bg-white border border-gray-200 rounded-2xl hover:border-blue-200 hover:text-blue-600 transition-all shadow-sm">
                Explore Services
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
              {['AWS Advanced Tier Partner','FinOps Certified','SOC 2 Compliant','5-Star Support'].map(t => (
                <div key={t} className="flex items-center gap-2 text-sm text-gray-500">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />{t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.value} className="text-center">
                <div className="text-4xl font-extrabold text-gradient mb-1">{s.value}</div>
                <div className="text-sm font-semibold text-gray-800 mb-1">{s.label}</div>
                <div className="text-xs text-gray-400">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Cloud Financial Management</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">From AWS procurement to ongoing cost governance — every dimension of cloud financial operations.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-6 border border-gray-100 card-hover">
                <div className={`w-12 h-12 rounded-xl ${s.light} flex items-center justify-center mb-5`}>
                  <s.icon className={`w-6 h-6 ${s.iconColor}`} />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{s.desc}</p>
                <Link href="/services" className={`text-sm font-medium ${s.iconColor} hover:underline flex items-center gap-1`}>
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">Who We Serve</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Built for Every Stakeholder</h2>
              <p className="text-lg text-gray-500 mb-10">Cloud costs are both a technical and financial problem. We bridge the gap.</p>
              <div className="space-y-6">
                {audiences.map((a) => (
                  <div key={a.role} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                      <a.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{a.role}</h4>
                      <p className="text-sm text-gray-500">{a.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-hero rounded-3xl p-8 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Why Altus Cloud</h3>
              <ul className="space-y-4">
                {whyUs.map((w) => (
                  <li key={w} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-gray-700 text-sm">{w}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/contact?type=assessment" className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-green-500 hover:bg-green-400 rounded-xl hover:opacity-90 shadow-md shadow-green-200">
                  Start Saving Today <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Optimize Your AWS Spend?</h2>
          <p className="text-lg text-blue-200 mb-10 max-w-xl mx-auto">Get a complimentary cloud cost assessment and discover your savings opportunity in 48 hours.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?type=assessment" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-blue-700 bg-white rounded-2xl hover:bg-blue-50 transition-colors shadow-xl">
              Get Free Assessment <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/services" className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white border border-white/20 rounded-2xl hover:bg-white/10 transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
